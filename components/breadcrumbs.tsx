import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items, label = "Breadcrumb" }: { items: { name: string; href?: string }[]; label?: string }) {
  return (
    <nav aria-label={label} className="mb-4 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            {it.href ? (
              <Link href={it.href} className="text-muted hover:text-accent-text">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
