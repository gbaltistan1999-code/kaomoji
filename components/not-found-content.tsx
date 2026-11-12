import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { CATEGORY_PAGE_KEYS, pathFor } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { getRandomCards } from "@/lib/kaomoji-view";
import { PageShell } from "./page-shell";
import { KaomojiGrid } from "./kaomoji-grid";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const { ui } = getBundle(locale);
  const seed = new Date().getUTCMinutes();
  return (
    <PageShell locale={locale} pageKey="home">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-kao text-5xl" aria-hidden="true">
          (╯°□°)╯︵ 404
        </p>
        <h1 className="mt-4 text-3xl font-extrabold">{ui.notFound.title}</h1>
        <p className="mt-2 text-muted">{ui.notFound.text}</p>
        <div className="mt-6 text-left">
          <KaomojiGrid cards={getRandomCards(locale, 6, seed)} />
        </div>
        <Link href={pathFor("home", locale)} className="kz-btn mt-8">
          {ui.notFound.home}
        </Link>
        <h2 className="mt-10 text-lg font-bold">{ui.notFound.popular}</h2>
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {CATEGORY_PAGE_KEYS.map((k) => (
            <li key={k}>
              <Link href={pathFor(k, locale)} className="kz-pill kz-sub">
                {ui.categoryTitles[k]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
