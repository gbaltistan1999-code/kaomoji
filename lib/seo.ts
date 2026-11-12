import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { LOCALES, type Locale } from "./i18n/config";
import { alternatesFor, urlFor, type PageKey } from "./i18n/routes";
import type { Faq } from "@/types/i18n";

export function buildMetadata(key: PageKey, locale: Locale, meta: { title: string; description: string }): Metadata {
  const url = urlFor(key, locale);
  const isHome = key === "home";
  // The homepage title already contains the brand intent; other pages get " | KaomojiZone".
  const title = isHome ? `${meta.title} | ${siteConfig.name}` : `${meta.title} | ${siteConfig.name}`;
  return {
    title: { absolute: title },
    description: meta.description,
    alternates: { canonical: url, languages: alternatesFor(key) },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: meta.title,
      description: meta.description,
      siteName: siteConfig.name,
      locale: LOCALES[locale].ogLocale,
    },
    twitter: { card: "summary", title: meta.title, description: meta.description },
  };
}

// ---------- JSON-LD builders (only for content actually on the page) ----------

export function websiteLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: urlFor("home", locale),
    inLanguage: LOCALES[locale].hreflang,
  };
}

export function webPageLd(key: PageKey, locale: Locale, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: urlFor(key, locale),
    inLanguage: LOCALES[locale].hreflang,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: urlFor("home", locale) },
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function itemListLd(name: string, items: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: `${it.text} (${it.name})` })),
  };
}

export function webAppLd(locale: Locale, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: urlFor("maker", locale),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    inLanguage: LOCALES[locale].hreflang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
