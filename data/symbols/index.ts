// Single text symbols for the Heart Symbols and Star Symbols pages (and the
// short strips on the heart/star kaomoji pages). Text-presentation characters
// only: no emoji pictures, no variation selectors. Every string is unique
// within its page (checked in tests/symbols.test.ts).
//
// To add a symbol: append it to a group. To add a group: add it here AND add
// its translated title to `symbolPages.<page>.groupTitles` in every locale.

export type SymbolPageId = "heartSymbols" | "starSymbols";

export interface SymbolGroup {
  id: string;
  items: string[];
}

export const symbolGroups: Record<SymbolPageId, SymbolGroup[]> = {
  heartSymbols: [
    {
      id: "basic",
      items: ["♡", "♥", "❤", "❥", "❣", "❦", "❧", "☙", "ღ", "დ", "ෆ", "♡♡", "♥♥"],
    },
    {
      id: "decorated",
      items: [
        "ʚ♡ɞ", "ʚ♥ɞ", "₊˚⊹♡", "♡₊˚", "⋆˚♡", "♡⋆˚", "˚₊‧♡‧₊˚", "‧₊˚♡˚₊‧", "⊹♡⊹", "✧♡✧",
        "☆♡☆", "♡⃛", "♡⃝", "·♡·", "°♡°", "꒰♡꒱", "⟡♡⟡", "❀♡❀", "✿♡✿", "♡ゞ",
        "♡ˎˊ˗", "⋆｡°♡", "♡°｡⋆", "ꕤ♡ꕤ", "꒰ა♡໒꒱", "⊹₊ ˚‧♡‧˚ ₊⊹", "♡꒱", "꒰♡", "*♡*", "~♡~",
      ],
    },
    {
      id: "arrows",
      items: ["➳♡", "♡➳", "➵♡", "♡〜", "〜♡", "♡⇢", "⇠♡", "♡ ⇄ ♡", "ღ⁀➷", "➶♡", "♡→", "←♡", "❥ ⇢", "♡ ↔ ♡"],
    },
    {
      id: "borders",
      items: [
        "♡ ♡ ♡", "♥ ♥ ♥", "❤ ❤ ❤", "♡♥♡♥♡", "♡ ⋆ ♡ ⋆ ♡", "ღღღ", "❥❥❥", "♡ ・ ♡ ・ ♡",
        "♡━━━━━━♡", "─── ⋆⋅♡⋅⋆ ───", "┈┈┈┈ ♡ ┈┈┈┈", "──♡──", "˗ˋˏ ♡ ˎˊ˗", "꒷꒦︶꒷꒦♡︶꒷꒦",
        "⊱ ───── {.⋅ ♡ ⋅.} ───── ⊰", "✧･ﾟ: *✧･ﾟ♡", "·.¸¸.·♡·.¸¸.·", "♡ ˖ ♡ ˖ ♡", "₊˚ʚ ♡ ɞ˚₊", "♡°。°♡°。°♡",
      ],
    },
  ],
  starSymbols: [
    {
      id: "basic",
      items: [
        "☆", "★", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⋆", "⍟", "⭑", "⭒", "✦", "✧",
        "✶", "✷", "✸", "✹", "✺", "⁂", "⁎", "✱", "✲", "✳", "✴", "✵", "❂", "⟡",
      ],
    },
    {
      id: "sparkles",
      items: ["✻", "✼", "✽", "❉", "❊", "❋", "❈", "❇", "✢", "✣", "✤", "✥", "❃", "⁕", "҉", "˚", "°", "⁺", "₊", "·"],
    },
    {
      id: "decorated",
      items: [
        "☆彡", "★彡", "✧˖°", "⋆｡°✩", "✩°｡⋆", "⋆⭒˚｡⋆", "⋆˙⟡", "✦˚", "˚✧", "✧･ﾟ",
        "☆ﾟ.*･｡ﾟ", "✧*｡", "*ੈ✩‧₊˚", "˚｡⋆", "✮⋆˙", "⋆★⋆", "☆⌒", "˚₊‧꒰ა ☆ ໒꒱ ‧₊˚", "⋆｡‧˚ʚ☆ɞ˚‧｡⋆", "₊˚⊹☆",
        "✧₊⁺", "⁺₊✦", "☆~", "⋆✴˚", "✰⋆", "✦ ⋆ ✦",
      ],
    },
    {
      id: "borders",
      items: [
        "☆ ☆ ☆", "★ ★ ★", "✧ ✧ ✧", "☆★☆★☆", "⋆ ⋆ ⋆", "✦ ✦ ✦", "───★───", "✧･ﾟ: *✧･ﾟ:*",
        "⋆⁺₊⋆ ☾ ⋆⁺₊⋆", "·:*¨༺ ☆ ༻¨*:·", "━━━━━☆━━━━━", "─── ⋆⋅☆⋅⋆ ───", "✩₊˚.⋆☾⋆⁺₊✧", "┈┈┈ ✦ ┈┈┈",
        ".・゜゜・☆・゜゜・．", "⊹ ⋆ ⊹ ⋆ ⊹", "☆.。.:*・°☆", "*:･ﾟ✧*:･ﾟ✧",
      ],
    },
  ],
};

/** Short previews used on the heart/star kaomoji pages. */
export const heartSymbols = symbolGroups.heartSymbols[0].items.slice(0, 12);
export const starSymbols = symbolGroups.starSymbols[0].items.slice(0, 16);

export function symbolCount(page: SymbolPageId): number {
  return symbolGroups[page].reduce((n, g) => n + g.items.length, 0);
}
