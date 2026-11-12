import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { LOCALES, enabledLocales, isEnabledLocale } from "@/lib/i18n/config";
import { pathFor } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";
import { getBundle } from "@/data/i18n";
import { CopyHandler } from "@/components/copy-handler";
import { CookieConsent } from "@/components/cookie-consent";
import { DetailsCloser } from "@/components/details-closer";


export function generateStaticParams() {
  return enabledLocales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#141416" },
  ],
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isEnabledLocale(locale)) notFound();
  const { ui } = getBundle(locale);
  return (
    <html lang={LOCALES[locale].hreflang}>
      <body className="min-h-screen antialiased">
        {children}
        <CopyHandler copiedText={ui.library.copied} failedText={ui.library.copyFailed} />
        <CookieConsent strings={ui.cookie} privacyHref={pathFor("privacy", locale)} />
        <DetailsCloser />
      </body>
    </html>
  );
}
