// URL routing for subfolder i18n WITHOUT any language/IP detection:
//   /            -> rewrite to /en        (English has no prefix)
//   /cat-kaomoji -> rewrite to /en/cat-kaomoji
//   /es/...      -> served as is (enabled locales only)
//   /en/...      -> 301 to the unprefixed URL (avoids duplicate content)
// Crawlers and visitors always get the URL they asked for.
import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isEnabledLocale } from "./lib/i18n/config";
import { pageKeyFromSlug } from "./lib/i18n/routes";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (first === DEFAULT_LOCALE) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 301);
  }

  const headers = new Headers(req.headers);
  if (isEnabledLocale(first)) {
    headers.set("x-kz-locale", first);
    return NextResponse.next({ request: { headers } });
  }

  headers.set("x-kz-locale", DEFAULT_LOCALE);
  // Only rewrite URLs that are real English pages. Anything else passes through
  // unchanged, matches no generated route, and gets the global 404 page.
  const segments = pathname.split("/").filter(Boolean);
  const isEnglishPage = segments.length === 0 || (segments.length === 1 && pageKeyFromSlug(DEFAULT_LOCALE, segments[0]) !== undefined);
  if (!isEnglishPage) return NextResponse.next({ request: { headers } });

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  // Skip Next internals, metadata routes and any file with an extension.
  matcher: ["/((?!_next|api|sitemap.xml|robots.txt|.*\\..*).*)"],
};
