import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { isEnabledLocale, type Locale } from "@/lib/i18n/config";
import { pathFor } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { buildMetadata, faqLd, webPageLd, websiteLd } from "@/lib/seo";
import { PageShell } from "@/components/page-shell";
import { HomeLibrary } from "@/components/kaomoji-library";
import { ContentSections, FaqList } from "@/components/content-sections";
import { JsonLd } from "@/components/json-ld";
import { RichText } from "@/components/rich-text";

type Params = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isEnabledLocale(locale)) return {};
  const { home } = getBundle(locale);
  return buildMetadata("home", locale, home);
}

export default async function HomePage({ params }: Params) {
  const { locale } = await params;
  if (!isEnabledLocale(locale)) notFound();
  const { home, ui } = getBundle(locale);
  return (
    <PageShell locale={locale} pageKey="home">
      <JsonLd data={[websiteLd(locale), webPageLd("home", locale, home.title, home.description), faqLd(home.faqs)]} />
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{home.h1}</h1>
        <p className="mx-auto mt-2 max-w-xl text-muted">{home.intro}</p>
      </div>

      <HomeLibrary locale={locale} />

      <aside className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-line bg-card p-6 text-center">
        <Sparkles className="h-6 w-6 text-accent-text" aria-hidden="true" />
        <h2 className="text-lg font-bold">{ui.library.makerCtaTitle}</h2>
        <p className="max-w-md text-sm text-muted">{ui.library.makerCtaText}</p>
        <Link href={pathFor("maker", locale)} className="kz-btn">
          {ui.library.makerCtaButton}
        </Link>
      </aside>

      <article className="mx-auto mt-6 max-w-3xl">
        <ContentSections sections={home.sections} locale={locale} strings={{ examplesLabel: ui.examplesLabel, copyAria: ui.library.copyAria }} />
        <FaqList faqs={home.faqs} title={ui.faqTitle} locale={locale} />
        <section className="kz-prose mt-10">
          <h2>{home.conclusion.heading}</h2>
          {home.conclusion.paragraphs?.map((p, i) => (
            <p key={i}>
              <RichText text={p} locale={locale} />
            </p>
          ))}
        </section>
      </article>
    </PageShell>
  );
}

// Unknown first segments (e.g. /nope) are unmatched routes -> global 404.
export const dynamicParams = false;
