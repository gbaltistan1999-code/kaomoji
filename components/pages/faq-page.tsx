import type { Locale } from "@/lib/i18n/config";
import { getBundle } from "@/data/i18n";
import { faqLd, webPageLd } from "@/lib/seo";
import { PageBreadcrumbs, PageShell } from "../page-shell";
import { FaqList } from "../content-sections";
import { JsonLd } from "../json-ld";

export function FaqPage({ locale }: { locale: Locale }) {
  const c = getBundle(locale).pages.faq;
  return (
    <PageShell locale={locale} pageKey="faq">
      <JsonLd data={[webPageLd("faq", locale, c.title, c.description), faqLd(c.groups.flatMap((g) => g.faqs))]} />
      <article className="mx-auto max-w-3xl">
        <PageBreadcrumbs locale={locale} pageKey="faq" name={c.h1} />
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{c.h1}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{c.intro}</p>
        {c.groups.map((g) => (
          <FaqList key={g.heading} faqs={g.faqs} title={g.heading} locale={locale} />
        ))}
      </article>
    </PageShell>
  );
}
