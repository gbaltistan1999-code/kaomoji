export type MainGroup = "Emotions" | "Cute" | "Love" | "Animals" | "Actions" | "Sparkles";

export const MAIN_GROUPS: MainGroup[] = ["Emotions", "Cute", "Love", "Animals", "Actions", "Sparkles"];

export type CategoryId =
  | "cute"
  | "happy"
  | "sad"
  | "heart"
  | "cat"
  | "star"
  | "shrug"
  | "bunny"
  | "angry"
  | "angel"
  | "blush"
  | "hug"
  | "bear"
  | "dog"
  | "sleepy"
  | "surprised"
  | "table-flip"
  | "wave";

/** Categories that have their own dedicated, indexable page. */
export type PageCategoryId = "cute" | "sad" | "cat" | "happy" | "heart" | "star" | "shrug" | "bunny" | "angry" | "angel" | "blush";

export interface Kaomoji {
  /** Stable id, e.g. "cute-001". Never change once published. */
  id: string;
  /** The exact characters that get copied. */
  kaomoji: string;
  /** Unique short English card label, e.g. "Stretching cat". */
  label: string;
  category: CategoryId;
  /** Group id inside the category (used for H2 sub-sections). */
  group: string;
  /** English search tags (group level). */
  tags: string[];
  /** English group-level description. */
  description: string;
}

export interface KaomojiGroup {
  id: string;
  tags: string[];
  description: string;
}

export interface KaomojiCategory {
  id: CategoryId;
  name: string;
  mainGroup: MainGroup;
  hasPage: boolean;
  groups: KaomojiGroup[];
}
