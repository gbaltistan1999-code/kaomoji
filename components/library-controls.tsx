"use client";
// Search, pills, group filter, Discord-safe toggle, random and recently copied.
// The cards themselves are static server HTML; this component only toggles
// `hidden` on them, so hundreds of cards stay cheap on low-end phones.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dices, Search, X } from "lucide-react";
import { normalize } from "@/lib/search";
import { fmt } from "@/lib/i18n/format";
import { clearRecent, setDiscordSafe } from "@/lib/client-store";
import { useStore } from "./use-store";

export interface LibraryStrings {
  searchLabel: string;
  searchPlaceholder: string;
  all: string;
  mainGroupsLabel: string;
  categoriesLabel: string;
  noResults: string;
  noResultsHint: string;
  clearSearch: string;
  resultCount: string;
  discordSafe: string;
  discordSafeHint: string;
  random: string;
  randomHint: string;
  recent: string;
  recentClear: string;
  recentSessionOnly: string;
  showAll: string;
  showLess: string;
  groupFilterLabel: string;
  allGroups: string;
  copyAria: string;
}

interface PillCategory {
  id: string;
  name: string;
  mainGroup: string;
  href: string;
}

interface Props {
  containerId: string;
  mode: "home" | "category";
  strings: LibraryStrings;
  mainGroups?: { id: string; label: string }[];
  categories?: PillCategory[];
  groups?: { id: string; title: string }[];
}

interface Entry {
  li: HTMLElement;
  s: string;
  group: HTMLElement | null;
  section: HTMLElement | null;
}

