# KaomojiZone

A multilingual, SEO-focused kaomoji copy-and-paste website: 828 kaomoji in 18 categories, instant search, one-click copy, Discord-safe copy, a Kaomoji Maker, and full legal/trust pages.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4**. No database, no backend, no API keys, no `.env` files.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (static generation of all 105 pages) |
| `npm start` | Serve the production build |
| `npm test` | Unit tests (Vitest) |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run generate:kaomoji` | Regenerate `data/kaomoji/*.ts` from `docs/appendix-a.md` |

Requires Node.js 18.18+ (developed on Node 24).

## Deployment

Any host that runs Next.js with middleware works: **Vercel** (zero config: import the repo and deploy), Netlify, Cloudflare (via OpenNext), or a Node server (`npm run build && npm start`).

The site needs **middleware** (it serves English without a URL prefix), so a pure static export (`output: "export"`) is not supported.

---

## Launch checklist (must do before going live)

1. **Domain**: set `url` in [`lib/site-config.ts`](lib/site-config.ts) (currently the placeholder `https://example.com`). Canonicals, hreflang, sitemap and robots all read from it.
2. **Contact email**: set `contactEmail` in the same file. While it's empty, the contact page says so and shows no form.
3. **Hosting details**: the Privacy Policy has a bracketed `[Owner: …]` note in every language asking for your hosting provider and log retention. Fill it in.
4. **Legal review**: have the Privacy Policy, Terms and Disclaimer reviewed for your jurisdiction (search for `[Owner:` / `[Propietario:` / `[Proprietário:` / `[Pemilik:` / `[Chủ sở hữu:`).
5. **Native-speaker review**: every non-English locale is a **draft** (see below). Don't launch a locale without review, or set `enabled: false` for it in [`lib/i18n/config.ts`](lib/i18n/config.ts).
6. **Keyword verification**: confirm the localized slugs in [`lib/i18n/routes.ts`](lib/i18n/routes.ts) and the seed keywords with a keyword tool for each country. Do this before launch, because changing slugs later means redirects.
7. Update `legalUpdated` in `site-config.ts` whenever the legal pages change.
8. After deploying: submit `https://YOURDOMAIN/sitemap.xml` in Google Search Console, run Lighthouse / PageSpeed Insights, and validate structured data with Google's Rich Results Test.

### Translations needing native review

| Locale | Files | Status |
|---|---|---|
| `es` (Latin American Spanish) | `data/i18n/es/*` | Draft, needs native-speaker review |
| `id` (Indonesian) | `data/i18n/id/*` | Draft, needs native-speaker review |
| `pt` (Brazilian Portuguese) | `data/i18n/pt/*` | Draft, needs native-speaker review |
| `vi` (Vietnamese) | `data/i18n/vi/*` | Draft, needs native-speaker review |

---

## Project structure

```
app/
  [locale]/layout.tsx      Root layout per locale (<html lang>, copy handler, cookie banner)
  [locale]/page.tsx        Homepage (full library + content)
  [locale]/[slug]/page.tsx All other pages, resolved through the route map
  global-not-found.tsx     Localized 404 (HTTP 404)
  sitemap.ts, robots.ts    Generated from the route map + site config
components/                Header, footer, grid, library controls, maker, cookie consent, …
  pages/                   Category, maker, static, FAQ and contact page templates
data/
  kaomoji/                 AUTO-GENERATED kaomoji data (one file per category)
  maker/parts.ts           Kaomoji Maker part lists
  i18n/<locale>/           ui, groups, labels, home, categories, pages per language
docs/appendix-a.md         Source of truth for the kaomoji library
lib/
  i18n/config.ts           Locales + enabled flags
  i18n/routes.ts           Typed route map (one ASCII slug per page per locale)
  search.ts                Accent-insensitive search (shared by server + client)
  discord.ts               Discord markdown escaping
  maker.ts                 Maker logic
  clipboard.ts             Clipboard API + legacy fallback
  client-store.ts          Consent-aware browser storage
  seo.ts                   Metadata + JSON-LD builders
  site-config.ts           Name, domain, email
middleware.ts              Unprefixed English URLs, /en/* → 301; no language detection
tests/                     Vitest unit tests
```

### How it works (performance)

- Every kaomoji is rendered as **static server HTML** on every page, so search engines see the full list.
- There is **no client component per card**. One delegated click listener (`components/copy-handler.tsx`) copies any element with `data-copy`.
- Search and filters toggle `hidden` on existing cards. Each card carries a pre-normalized `data-s` search string, so no kaomoji data is shipped as JavaScript. Homepage first-load JS is about 113 kB (mostly the shared React/Next runtime).
- No web fonts: a system font stack with CJK and symbol fallbacks gives broad glyph coverage, with zero layout shift from font loading.

### Privacy & consent

- Searching, copying and the maker never leave the browser. There's no analytics, ads or tracking.
- `kz-consent` (necessary) stores the cookie choice. `kz-recent` and `kz-discord-safe` are written **only** if the visitor allows "Preferences". Withdrawing deletes them. Without consent these features still work for the current page session.

---

## Content updates

### Add new kaomoji

1. Open `docs/appendix-a.md` and **append** lines at the end of the right group's code block: `kaomoji ⇒ Unique label`. Never reorder or delete existing lines, because ids (`cat-001`, …) come from position and must stay stable.
2. Run `npm run generate:kaomoji`.
3. Update the count in the category heading line (e.g. `59 kaomoji`) so the generator's check passes.
4. Add a translated label at the matching position in each `data/i18n/<locale>/labels.ts`. Lists are in appendix order, and the app throws on a length mismatch.
5. Run `npm test`. It checks for duplicates, unique labels, translations and counts.

### Add a new dedicated category page (e.g. "hug")

1. In `types/kaomoji.ts`, add the id to `PageCategoryId`.
2. In `docs/appendix-a.md`, change its heading from `homepage section only` to `dedicated page: /hug-kaomoji` and regenerate. It needs at least 50 kaomoji.
3. In `lib/i18n/routes.ts`, add a route entry with a slug for every locale and add it to `CATEGORY_PAGE_KEYS`.
4. In `components/pages/category-page.tsx`, add `RELATED` links.
5. Write unique page content in every locale's `categories.ts`. TypeScript will tell you which locales are missing it.
6. Run `npm test && npm run build`.

### Enable or disable a language

Locales live in [`lib/i18n/config.ts`](lib/i18n/config.ts). Flip `enabled`. Disabled locales are not built, linked, or listed in the sitemap or hreflang. No component changes are needed.

### Add a brand-new language

1. Add the code to `ALL_LOCALES` and `LOCALES` in `lib/i18n/config.ts`.
2. Add a slug for it to every entry in `lib/i18n/routes.ts`.
3. Copy `data/i18n/es/` to `data/i18n/<code>/`, translate every file, and export the bundle in `data/i18n/index.ts`.
4. Add its labels file to `tests/labels.test.ts`, then run `npm test`. The tests fail on missing keys, empty strings or copied English text.

---

## Testing status

Results from the last local run:

- `npm test`: **6 files, 59 tests passed**. They cover data integrity (all 828 kaomoji match Appendix A character for character, no duplicates, stable ids, unique labels, at least 50 per page), search (tags, labels, accent-insensitive, localized words like `gato` / `kucing` / `mèo` / `meo`), Discord escaping (shrug, bunny, round-trip for every kaomoji), maker logic, translation completeness, slug format and hreflang reciprocity.
- `npm run typecheck` and `npm run lint`: clean.
- `npm run build`: 105 static pages (21 pages × 5 locales).
- Manual smoke test against the production server: correct `lang` per locale, self-canonicals, reciprocal hreflang + `x-default`, sitemap with 100 URLs and `xhtml:link` alternates, JSON-LD parses on every page type, localized 404s return HTTP 404, `/en/*` returns 301, no language-based redirects.
- Visual check (headless Chrome): desktop, 375px mobile, and dark mode.

**Not yet done** (requires a deployed URL or a real device): Lighthouse / Core Web Vitals scores, Rich Results validation, and copy testing on real iOS/Android browsers.
