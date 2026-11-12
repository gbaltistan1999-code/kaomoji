// Pure Kaomoji Maker logic (unit tested).
import { armPairs, cheekPairs, decorations, eyePairs, framePairs, mouths, type Pair } from "@/data/maker/parts";

export const MAKER_PART_IDS = [
  "leftArm",
  "frameOpen",
  "leftCheek",
  "leftEye",
  "mouth",
  "rightEye",
  "rightCheek",
  "frameClose",
  "rightArm",
  "decoration",
] as const;
export type MakerPartId = (typeof MAKER_PART_IDS)[number];
export type MakerSelection = Record<MakerPartId, string>;

const unique = (values: string[]) => Array.from(new Set(values));
const lefts = (pairs: Pair[]) => unique(pairs.map((p) => p[0]));
const rights = (pairs: Pair[]) => unique(pairs.map((p) => p[1]));

/** Options shown in each dropdown. */
export const makerOptions: Record<MakerPartId, string[]> = {
  leftArm: lefts(armPairs),
  frameOpen: lefts(framePairs),
  leftCheek: lefts(cheekPairs),
  leftEye: lefts(eyePairs),
  mouth: mouths,
  rightEye: rights(eyePairs),
  rightCheek: rights(cheekPairs),
  frameClose: rights(framePairs),
  rightArm: rights(armPairs),
  decoration: decorations,
};

export const DEFAULT_SELECTION: MakerSelection = {
  leftArm: "ヽ",
  frameOpen: "(",
  leftCheek: "",
  leftEye: "◕",
  mouth: "‿",
  rightEye: "◕",
  rightCheek: "",
  frameClose: ")",
  rightArm: "ﾉ",
  decoration: "",
};

/** Join the parts in reading order into the final kaomoji string. */
export function buildKaomoji(sel: MakerSelection): string {
  return MAKER_PART_IDS.map((id) => sel[id] ?? "").join("");
}

type Rng = () => number;
const pick = <T,>(list: readonly T[], rng: Rng): T => list[Math.min(list.length - 1, Math.floor(rng() * list.length))];

/** Random but balanced face: arms, frame, cheeks and eyes are picked as matching pairs. */
export function randomSelection(rng: Rng = Math.random): MakerSelection {
  const arms = pick(armPairs, rng);
  const frame = pick(framePairs.slice(0, 6), rng); // skip the less common frames for random picks
  const cheeks = pick(cheekPairs, rng);
  const eyes = pick(eyePairs, rng);
  const mouth = pick(mouths, rng);
  // Keep decorations occasional so most results stay clean.
  const decoration = rng() < 0.4 ? pick(decorations.slice(1), rng) : "";
  return {
    leftArm: arms[0],
    frameOpen: frame[0],
    leftCheek: cheeks[0],
    leftEye: eyes[0],
    mouth,
    rightEye: eyes[1],
    rightCheek: cheeks[1],
    frameClose: frame[1],
    rightArm: arms[1],
    decoration,
  };
}

/** Number of distinct strings the dropdowns can produce (for the info text). */
export function combinationCount(): number {
  return MAKER_PART_IDS.reduce((n, id) => n * makerOptions[id].length, 1);
}