export function LibraryControls({ containerId, mode, strings, mainGroups = [], categories = [], groups = [] }: Props) {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [main, setMain] = useState("all");
  const [cat, setCat] = useState<string | null>(null);
  const [group, setGroup] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const entries = useRef<Entry[]>([]);
  const discordSafe = useStore((s) => s.discordSafe);
  const recent = useStore((s) => s.recent);
  const consent = useStore((s) => s.consent);
  const ready = useStore((s) => s.ready);

  // Index the server-rendered cards once.
  useEffect(() => {
    const root = document.getElementById(containerId);
    if (!root) return;
    entries.current = Array.from(root.querySelectorAll<HTMLElement>("li[data-s]")).map((li) => ({
      li,
      s: li.dataset.s ?? "",
      group: li.closest<HTMLElement>("[data-group]"),
      section: li.closest<HTMLElement>("[data-cat]"),
    }));
    // "Show all / Show fewer" buttons on homepage previews.
    function onToggle(e: MouseEvent) {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-toggle]");
      if (!btn) return;
      const section = btn.closest<HTMLElement>("[data-cat]");
      if (!section) return;
      const collapsed = section.dataset.collapsed === "true";
      section.dataset.collapsed = collapsed ? "false" : "true";
      btn.setAttribute("aria-expanded", String(collapsed));
      btn.textContent = collapsed ? strings.showLess : fmt(strings.showAll, { n: btn.dataset.n ?? "" });
    }
    root.addEventListener("click", onToggle);
    // Allow deep links like /#g-animals to preselect a main group.
    const hash = window.location.hash;
    if (hash.startsWith("#g-")) {
      const g = mainGroups.find((m) => m.id.toLowerCase() === hash.slice(3));
      if (g) setMain(g.id);
    }
    return () => root.removeEventListener("click", onToggle);
  }, [containerId, strings.showAll, strings.showLess, mainGroups]);

  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(query), 120);
    return () => window.clearTimeout(t);
  }, [query]);

  // Apply filters to the DOM.
  useEffect(() => {
    const root = document.getElementById(containerId);
    if (!root || entries.current.length === 0) return;
    const tokens = normalize(debounced).split(" ").filter(Boolean);
    const searching = tokens.length > 0;
    root.dataset.filtering = searching || cat || group ? "true" : "false";
    const sectionVisible = new Map<HTMLElement, number>();
    const groupVisible = new Map<HTMLElement, number>();
    let count = 0;
    for (const e of entries.current) {
      let show = true;
      if (!searching && e.section) {
        if (main !== "all" && e.section.dataset.main !== main) show = false;
        if (cat && e.section.dataset.cat !== cat) show = false;
      }
      if (show && group && e.group && e.group.dataset.group !== group) show = false;
      if (show && searching) show = tokens.every((t) => e.s.includes(t));
      e.li.hidden = !show;
      if (show) {
        count++;
        if (e.section) sectionVisible.set(e.section, (sectionVisible.get(e.section) ?? 0) + 1);
        if (e.group) groupVisible.set(e.group, (groupVisible.get(e.group) ?? 0) + 1);
      }
    }
    root.querySelectorAll<HTMLElement>("[data-cat]").forEach((s) => (s.hidden = !sectionVisible.get(s)));
    root.querySelectorAll<HTMLElement>("[data-group]").forEach((g) => (g.hidden = !groupVisible.get(g)));
    setVisibleCount(searching ? count : null);
  }, [debounced, main, cat, group, containerId]);

  const pickRandom = useCallback(() => {
    const visible = entries.current.filter((e) => !e.li.hidden && !(e.li.offsetParent === null));
    const pool = visible.length ? visible : entries.current;
    const choice = pool[Math.floor(Math.random() * pool.length)];
    const btn = choice?.li.querySelector<HTMLButtonElement>("button[data-copy]");
    if (!btn) return;
    btn.click();
    btn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    btn.focus({ preventScroll: true });
  }, []);

  const visibleCats = useMemo(() => (main === "all" ? categories : categories.filter((c) => c.mainGroup === main)), [categories, main]);

  return (
    <div className="space-y-4">
      <div className="relative mx-auto max-w-2xl">
        <label htmlFor={`${containerId}-search`} className="sr-only">
          {strings.searchLabel}
        </label>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id={`${containerId}-search`}
          type="search"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value) {
              setMain("all");
              setCat(null);
              setGroup(null);
            }
          }}
          placeholder={strings.searchPlaceholder}
          className="w-full rounded-full border border-line bg-card py-3.5 pl-12 pr-12 text-base text-ink shadow-sm placeholder:text-muted focus:border-[var(--card-hover)] focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted hover:text-ink"
            aria-label={strings.clearSearch}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {mode === "home" && (
        <nav aria-label={strings.mainGroupsLabel} className="space-y-2">
          <div className="kz-pillrow">
            {[{ id: "all", label: strings.all }, ...mainGroups].map((g) => (
              <button
                key={g.id}
                type="button"
                className="kz-pill kz-main"
                aria-pressed={main === g.id && !query}
                onClick={() => {
                  setQuery("");
                  setMain(g.id);
                  setCat(null);
                }}
              >
                {g.label}
              </button>
            ))}
          </div>
          <div className="kz-pillrow" aria-label={strings.categoriesLabel} role="group">
            {visibleCats.map((c) => (
              <a
                key={c.id}
                href={c.href}
                className="kz-pill kz-sub"
                data-active={cat === c.id ? "true" : undefined}
                aria-current={cat === c.id ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  setQuery("");
                  if (cat === c.id) {
                    setCat(null);
                  } else {
                    setCat(c.id);
                    setMain(c.mainGroup);
                  }
                  document.getElementById(containerId)?.scrollIntoView({ block: "start", behavior: "smooth" });
                }}
              >
                {c.name}
              </a>
            ))}
          </div>
        </nav>
      )}

      {mode === "category" && groups.length > 1 && (
        <div className="kz-pillrow" role="group" aria-label={strings.groupFilterLabel}>
          {[{ id: "", title: strings.allGroups }, ...groups].map((g) => (
            <button
              key={g.id || "all"}
              type="button"
              className="kz-pill kz-sub"
              aria-pressed={(group ?? "") === g.id}
              onClick={() => setGroup(g.id || null)}
            >
              {g.title}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <label className="inline-flex cursor-pointer items-center gap-2" title={strings.discordSafeHint}>
          <input
            type="checkbox"
            role="switch"
            checked={discordSafe}
            onChange={(e) => setDiscordSafe(e.target.checked)}
            className="h-4 w-4 accent-[var(--accent)]"
            aria-describedby={`${containerId}-discord-hint`}
          />
          <span>{strings.discordSafe}</span>
        </label>
        <span id={`${containerId}-discord-hint`} className="sr-only">
          {strings.discordSafeHint}
        </span>
        <button type="button" onClick={pickRandom} className="kz-btn-ghost !px-3 !py-1.5 text-sm" title={strings.randomHint}>
          <Dices className="h-4 w-4" aria-hidden="true" />
          {strings.random}
        </button>
      </div>

      {ready && recent.length > 0 && (
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 text-sm">
          <span className="font-medium text-muted">{strings.recent}:</span>
          {recent.map((k) => (
            <button key={k} type="button" className="kz-chip text-sm" data-copy={k} aria-label={fmt(strings.copyAria, { label: k })}>
              <span aria-hidden="true">{k}</span>
            </button>
          ))}
          <button type="button" onClick={clearRecent} className="text-xs text-muted underline">
            {strings.recentClear}
          </button>
          {!consent?.preferences && <p className="w-full text-center text-xs text-muted">{strings.recentSessionOnly}</p>}
        </div>
      )}

      <div aria-live="polite" className="text-center text-sm text-muted">
        {visibleCount !== null &&
          (visibleCount > 0 ? (
            fmt(strings.resultCount, { n: visibleCount })
          ) : (
            <div className="rounded-xl border border-line bg-card p-6">
              <p className="font-medium text-ink">{fmt(strings.noResults, { query: debounced })}</p>
              <p className="mt-1">{strings.noResultsHint}</p>
              <button type="button" className="kz-btn-ghost mt-3" onClick={() => setQuery("")}>
                {strings.clearSearch}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
