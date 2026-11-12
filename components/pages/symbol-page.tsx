import type { Locale } from "@/lib/i18n/config";
import type { PageKey, SymbolPageKey } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { symbolGroups } from "@/data/symbols";
import { fmt } from "@/lib/i18n/format";
import { faqLd, webPageLd } from "@/lib/seo";
import { PageBreadcrumbs, PageShell, RelatedLinks } from "../page-shell";
import { ContentSections, FaqList } from "../content-sections";
import { JsonLd } from "../json-ld";

const RELATED: Record<SymbolPageKey, PageKey[]> = {
  heartSymbols: ["heart", "cute", "blush", "starSymbols"],
  starSymbols: ["star", "happy", "angel", "heartSymbols"],
};

export function SymbolPage({ locale, pageKey }: { locale: Locale; pageKey: SymbolPageKey }) {
  const b = getBundle(locale);
  const c = b.symbolPages[pageKey];
  const nameOf = (k: PageKey) =>
    k === "heartSymbols" ? b.ui.symbols.navHearts : k === "starSymbols" ? b.ui.symbols.navStars : b.ui.categoryTitles[k as keyof typeof b.ui.categoryTitles];
  const related = [{ key: "home" as PageKey, name: b.ui.nav.home }, ...RELATED[pageKey].map((k) => ({ key: k, name: nameOf(k) })), { key: "maker" as PageKey, name: b.ui.nav.maker }];

  return (
    <PageShell locale={locale} pageKey={pageKey}>
      <JsonLd data={[webPageLd(pageKey, locale, c.title, c.description), faqLd(c.faqs)]} />
      <PageBreadcrumbs locale={locale} pageKey={pageKey} name={c.h1} />
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{c.h1}</h1>
        <p className="mx-auto mt-2 max-w-xl text-muted">{c.intro}</p>
      </div>

      <div className="space-y-8">
        {symbolGroups[pageKey].map((g) => (
          <section key={g.id} aria-labelledby={`sym-${g.id}`}>
            <h2 id={`sym-${g.id}`} className="mb-3 text-xl font-bold">
              {c.groupTitles[g.id] ?? g.id} <span className="text-sm font-normal text-muted">({g.items.length})</span>
            </h2>
            <ul className={`kz-symgrid ${g.id === "borders" ? "kz-symgrid-wide" : g.id === "decorated" || g.id === "arrows" ? "kz-symgrid-mid" : ""}`} role="list">
              {g.items.map((s) => (
                <li key={s}>
                  <button type="button" className="kz-sym" data-copy={s} aria-label={fmt(b.ui.symbols.copyAria, { symbol: s })}>
                    <span aria-hidden="true">{s}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <article className="mx-auto mt-12 max-w-3xl">
        <ContentSections sections={c.sections} locale={locale} strings={{ examplesLabel: b.ui.examplesLabel, copyAria: b.ui.library.copyAria }} />
        <FaqList faqs={c.faqs} title={b.ui.faqTitle} locale={locale} />
        <RelatedLinks locale={locale} keys={related} title={b.ui.relatedTitle} text={b.ui.relatedText} />
      </article>
    </PageShell>
  );
}
