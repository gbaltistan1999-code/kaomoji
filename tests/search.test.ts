import { describe, expect, it } from "vitest";
import { buildHaystack, matchesQuery, normalize, searchItems } from "@/lib/search";
import { getCategoryView, getLibraryView } from "@/lib/kaomoji-view";

describe("normalize", () => {
  it("lowercases and strips accents and Vietnamese diacritics", () => {
    expect(normalize("  Corazón  ")).toBe("corazon");
    expect(normalize("Mèo")).toBe("meo");
    expect(normalize("Đáng yêu")).toBe("dang yeu");
  });
});

describe("matchesQuery", () => {
  const hay = buildHaystack(["Stretching cat", ["cat", "kitty"], "cat face"]);
  it("matches tags and descriptions case-insensitively", () => {
    expect(matchesQuery(hay, "CAT")).toBe(true);
    expect(matchesQuery(hay, "kit")).toBe(true);
    expect(matchesQuery(hay, "stretch")).toBe(true);
  });
  it("requires every word", () => {
    expect(matchesQuery(hay, "cat face")).toBe(true);
    expect(matchesQuery(hay, "cat dog")).toBe(false);
  });
  it("matches everything for an empty query", () => {
    expect(matchesQuery(hay, "   ")).toBe(true);
  });
});

describe("library search", () => {
  const cards = getLibraryView("en").flatMap((c) => c.groups.flatMap((g) => g.cards));
  const find = (q: string) => searchItems(cards, q, (c) => c.search);

  it("finds all cat kaomoji by tag", () => {
    const r = find("cat");
    expect(r.length).toBeGreaterThanOrEqual(59);
    expect(r.some((c) => c.kaomoji === "ᓚᘏᗢ")).toBe(true);
  });
  it("finds by label words", () => {
    expect(find("stretching").map((c) => c.kaomoji)).toContain("ᓚᘏᗢ");
  });
  it("finds crying kaomoji with 'cry'", () => {
    expect(find("cry").some((c) => c.kaomoji === "(╥﹏╥)")).toBe(true);
  });
  it("finds by the characters themselves", () => {
    expect(find("ツ").length).toBeGreaterThan(3);
  });
  it("returns nothing for nonsense", () => {
    expect(find("zzqxv")).toEqual([]);
  });

  it("works with localized tags", () => {
    const local = (locale: "es" | "id" | "vi" | "pt", q: string) =>
      searchItems(getCategoryView("cat", locale).groups.flatMap((g) => g.cards), q, (c) => c.search).length;
    expect(local("es", "gato")).toBeGreaterThan(0);
    expect(local("id", "kucing")).toBeGreaterThan(0);
    expect(local("vi", "mèo")).toBeGreaterThan(0);
    expect(local("vi", "meo")).toBeGreaterThan(0);
    expect(local("pt", "gato")).toBeGreaterThan(0);
  });
});
