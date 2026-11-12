// Every non-home page is resolved through the typed route map, so each locale
// gets its own translated slug (e.g. /cat-kaomoji, /es/kaomojis-de-gatos).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { enabledLocales, isEnabledLocale, type Locale } from "@/lib/i18n/config";
import { PAGE_KEYS, ROUTES, isCategoryPageKey, pageKeyFromSlug, type CategoryPageKey, type PageKey, type StaticPageKey } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { buildMetadata } from "@/lib/seo";
import { CategoryPage } from "@/components/pages/category-page";
import { MakerPage } from "@/components/pages/maker-page";
import { StaticPage } from "@/components/pages/static-page";
import { FaqPage } from "@/components/pages/faq-page";
import { ContactPage } from "@/components/pages/contact-page";

type Params = { params: Promise<{ locale: Locale; slug: string }> };

// Unknown slugs are unmatched routes and get app/global-not-found.tsx (HTTP 404).
export const dynamicParams = false;


export function generateStaticParams() {
  return enabledLocales.flatMap((locale) =>
    PAGE_KEYS.filter((k) => k !== "home").map((k) => ({ locale, slug: ROUTES[k][locale] }))
  );
}

function resolve(locale: Locale, slug: string): PageKey {
  const key = isEnabledLocale(locale) ? pageKeyFromSlug(locale, slug) : undefined;
  if (!key) notFound();
  return key;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const key = isEnabledLocale(locale) ? pageKeyFromSlug(locale, slug) : undefined;
  if (!key) return {};
  const b = getBundle(locale);
  if (isCategoryPageKey(key)) return buildMetadata(key, locale, b.categories[key]);
  if (key === "maker") return buildMetadata(key, locale, b.maker);
  return buildMetadata(key, locale, b.pages[key as StaticPageKey]);
}

export default async function SlugPage({ params }: Params) {
  const { locale, slug } = await params;
  const key = resolve(locale, slug);
  if (isCategoryPageKey(key)) return <CategoryPage locale={locale} id={key as CategoryPageKey} />;
  if (key === "maker") return <MakerPage locale={locale} />;
  if (key === "faq") return <FaqPage locale={locale} />;
  if (key === "contact") return <ContactPage locale={locale} />;
  return <StaticPage locale={locale} pageKey={key as Exclude<StaticPageKey, "faq" | "contact">} />;
}
