import type { Locale } from "@/lib/i18n/config";
import type { PageKey } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { faqLd, webAppLd } from "@/lib/seo";
import { PageBreadcrumbs, PageShell, RelatedLinks } from "../page-shell";
import { ContentSections, FaqList } from "../content-sections";
import { JsonLd } from "../json-ld";
import { KaomojiMaker } from "../kaomoji-maker";

export function MakerPage({ locale }: { locale: Locale }) {
  const b = getBundle(locale);
  const c = b.maker;
  const related: { key: PageKey; name: string }[] = [
    { key: "home", name: b.ui.nav.home },
    ...(["cute", "cat", "bunny", "shrug", "angry", "angel"] as const).map((k) => ({ key: k as PageKey, name: b.ui.categoryTitles[k] })),
  ];
  return (
    <PageShell locale={locale} pageKey="maker">
      <JsonLd data={[webAppLd(locale, c.h1, c.description), faqLd(c.faqs)]} />
      <PageBreadcrumbs locale={locale} pageKey="maker" name={c.h1} />
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{c.h1}</h1>
        <p className="mx-auto mt-2 max-w-xl text-muted">{c.intro}</p>
      </div>
      <div className="mx-auto max-w-4xl">
        <KaomojiMaker strings={b.ui.maker} />
      </div>
      <article className="mx-auto mt-10 max-w-3xl">
        <ContentSections sections={c.sections} locale={locale} strings={{ examplesLabel: b.ui.examplesLabel, copyAria: b.ui.library.copyAria }} />
        <FaqList faqs={c.faqs} title={b.ui.faqTitle} locale={locale} />
        <RelatedLinks locale={locale} keys={related} title={b.ui.relatedTitle} text={b.ui.relatedText} />
      </article>
    </PageShell>
  );
}
