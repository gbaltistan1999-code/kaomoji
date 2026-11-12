// Typed route map: one entry per page, one ASCII slug per locale.
// Never hardcode localized URLs in components; use pathFor() / urlFor().
import type { PageCategoryId } from "@/types/kaomoji";
import { DEFAULT_LOCALE, LOCALES, enabledLocales, type Locale } from "./config";
import { siteConfig } from "../site-config";

export type CategoryPageKey = PageCategoryId;
export type StaticPageKey = "about" | "contact" | "privacy" | "terms" | "cookies" | "disclaimer" | "faq";
export type SymbolPageKey = "heartSymbols" | "starSymbols";
export type PageKey = "home" | CategoryPageKey | "maker" | SymbolPageKey | StaticPageKey;

export const ROUTES: Record<PageKey, Record<Locale, string>> = {
  home: { en: "", es: "", pt: "", id: "", vi: "" },
  cute: { en: "cute-kaomoji", es: "kaomojis-tiernos", pt: "kaomojis-fofos", id: "kaomoji-lucu", vi: "kaomoji-de-thuong" },
  sad: { en: "sad-kaomoji", es: "kaomojis-tristes", pt: "kaomojis-tristes", id: "kaomoji-sedih", vi: "kaomoji-buon" },
  cat: { en: "cat-kaomoji", es: "kaomojis-de-gatos", pt: "kaomojis-de-gato", id: "kaomoji-kucing", vi: "kaomoji-meo" },
  happy: { en: "happy-kaomoji", es: "kaomojis-felices", pt: "kaomojis-felizes", id: "kaomoji-senang", vi: "kaomoji-vui-ve" },
  heart: { en: "heart-kaomoji", es: "kaomojis-de-corazon", pt: "kaomojis-de-coracao", id: "kaomoji-hati", vi: "kaomoji-trai-tim" },
  star: { en: "star-kaomoji", es: "kaomojis-de-estrellas", pt: "kaomojis-de-estrela", id: "kaomoji-bintang", vi: "kaomoji-ngoi-sao" },
  shrug: { en: "shrug-kaomoji", es: "kaomoji-encogiendo-hombros", pt: "kaomoji-dar-de-ombros", id: "kaomoji-shrug", vi: "kaomoji-nhun-vai" },
  bunny: { en: "bunny-kaomoji", es: "kaomojis-de-conejos", pt: "kaomojis-de-coelho", id: "kaomoji-kelinci", vi: "kaomoji-tho" },
  angry: { en: "angry-kaomoji", es: "kaomojis-enojados", pt: "kaomojis-com-raiva", id: "kaomoji-marah", vi: "kaomoji-gian-du" },
  angel: { en: "angel-kaomoji", es: "kaomojis-de-angel", pt: "kaomojis-de-anjo", id: "kaomoji-malaikat", vi: "kaomoji-thien-than" },
  blush: { en: "blush-kaomoji", es: "kaomojis-sonrojados", pt: "kaomojis-corados", id: "kaomoji-malu", vi: "kaomoji-ngai-ngung" },
  maker: { en: "kaomoji-maker", es: "creador-de-kaomojis", pt: "criador-de-kaomojis", id: "pembuat-kaomoji", vi: "tao-kaomoji" },
  heartSymbols: { en: "heart-symbols", es: "simbolos-de-corazon", pt: "simbolos-de-coracao", id: "simbol-hati", vi: "ky-hieu-trai-tim" },
  starSymbols: { en: "star-symbols", es: "simbolos-de-estrellas", pt: "simbolos-de-estrela", id: "simbol-bintang", vi: "ky-hieu-ngoi-sao" },
  about: { en: "about", es: "acerca-de", pt: "sobre", id: "tentang", vi: "gioi-thieu" },
  contact: { en: "contact", es: "contacto", pt: "contato", id: "kontak", vi: "lien-he" },
  privacy: { en: "privacy-policy", es: "politica-de-privacidad", pt: "politica-de-privacidade", id: "kebijakan-privasi", vi: "chinh-sach-bao-mat" },
  terms: { en: "terms-and-conditions", es: "terminos-y-condiciones", pt: "termos-e-condicoes", id: "syarat-dan-ketentuan", vi: "dieu-khoan-su-dung" },
  cookies: { en: "cookie-policy", es: "politica-de-cookies", pt: "politica-de-cookies", id: "kebijakan-cookie", vi: "chinh-sach-cookie" },
  disclaimer: { en: "disclaimer", es: "aviso-legal", pt: "aviso-legal", id: "penafian", vi: "tuyen-bo-mien-tru" },
  faq: { en: "faq", es: "preguntas-frecuentes", pt: "perguntas-frequentes", id: "tanya-jawab", vi: "cau-hoi-thuong-gap" },
};

export const CATEGORY_PAGE_KEYS: CategoryPageKey[] = ["cute", "sad", "cat", "happy", "heart", "star", "shrug", "bunny", "angry", "angel", "blush"];
export const STATIC_PAGE_KEYS: StaticPageKey[] = ["about", "contact", "privacy", "terms", "cookies", "disclaimer", "faq"];
export const PAGE_KEYS = Object.keys(ROUTES) as PageKey[];

export const SYMBOL_PAGE_KEYS: SymbolPageKey[] = ["heartSymbols", "starSymbols"];

export function isSymbolPageKey(key: PageKey): key is SymbolPageKey {
  return (SYMBOL_PAGE_KEYS as string[]).includes(key);
}

export function isCategoryPageKey(key: PageKey): key is CategoryPageKey {
  return (CATEGORY_PAGE_KEYS as string[]).includes(key);
}

/** Root-relative path, e.g. "/es/kaomojis-tiernos" or "/" */
export function pathFor(key: PageKey, locale: Locale): string {
  const slug = ROUTES[key][locale];
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const path = `${prefix}${slug ? `/${slug}` : ""}`;
  return path || "/";
}

/** Absolute canonical URL. */
export function urlFor(key: PageKey, locale: Locale): string {
  const p = pathFor(key, locale);
  return p === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${p}`;
}

/** Look up which page a slug belongs to within a locale. */
export function pageKeyFromSlug(locale: Locale, slug: string): PageKey | undefined {
  return PAGE_KEYS.find((k) => k !== "home" && ROUTES[k][locale] === slug);
}

/** hreflang alternates for enabled locales, plus x-default -> English. */
export function alternatesFor(key: PageKey): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of enabledLocales) out[hreflangOf(l)] = urlFor(key, l);
  out["x-default"] = urlFor(key, DEFAULT_LOCALE);
  return out;
}

function hreflangOf(l: Locale) {
  return LOCALES[l].hreflang;
}
