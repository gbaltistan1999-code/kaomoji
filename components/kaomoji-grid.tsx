// Server component: renders kaomoji cards as static HTML.
// Copying is handled by the single delegated <CopyHandler/>.
import type { CardView } from "@/lib/kaomoji-view";

interface Props {
  cards: CardView[];
  /** Cards after this index get the collapsible "kz-extra" class (homepage previews). */
  previewCount?: number;
}

export function KaomojiGrid({ cards, previewCount }: Props) {
  return (
    <ul className="kz-grid" role="list">
      {cards.map((c, i) => (
        <li key={c.id} data-s={c.search} className={previewCount !== undefined && i >= previewCount ? "kz-extra" : undefined}>
          <button type="button" className="kz-card" data-copy={c.kaomoji} aria-label={c.aria}>
            <span className="kz-k" aria-hidden="true">
              {c.kaomoji}
            </span>
            <span className="kz-l" aria-hidden="true">
              {c.label}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Small inline copyable kaomoji (used in content examples, recent bar, 404). */
export function KaomojiChip({ kaomoji, aria }: { kaomoji: string; aria: string }) {
  return (
    <button type="button" className="kz-chip" data-copy={kaomoji} aria-label={aria}>
      <span aria-hidden="true">{kaomoji}</span>
    </button>
  );
}
