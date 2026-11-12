// Custom 404 for every unmatched URL. The middleware passes the locale from the
// URL prefix in the x-kz-locale header, so /es/whatever shows a Spanish 404.
import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { DEFAULT_LOCALE, LOCALES, isEnabledLocale, type Locale } from "@/lib/i18n/config";
import { getBundle } from "@/data/i18n";
import { siteConfig } from "@/lib/site-config";
import { NotFoundContent } from "@/components/not-found-content";
import { CopyHandler } from "@/components/copy-handler";
import { DetailsCloser } from "@/components/details-closer";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  icons: { icon: "/icon.svg" },
};

export default async function GlobalNotFound() {
  const h = await headers();
  const fromHeader = h.get("x-kz-locale") ?? DEFAULT_LOCALE;
  const locale: Locale = isEnabledLocale(fromHeader) ? fromHeader : DEFAULT_LOCALE;
  const { ui } = getBundle(locale);
  return (
    <html lang={LOCALES[locale].hreflang}>
      <body className="min-h-screen antialiased">
        <title>{`${ui.notFound.title} | ${siteConfig.name}`}</title>
        <NotFoundContent locale={locale} />
        <CopyHandler copiedText={ui.library.copied} failedText={ui.library.copyFailed} />
        <DetailsCloser />
      </body>
    </html>
  );
}
