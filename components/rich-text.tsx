// Renders content strings with simple inline links:
//   [text](page:<pageKey>)  -> localized internal link
//   [text](https://...)     -> external link
import Link from "next/link";
import { Fragment } from "react";
import type { Locale } from "@/lib/i18n/config";
import { PAGE_KEYS, pathFor, type PageKey } from "@/lib/i18n/routes";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function RichText({ text, locale }: { text: string; locale: Locale }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, target] = m;
    if (target.startsWith("page:")) {
      const key = target.slice(5) as PageKey;
      if (!PAGE_KEYS.includes(key)) throw new Error(`Unknown page key in content link: ${key}`);
      parts.push(
        <Link key={m.index} href={pathFor(key, locale)}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={m.index} href={target} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => (typeof p === "string" ? <Fragment key={`t${i}`}>{p}</Fragment> : p))}</>;
}
