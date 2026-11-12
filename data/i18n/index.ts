// Server-only access to translation bundles. Client components receive only
// the strings they need as props, so bundles never ship to the browser.
import type { LocaleBundle } from "@/types/i18n";
import type { Locale } from "@/lib/i18n/config";
import { en } from "./en";
import { es } from "./es";
import { id } from "./id";
import { pt } from "./pt";
import { vi } from "./vi";

export const bundles: Record<Locale, LocaleBundle> = { en, es, id, pt, vi };

export function getBundle(locale: Locale): LocaleBundle {
  return bundles[locale];
}
