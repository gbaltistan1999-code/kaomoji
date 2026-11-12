// Checks every translated label file directly: correct count per category
// (labelsFromLists throws otherwise), unique and non-empty labels.
import { describe, expect, it } from "vitest";
import { allKaomoji } from "@/data/kaomoji";
import { labels as es } from "@/data/i18n/es/labels";
import { labels as pt } from "@/data/i18n/pt/labels";
import { labels as id } from "@/data/i18n/id/labels";
import { labels as vi } from "@/data/i18n/vi/labels";

const locales: Record<string, Record<string, string>> = { es, pt, id, vi };

describe("translated labels", () => {
  for (const [locale, labels] of Object.entries(locales)) {
    it(`${locale}: one unique, non-empty label per kaomoji`, () => {
      const values = allKaomoji.map((k) => labels[k.id]);
      expect(values.every((v) => typeof v === "string" && v.trim().length > 0)).toBe(true);
      const dupes = values.filter((v, i) => values.indexOf(v) !== i);
      expect(dupes).toEqual([]);
    });
  }
});
