// Search helpers shared by the server (to build each card's search text)
// and the client (to match the user's query). Pure functions, unit tested.

/** Lowercase, strip accents/diacritics (so "meo" finds "mèo", "corazon" finds "corazón"). */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/\s+/g, " ")
    .trim();
}

/** Build the normalized searchable text for one item from several parts. */
export function buildHaystack(parts: Array<string | string[] | undefined>): string {
  return normalize(
    parts
      .flat()
      .filter((p): p is string => Boolean(p))
      .join(" ")
  );
}

/** True when every word of the query appears somewhere in the haystack. Empty query matches all. */
export function matchesQuery(haystack: string, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  return q.split(" ").every((token) => haystack.includes(token));
}

/** Filter a list using a function that returns the searchable text for each item. */
export function searchItems<T>(items: T[], query: string, getText: (item: T) => string): T[] {
  if (!normalize(query)) return items;
  return items.filter((item) => matchesQuery(getText(item), query));
}
