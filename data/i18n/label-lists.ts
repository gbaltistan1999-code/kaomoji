// Translated card labels are written as ordered lists per category (same order
// as Appendix A) to keep the files compact. This turns them into an id map and
// fails loudly if a list is too short or too long.
import { kaomojiByCategory } from "@/data/kaomoji";
import type { CategoryId } from "@/types/kaomoji";

export type LabelLists = Record<CategoryId, string[]>;

export function labelsFromLists(locale: string, lists: LabelLists): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [cat, items] of Object.entries(kaomojiByCategory) as [CategoryId, { id: string }[]][]) {
    const list = lists[cat];
    if (list.length !== items.length) {
      throw new Error(`[${locale}] labels for "${cat}": expected ${items.length}, got ${list.length}`);
    }
    items.forEach((k, i) => (out[k.id] = list[i]));
  }
  return out;
}
