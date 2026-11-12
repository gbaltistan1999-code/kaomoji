import type { MetadataRoute } from "next";
import { enabledLocales } from "@/lib/i18n/config";
import { PAGE_KEYS, alternatesFor, urlFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";

// Only canonical, indexable pages in enabled locales, each with hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${siteConfig.legalUpdated}T00:00:00Z`);
  return PAGE_KEYS.flatMap((key) =>
    enabledLocales.map((locale) => ({
      url: urlFor(key, locale),
      lastModified,
      changeFrequency: key === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: key === "home" ? 1 : ["about", "contact", "privacy", "terms", "cookies", "disclaimer"].includes(key) ? 0.3 : 0.8,
      alternates: { languages: alternatesFor(key) },
    }))
  );
}
