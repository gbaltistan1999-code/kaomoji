import type { ContentSection, Faq } from "@/types/i18n";
import type { Locale } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/format";
import { RichText } from "./rich-text";
import { KaomojiChip } from "./kaomoji-grid";

interface Strings {
  examplesLabel: string;
  copyAria: string;
}

export function ContentSections({ sections, locale, strings }: { sections: ContentSection[]; locale: Locale; strings: Strings }) {
  return (
    <div className="kz-prose">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs?.slice(0, s.list ? 1 : undefined).map((p, i) => (
            <p key={i}>
              <RichText text={p} locale={locale} />
            </p>
          ))}
          {s.list && (
            <ul>
              {s.list.map((li, i) => (
                <li key={i}>
                  <RichText text={li} locale={locale} />
                </li>
              ))}
            </ul>
          )}
          {s.list &&
            s.paragraphs?.slice(1).map((p, i) => (
              <p key={`a${i}`}>
                <RichText text={p} locale={locale} />
              </p>
            ))}
          {s.examples && s.examples.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2" aria-label={strings.examplesLabel} role="group">
              <span className="text-sm text-muted">{strings.examplesLabel}:</span>
              {s.examples.map((k) => (
                <KaomojiChip key={k} kaomoji={k} aria={fmt(strings.copyAria, { label: k })} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export function FaqList({ faqs, title, locale, headingLevel = 2 }: { faqs: Faq[]; title?: string; locale: Locale; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <section className="mt-10">
      {title && <H className="mb-4 text-xl font-bold">{title}</H>}
      <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group p-4">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">
              <span className="flex items-start justify-between gap-3">
                {f.q}
                <span className="text-accent-text transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 leading-7 text-muted">
              <RichText text={f.a} locale={locale} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
