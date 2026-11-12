// Server component: a row of copyable single symbols (hearts, stars).
// Copying is handled by the global <CopyHandler/> via data-copy.
import { fmt } from "@/lib/i18n/format";

export function SymbolStrip({ title, text, symbols, copyAria }: { title: string; text: string; symbols: string[]; copyAria: string }) {
  return (
    <section aria-labelledby="symbol-strip-title" className="mx-auto mb-6 max-w-4xl rounded-2xl border border-line bg-card p-4 sm:p-5">
      <h2 id="symbol-strip-title" className="text-lg font-bold">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted">{text}</p>
      <ul className="mt-3 flex flex-wrap gap-2" role="list">
        {symbols.map((s) => (
          <li key={s}>
            <button
              type="button"
              data-copy={s}
              aria-label={fmt(copyAria, { symbol: s })}
              className="kz-chip min-w-11 justify-center !px-3 !py-1.5 text-xl"
            >
              <span aria-hidden="true">{s}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
