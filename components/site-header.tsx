import Link from "next/link";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LOCALES, enabledLocales, type Locale } from "@/lib/i18n/config";
import { CATEGORY_PAGE_KEYS, pathFor, type PageKey } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link href={pathFor("home", locale)} className="text-lg font-extrabold tracking-tight text-ink no-underline">
      {siteConfig.logo.first}
      <span className="text-accent-text">{siteConfig.logo.second}</span>
    </Link>
  );
}

export function LanguageSwitcher({ locale, pageKey, align = "right" }: { locale: Locale; pageKey: PageKey; align?: "right" | "left" }) {
  const ui = getBundle(locale).ui;
  if (enabledLocales.length < 2) return null;
  return (
    <details data-autoclose className="relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm hover:bg-card">
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">{ui.nav.language}: </span>
        <span>{locale.toUpperCase()}</span>
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </summary>
      <ul className={`absolute z-40 mt-2 w-52 rounded-xl border border-line bg-card p-1 shadow-lg ${align === "right" ? "right-0" : "left-0 bottom-full mb-2"}`}>
        {enabledLocales.map((l) => (
          <li key={l}>
            <Link
              href={pathFor(pageKey, l)}
              hrefLang={LOCALES[l].hreflang}
              lang={LOCALES[l].hreflang}
              aria-current={l === locale ? "true" : undefined}
              className={`block rounded-lg px-3 py-2 text-sm no-underline hover:bg-tint ${l === locale ? "font-semibold text-accent-text" : "text-ink"}`}
            >
              {LOCALES[l].nativeName}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function SiteHeader({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const { ui } = getBundle(locale);
  const navLink = "rounded-lg px-3 py-2 text-sm text-ink no-underline hover:bg-card";
  const categoryLinks: { href: string; name: string; key: PageKey }[] = [
    ...CATEGORY_PAGE_KEYS.map((k) => ({ href: pathFor(k, locale), name: ui.categoryTitles[k], key: k as PageKey })),
    { href: pathFor("heartSymbols", locale), name: ui.symbols.navHearts, key: "heartSymbols" },
    { href: pathFor("starSymbols", locale), name: ui.symbols.navStars, key: "starSymbols" },
  ];

  return (
    <header className="relative z-40 border-b border-line bg-bg/90 backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <a href="#main" className="sr-only-focusable absolute left-2 top-2 z-50 rounded bg-card px-3 py-2">
        {ui.nav.skipToContent}
      </a>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4">
        <Logo locale={locale} />

        {/* Desktop navigation */}
        <nav aria-label={siteConfig.name} className="hidden items-center gap-1 md:flex">
          <Link href={pathFor("home", locale)} className={navLink}>
            {ui.nav.home}
          </Link>
          <details data-autoclose className="relative">
            <summary className={`${navLink} flex cursor-pointer list-none items-center gap-1`}>
              {ui.nav.categories}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </summary>
            <ul className="absolute left-0 z-40 mt-2 grid w-80 grid-cols-2 gap-0.5 rounded-xl border border-line bg-card p-2 shadow-lg">
              {categoryLinks.map((c) => (
                <li key={c.key}>
                  <Link href={c.href} className="block rounded-lg px-3 py-2 text-sm text-ink no-underline hover:bg-tint" aria-current={pageKey === c.key ? "page" : undefined}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link href={pathFor("maker", locale)} className={navLink} aria-current={pageKey === "maker" ? "page" : undefined}>
            {ui.nav.maker}
          </Link>
          <Link href={pathFor("about", locale)} className={navLink} aria-current={pageKey === "about" ? "page" : undefined}>
            {ui.nav.about}
          </Link>
          <Link href={pathFor("faq", locale)} className={navLink} aria-current={pageKey === "faq" ? "page" : undefined}>
            {ui.nav.faq}
          </Link>
          <LanguageSwitcher locale={locale} pageKey={pageKey} />
        </nav>

        {/* Mobile navigation (works without JavaScript) */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher locale={locale} pageKey={pageKey} />
          <details data-autoclose className="relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg p-2 hover:bg-card">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">{ui.nav.menu}</span>
            </summary>
            <nav aria-label={ui.nav.menu} className="fixed inset-x-0 top-14 z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-line bg-card px-4 pb-6 pt-2 shadow-lg">
              <ul className="space-y-0.5">
                {[
                  { href: pathFor("home", locale), name: ui.nav.home },
                  { href: pathFor("maker", locale), name: ui.nav.maker },
                  { href: pathFor("about", locale), name: ui.nav.about },
                  { href: pathFor("faq", locale), name: ui.nav.faq },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-lg px-3 py-2.5 font-medium text-ink no-underline hover:bg-tint">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wide text-muted">{ui.nav.categories}</p>
              <ul className="mt-1 grid grid-cols-2 gap-0.5">
                {categoryLinks.map((c) => (
                  <li key={c.key}>
                    <Link href={c.href} className="block rounded-lg px-3 py-2 text-sm text-ink no-underline hover:bg-tint">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
