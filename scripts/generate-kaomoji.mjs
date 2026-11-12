// Generates data/kaomoji/*.ts from docs/appendix-a.md.
// Run with: npm run generate:kaomoji
// The appendix is the single source of truth. Ids are assigned in listed order
// per category (cute-001, cute-002 ...) and must stay stable once published,
// so only ever APPEND new lines to the appendix, never reorder.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "docs/appendix-a.md"), "utf8").replace(/\r/g, "");

export function parseAppendix(text) {
  const lines = text.split("\n");
  const categories = [];
  let cat = null;
  let group = null;
  let inCode = false;
  const catRe = /^### Category `([^`]+)` — (.+?) \(main group: (\w+); (\d+) kaomoji, (?:dedicated page: (\/[^)]+)|homepage section only)\)$/;
  const groupRe = /^Group `([^`]+)` · tags: (.+?) · description: "(.+)"$/;
  for (const line of lines) {
    if (line.startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      if (!line.trim()) continue;
      const i = line.lastIndexOf(" ⇒ ");
      if (i === -1) throw new Error("Missing separator: " + line);
      group.items.push({ k: line.slice(0, i), label: line.slice(i + 3).trim() });
      continue;
    }
    const c = line.match(catRe);
    if (c) {
      cat = { id: c[1], name: c[2], mainGroup: c[3], expected: Number(c[4]), page: c[5] ?? null, groups: [] };
      categories.push(cat);
      continue;
    }
    const g = line.match(groupRe);
    if (g) {
      group = { id: g[1], tags: g[2].split(",").map((t) => t.trim()), description: g[3], items: [] };
      cat.groups.push(group);
    }
  }
  return categories;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

function main() {
const categories = parseAppendix(src);
const outDir = join(root, "data/kaomoji");
mkdirSync(outDir, { recursive: true });

const camel = (s) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase());
let total = 0;
for (const cat of categories) {
  let n = 0;
  const entries = [];
  for (const g of cat.groups) {
    for (const item of g.items) {
      n++;
      entries.push(
        `  { id: ${JSON.stringify(`${cat.id}-${String(n).padStart(3, "0")}`)}, kaomoji: ${JSON.stringify(item.k)}, label: ${JSON.stringify(item.label)}, category: ${JSON.stringify(cat.id)}, group: ${JSON.stringify(g.id)}, tags: ${JSON.stringify(g.tags)}, description: ${JSON.stringify(g.description)} },`
      );
    }
  }
  if (n !== cat.expected) throw new Error(`${cat.id}: expected ${cat.expected}, got ${n}`);
  total += n;
  writeFileSync(
    join(outDir, `${cat.id}.ts`),
    `// AUTO-GENERATED from docs/appendix-a.md by scripts/generate-kaomoji.mjs. Do not edit by hand.\nimport type { Kaomoji } from "@/types/kaomoji";\n\nexport const ${camel(cat.id)}Kaomoji: Kaomoji[] = [\n${entries.join("\n")}\n];\n`
  );
}

const catLines = categories.map(
  (c) =>
    `  { id: ${JSON.stringify(c.id)}, name: ${JSON.stringify(c.name)}, mainGroup: ${JSON.stringify(c.mainGroup)}, hasPage: ${c.page ? "true" : "false"}, groups: [${c.groups
      .map((g) => `{ id: ${JSON.stringify(g.id)}, tags: ${JSON.stringify(g.tags)}, description: ${JSON.stringify(g.description)} }`)
      .join(", ")}] },`
);
writeFileSync(
  join(outDir, "categories.ts"),
  `// AUTO-GENERATED from docs/appendix-a.md by scripts/generate-kaomoji.mjs. Do not edit by hand.\nimport type { KaomojiCategory } from "@/types/kaomoji";\n\nexport const kaomojiCategories: KaomojiCategory[] = [\n${catLines.join("\n")}\n];\n`
);

writeFileSync(
  join(outDir, "index.ts"),
  `// AUTO-GENERATED from docs/appendix-a.md by scripts/generate-kaomoji.mjs. Do not edit by hand.\nimport type { CategoryId, Kaomoji } from "@/types/kaomoji";\n${categories
    .map((c) => `import { ${camel(c.id)}Kaomoji } from "./${c.id}";`)
    .join("\n")}\nexport { kaomojiCategories } from "./categories";\n\nexport const kaomojiByCategory: Record<CategoryId, Kaomoji[]> = {\n${categories
    .map((c) => `  ${JSON.stringify(c.id)}: ${camel(c.id)}Kaomoji,`)
    .join("\n")}\n};\n\nexport const allKaomoji: Kaomoji[] = Object.values(kaomojiByCategory).flat();\n`
);

console.log(`Generated ${categories.length} categories, ${total} kaomoji.`);
}
