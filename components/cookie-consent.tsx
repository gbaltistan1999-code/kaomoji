"use client";
// Cookie / storage consent banner and settings dialog.
// Necessary: remembers the choice itself. Preferences: recently copied +
// Discord-safe setting. No analytics or marketing services exist on this site,
// so those categories are shown as "not used" rather than as fake toggles.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { initStore, openSettings, saveConsent } from "@/lib/client-store";
import { useStore } from "./use-store";
import type { UiDict } from "@/types/i18n";

interface Props {
  strings: UiDict["cookie"];
  privacyHref: string;
}

export function CookieConsent({ strings, privacyHref }: Props) {
  const ready = useStore((s) => s.ready);
  const consent = useStore((s) => s.consent);
  const settingsOpen = useStore((s) => s.settingsOpen);
  const [prefs, setPrefs] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    initStore();
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (settingsOpen) {
      setPrefs(consent?.preferences ?? false);
      if (!d.open) d.showModal();
    } else if (d.open) {
      d.close();
    }
  }, [settingsOpen, consent]);

  const showBanner = ready && !consent && !settingsOpen;

  return (
    <>
      {showBanner && (
        <section
          aria-labelledby="kz-cookie-title"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm">
              <h2 id="kz-cookie-title" className="font-semibold">
                {strings.bannerTitle}
              </h2>
              <p className="mt-1 text-muted">
                {strings.bannerText}{" "}
                <Link href={privacyHref} className="underline">
                  {strings.privacyLink}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-nowrap">
              <button type="button" className="kz-btn-ghost !py-2 text-sm" onClick={() => openSettings(true)}>
                {strings.settings}
              </button>
              <button type="button" className="kz-btn-ghost !py-2 text-sm" onClick={() => saveConsent(false)}>
                {strings.rejectOptional}
              </button>
              <button type="button" className="kz-btn !py-2 text-sm" onClick={() => saveConsent(true)}>
                {strings.acceptAll}
              </button>
            </div>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="kz-cookie-settings-title"
        onClose={() => openSettings(false)}
        className="m-auto w-[min(32rem,calc(100vw-2rem))] rounded-2xl border border-line bg-card p-0 text-ink backdrop:bg-black/40"
      >
        <form
          method="dialog"
          className="p-6"
          onSubmit={(e) => {
            e.preventDefault();
            saveConsent(prefs);
          }}
        >
          <h2 id="kz-cookie-settings-title" className="text-lg font-bold">
            {strings.settingsTitle}
          </h2>
          <p className="mt-1 text-sm text-muted">{strings.settingsIntro}</p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl border border-line p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold">{strings.necessary}</span>
                <span className="text-xs font-medium text-muted">{strings.alwaysOn}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{strings.necessaryDesc}</p>
            </li>
            <li className="rounded-xl border border-line p-3">
              <label className="flex cursor-pointer items-center justify-between gap-3">
                <span className="font-semibold">{strings.preferences}</span>
                <input
                  type="checkbox"
                  role="switch"
                  checked={prefs}
                  onChange={(e) => setPrefs(e.target.checked)}
                  className="h-5 w-5 accent-[var(--accent)]"
                  aria-describedby="kz-pref-desc"
                />
              </label>
              <p id="kz-pref-desc" className="mt-1 text-sm text-muted">
                {strings.preferencesDesc}
              </p>
            </li>
            {[
              [strings.analytics, strings.analyticsDesc],
              [strings.marketing, strings.marketingDesc],
            ].map(([name, desc]) => (
              <li key={name} className="rounded-xl border border-line p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{name}</span>
                  <span className="text-xs font-medium text-muted">{strings.notUsed}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap justify-end gap-2">
            <button type="button" className="kz-btn-ghost !py-2 text-sm" onClick={() => openSettings(false)}>
              {strings.close}
            </button>
            <button type="submit" className="kz-btn !py-2 text-sm">
              {strings.save}
            </button>
          </div>
          <p className="mt-3 text-right text-xs">
            <Link href={privacyHref} className="underline" onClick={() => openSettings(false)}>
              {strings.privacyLink}
            </Link>
          </p>
        </form>
      </dialog>
    </>
  );
}

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => openSettings(true)} className="text-sm text-muted underline-offset-2 hover:text-accent-text hover:underline">
      {label}
    </button>
  );
}
