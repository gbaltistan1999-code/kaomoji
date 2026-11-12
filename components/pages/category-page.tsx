import type { Locale } from "@/lib/i18n/config";
import type { CategoryPageKey, PageKey } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { getCategoryView } from "@/lib/kaomoji-view";
import { faqLd, itemListLd, webPageLd } from "@/lib/seo";
import { PageBreadcrumbs, PageShell, RelatedLinks } from "../page-shell";
import { CategoryLibrary, CategoryPills } from "../kaomoji-library";
import { ContentSections, FaqList } from "../content-sections";
import { JsonLd } from "../json-ld";

// Internal linking between closely related collections.
export const RELATED: Record<CategoryPageKey, CategoryPageKey[]> = {
  cute: ["blush", "heart", "angel", "happy"],
  blush: ["cute", "heart", "happy"],
  heart: ["blush", "cute", "angel"],
  cat: ["bunny", "cute"],
  bunny: ["cat", "cute"],
  sad: ["angry", "happy"],
  angry: ["sad", "shrug"],
  happy: ["star", "cute"],
  star: ["happy", "angel"],
  angel: ["cute", "heart", "star"],
  shrug: ["angry", "happy"],
};

export function CategoryPage({ locale, id }: { locale: Locale; id: CategoryPageKey }) {
  const b = getBundle(locale);
  const content = b.categories[id];
  const cat = getCategoryView(id, locale);
  const allCards = cat.groups.flatMap((g) => g.cards);
  const related: { key: PageKey; name: string }[] = [
    { key: "home", name: b.ui.nav.home },
    ...RELATED[id].map((k) => ({ key: k as PageKey, name: b.ui.categoryTitles[k] })),
    { key: "maker", name: b.ui.nav.maker },
  ];
  return (
    <PageShell locale={locale} pageKey={id}>
      <JsonLd
        data={[
          webPageLd(id, locale, content.title, content.description),
          itemListLd(content.h1, allCards.map((c) => ({ name: c.label, text: c.kaomoji }))),
          faqLd(content.faqs),
        ]}
      />
      <PageBreadcrumbs locale={locale} pageKey={id} name={content.h1} />
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{content.h1}</h1>
        <p className="mx-auto mt-2 max-w-xl text-muted">{content.intro}</p>
      </div>
      <div className="mb-4">
        <CategoryPills locale={locale} current={id} />
      </div>
      <CategoryLibrary cat={cat} locale={locale} />
      <article className="mx-auto mt-12 max-w-3xl">
        <ContentSections sections={content.sections} locale={locale} strings={{ examplesLabel: b.ui.examplesLabel, copyAria: b.ui.library.copyAria }} />
        <FaqList faqs={content.faqs} title={b.ui.faqTitle} locale={locale} />
        <RelatedLinks locale={locale} keys={related} title={b.ui.relatedTitle} text={b.ui.relatedText} />
      </article>
    </PageShell>
  );
}
