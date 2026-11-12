"use client";
// One delegated click listener for the whole page. Any element with
// data-copy="..." copies that text (never its label). Elements with
// data-copy-raw copy exactly as given; everything else respects the
// Discord-safe setting. This avoids a client component per card.
import { useEffect, useRef, useState } from "react";
import { copyText } from "@/lib/clipboard";
import { escapeDiscord } from "@/lib/discord";
import { addRecent, getState, initStore } from "@/lib/client-store";

interface Props {
  copiedText: string;
  failedText: string;
}

export function CopyHandler({ copiedText, failedText }: Props) {
  const [toast, setToast] = useState<{ text: string; ok: boolean; n: number } | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    initStore();
    async function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-copy]");
      if (!target) return;
      e.preventDefault();
      const original = target.dataset.copy ?? "";
      const raw = target.hasAttribute("data-copy-raw");
      const text = !raw && getState().discordSafe ? escapeDiscord(original) : original;
      const ok = await copyText(text);
      if (ok) addRecent(original);
      window.clearTimeout(timer.current);
      setToast((prev) => ({ text: ok ? original : failedText, ok, n: (prev?.n ?? 0) + 1 }));
      timer.current = window.setTimeout(() => setToast(null), 1800);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [failedText]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div role="status" aria-live="polite" aria-atomic="true">
        {toast && (
          <div
            key={toast.n}
            className={`pointer-events-auto max-w-[90vw] rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${
              toast.ok ? "border-tint-line bg-tint text-tint-text" : "border-line bg-card text-ink"
            }`}
          >
            {toast.ok ? (
              <>
                {copiedText} <span className="font-kao">{toast.text}</span>
              </>
            ) : (
              toast.text
            )}
          </div>
        )}
      </div>
    </div>
  );
}
