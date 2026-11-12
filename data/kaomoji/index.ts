// AUTO-GENERATED from docs/appendix-a.md by scripts/generate-kaomoji.mjs. Do not edit by hand.
import type { CategoryId, Kaomoji } from "@/types/kaomoji";
import { cuteKaomoji } from "./cute";
import { happyKaomoji } from "./happy";
import { sadKaomoji } from "./sad";
import { heartKaomoji } from "./heart";
import { catKaomoji } from "./cat";
import { starKaomoji } from "./star";
import { shrugKaomoji } from "./shrug";
import { bunnyKaomoji } from "./bunny";
import { angryKaomoji } from "./angry";
import { angelKaomoji } from "./angel";
import { blushKaomoji } from "./blush";
import { hugKaomoji } from "./hug";
import { bearKaomoji } from "./bear";
import { dogKaomoji } from "./dog";
import { sleepyKaomoji } from "./sleepy";
import { surprisedKaomoji } from "./surprised";
import { tableFlipKaomoji } from "./table-flip";
import { waveKaomoji } from "./wave";
export { kaomojiCategories } from "./categories";

export const kaomojiByCategory: Record<CategoryId, Kaomoji[]> = {
  "cute": cuteKaomoji,
  "happy": happyKaomoji,
  "sad": sadKaomoji,
  "heart": heartKaomoji,
  "cat": catKaomoji,
  "star": starKaomoji,
  "shrug": shrugKaomoji,
  "bunny": bunnyKaomoji,
  "angry": angryKaomoji,
  "angel": angelKaomoji,
  "blush": blushKaomoji,
  "hug": hugKaomoji,
  "bear": bearKaomoji,
  "dog": dogKaomoji,
  "sleepy": sleepyKaomoji,
  "surprised": surprisedKaomoji,
  "table-flip": tableFlipKaomoji,
  "wave": waveKaomoji,
};

export const allKaomoji: Kaomoji[] = Object.values(kaomojiByCategory).flat();
