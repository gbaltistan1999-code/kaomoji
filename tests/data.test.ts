import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
// @ts-expect-error plain JS module without types
import { parseAppendix } from "../scripts/generate-kaomoji.mjs";
import { allKaomoji, kaomojiByCategory, kaomojiCategories } from "@/data/kaomoji";
import { CATEGORY_PAGE_KEYS } from "@/lib/i18n/routes";

type ParsedCat = { id: string; mainGroup: string; page: string | null; groups: { id: string; items: { k: string; label: string }[] }[] };
const appendix: ParsedCat[] = parseAppendix(readFileSync("docs/appendix-a.md", "utf8").replace(/\r/g, ""));

describe("kaomoji data", () => {
  it("contains exactly the 828 kaomoji from Appendix A, unchanged and in order", () => {
    const expected = appendix.flatMap((c) => c.groups.flatMap((g) => g.items.map((i) => ({ cat: c.id, group: g.id, ...i }))));
    expect(allKaomoji).toHaveLength(828);
    expect(expected).toHaveLength(828);
    allKaomoji.forEach((k, i) => {
      expect(k.kaomoji).toBe(expected[i].k);
      expect(k.label).toBe(expected[i].label);
      expect(k.category).toBe(expected[i].cat);
      expect(k.group).toBe(expected[i].group);
    });
  });

  it("has no duplicate kaomoji", () => {
    const seen = new Set<string>();
    const dupes = allKaomoji.filter((k) => (seen.has(k.kaomoji) ? true : (seen.add(k.kaomoji), false)));
    expect(dupes).toEqual([]);
  });

  it("has unique, stable ids in the form <category>-NNN", () => {
    const ids = allKaomoji.map((k) => k.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const [cat, items] of Object.entries(kaomojiByCategory)) {
      items.forEach((k, i) => expect(k.id).toBe(`${cat}-${String(i + 1).padStart(3, "0")}`));
    }
  });

  it("gives every entry a valid category, group, tags, description and a unique non-empty label", () => {
    const labels = new Set<string>();
    for (const k of allKaomoji) {
      const cat = kaomojiCategories.find((c) => c.id === k.category);
      expect(cat, k.id).toBeDefined();
      expect(cat!.groups.some((g) => g.id === k.group), k.id).toBe(true);
      expect(k.tags.length).toBeGreaterThan(0);
      expect(k.description.trim()).not.toBe("");
      expect(k.label.trim()).not.toBe("");
      expect(labels.has(k.label), `duplicate label ${k.label}`).toBe(false);
      labels.add(k.label);
    }
  });

  it("gives every dedicated category page at least 50 kaomoji", () => {
    for (const key of CATEGORY_PAGE_KEYS) {
      expect(kaomojiByCategory[key].length, key).toBeGreaterThanOrEqual(50);
      expect(kaomojiCategories.find((c) => c.id === key)!.hasPage).toBe(true);
    }
  });

  it("matches Appendix A main groups and page flags", () => {
    for (const c of appendix) {
      const cat = kaomojiCategories.find((x) => x.id === c.id)!;
      expect(cat.mainGroup).toBe(c.mainGroup);
      expect(cat.hasPage).toBe(c.page !== null);
    }
  });
});
