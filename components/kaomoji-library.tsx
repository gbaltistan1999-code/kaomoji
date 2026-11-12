// Server components that lay out the library on the homepage and on
// category pages. Both reuse <KaomojiGrid/> and <LibraryControls/>.
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/format";
import { pathFor } from "@/lib/i18n/routes";
import { getBundle } from "@/data/i18n";
import { getLibraryView, type CategoryView } from "@/lib/kaomoji-view";
import { MAIN_GROUPS } from "@/types/kaomoji";
import { kaomojiCategories } from "@/data/kaomoji";
import { categoryHref } from "@/lib/kaomoji-view";
import { KaomojiGrid } from "./kaomoji-grid";
import { LibraryControls, type LibraryStrings } from "./library-controls";

const PREVIEW = 24;

export function libraryStrings(locale: Locale): LibraryStrings {
  const l = getBundle(locale).ui.library;
  return {
    searchLabel: l.searchLabel,
    searchPlaceholder: l.searchPlaceholder,
    all: l.all,
    mainGroupsLabel: l.mainGroupsLabel,
    categoriesLabel: l.categoriesLabel,
    noResults: l.noResults,
    noResultsHint: l.noResultsHint,
    clearSearch: l.clearSearch,
    resultCount: l.resultCount,
    discordSafe: l.discordSafe,
    discordSafeHint: l.discordSafeHint,
    random: l.random,
    randomHint: l.randomHint,
    recent: l.recent,
    recentClear: l.recentClear,
    recentSessionOnly: l.recentSessionOnly,
    showAll: l.showAll,
    showLess: l.showLess,
    groupFilterLabel: l.groupFilterLabel,
    allGroups: l.allGroups,
    copyAria: l.copyAria,
  };
}

export function HomeLibrary({ locale }: { locale: Locale }) {
  const { ui } = getBundle(locale);
  const library = getLibraryView(locale);
  const containerId = "library";
  return (
    <>
      <LibraryControls
        containerId={containerId}
        mode="home"
        strings={libraryStrings(locale)}
        mainGroups={MAIN_GROUPS.map((g) => ({ id: g, label: ui.library.mainGroups[g] }))}
        categories={library.map((c) => ({ id: c.id, name: c.name, mainGroup: c.mainGroup, href: c.href }))}
      />
      <div id={containerId} className="mt-6 scroll-mt-4 space-y-10">
        {library.map((cat) => (
          <HomeCategorySection key={cat.id} cat={cat} locale={locale} />
        ))}
      </div>
    </>
  );
}

function HomeCategorySection({ cat, locale }: { cat: CategoryView; locale: Locale }) {
  const { ui } = getBundle(locale);
  const cards = cat.groups.flatMap((g) => g.cards);
  const collapsible = cat.hasPage && cards.length > PREVIEW;
  return (
    <section
      id={`cat-${cat.id}`}
      data-cat={cat.id}
      data-main={cat.mainGroup}
      data-collapsed={collapsible ? "true" : "false"}
      className="kz-section scroll-mt-4"
      aria-labelledby={`h-${cat.id}`}
    >
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id={`h-${cat.id}`} className="text-xl font-bold">
          {cat.hasPage ? (
            <Link href={cat.href} className="text-ink no-underline hover:text-accent-text">
              {cat.title}
            </Link>
          ) : (
            cat.title
          )}{" "}
          <span className="text-sm font-normal text-muted">({fmt(ui.library.count, { n: cat.count })})</span>
        </h2>
        {cat.hasPage && (
          <Link href={cat.href} className="inline-flex items-center gap-1 text-sm font-medium">
            {fmt(ui.library.seeAll, { name: cat.title })}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
      <div data-group={cat.groups.length === 1 ? cat.groups[0].id : "all"}>
        <KaomojiGrid cards={cards} previewCount={collapsible ? PREVIEW : undefined} />
      </div>
      {collapsible && (
        <div className="mt-3 text-center">
          <button type="button" className="kz-toggle kz-btn-ghost !py-1.5 text-sm" data-toggle data-n={cat.count} aria-expanded="false">
            {fmt(ui.library.showAll, { n: cat.count })}
          </button>
        </div>
      )}
    </section>
  );
}

export function CategoryLibrary({ cat, locale }: { cat: CategoryView; locale: Locale }) {
  const containerId = "library";
  return (
    <>
      <LibraryControls
        containerId={containerId}
        mode="category"
        strings={libraryStrings(locale)}
        groups={cat.groups.map((g) => ({ id: g.id, title: g.title }))}
      />
      <div id={containerId} className="mt-6 space-y-10">
        <div data-cat={cat.id} data-main={cat.mainGroup} className="space-y-10">
          {cat.groups.map((g) => (
            <section key={g.id} data-group={g.id} aria-labelledby={`g-${g.id}`} className="kz-section">
              <h2 id={`g-${g.id}`} className="mb-3 text-xl font-bold">
                {g.title} <span className="text-sm font-normal text-muted">({g.cards.length})</span>
              </h2>
              <KaomojiGrid cards={g.cards} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

/** Pill navigation shown on category pages: main groups + categories of the current group. */
export function CategoryPills({ locale, current }: { locale: Locale; current: string }) {
  const { ui } = getBundle(locale);
  const currentCat = kaomojiCategories.find((c) => c.id === current)!;
  const home = pathFor("home", locale);
  return (
    <nav aria-label={ui.library.categoriesLabel} className="space-y-2">
      <div className="kz-pillrow">
        <Link href={home} className="kz-pill kz-main">
          {ui.library.all}
        </Link>
        {MAIN_GROUPS.map((g) => (
          <Link
            key={g}
            href={`${home === "/" ? "" : home}/#g-${g.toLowerCase()}`}
            className="kz-pill kz-main"
            data-active={g === currentCat.mainGroup ? "true" : undefined}
          >
            {ui.library.mainGroups[g]}
          </Link>
        ))}
      </div>
      <div className="kz-pillrow">
        {kaomojiCategories
          .filter((c) => c.mainGroup === currentCat.mainGroup)
          .map((c) => (
            <Link key={c.id} href={categoryHref(c, locale)} className="kz-pill kz-sub" aria-current={c.id === current ? "page" : undefined}>
              {ui.categoryNames[c.id]}
            </Link>
          ))}
      </div>
    </nav>
  );
}
