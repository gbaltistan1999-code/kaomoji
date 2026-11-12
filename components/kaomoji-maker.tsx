"use client";
import { useMemo, useState } from "react";
import { Copy, RotateCcw, Shuffle } from "lucide-react";
import { buildKaomoji, DEFAULT_SELECTION, MAKER_PART_IDS, makerOptions, randomSelection, type MakerSelection } from "@/lib/maker";
import { escapeDiscord } from "@/lib/discord";
import type { UiDict } from "@/types/i18n";

export function KaomojiMaker({ strings }: { strings: UiDict["maker"] }) {
  const [sel, setSel] = useState<MakerSelection>(DEFAULT_SELECTION);
  const result = useMemo(() => buildKaomoji(sel), [sel]);

  return (
    <div className="rounded-2xl border border-line bg-card p-4 sm:p-6">
      <p className="text-center text-sm font-medium text-muted" id="maker-preview-label">
        {strings.previewLabel}
      </p>
      <output
        aria-labelledby="maker-preview-label"
        aria-live="polite"
        className="font-kao mt-2 block min-h-16 break-words rounded-xl border border-line bg-bg px-4 py-5 text-center text-3xl leading-tight sm:text-4xl"
      >
        {result || " "}
      </output>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <button type="button" className="kz-btn" data-copy={result} data-copy-raw="">
          <Copy className="h-4 w-4" aria-hidden="true" />
          {strings.copy}
        </button>
        <button type="button" className="kz-btn-ghost" data-copy={escapeDiscord(result)} data-copy-raw="">
          {strings.copyDiscord}
        </button>
        <button type="button" className="kz-btn-ghost" onClick={() => setSel(randomSelection())}>
          <Shuffle className="h-4 w-4" aria-hidden="true" />
          {strings.randomize}
        </button>
        <button type="button" className="kz-btn-ghost" onClick={() => setSel(DEFAULT_SELECTION)}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          {strings.reset}
        </button>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 font-semibold">{strings.partsTitle}</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {MAKER_PART_IDS.map((id) => (
            <label key={id} className="flex flex-col gap-1 text-sm">
              <span className="text-muted">{strings.parts[id]}</span>
              <select
                value={sel[id]}
                onChange={(e) => setSel((s) => ({ ...s, [id]: e.target.value }))}
                className="font-kao rounded-lg border border-line bg-card px-2 py-2 text-base text-ink"
              >
                {makerOptions[id].map((opt) => (
                  <option key={opt || "none"} value={opt}>
                    {opt || strings.none}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
