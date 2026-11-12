// Locale configuration. To enable or disable a language, flip `enabled`.
// A locale may only be enabled once its dictionary and content files exist
// in data/i18n/<locale>/ (TypeScript and the tests enforce completeness).

export const ALL_LOCALES = ["en", "es", "id", "pt", "vi"] as const;
export type Locale = (typeof ALL_LOCALES)[number];

export interface LocaleInfo {
  code: Locale;
  /** Value used in hreflang and <html lang>. */
  hreflang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Name of the language in that language (for the switcher). */
  nativeName: string;
  enabled: boolean;
}

export const LOCALES: Record<Locale, LocaleInfo> = {
  en: { code: "en", hreflang: "en", ogLocale: "en_US", nativeName: "English", enabled: true },
  es: { code: "es", hreflang: "es", ogLocale: "es_LA", nativeName: "Español", enabled: true },
  id: { code: "id", hreflang: "id", ogLocale: "id_ID", nativeName: "Bahasa Indonesia", enabled: true },
  pt: { code: "pt", hreflang: "pt-BR", ogLocale: "pt_BR", nativeName: "Português (Brasil)", enabled: true },
  vi: { code: "vi", hreflang: "vi", ogLocale: "vi_VN", nativeName: "Tiếng Việt", enabled: true },
};

export const DEFAULT_LOCALE: Locale = "en";

export const enabledLocales: Locale[] = ALL_LOCALES.filter((l) => LOCALES[l].enabled);

export function isEnabledLocale(value: string): value is Locale {
  return (enabledLocales as string[]).includes(value);
}
