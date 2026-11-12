// Builds the localized, render-ready view of the kaomoji library for a page.
import { allKaomoji, kaomojiByCategory, kaomojiCategories } from "@/data/kaomoji";
import { getBundle } from "@/data/i18n";
import type { Locale } from "./i18n/config";
import { fmt } from "./i18n/format";
import { buildHaystack } from "./search";
import { pathFor, type PageKey } from "./i18n/routes";
import type { CategoryId, Kaomoji, KaomojiCategory, MainGroup } from "@/types/kaomoji";

export interface CardView {
  id: string;
  kaomoji: string;
  label: string;
  aria: string;
  search: string;
}

export interface GroupView {
  key: string;
  id: string;
  title: string;
  cards: CardView[];
}

export interface CategoryView {
  id: CategoryId;
  name: string;
  title: string;
  mainGroup: MainGroup;
  hasPage: boolean;
  /** Dedicated page path, or homepage anchor for homepage-only categories. */
  href: string;
  groups: GroupView[];
  count: number;
}

export function categoryHref(cat: KaomojiCategory, locale: Locale): string {
  return cat.hasPage ? pathFor(cat.id as PageKey, locale) : `${pathFor("home", locale)}#cat-${cat.id}`.replace("//#", "/#");
}

function toCard(k: Kaomoji, locale: Locale): CardView {
  const b = getBundle(locale);
  const en = getBundle("en");
  const label = b.labels[k.id] ?? k.label;
  const g = b.groups[`${k.category}.${k.group}`];
  return {
    id: k.id,
    kaomoji: k.kaomoji,
    label,
    aria: fmt(b.ui.library.copyAria, { label }),
    // Localized words + English words + the characters themselves are searchable.
    search: buildHaystack([
      label,
      g?.tags,
      g?.description,
      b.ui.categoryNames[k.category],
      ...(locale === "en" ? [] : [k.label, k.tags, en.ui.categoryNames[k.category]]),
      k.kaomoji,
    ]),
  };
}

export function getCategoryView(id: CategoryId, locale: Locale): CategoryView {
  const cat = kaomojiCategories.find((c) => c.id === id)!;
  const b = getBundle(locale);
  const items = kaomojiByCategory[id];
  return {
    id,
    name: b.ui.categoryNames[id],
    title: b.ui.categoryTitles[id],
    mainGroup: cat.mainGroup,
    hasPage: cat.hasPage,
    href: categoryHref(cat, locale),
    count: items.length,
    groups: cat.groups.map((g) => ({
      key: `${id}.${g.id}`,
      id: g.id,
      title: b.groups[`${id}.${g.id}`]?.title ?? g.description,
      cards: items.filter((k) => k.group === g.id).map((k) => toCard(k, locale)),
    })),
  };
}

export function getLibraryView(locale: Locale): CategoryView[] {
  return kaomojiCategories.map((c) => getCategoryView(c.id, locale));
}

export function getRandomCards(locale: Locale, count: number, seed = 7): CardView[] {
  // Deterministic pick so static HTML stays stable between builds.
  const out: CardView[] = [];
  const step = Math.floor(allKaomoji.length / count);
  for (let i = 0; i < count; i++) out.push(toCard(allKaomoji[(i * step + seed * 13) % allKaomoji.length], locale));
  return out;
}

export const totalKaomoji = allKaomoji.length;
