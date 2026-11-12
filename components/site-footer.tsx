import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n/config";
import { CATEGORY_PAGE_KEYS, pathFor, type PageKey } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { CookieSettingsButton } from "./cookie-consent";
import { LanguageSwitcher, Logo } from "./site-header";

export function SiteFooter({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const b = getBundle(locale);
  const { ui, pages } = b;
  const link = "text-sm text-muted no-underline hover:text-accent-text";
  const siteLinks: { key: PageKey; name: string }[] = [
    { key: "home", name: ui.nav.home },
    { key: "maker", name: ui.nav.maker },
    { key: "about", name: ui.nav.about },
    { key: "contact", name: pages.contact.h1 },
    { key: "faq", name: ui.nav.faq },
  ];
  const legalLinks: { key: PageKey; name: string }[] = [
    { key: "privacy", name: pages.privacy.h1 },
    { key: "terms", name: pages.terms.h1 },
    { key: "cookies", name: pages.cookies.h1 },
    { key: "disclaimer", name: pages.disclaimer.h1 },
  ];

  return (
    <footer className="mt-16 border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Logo locale={locale} />
          <p className="text-sm text-muted">{ui.footer.madeLocal}</p>
          <LanguageSwitcher locale={locale} pageKey={pageKey} align="left" />
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">{ui.footer.popular}</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {CATEGORY_PAGE_KEYS.map((k) => (
              <li key={k}>
                <Link href={pathFor(k, locale)} className={link}>
                  {ui.categoryNames[k]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">{ui.footer.site}</h2>
          <ul className="space-y-1.5">
            {siteLinks.map((l) => (
              <li key={l.key}>
                <Link href={pathFor(l.key, locale)} className={link}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold">{ui.footer.legal}</h2>
          <ul className="space-y-1.5">
            {legalLinks.map((l) => (
              <li key={l.key}>
                <Link href={pathFor(l.key, locale)} className={link}>
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton label={ui.footer.cookieSettings} />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-1 px-4 py-5 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {ui.footer.rights}
          </p>
          <p>{ui.footer.notAffiliated}</p>
        </div>
      </div>
    </footer>
  );
}
