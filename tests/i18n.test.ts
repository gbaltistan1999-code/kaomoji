import { describe, expect, it } from "vitest";
import { allKaomoji, kaomojiCategories } from "@/data/kaomoji";
import { bundles } from "@/data/i18n";
import { ALL_LOCALES, enabledLocales, LOCALES } from "@/lib/i18n/config";
import { PAGE_KEYS, ROUTES, alternatesFor, pathFor, urlFor, pageKeyFromSlug } from "@/lib/i18n/routes";
import type { LocaleBundle } from "@/types/i18n";

/** Collect every leaf string with its path. */
function leaves(obj: unknown, path = ""): [string, string][] {
  if (typeof obj === "string") return [[path, obj]];
  if (Array.isArray(obj)) return obj.flatMap((v, i) => leaves(v, `${path}[${i}]`));
  if (obj && typeof obj === "object") return Object.entries(obj).flatMap(([k, v]) => leaves(v, path ? `${path}.${k}` : k));
  return [];
}
function shape(obj: unknown, path = ""): string[] {
  if (Array.isArray(obj)) return [`${path}[]`];
  if (obj && typeof obj === "object") return Object.entries(obj).flatMap(([k, v]) => shape(v, path ? `${path}.${k}` : k));
  return [path];
}

const groupKeys = kaomojiCategories.flatMap((c) => c.groups.map((g) => `${c.id}.${g.id}`));

describe("translations", () => {
  for (const locale of enabledLocales) {
    const b: LocaleBundle = bundles[locale];
    describe(locale, () => {
      it("has the same keys as English (no missing translation keys)", () => {
        expect(shape(b.ui).sort()).toEqual(shape(bundles.en.ui).sort());
        expect(Object.keys(b.categories).sort()).toEqual(Object.keys(bundles.en.categories).sort());
        expect(Object.keys(b.pages).sort()).toEqual(Object.keys(bundles.en.pages).sort());
      });
      it("has a label for every kaomoji and no empty strings anywhere", () => {
        for (const k of allKaomoji) expect(b.labels[k.id]?.trim(), `${locale} label ${k.id}`).toBeTruthy();
        for (const key of groupKeys) {
          expect(b.groups[key]?.title, `${locale} group ${key}`).toBeTruthy();
          expect(b.groups[key].tags.length).toBeGreaterThan(0);
        }
        for (const [p, v] of leaves(b)) expect(v.trim(), `${locale}.${p}`).not.toBe("");
      });
      it("has unique labels", () => {
        const values = allKaomoji.map((k) => b.labels[k.id]);
        const dupes = values.filter((v, i) => values.indexOf(v) !== i);
        expect(dupes, `${locale} duplicate labels`).toEqual([]);
      });
      if (locale !== "en") {
        it("doesn't reuse English page text (no untranslated content)", () => {
          const en = new Map(leaves(bundles.en).map(([p, v]) => [p, v]));
          const same = leaves({ home: b.home, categories: b.categories, maker: b.maker, pages: b.pages, ui: b.ui })
            .filter(([p, v]) => v.length > 25 && en.get(p) === v);
          expect(same.map(([p]) => p), `${locale} untranslated strings`).toEqual([]);
          const sameLabels = allKaomoji.filter((k) => b.labels[k.id] === k.label && k.label.length > 12);
          expect(sameLabels.map((k) => k.id), `${locale} untranslated labels`).toEqual([]);
        });
      }
      it("content links point to known pages", () => {
        for (const [, v] of leaves(b)) {
          for (const m of v.matchAll(/\]\(page:([a-z]+)\)/g)) expect(PAGE_KEYS).toContain(m[1]);
        }
      });
    });
  }
});

describe("route map and hreflang", () => {
  it("has an ASCII, lowercase slug for every page and locale, unique within each locale", () => {
    for (const locale of ALL_LOCALES) {
      const slugs = PAGE_KEYS.map((k) => ROUTES[k][locale]);
      for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]*$/);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });
  it("round-trips slugs to page keys", () => {
    for (const locale of ALL_LOCALES) for (const k of PAGE_KEYS) if (k !== "home") expect(pageKeyFromSlug(locale, ROUTES[k][locale])).toBe(k);
  });
  it("uses no prefix for English and a prefix for other locales", () => {
    expect(pathFor("home", "en")).toBe("/");
    expect(pathFor("cat", "en")).toBe("/cat-kaomoji");
    expect(pathFor("cat", "es")).toBe("/es/kaomojis-de-gatos");
    expect(pathFor("home", "vi")).toBe("/vi");
  });
  it("produces reciprocal hreflang with x-default for enabled locales only", () => {
    for (const k of PAGE_KEYS) {
      const alt = alternatesFor(k);
      expect(alt["x-default"]).toBe(urlFor(k, "en"));
      expect(Object.keys(alt)).toHaveLength(enabledLocales.length + 1);
      for (const l of enabledLocales) {
        const url = alt[LOCALES[l].hreflang];
        expect(url).toBe(urlFor(k, l));
        // Reciprocal: the target page's alternates contain the same set.
        expect(alternatesFor(k)).toEqual(alt);
      }
    }
  });
});
