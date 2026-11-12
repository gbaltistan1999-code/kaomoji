import { describe, expect, it } from "vitest";
import { symbolCount, symbolGroups, type SymbolPageId } from "@/data/symbols";
import { bundles } from "@/data/i18n";
import { enabledLocales } from "@/lib/i18n/config";

const pages = Object.keys(symbolGroups) as SymbolPageId[];

describe("symbol pages data", () => {
  for (const page of pages) {
    it(`${page}: unique, non-empty symbols`, () => {
      const all = symbolGroups[page].flatMap((g) => g.items);
      expect(all.every((s) => s.trim().length > 0)).toBe(true);
      const dupes = all.filter((s, i) => all.indexOf(s) !== i);
      expect(dupes).toEqual([]);
    });

    it(`${page}: has enough symbols to be a substantial page`, () => {
      expect(symbolCount(page)).toBeGreaterThanOrEqual(75);
    });

    it(`${page}: no emoji variation selectors (text symbols only)`, () => {
      for (const s of symbolGroups[page].flatMap((g) => g.items)) expect(/[︎️]/.test(s), s).toBe(false);
    });

    it(`${page}: every group has a translated title in every locale`, () => {
      for (const locale of enabledLocales) {
        for (const g of symbolGroups[page]) {
          expect(bundles[locale].symbolPages[page].groupTitles[g.id]?.trim(), `${locale} ${page}.${g.id}`).toBeTruthy();
        }
      }
    });
  }
});
