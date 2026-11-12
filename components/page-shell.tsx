import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { PageKey } from "@/lib/i18n/routes";
import { pathFor, urlFor } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { breadcrumbLd } from "@/lib/seo";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Breadcrumbs } from "./breadcrumbs";
import { JsonLd } from "./json-ld";

export function PageShell({ locale, pageKey, children }: { locale: Locale; pageKey: PageKey; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader locale={locale} pageKey={pageKey} />
      <main id="main" className="mx-auto max-w-6xl px-4 pb-8 pt-6 sm:pt-8">
        {children}
      </main>
      <SiteFooter locale={locale} pageKey={pageKey} />
    </>
  );
}

/** Breadcrumb trail Home > Current, with matching BreadcrumbList JSON-LD. */
export function PageBreadcrumbs({ locale, pageKey, name }: { locale: Locale; pageKey: PageKey; name: string }) {
  const { ui } = getBundle(locale);
  return (
    <>
      <Breadcrumbs label={ui.nav.breadcrumb} items={[{ name: ui.breadcrumbHome, href: pathFor("home", locale) }, { name }]} />
      <JsonLd
        data={breadcrumbLd([
          { name: ui.breadcrumbHome, url: urlFor("home", locale) },
          { name, url: urlFor(pageKey, locale) },
        ])}
      />
    </>
  );
}

export function RelatedLinks({ locale, keys, title, text }: { locale: Locale; keys: { key: PageKey; name: string }[]; title: string; text: string }) {
  return (
    <section className="mt-10 rounded-2xl border border-line bg-card p-5">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-1 text-sm text-muted">{text}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {keys.map((k) => (
          <li key={k.key}>
            <Link href={pathFor(k.key, locale)} className="kz-pill kz-sub">
              {k.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
