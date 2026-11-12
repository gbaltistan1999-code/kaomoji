/** Replace {placeholders} in a template string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, key: string) => (key in values ? String(values[key]) : m));
}

export function formatDate(iso: string, hreflang: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(hreflang, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(d);
}
