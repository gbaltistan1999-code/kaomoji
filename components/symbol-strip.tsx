// Server component: a short row of copyable single symbols (hearts, stars)
// with a link to the full symbols page. Copying uses the global <CopyHandler/>.
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fmt } from "@/lib/i18n/format";

interface Props {
  title: string;
  text: string;
  symbols: string[];
  copyAria: string;
  href: string;
  linkText: string;
}

export function SymbolStrip({ title, text, symbols, copyAria, href, linkText }: Props) {
  return (
    <section aria-labelledby="symbol-strip-title" className="mx-auto mb-6 max-w-4xl rounded-2xl border border-line bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="symbol-strip-title" className="text-lg font-bold">
          {title}
        </h2>
        <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium">
          {linkText}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
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
