import type { Locale } from "@/lib/i18n/config";
import type { StaticPageKey } from "@/lib/i18n/routes";
import { LOCALES } from "@/lib/i18n/config";
import { getBundle } from "@/data/i18n";
import { fmt, formatDate } from "@/lib/i18n/format";
import { siteConfig } from "@/lib/site-config";
import { webPageLd } from "@/lib/seo";
import { PageBreadcrumbs, PageShell } from "../page-shell";
import { ContentSections } from "../content-sections";
import { JsonLd } from "../json-ld";

const LEGAL: StaticPageKey[] = ["privacy", "terms", "cookies", "disclaimer"];

export function StaticPage({ locale, pageKey, children }: { locale: Locale; pageKey: Exclude<StaticPageKey, "faq">; children?: React.ReactNode }) {
  const b = getBundle(locale);
  const c = b.pages[pageKey];
  return (
    <PageShell locale={locale} pageKey={pageKey}>
      <JsonLd data={webPageLd(pageKey, locale, c.title, c.description)} />
      <article className="mx-auto max-w-3xl">
        <PageBreadcrumbs locale={locale} pageKey={pageKey} name={c.h1} />
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{c.h1}</h1>
        {LEGAL.includes(pageKey) && (
          <p className="mt-2 text-sm text-muted">{fmt(b.ui.lastUpdated, { date: formatDate(siteConfig.legalUpdated, LOCALES[locale].hreflang) })}</p>
        )}
        <p className="mt-4 text-lg leading-8 text-muted">{c.intro}</p>
        {children}
        <ContentSections sections={c.sections} locale={locale} strings={{ examplesLabel: b.ui.examplesLabel, copyAria: b.ui.library.copyAria }} />
      </article>
    </PageShell>
  );
}
