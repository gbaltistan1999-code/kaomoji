import { describe, expect, it } from "vitest";
import { buildKaomoji, combinationCount, DEFAULT_SELECTION, MAKER_PART_IDS, makerOptions, randomSelection } from "@/lib/maker";
import { armPairs, eyePairs } from "@/data/maker/parts";

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

describe("kaomoji maker", () => {
  it("builds the default face in reading order", () => {
    expect(buildKaomoji(DEFAULT_SELECTION)).toBe("ヽ(◕‿◕)ﾉ");
  });

  it("combines any chosen parts", () => {
    expect(buildKaomoji({ ...DEFAULT_SELECTION, leftArm: "ʚ", rightArm: "ɞ", leftCheek: "˶", rightCheek: "˶", mouth: "ω", decoration: "✧" })).toBe("ʚ(˶◕ω◕˶)ɞ✧");
    expect(buildKaomoji({ ...DEFAULT_SELECTION, leftArm: "", rightArm: "", frameOpen: "", frameClose: "" })).toBe("◕‿◕");
  });

  it("every default part is an available option", () => {
    for (const id of MAKER_PART_IDS) expect(makerOptions[id]).toContain(DEFAULT_SELECTION[id]);
  });

  it("randomize is deterministic for a given RNG and produces matching pairs", () => {
    const a = randomSelection(seeded(42));
    const b = randomSelection(seeded(42));
    expect(a).toEqual(b);
    for (let i = 1; i < 200; i++) {
      const sel = randomSelection(seeded(i));
      expect(armPairs.some(([l, r]) => l === sel.leftArm && r === sel.rightArm)).toBe(true);
      expect(eyePairs.some(([l, r]) => l === sel.leftEye && r === sel.rightEye)).toBe(true);
      for (const id of MAKER_PART_IDS) expect(makerOptions[id]).toContain(sel[id]);
      expect(buildKaomoji(sel).length).toBeGreaterThan(0);
    }
  });

  it("handles an RNG returning 1 without going out of range", () => {
    const sel = randomSelection(() => 0.999999999);
    for (const id of MAKER_PART_IDS) expect(makerOptions[id]).toContain(sel[id]);
  });

  it("offers a large number of combinations", () => {
    expect(combinationCount()).toBeGreaterThan(1_000_000);
  });
});
