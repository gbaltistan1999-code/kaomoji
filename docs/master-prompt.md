# MASTER PROMPT: BUILD A COMPLETE SEO-OPTIMIZED KAOMOJI COPY AND PASTE WEBSITE WITH NEXT.JS AND TAILWIND CSS

## 1. Role and Objective

Act as a senior Next.js developer, technical SEO expert, UI/UX designer, and E-E-A-T-focused content strategist.

Build a complete, production-ready, responsive, minimalist, and professional website targeting the specified primary keyword.

The website must include a fully functional browser-based kaomoji library with search, filtering, and one-click copy, a kaomoji maker, high-quality supporting content, dedicated pages for individual kaomoji categories, mandatory legal pages, a cookie consent banner, and a complete technical SEO setup.

Do not create just a homepage mockup, a design prototype, or an implementation plan. Build the complete website with working features, real navigation, original content, and a maintainable codebase.

Prioritize:

- Search intent and organic SEO.
- Helpful, people-first content.
- Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).
- Excellent user experience, especially fast browsing, searching, and copying.
- Fast loading and strong Core Web Vitals.
- Accessibility and mobile responsiveness.
- Simple, maintainable code.
- Honest privacy and cookie practices.

## 2. Project Information — Change These Values for Each Website

- *Primary Keyword:* Kaomoji
- *Website Name:* [WEBSITE NAME — supplied by owner]
- *Website Domain:* [https://YOURDOMAIN — supplied by owner]
- *Website Niche:* Kaomoji (Japanese text emoticons) for copy and paste
- *Target Audience:* Social media users, gamers, Discord and chat users, students, content creators, and anyone who wants expressive text faces for messages, bios, usernames, captions, and comments
- *Target Countries and Languages:*
  - English (default, no prefix): United States, Philippines, India (also UK, Canada, Australia)
  - Spanish (/es/): Mexico, Chile, Argentina, and the rest of Latin America (one version, es-419 style, neutral Latin American Spanish)
  - Indonesian (/id/): Indonesia
  - Portuguese (/pt/): Brazil (Brazilian Portuguese)
  - Vietnamese (/vi/): Vietnam
- *Launch Locales:* [CHOOSE ONE — "en only" for phased rollout, or "en, es, id, pt, vi" for all at launch]. The architecture must support all five either way; only enabled locales are built, linked, and listed in sitemaps and hreflang.
- *Website Language:* English by default; see Section 3A for all languages
- *Local Seed Keywords (verify volume and SERPs per country in a keyword tool before assigning to pages; do not assume):*
  - Spanish: kaomojis, kaomojis para copiar, caritas japonesas, kaomojis tiernos, kaomojis tristes
  - Portuguese: kaomojis, kaomojis para copiar, carinhas japonesas, kaomojis fofos
  - Indonesian: kaomoji, kaomoji lucu, emoticon jepang, kaomoji sedih
  - Vietnamese: kaomoji, kaomoji dễ thương, biểu tượng cảm xúc Nhật Bản, kaomoji buồn
- *Secondary Keywords (homepage):* Kaomoji Copy and Paste, Japanese Emoticons, Text Faces, Kawaii Faces, Kaomoji List, Japanese Text Faces
- *Long-tail Keywords (dedicated pages):* Cute Kaomoji, Sad Kaomoji (+ Crying Kaomoji), Cat Kaomoji, Happy Kaomoji (+ Smile Kaomoji), Heart Kaomoji (+ Love Kaomoji), Star Kaomoji (+ Sparkle Kaomoji), Shrug Kaomoji, Bunny Kaomoji, Angry Kaomoji, Angel Kaomoji, Blush Kaomoji
- *Related Topics:* Emoticons, emoji vs kaomoji, Japanese internet culture, Unicode characters used in kaomoji (Japanese, Cyrillic, Kannada, Thai, combining marks, box-drawing and symbol blocks), font fallback, Discord markdown escaping, accessibility of text faces
- *Brand Style:* Minimalist, modern, clean, trustworthy, and cute/playful
- *Brand Colors:* Plain very light gray page background, white cards, dark charcoal text, and one dark accent color: deep berry (see Section 10 for exact values)
- *Contact Email:* Must be supplied by the website owner before launch

When reusing this prompt, change the primary keyword, website name, domain, niche, target audience, location, secondary keywords, and related topics as needed.

Use the supplied configuration consistently. Do not invent missing business details, email addresses, credentials, or legal information.

## 3. Technology Stack

Use:

- Next.js with the App Router.
- TypeScript.
- Tailwind CSS.
- React Server Components by default.
- Client Components only when interactive behavior requires them (search and filters, copy buttons, kaomoji maker, favorites, recently copied, cookie banner, mobile menu).
- Semantic HTML5.
- Lucide React for lightweight icons when needed.
- Next.js Metadata API for SEO.
- Native browser APIs (Clipboard API, localStorage) for local interactions.

Use compatible, stable package versions and current Next.js conventions.

### Strict technical restrictions

- Do not use .env files or environment variables.
- Do not require API keys, credentials, or secret tokens.
- Do not use a database.
- Do not require authentication or user accounts.
- Do not require a custom backend or external API for core functionality.
- Do not implement server actions or backend endpoints for contact forms.
- Do not add paid integrations or unnecessary third-party dependencies.
- Do not add analytics, advertising scripts, or tracking unless explicitly configured and actually needed.
- Do not make the library or maker dependent on an internet connection after the page has loaded.
- Do not make the entire website a client-rendered application unnecessarily.

Keep public configuration in lib/site-config.ts (website name, canonical domain, branding, navigation).

Use static generation wherever appropriate. All kaomoji must be present in the server-rendered HTML so search engines can see the full list on every page.

## 3A. Multilingual Architecture and International SEO

The site targets five languages on one domain using subfolders. Every backlink to any language version strengthens the whole domain.

### URL structure

- English is the default locale with no prefix: /, /cute-kaomoji, /kaomoji-maker.
- Other locales use a prefix: /es/, /id/, /pt/, /vi/.
- Slugs are translated per locale, stored in a typed route map in lib/i18n/routes.ts (one entry per page, one slug per locale). Never hardcode localized URLs in components; generate them from the route map.
- Implement with the App Router using a [locale] segment (or route groups) and generateStaticParams so every enabled locale and page is statically generated. Do not use a third-party i18n service or anything requiring environment variables. A small, well-typed in-house dictionary approach (or a lightweight library such as next-intl, if it needs no backend) is acceptable.

### Suggested localized slugs (confirm with keyword research before launch)

| Page | en | es | pt | id | vi |
|---|---|---|---|---|---|
| Home | / | /es | /pt | /id | /vi |
| Cute | /cute-kaomoji | /es/kaomojis-tiernos | /pt/kaomojis-fofos | /id/kaomoji-lucu | /vi/kaomoji-de-thuong |
| Sad | /sad-kaomoji | /es/kaomojis-tristes | /pt/kaomojis-tristes | /id/kaomoji-sedih | /vi/kaomoji-buon |
| Cat | /cat-kaomoji | /es/kaomojis-de-gatos | /pt/kaomojis-de-gato | /id/kaomoji-kucing | /vi/kaomoji-meo |
| Happy | /happy-kaomoji | /es/kaomojis-felices | /pt/kaomojis-felizes | /id/kaomoji-senang | /vi/kaomoji-vui-ve |
| Heart | /heart-kaomoji | /es/kaomojis-de-corazon | /pt/kaomojis-de-coracao | /id/kaomoji-hati | /vi/kaomoji-trai-tim |
| Star | /star-kaomoji | /es/kaomojis-de-estrellas | /pt/kaomojis-de-estrela | /id/kaomoji-bintang | /vi/kaomoji-ngoi-sao |
| Shrug | /shrug-kaomoji | /es/kaomoji-encogiendo-hombros | /pt/kaomoji-dar-de-ombros | /id/kaomoji-shrug | /vi/kaomoji-nhun-vai |
| Bunny | /bunny-kaomoji | /es/kaomojis-de-conejos | /pt/kaomojis-de-coelho | /id/kaomoji-kelinci | /vi/kaomoji-tho |
| Angry | /angry-kaomoji | /es/kaomojis-enojados | /pt/kaomojis-com-raiva | /id/kaomoji-marah | /vi/kaomoji-gian-du |
| Angel | /angel-kaomoji | /es/kaomojis-de-angel | /pt/kaomojis-de-anjo | /id/kaomoji-malaikat | /vi/kaomoji-thien-than |
| Blush | /blush-kaomoji | /es/kaomojis-sonrojados | /pt/kaomojis-corados | /id/kaomoji-malu | /vi/kaomoji-ngai-ngung |
| Maker | /kaomoji-maker | /es/creador-de-kaomojis | /pt/criador-de-kaomojis | /id/pembuat-kaomoji | /vi/tao-kaomoji |

Legal and trust pages (about, contact, privacy, terms, cookies, disclaimer, FAQ) also get translated slugs and translated content. Use ASCII-only slugs (no accents or Vietnamese diacritics in URLs).

### What is shared and what is translated

- Shared across all locales: the kaomoji strings, ids, categories, and maker parts (one source of truth in data/).
- Translated per locale: UI text, headings, page content, FAQs, metadata, breadcrumbs, cookie banner, legal pages, and every kaomoji's label, description, and search tags (stored in data/i18n/[locale]/), so search works in the user's language (e.g. "gato", "kucing", "mèo" all find cat kaomoji) and aria-labels are read in the page language.
- Each locale's homepage targets that language's primary keyword and local variations from the seed list, after verification.

### Content quality per language

- Write natural, native-quality content for each locale, adapted to local usage (e.g. popular apps differ: mention WhatsApp prominently for Latin America, Brazil, and Indonesia; Zalo for Vietnam; Messenger for the Philippines), described accurately.
- Do not publish raw machine translation. Generate drafts, then flag every non-English page in the README as requiring native-speaker review before launch.
- Never leave English text, untranslated placeholders, or mixed-language headings on localized pages.
- Each locale must have the same page set before it is enabled; do not ship half-translated locales.

### hreflang and canonicals

- Every page outputs hreflang alternates for all enabled locales via the Metadata API alternates.languages: en, es, pt-BR (or pt), id, vi, plus x-default pointing to the English version.
- Use es (or es-419) for the single Spanish version; do not create separate es-MX, es-CL, or es-AR pages.
- Each localized page is self-canonical. Never canonicalize translations to the English page.
- hreflang must be reciprocal and point only to indexable, enabled pages.

### Language detection and switching

- Never auto-redirect by IP address or Accept-Language. Search engine crawlers must be able to reach every locale directly.
- Provide a visible language switcher in the header and footer that links to the equivalent page (not the homepage) in each enabled locale.
- Optionally show a small, dismissible, accessible banner suggesting the user's browser language if it differs from the current page. Remember the dismissal only under the consent rules in Section 11.
- Set the correct lang attribute on the html element for each locale.

### Fonts and rendering

- Use a font stack that renders Vietnamese diacritics correctly and covers the characters used in kaomoji on all locales.

### Adding a locale later (phased rollout)

- Locales are listed in lib/i18n/config.ts with an enabled flag. Enabling a locale must require only adding its dictionary and content files and flipping the flag; no component changes.
- Document this process step by step in the README.

## 4. Keyword Research and Search Intent

Before implementing, create a keyword map and information architecture.

Identify:

- The main search intent (users want to quickly find a kaomoji that matches an emotion or animal and copy it in one click).
- Closely related keywords and natural variations.
- Long-tail queries by emotion (cute, happy, sad, angry, blush), by object or symbol (heart, star, sparkle), by animal (cat, bunny), and by action (shrug, hug, wave).
- Questions users commonly ask (What is a kaomoji? How do you type kaomoji? What is the difference between kaomoji and emoji? Why does my kaomoji show boxes? Why did my shrug lose its arm on Discord?).
- Relevant entities (Japan, emoticons, emoji, Unicode, character sets used in kaomoji).
- Keyword cannibalization risks.

Cannibalization rules:

- "kaomoji", "kaomoji copy and paste", "japanese emoticons", "text faces", "kawaii faces", and "kaomoji list" share the same intent and must all target the homepage.
- Merge closely related terms onto one page: sad + crying, happy + smile, heart + love, star + sparkle. Use the secondary term in the page's headings and content, not as a separate page.
- Only create separate pages for categories with a clearly different intent.

Do not fabricate search volumes, difficulty, traffic estimates, or competitor data.

## 5. Homepage SEO Requirements

The homepage must target the exact primary keyword: *Kaomoji*, with "copy and paste" included naturally in the title and H1 (for example, "Kaomoji Copy and Paste").

### SEO metadata

- A unique, compelling SEO title featuring the primary keyword naturally.
- A meta description explaining the main benefit (hundreds of cute Japanese text faces, one-click copy, organized by emotion and animal).
- A canonical URL, Open Graph, and social metadata.
- One clear H1 containing the primary keyword.

### Above-the-fold layout

The first screen must let users start copying immediately.

Include:

- A simple header and logo.
- A concise headline and one-line introduction.
- A search box (search by keyword or emotion, e.g. "cat", "cry", "love").
- Two rows of pill buttons for browsing (see "Card layout and navigation" in Section 10): main groups (All, Emotions, Cute, Love, Animals, Actions, Sparkles), and below them the categories of the selected main group (e.g. Animals → Cat, Bunny, Bear, Dog).
- The first row of kaomoji cards visible without scrolling on mobile.
- One-click copy on every kaomoji with clear "Copied" feedback.

Do not place long introductions, advertisements, or decorative content above the library.

### Homepage library layout

- A section for every category, each showing a preview grid (around 12–24 kaomoji) with a "See all [category] kaomoji" link to its dedicated page.
- A "Recently copied" bar (only stored if allowed by consent rules, see Section 11).
- A "Random kaomoji" button.
- A link to the Kaomoji Maker.

### Homepage content sections (below the library)

1. What kaomoji are (Japanese text faces built from characters, read upright rather than sideways).
2. Kaomoji vs emoji vs Western emoticons, with simple examples.
3. How to use this site (search or browse, tap to copy, paste anywhere).
4. How to type kaomoji on phones and computers (copying, keyboard text replacement shortcuts, Japanese IME suggestions), described accurately.
5. Where kaomoji work (Discord, Instagram, TikTok, X, WhatsApp, texting, games) and where they may not.
6. Why some kaomoji appear as boxes or question marks (missing glyphs and font fallback).
7. The Discord markdown problem (backslashes, underscores, and asterisks get eaten as formatting, e.g. the shrug) and how the "Discord-safe copy" option fixes it.
8. Accessibility considerations (screen readers read kaomoji character by character; avoid them for important information).
9. Popular categories with links to dedicated pages.
10. Frequently asked questions.
11. A helpful conclusion and next step.

Write naturally. Do not stuff the exact-match keyword into every heading. Do not invent historical dates, names, or origin stories; keep historical context general and accurate, or cite a reliable source.

## 6. Build a Fully Functional Kaomoji Library

The library must be genuinely functional and genuinely large.

### Kaomoji data

- The complete kaomoji library (828 unique kaomoji in 18 categories) is provided in Appendix A at the end of this prompt. Use it as the library exactly as given. Do not generate your own kaomoji to replace it.
- Store it as strongly typed data in data/kaomoji/ (one file per category), following the conversion rules in Appendix A.
- Each entry has: the kaomoji string, a unique id, primary category, group (used for H2 sub-sections on category pages), English search tags, a unique short card label (e.g. "Stretching cat"), and a group-level description. Labels and tags are used for search; labels are shown on cards and used in aria-labels.
- Every category has a mainGroup (Emotions, Cute, Love, Animals, Actions, Sparkles) given in Appendix A, used for the first row of pills.
- Every kaomoji is unique across the library; never duplicate one in the data. Related categories are connected through tags and internal links, not duplicate entries.
- Every dedicated category page has at least 50 kaomoji in Appendix A; keep it that way.
- Keep the listed order: the most recognizable kaomoji appear first.

### Core behavior

- One-click copy on every kaomoji using the Clipboard API, with a fallback method for older browsers.
- Accessible "Copied" confirmation (visual toast and announced via aria-live).
- Search across kaomoji descriptions and tags with instant results and a clear empty state.
- Category chips and filter on the homepage; on category pages, sub-filters by tag where useful (e.g. on the Cat page: "sleepy", "happy", "angry").
- A "Discord-safe copy" toggle that escapes markdown characters (\ _ * ~ ` |) so kaomoji paste correctly in Discord.
- A "Random kaomoji" button.
- Optional favorites and "Recently copied" saved in localStorage, only if disclosed in the cookie/privacy pages and treated per consent rules. If preference storage is not consented, these features still work for the current session only.
- Full keyboard support: every kaomoji is a focusable button, copy works with Enter/Space.
- Works on mobile, tablet, and desktop with large, easy-to-tap cards.
- Long kaomoji (e.g. table flips, hugs) must wrap or scale inside their card without breaking the grid or causing horizontal overflow.

### Kaomoji Maker (/kaomoji-maker)

- Users build their own kaomoji by choosing parts: left arm, left cheek, left eye, mouth, right eye, right cheek, right arm, and optional decoration or action (sparkles, hearts, tears, objects).
- Live preview, randomize button, and copy button (including Discord-safe copy).
- Each part list is typed data in data/maker/.
- Keep the maker logic in lib/ and cover it with unit tests.

### Privacy

All searching, copying, and making happens in the browser. Do not send, log, or store what users search, copy, or create. Do not save history by default without consent.

### Performance

- Rendering hundreds of kaomoji must stay smooth on low-end mobile devices.
- Render the lists as static HTML from Server Components; hydrate only a lightweight copy handler (event delegation) rather than a client component per card.
- Debounce search input and memoize filtering.
- Keep the client bundle small.

## 7. Dedicated Category Pages

Create dedicated, indexable pages, each with the full list for that category, its own search/tag filter, and one-click copy.

### Category pages (English slugs shown; localized slugs are in Section 3A)

- /cute-kaomoji
- /sad-kaomoji (covers crying kaomoji)
- /cat-kaomoji
- /happy-kaomoji (covers smile kaomoji)
- /heart-kaomoji (covers love kaomoji)
- /star-kaomoji (covers sparkle kaomoji)
- /shrug-kaomoji
- /bunny-kaomoji
- /angry-kaomoji
- /angel-kaomoji
- /blush-kaomoji

### Tool page

- /kaomoji-maker

Each category page must contain genuinely distinct content, including where relevant:

1. Breadcrumb navigation.
2. A unique title, meta description, and H1.
3. The full kaomoji list for that category, grouped into meaningful sub-sections with H2s (e.g. Sad page: "Crying Kaomoji", "Lonely Kaomoji", "Heartbroken Kaomoji", "Disappointed Kaomoji").
4. A short explanation of what makes this category recognizable (typical eyes, mouths, and symbols used, e.g. ; or T T for tears, ω for cat mouths, ♡ for hearts).
5. When and how people use these kaomoji (messages, bios, captions, gaming chat), described honestly.
6. Platform tips relevant to the category (e.g. the shrug's Discord escaping issue on the Shrug page).
7. Display and compatibility notes for any unusual characters used in this category.
8. Accessibility notes where relevant.
9. Links to the homepage, the Kaomoji Maker, and related category pages.
10. Relevant FAQs.

Do not create thin pages by duplicating text and swapping the category name. Each page must answer a distinct set of useful questions.

Do not claim that any platform officially supports or endorses kaomoji or these characters.

## 8. Website Architecture and Mandatory Pages

### Core pages

- / — Homepage and full Kaomoji library.
- /about — About Us.
- /contact — Contact Us.
- /privacy-policy — Privacy Policy.
- /terms-and-conditions — Terms and Conditions.
- /cookie-policy — Cookie Policy.
- /disclaimer — Disclaimer.
- /faq — FAQ, when it adds value beyond page FAQs.
- 404 — Custom not-found page with a few random kaomoji and links to the homepage and popular categories.

### Supporting content

- All category pages and the Kaomoji Maker listed above.
- Additional pages only when supported by meaningful intent and original content (future candidates: hug, dance, bear, dog, wave, table flip, sleepy, surprised kaomoji).

Every important page must be reachable through normal internal links.

## 9. E-E-A-T and Content Quality

### Experience

Describe the site's actual behavior, categories, and real compatibility limitations. Never invent testing experiences, user studies, or personal stories.

### Expertise

Explain kaomoji and Unicode concepts accurately (characters borrowed from different scripts, combining marks, missing glyphs, font fallback, markdown escaping). Reference reliable sources such as the Unicode Consortium where appropriate.

### Authoritativeness

Build a consistent identity with transparent ownership, useful references, and a coherent structure. Do not fabricate affiliations, certifications, or endorsements.

### Trustworthiness

Include an honest About page, real contact method, transparent Privacy Policy, clear Terms, Cookie Policy, accurate explanations of how the site works, and clear limitations (compatibility and accessibility).

Never invent authors, credentials, reviews, ratings, user counts, "most copied" statistics, testimonials, or citations. Do not guarantee rankings.

## 10. Minimalist and Professional Design

### Visual guidelines

- A plain, simple page background: very light gray (#F7F7F8) in light mode, near-black (#141416) in dark mode. No solid bright color fills, gradients, or patterns behind the content.
- White cards (#FFFFFF; #1E1E22 in dark mode) with a thin light border and rounded corners (about 12px), dark charcoal text (#1F1F23; #EDEDED in dark mode), and muted gray secondary text.
- Consistent spacing and generous whitespace.

### Accent color: deep berry

Use one dark, rich accent color across the whole site. Define every color as a CSS variable on :root with dark-mode values under prefers-color-scheme: dark, and check WCAG AA contrast for every pairing.

- Accent (selected main-group pill, primary buttons, links, logo highlight): #9D174D, hover #831843, with white text on accent fills.
- Accent tint (selected category pill, "Copied" toast, chip highlights): background #FCE7F3, text #831843, border #F9A8D4.
- Card hover/focus border: #BE185D.
- Dark mode: accent fills #BE185D (hover #9D174D) with white text; accent text and links #F472B6; tint background #3B0A22 with text #FBCFE8 and border #831843.
- Use the accent sparingly: one selected main pill, one selected category pill, buttons, links, and focus/hover states. Everything else stays neutral.

### Card layout and navigation

- Centered header area on the homepage: logo ("Kaomoji" in charcoal with "Zone" in the accent color, or the configured site name), a one-line subtitle, and a large rounded search box.
- Row 1, main-group pills: All, Emotions, Cute, Love, Animals, Actions, Sparkles. Selected pill uses the accent fill with white text; others are white with a thin border.
- Row 2, category pills for the selected main group (e.g. Emotions → Happy, Sad, Angry, Blush, Surprised, Sleepy). Selected pill uses the accent tint. Both rows wrap on desktop and scroll horizontally on small screens.
- Pills filter the grid instantly on the client, while every category still has a normal link to its dedicated page for SEO (and the server-rendered HTML contains all kaomoji).
- Kaomoji cards in a responsive grid (about 2 columns on small phones, up to 6 on desktop). Each card shows the kaomoji large and centered, and its unique label in small muted text underneath.
- Tapping or pressing Enter/Space on a card copies the kaomoji (never the label) and shows the "Copied" toast. Cards have a visible hover and focus state using the accent border.
- Category pages use the same cards and pills, with the current category selected and H2 sections for each group.
- Design the site as its own original brand. Do not copy any other kaomoji website's exact layout, colors, logo, or text.
- A font stack chosen for broad kaomoji glyph coverage (system UI fonts first, with fallbacks that include CJK coverage), so characters render consistently.
- Minimal animations; respect reduced-motion preferences.
- No excessive gradients, fake statistics, intrusive popups, or advertisements.

### Header

Minimal text logo, Home, Categories dropdown (all category pages), Kaomoji Maker, About, FAQ. Compact responsive mobile menu.

### Footer

Links to popular category pages, Kaomoji Maker, About, Contact, Privacy Policy, Terms, Cookie Policy, Disclaimer, and Cookie Settings.

Keep the same design system across every page.

## 11. Cookie Consent Banner and Settings

Implement a complete, accessible cookie consent interface that appears when no valid preference is saved.

Include: a short explanation of cookies and browser storage, Accept All, Reject Optional, Cookie Settings, and a Privacy Policy link.

### Categories

- *Necessary:* storage required for core functionality and remembering consent. Not presented as optional.
- *Preferences:* optional, off by default; covers favorites, recently copied, and the Discord-safe toggle setting.
- *Analytics:* optional, off by default, only if a real analytics service is configured.
- *Marketing:* optional, off by default, only if genuinely required and configured.

### Behavior

- Persist the choice across pages and sessions using localStorage.
- Do not show the banner repeatedly after a valid choice.
- Allow preferences to be changed or withdrawn from the footer; withdrawing Preferences clears stored favorites and history.
- Ensure optional scripts and storage do not run before consent.
- Provide keyboard and screen-reader support.

If the site uses only necessary storage, say so clearly. Do not add tracking just to justify a banner.

## 12. Contact Page Without a Backend

- Display the owner's real email with a mailto: link.
- Optionally provide a form that opens the visitor's email app with a prepared message (e.g. kaomoji suggestions or display issues).
- Explain that the form does not submit messages directly to the website.
- Never display a false success message.
- If no email is supplied, flag it before launch.

## 13. Privacy Policy, Terms, and Disclaimer

### Privacy Policy

Explain what information is collected, that searching, copying, and the maker work locally and nothing typed or copied is transmitted or stored on a server, what browser storage is used, how consent works, any third-party services actually present, retention, user rights, and contact details. Do not claim zero data collection without verifying dependencies.

### Terms and Conditions

Cover acceptable use (no use for spam, harassment, impersonation, or evading platform rules), intellectual property (the site's content and compilation; kaomoji themselves are common text expressions), availability, compatibility limitations, disclaimers, and limitation of liability where legally appropriate.

### Disclaimer

Explain that kaomoji are made of Unicode characters, may not display on all devices or platforms, may be read poorly by screen readers, and may be altered by platform formatting (such as Discord markdown). The site is not affiliated with Discord, Instagram, TikTok, X, WhatsApp, or any other platform mentioned.

Do not invent a company, address, legal status, or qualification. Flag jurisdiction-specific provisions for review.

## 14. Technical SEO

### Metadata

Every indexable page needs a unique title, unique meta description, canonical URL, robots directives, Open Graph, and social metadata via the Next.js Metadata API. The homepage targets the primary keyword; category pages and the maker target their own keywords.

### URLs and navigation

Clean, lowercase, descriptive URLs. Logical internal linking, breadcrumbs on deeper pages, descriptive anchor text, correct 404 handling, consistent canonical formatting, no broken links, no orphan pages. Search and filter states must not create indexable duplicate URLs (use client state or noindex parameters).

### Sitemap and robots.txt

Generate a valid XML sitemap with only canonical, indexable pages in enabled locales, including xhtml:link hreflang alternates for each URL, and a suitable robots.txt. Use the configured domain, not environment variables.

### Structured data

Use only where supported by real content: WebSite, WebPage, BreadcrumbList, FAQPage (only for visible FAQs), ItemList where a page presents a clear list, and WebApplication for the Kaomoji Maker if appropriate, without fake ratings or reviews. Organization only if details are genuine. Validate before delivery.

## 15. Performance and Accessibility

- Static generation where appropriate and minimal client-side JavaScript.
- Efficient font loading; prevent layout shifts in the kaomoji grids.
- Smooth scrolling and copying on low-end mobile devices with hundreds of cards.
- Semantic HTML, accessible labels, keyboard navigation, visible focus states, readable contrast (check the accent color carefully).
- Give every kaomoji card an aria-label using its label (e.g. "Copy kaomoji: Stretching cat") so screen readers don't read raw characters one by one.
- Respect reduced-motion preferences; no horizontal overflow on small screens.

Report actual Lighthouse and Core Web Vitals results instead of claiming unverified scores.

## 16. Project Structure and Code Quality

- app/ — routes, layouts, sitemap, robots, metadata.
- components/ — header, footer, kaomoji grid, kaomoji card, copy handler, search, main-group and category pills, kaomoji maker, toast, cookie banner, cookie settings, breadcrumbs, FAQ.
- lib/ — search and filtering, Discord escaping, maker logic, clipboard utility, site config, SEO utilities.
- data/ — kaomoji by category, maker parts, and structured content for category pages.
- types/ — shared TypeScript types.
- public/ — static assets.

Keep logic separate from UI, use strongly typed data, reuse one grid component across the homepage and category pages, and avoid duplicated code and unnecessary dependencies.

No .env files or required credentials. Add a README with install, development, build, and deployment instructions, plus how to add new kaomoji and new category pages.

## 17. Internal Linking Strategy

- Homepage links to all category pages and the Kaomoji Maker.
- Each category page links back to the main Kaomoji page.
- Related category pages link to one another (cute ↔ blush ↔ heart, cat ↔ bunny, sad ↔ angry, happy ↔ star, angel ↔ cute).
- The Kaomoji Maker links to category pages for inspiration, and category pages link to the maker.
- Breadcrumbs show hierarchy; the footer links to popular categories and trust pages.
- Use varied, natural anchor text; do not repeat exact-match anchors unnaturally.

## 18. Testing and Quality Assurance

### Functional

- Unit-test the data: the library contains every kaomoji from Appendix A unchanged, no duplicate kaomoji, every entry has a valid category, tags, and description, and every category page meets its minimum count.
- Unit-test search (by tag, by description, case-insensitive, empty results).
- Unit-test Discord escaping (including the shrug and kaomoji with underscores, asterisks, and backslashes).
- Unit-test maker logic (part combinations, randomize, output string).
- Test copy on desktop and mobile browsers, including the fallback method.
- Test very long kaomoji in cards on small screens.
- Test that every kaomoji has a unique, non-empty label and that copying a card copies only the kaomoji.
- Test pill navigation: main-group and category selection, keyboard use, and that category links work without JavaScript.
- Test grid performance on mobile.
- Test mobile navigation, cookie acceptance, rejection, persistence, withdrawal clearing stored data, and footer settings.
- Confirm optional storage and scripts do not run before consent.
- Confirm the contact page never reports false delivery.

### SEO

Unique titles and descriptions, canonical URLs, sitemap.xml, robots.txt, structured data validation, indexability, all kaomoji present in server HTML, internal links, heading structure, no duplicate metadata.

### Multilingual

- Every enabled locale builds every page, with no missing translation keys (add a test that fails on missing keys).
- hreflang alternates are reciprocal, include x-default, and point only to enabled, indexable pages.
- Each localized page is self-canonical and has a correct html lang attribute.
- The language switcher links to the equivalent page in each locale.
- No automatic redirects based on IP or browser language.
- Search works with localized tags (e.g. "gato", "kucing", "mèo").
- Vietnamese diacritics and all kaomoji render correctly.
- No untranslated English text on localized pages.

### Code

Production build, TypeScript checks, linting, responsive checks, accessibility basics, no placeholder content, no .env files, no backend dependency.

Do not claim a test passed unless it was actually run.

## 19. Required Final Deliverables

1. Next.js and Tailwind CSS codebase.
2. SEO-focused homepage with a fully functional kaomoji library (all 828 kaomoji from Appendix A, search, category filters, one-click copy, Discord-safe copy, random button).
3. Dedicated category pages, each with the full category list and working copy.
4. A working Kaomoji Maker page.
5. About, Contact, Privacy Policy, Terms and Conditions, Cookie Policy, Disclaimer, FAQ, and custom 404 pages.
6. Functional cookie consent banner and settings panel.
7. Responsive navigation and footer.
8. Unique SEO metadata, canonical URLs, structured data, XML sitemap, and robots.txt.
9. Internal linking structure.
10. Unit tests for data, search, Discord escaping, and maker logic.
11. Reusable components and maintainable code.
12. README with installation, deployment, and content-update instructions.
13. Multilingual setup for English, Spanish, Indonesian, Portuguese, and Vietnamese with translated slugs, hreflang, localized sitemaps, and a language switcher, with only the configured launch locales enabled.
14. Testing results and remaining launch requirements (domain, email, legal review, native-speaker review of each non-English locale, keyword verification of localized slugs).

Do not stop after producing the homepage or a plan. Implement the actual pages and functionality.

## 20. Final Execution Instructions

1. Analyze the primary keyword and search intent.
2. Prepare a keyword map and sitemap, assigning each keyword to one page.
3. Set up the i18n configuration, route map, and dictionaries (Section 3A).
4. Define structure and visual design.
5. Implement the global layout and reusable components.
6. Build the kaomoji data set, search, Discord escaping, and their unit tests.
7. Build the homepage and main library.
8. Create the category pages.
9. Build the Kaomoji Maker and its tests.
10. Create legal and trust pages.
11. Implement the cookie banner and settings.
12. Implement metadata, structured data, sitemap, and robots.txt.
13. Add internal links and verify responsive behavior.
14. Run tests and the production build, fix issues, and deliver the codebase.

The final website must be minimalist, professional, fast, accessible, SEO-friendly, and easy for junior developers to maintain. It must work without .env files, API keys, a database, or a custom backend. Do not invent credentials, data, citations, testimonials, statistics, or functionality.

## Appendix A. Kaomoji Library (828 kaomoji)

This is the complete curated library. Use it exactly as given; do not regenerate, reorder, or replace it.

How to convert it into data files:

- Create one file per category in data/kaomoji/[category].ts (plus types.ts, categories.ts, and index.ts exporting allKaomoji, kaomojiByCategory, and kaomojiCategories).
- Each line inside a code block is one kaomoji, then the separator " ⇒ ", then its unique card label. Split each line on the last " ⇒ ". The kaomoji part must be copied character for character (keep every space, backslash, backtick, and combining mark). Escape characters correctly in TypeScript strings.
- Assign ids in the order listed, per category, starting at 001: cute-001, cute-002 … Ids must stay stable once published.
- Every kaomoji gets its own label from its line, plus the group, tags, and description from its group header. Labels, tags, and descriptions are English; localized versions go in data/i18n/[locale]/ keyed by id, and each locale needs its own natural translation of every label.
- Each category heading names its main group (Emotions, Cute, Love, Animals, Actions, Sparkles), used for the first row of pills; store it as mainGroup in categories.ts.
- Categories marked "homepage section only" appear on the homepage but have no dedicated page yet.
- Keep the display order: categories in the order listed, kaomoji in the order listed within each group.
- You may append new kaomoji to a category only if needed, after the listed ones, keeping ids unique and checking for duplicates.

### Category `cute` — Cute (main group: Cute; 82 kaomoji, dedicated page: /cute-kaomoji)

Group `kawaii` · tags: cute, kawaii, smile, sweet · description: "cute kawaii smiling face"

```
(｡◕‿◕｡) ⇒ Classic kawaii smile
(◕‿◕✿) ⇒ Smiling with a flower
(✿◠‿◠) ⇒ Blooming sweet smile
(◕ᴗ◕✿) ⇒ Bright-eyed flower girl
(*^‿^*) ⇒ Rosy happy face
(˶ᵔ ᵕ ᵔ˶) ⇒ Soft gentle smile
(◍•ᴗ•◍) ⇒ Round chubby smile
(◍•ᴗ•◍)✧*。 ⇒ Chubby sparkle smile
(｡•ᴗ•｡) ⇒ Tiny polite smile
(｡◕‿‿◕｡) ⇒ Wide kawaii grin
(◕‿◕) ⇒ Simple sweet smile
(◠‿◠) ⇒ Calm closed-eye smile
(✿╹◡╹) ⇒ Flower with tiny eyes
(*˘︶˘*) ⇒ Content and cozy
(｡◕ ∀ ◕｡) ⇒ Wide-eyed delight
(◕ˇ∀ˇ◕) ⇒ Cheerful sparkly eyes
(❁´◡`❁) ⇒ Flower-framed blush
(✿◕‿◕) ⇒ Flowery sweet smile
(✿ᵔ‿ᵔ) ⇒ Gentle flower smile
(✿˶◕‿◕˶) ⇒ Glowing flower smile
✿◕ ‿ ◕✿ ⇒ Flower-crowned smile
❀◕ ‿ ◕❀ ⇒ Blossom-framed smile
(｡^‿^｡) ⇒ Sweet happy grin
(＾◡＾) ⇒ Gentle cheerful grin
(•◡•) ⇒ Little round smile
(｡◕‿◕｡)✧ ⇒ Shining kawaii smile
(ㆁᴗㆁ✿) ⇒ Sleepy flower face
(˶◕‿◕˶) ⇒ Rosy wide-eyed smile
(ꈍᴗꈍ) ⇒ Peaceful closed eyes
(ꈍ◡ꈍ) ⇒ Dreamy closed eyes
(•‿•) ⇒ Simple tiny smile
(•ᴗ•) ⇒ Plain happy face
(•‿•)✧ ⇒ Smile with a twinkle
(ᵔ◡ᵔ) ⇒ Small joyful smile
(ᵕ‿ᵕ) ⇒ Relaxed sleepy smile
(˘ᵕ˘) ⇒ Calm content face
```

Group `omega` · tags: cute, kawaii, cat mouth, soft · description: "cute face with a small w-shaped mouth"

```
(｡･ω･｡) ⇒ Fluffy little face
(｡・ω・｡)ﾉ ⇒ Fluffy wave
(・ω・) ⇒ Classic omega face
(´｡• ω •｡`) ⇒ Soft blushing omega
(っ˘ω˘ς ) ⇒ Sleepy snuggle
(〃・ω・〃) ⇒ Shy little omega
(*・ω・)ﾉ ⇒ Cheerful hello
( ˘ω˘ ) ⇒ Drowsy smile
(◡ ω ◡) ⇒ Blissful omega
(っ´ω`c) ⇒ Squishy pout
(ᐢ˙꒳˙ᐢ) ⇒ Tiny hamster face
(ˊ꒳ˋ) ⇒ Soft content face
( ˶ˆ꒳ˆ˵ ) ⇒ Pleased little face
(｡•ㅅ•｡) ⇒ Button-nosed cutie
(ᐢ ᵕ ᐢ) ⇒ Tiny ears smile
```

Group `excited` · tags: cute, excited, wink, sparkle · description: "cute excited face"

```
(｡•̀ᴗ-)✧ ⇒ Winking sparkle
(✧ω✧) ⇒ Sparkling eyes
(★ω★) ⇒ Starstruck cutie
(｡>‿<｡) ⇒ Squeezing eyes shut
(>‿<) ⇒ Giggling face
(≧◡≦) ⇒ Giddy grin
(⌒‿⌒) ⇒ Beaming smile
(*ﾟ▽ﾟ*) ⇒ Pleasantly surprised
(๑˃ᴗ˂)ﻭ ⇒ Cheering cutie
(๑>◡<๑) ⇒ Bubbly giggle
(๑•̀ㅂ•́)و✧ ⇒ Determined sparkle
(๑ᵔ⤙ᵔ๑) ⇒ Puckered cutie
(๑˘︶˘๑) ⇒ Snug and happy
(๑'ᴗ'๑) ⇒ Polite little smile
(๑´ڡ`๑) ⇒ Yummy treat face
(*´ڡ`●) ⇒ Licking lips
(ᗒᗨᗕ) ⇒ Overjoyed squeal
(˶˃ ᵕ ˂˶) ⇒ Squishy giggle
(˶ˆᗜˆ˵) ⇒ Delighted cutie
(*✧×✧*) ⇒ Dazzled eyes
(✧∀✧) ⇒ Glittering eyes
(ˊᗜˋ) ⇒ Wide happy beam
(ˊᵕˋ) ⇒ Gentle grin
(ˆ ᵕ ˆ) ⇒ Mellow smile
(◜ᴗ◝ ) ⇒ Peeking smile
(｡•̀ᴗ•́｡) ⇒ Confident cutie
(•̀ᴗ•́)و ⇒ Fist-pump cutie
(๑•ᴗ•๑) ⇒ Neat little smile
(≧ω≦) ⇒ Squealing with joy
(*≧ω≦) ⇒ Happy squeal
(•ө•) ⇒ Tiny bird face
```

### Category `happy` — Happy (main group: Emotions; 75 kaomoji, dedicated page: /happy-kaomoji)

Group `smile` · tags: happy, smile, joy, glad · description: "happy smiling face"

```
(＾▽＾) ⇒ Big happy smile
(＾ｖ＾) ⇒ Cheerful v smile
(^_^) ⇒ Simple happy face
(^▽^) ⇒ Open happy smile
(^ω^) ⇒ Content omega smile
(^o^) ⇒ Happy open mouth
(^-^) ⇒ Pleased smile
(^ー^) ⇒ Easygoing smile
(^ε^) ⇒ Puckered happy face
(^.^) ⇒ Little dot smile
(^‿^) ⇒ Gentle happy face
(^^) ⇒ Closed-eye happiness
(*^^*) ⇒ Blushing happy face
(⌒▽⌒) ⇒ Laughing with eyes closed
(⌒ω⌒) ⇒ Smug and happy
(´▽`) ⇒ Warm grin
(´∀`) ⇒ Friendly laugh
(・∀・) ⇒ Bright-eyed laugh
(・▽・) ⇒ Wide-eyed smile
(￣▽￣) ⇒ Satisfied grin
(￣ω￣) ⇒ Proud little smirk
(￣ー￣) ⇒ Knowing smile
(*^▽^*) ⇒ Rosy laugh
(*^ω^*) ⇒ Rosy omega smile
(*´▽`*) ⇒ Blissful grin
(*´∀`*) ⇒ Glowing laugh
(o^▽^o) ⇒ Cheeky laugh
(o´▽`o) ⇒ Sunny smile
(o˘◡˘o) ⇒ Peaceful smile
(o･ω･o) ⇒ Round-cheeked smile
(＠＾◡＾) ⇒ Silly happy face
(。^▽^) ⇒ Playful grin
(✿◡‿◡) ⇒ Smiling with a bloom
(◡‿◡✿) ⇒ Content flower smile
(＾ｰ＾) ⇒ Easy smile
(〃^▽^〃) ⇒ Bashful laugh
(⁀ᗢ⁀) ⇒ Happy squint
(˙▿˙) ⇒ Smiling cheekily
(´ ω `) ⇒ Mellow happiness
(ﾟ∀ﾟ) ⇒ Startled laugh
(*ﾟ∀ﾟ*) ⇒ Gleeful laugh
```

Group `joy` · tags: happy, excited, celebrate, cheer, yay · description: "very happy cheering face"

```
(≧▽≦) ⇒ Super excited
(≧∇≦) ⇒ Thrilled squeal
(≧∀≦) ⇒ Overjoyed laugh
(≧ᗜ≦) ⇒ Ecstatic squeal
(*≧▽≦) ⇒ Bursting with joy
(✯◡✯) ⇒ Starry-eyed happy
(☆▽☆) ⇒ Star-eyed laugh
(*￣▽￣)b ⇒ Thumbs up grin
o(≧▽≦)o ⇒ Bouncing with joy
o(^▽^)o ⇒ Happy and bouncy
o(〃＾▽＾〃)o ⇒ Jumping for joy
(ﾉ´ヮ`)ﾉ ⇒ Excited little run
(ﾉ◕ヮ◕)ﾉ ⇒ Running with joy
(ノ^∇^) ⇒ Joyful leap
(ﾉ≧∀≦)ﾉ ⇒ Laughing hard
(ノ゜▽゜)ノ ⇒ Cheering run
(๑˃̵ᴗ˂̵) ⇒ Gleeful squint
٩(ˊᗜˋ*)و ⇒ Victory dance
(っ＾▿＾)۶ ⇒ Happy fist pump
```

Group `arms` · tags: happy, raised arms, cheer, yay · description: "happy face with raised arms"

```
ヽ(・∀・)ﾉ ⇒ Cheering with arms up
ヽ(´▽`)/ ⇒ Hooray
ヽ(^o^)丿 ⇒ Arms up laugh
ヽ(＾Д＾)ﾉ ⇒ Loud cheer
ヽ(*⌒▽⌒*)ﾉ ⇒ Celebrating
ヽ(•‿•)ノ ⇒ Happy arms up
＼(^o^)／ ⇒ Banzai cheer
＼(＾▽＾)／ ⇒ Big hooray
＼(≧▽≦)／ ⇒ Excited banzai
＼(★ω★)／ ⇒ Starry cheer
\(^ω^)/ ⇒ Classic cheer
٩(◕‿◕)۶ ⇒ Joyful little dance
٩(^‿^)۶ ⇒ Happy dance
٩(｡•́‿•̀｡)۶ ⇒ Cute victory pose
٩(˘◡˘)۶ ⇒ Calm celebration
```

### Category `sad` — Sad (main group: Emotions; 67 kaomoji, dedicated page: /sad-kaomoji)

Group `crying` · tags: sad, crying, tears, cry · description: "crying face with tears"

```
(╥﹏╥) ⇒ Crying quietly
(╥_╥) ⇒ Tears streaming down
(T_T) ⇒ Classic tears
(T▽T) ⇒ Crying smile
(T＿T) ⇒ Tearful face
(TдT) ⇒ Sobbing
(ToT) ⇒ Wailing
(T⌓T) ⇒ Teary pout
(TωT) ⇒ Crying softly
(｡T ω T｡) ⇒ Little crybaby
(;_;) ⇒ Silent tears
(;﹏;) ⇒ Wavering tears
(；︵；) ⇒ Trembling tears
(;ω;) ⇒ Teary omega
(´；ω；`) ⇒ Weeping
(´；д；`) ⇒ Sobbing hard
(ಥ﹏ಥ) ⇒ Holding back tears
(ಥ_ಥ) ⇒ Teary-eyed
(ಥ‿ಥ) ⇒ Smiling through tears
(ಥ⌣ಥ) ⇒ Tearful smile
(ಥ︵ಥ) ⇒ Heartbroken tears
(இ﹏இ) ⇒ Overflowing tears
(இ_இ) ⇒ Sad teary eyes
(இ‸இ) ⇒ Quiet sorrow
(〒﹏〒) ⇒ Bawling
(〒▽〒) ⇒ Crying laugh
(〒_〒) ⇒ Streaming tears
(ㄒoㄒ) ⇒ Puffy-eyed crying
(ㄒ_ㄒ) ⇒ Weary tears
(πーπ) ⇒ Tears running down
(ノ_<。) ⇒ Wiping tears
(ノД`) ⇒ Crying into hands
(ノ_；) ⇒ Covering teary eyes
(つ﹏<。) ⇒ Rubbing teary eyes
(つ﹏⊂) ⇒ Crying in hands
(ノ﹏ヽ) ⇒ Hiding sad face
(｡ﾉω＼｡) ⇒ Hiding in shame
(ᗒᗣᗕ)՞ ⇒ Despairing sob
(ᗒᗩᗕ) ⇒ Devastated
```

Group `sad` · tags: sad, unhappy, down, disappointed, lonely · description: "sad disappointed face"

```
(｡•́︿•̀｡) ⇒ Sad pouty face
(｡ŏ﹏ŏ) ⇒ Worried frown
(｡╯︵╰｡) ⇒ Gloomy frown
(っ˘̩╭╮˘̩)っ ⇒ Needs a hug
(◞‸◟) ⇒ Disappointed sigh
(◞‸◟；) ⇒ Defeated sigh
(´・ω・`) ⇒ Dejected
(´-ω-`) ⇒ Downcast
(´._.`) ⇒ Awkward sadness
(._.) ⇒ Speechless and sad
(╯︵╰,) ⇒ Sulking
(︶︹︺) ⇒ Grumbling sadly
(︶︹︶) ⇒ Unhappy frown
(´︶`) ⇒ Glum face
(｡>﹏<｡) ⇒ Upset wince
(>﹏<) ⇒ Hurt wince
(╯_╰) ⇒ Feeling down
(ó﹏ò｡) ⇒ Anxious frown
(ó_ò) ⇒ Worried look
(ú_ù) ⇒ Disheartened
(◕︿◕✿) ⇒ Sad flower
(◕︵◕) ⇒ Pouty frown
(｡•ˇ‸ˇ•｡) ⇒ Lonely sigh
(´ｰ`) ⇒ Let down
(˘︹˘) ⇒ Bummed out
(・_・;) ⇒ Nervous sweat
(￣ヘ￣;) ⇒ Troubled sigh
(｡ᵕ ◞ _◟) ⇒ Quietly hurt
```

### Category `heart` — Heart & Love (main group: Love; 68 kaomoji, dedicated page: /heart-kaomoji)

Group `heart-eyes` · tags: love, heart, heart eyes, crush · description: "face with heart eyes"

```
(｡♥‿♥｡) ⇒ Heart eyes
(♥ω♥*) ⇒ Lovesick heart eyes
(♡ω♡) ⇒ Adoring heart eyes
(♡ >ω< ♡) ⇒ Squealing heart eyes
(♡°▽°♡) ⇒ Amazed heart eyes
(♡μ_μ) ⇒ Heart-eyed sigh
(❤ω❤) ⇒ Crushing hard
(❤▽❤) ⇒ Red heart eyes
(✿ ♡‿♡) ⇒ Flower heart eyes
(*♡∀♡) ⇒ Swooning
(*♡▽♡*) ⇒ Totally smitten
(´♡‿♡`) ⇒ Dreamy heart eyes
(灬♥ω♥灬) ⇒ Blushing heart eyes
(ღ♡‿♡ღ) ⇒ Love-struck sparkle
(｡♡‿♡｡) ⇒ Lovestruck
(♡´౪`♡) ⇒ Starry heart eyes
(♡ˊᵕˋ♡) ⇒ Sweet heart eyes
(✿ ♥‿♥) ⇒ Floral heart eyes
(♥‿♥) ⇒ Simple heart eyes
♥‿♥ ⇒ Heart eyes no face
♡‿♡ ⇒ Tiny heart smile
❤‿❤ ⇒ Red heart smile
(⁄ ⁄♡⁄ω⁄♡⁄ ⁄) ⇒ Shy heart eyes
```

Group `hearts` · tags: love, heart, cute, affection · description: "happy face with hearts"

```
(♡˙︶˙♡) ⇒ Smiling with hearts
(˘︶˘).｡*♡ ⇒ Content with a heart
(◍•ᴗ•◍)❤ ⇒ Chubby red heart
(◍•ᴗ•◍)♡ ✧*。 ⇒ Chubby heart sparkle
♡( ◡‿◡ ) ⇒ Dreamy love
♡(｡- ω -) ⇒ Sleepy love
♡＼(￣▽￣)／♡ ⇒ Hearts and cheers
♡(ŐωŐ人) ⇒ Praying for love
♡〜٩( ˃▿˂ )۶〜♡ ⇒ Lovestruck dance
❤(ӦｖӦ｡) ⇒ Starry-eyed love
(ღ˘⌣˘ღ) ⇒ In love
(ღ˘◡˘ღ) ⇒ Gentle love
(ღ´ω`ღ) ⇒ Fond little heart
ღゝ◡╹)ノ♡ ⇒ Waving a heart
(*˘︶˘*).｡.:*♡ ⇒ Sweet love sparkles
(*ˊᗜˋ*)♡ ⇒ Grinning with a heart
(◕‿◕)♡ ⇒ Sending a heart
( ◜‿◝ )♡ ⇒ Peeking with a heart
(´∩｡• ᵕ •｡∩`)♡ ⇒ Hugging a heart
(✿˘︶˘)♡ ⇒ Flower heart
(ﾉ◕ヮ◕)ﾉ♡ ⇒ Throwing a heart
(っ◕‿◕)っ♡ ⇒ Offering a heart
(๑˘︶˘๑)♡ ⇒ Snug with a heart
(•ᴗ•)♡ ⇒ Small heart smile
(⸝⸝ᵕᴗᵕ⸝⸝)♡ ⇒ Shy little heart
(≧◡≦) ♡ ⇒ Giggling heart
(⺣◡⺣)♡* ⇒ Smiling heart
(っ´ω`)っ♡ ⇒ Holding out a heart
(๑・ω-)～♥ ⇒ Winking heart
♥(ˆ⌣ˆԅ) ⇒ Flirty heart
```

Group `kiss` · tags: love, kiss, heart, couple · description: "face blowing a kiss"

```
( ˘ ³˘)♥ ⇒ Blowing a kiss
( ˘ ³˘)❤ ⇒ Blowing a red kiss
(づ￣ ³￣)づ ⇒ Puckered for a kiss
(っ˘з(˘⌣˘ ) ♡ ⇒ Kissing cheek
(❤´艸｀❤) ⇒ Covering kiss
(｡・//ε//・｡) ⇒ Shy kiss
(￣ε￣＠) ⇒ Kiss face
(ノ´ з `)ノ ⇒ Running for a kiss
(*ˆ³ˆ) ⇒ Smooch
(´ε｀ )♡ ⇒ Little kiss
(*´з`*) ⇒ Pouty kiss
(ʃƪ ˘ ³˘) ⇒ Lovey kiss
(◦˘ ³(♡ε♡) ⇒ Kissing couple
❤ (ɔˆз(ˆ⌣ˆc) ⇒ Couple kiss
(˘∀˘)/(μ‿μ) ❤ ⇒ Loving couple
```

### Category `cat` — Cat (main group: Animals; 59 kaomoji, dedicated page: /cat-kaomoji)

Group `cat-face` · tags: cat, kitty, neko, animal · description: "cat face"

```
(=^･ω･^=) ⇒ Classic kitty
(=^・ω・^=) ⇒ Kitty with omega mouth
(=^‥^=) ⇒ Neutral kitty
(=^-ω-^=) ⇒ Sleepy kitty
(=^･ｪ･^=) ⇒ Curious kitty
(=^ ◡ ^=) ⇒ Smiling kitty
(=^･^=) ⇒ Simple cat face
(=①ω①=) ⇒ Big round cat eyes
(=ↀωↀ=) ⇒ Wide-eyed cat
(=ΦωΦ=) ⇒ Cat with slit eyes
(=ΦｴΦ=) ⇒ Sly cat
(=⌒‿‿⌒=) ⇒ Blissful cat
(=`ω´=) ⇒ Smug cat
(=˘ω˘=) ⇒ Content cat
(=´∇｀=) ⇒ Laughing cat
(=ↀωↀ=)✧ ⇒ Sparkly-eyed cat
(^・ω・^ ) ⇒ Tilted kitty
(^._.^)ﾉ ⇒ Kitty waving
(^=◕ᴥ◕=^) ⇒ Wide-eyed kitten
(^◔ᴥ◔^) ⇒ Puzzled kitten
(^˵◕ω◕˵^) ⇒ Bright-eyed kitten
(^ↀᴥↀ^) ⇒ Startled kitten
(^• ω •^) ⇒ Gentle kitten
(^･ω･^=) ⇒ Little kitten
(＾• ω •＾) ⇒ Soft cat face
(＾-ω-＾) ⇒ Napping cat
(＾ｪ＾) ⇒ Pleased cat
(ﾐΦ ﻌ Φﾐ) ⇒ Mysterious cat
(ﾐゝω・ﾐ) ⇒ Winking cat
(ﾐ⚈ ﻌ ⚈ﾐ) ⇒ Round-eyed cat
(ﾐ ᵕ ﻌ ᵕ ﾐ) ⇒ Dozing cat
(ﾐ´ ω `ﾐ) ⇒ Shy cat
(ﾐ`ω´ﾐ) ⇒ Grumpy cat
ᓚᘏᗢ ⇒ Stretching cat
ᓚ₍ ^. .^₎ ⇒ Loafing cat
=^._.^= ∫ ⇒ Cat with a tail
```

Group `cat-paws` · tags: cat, paws, kitty, cute · description: "cat raising its paws"

```
ฅ^•ﻌ•^ฅ ⇒ Cat with paws up
ฅ(＾・ω・＾ฅ) ⇒ Pawing kitty
ฅ(^◕ᴥ◕^)ฅ ⇒ Bright kitty paws
ฅ(•ㅅ•❀)ฅ ⇒ Flower kitty paws
ฅ(=･ω･=)ฅ ⇒ Kitty reaching out
ฅ(￣ω￣ฅ) ⇒ Lazy cat paw
ฅ^>ω<^ฅ ⇒ Excited cat paws
ฅ(՞•ﻌ•՞)ฅ ⇒ Fluffy cat paws
ฅ^•ω•^ฅ ⇒ Cute cat paws
(ฅ'ω'ฅ) ⇒ Playful kitten
(ฅ^ω^ฅ) ⇒ Happy kitten paws
(っ=^･ω･^=)っ ⇒ Cat wanting a hug
(=^･ｪ･^=))ﾉ彡☆ ⇒ Cat casting a star
```

Group `cat-moods` · tags: cat, sad cat, angry cat, shocked cat · description: "cat face showing a strong mood"

```
(=ＴェＴ=) ⇒ Crying cat
(=; ェ ;=) ⇒ Nervous cat
(=ｘェｘ=) ⇒ Knocked-out cat
(=ಠᆽಠ=) ⇒ Disapproving cat
(=ʘᆽʘ=) ⇒ Shocked cat
(ﾐｘﻌｘﾐ) ⇒ Dizzy cat
(ﾐ ﹏ ﻌ ﹏ ﾐ) ⇒ Sad cat
(ﾐ￣ー￣ﾐ) ⇒ Unimpressed cat
(ↀДↀ)✧ ⇒ Horrified cat
(^･o･^)ﾉ" ⇒ Kitty meowing
```

### Category `star` — Star & Sparkle (main group: Sparkles; 52 kaomoji, dedicated page: /star-kaomoji)

Group `sparkle` · tags: star, sparkle, magic, shine, glitter · description: "happy face with stars and sparkles"

```
☆*:.｡.o(≧▽≦)o.｡.:*☆ ⇒ Star-spangled joy
(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ⇒ Throwing sparkles
(ﾉ´ヮ`)ﾉ*: ･ﾟ ⇒ Tossing sparkles
✧٩(•́⌄•́๑)و ✧ ⇒ Sparkly determination
✧*｡٩(ˊᗜˋ*)و✧*｡ ⇒ Sparkling victory
✧◝(⁰▿⁰)◜✧ ⇒ Shining bright
✧･ﾟ: *✧･ﾟ:* (◕‿◕) *:･ﾟ✧*:･ﾟ✧ ⇒ Surrounded by sparkles
(ﾉ>ω<)ﾉ :｡･:*:･ﾟ’★,｡･:*:･ﾟ’☆ ⇒ Showering stars
*:･ﾟ✧(ꈍᴗꈍ)✧･ﾟ:* ⇒ Dreamy sparkles
.･ﾟﾟ･(＾ω＾)･ﾟﾟ･. ⇒ Glittering joy
(ノ°∀°)ノ⌒･*:.｡. .｡.:*･゜ﾟ･*☆ ⇒ Sparkle trail
(*・‿・)ノ⌒*:･ﾟ✧ ⇒ Sprinkling magic
☆(ﾉ◕ヮ◕)ﾉ ⇒ Star and cheer
(ﾉ˶>ᗜ<˵)ﾉ✧ ⇒ Sparkly excitement
✧(｡•̀ᴗ-)✧ ⇒ Winking sparkles
✧･ﾟ(⁰▿⁰) ⇒ Glowing awe
✩°｡⋆⸜(ˊᗜˋ ) ⇒ Starlit wonder
✧(≖ ◡ ≖✿) ⇒ Smug sparkle
✧ (•‿•) ✧ ⇒ Framed in sparkles
(•̀ᴗ•́)✧ ⇒ Confident sparkle
(◕‿◕)✧ ⇒ Smile with sparkle
(˶ˆᗜˆ˵)✧ ⇒ Delighted sparkle
(⁎˃ᴗ˂⁎)✧ ⇒ Joyful sparkle
(っ˘ω˘ς )✧ ⇒ Sleepy sparkle
```

Group `star-eyes` · tags: star, star eyes, excited, amazed · description: "face with starry eyes"

```
(☆ω☆) ⇒ Star eyes
(★‿★) ⇒ Starry smile
(✪‿✪) ⇒ Stunned star eyes
(✪ω✪) ⇒ Amazed star eyes
(✿☆‿☆) ⇒ Flower star eyes
(☆∀☆) ⇒ Starry grin
(*✧ω✧*) ⇒ Glittery eyes
(*☆▽☆*) ⇒ Starry excitement
(✧∀✧)/ ⇒ Cheering star eyes
(✿✧ω✧) ⇒ Dazzled flower
(★^O^★) ⇒ Star-framed shout
(★ω★)/ ⇒ Star-eyed wave
(☆^ー^☆) ⇒ Sparkling grin
(✧ᴗ✧) ⇒ Twinkling eyes
(◕ᴗ◕)☆ ⇒ Smiling with a star
☆ (*^ω^*) ☆ ⇒ Star-framed smile
```

Group `magic` · tags: star, magic, wand, wink, spell · description: "face casting a magic star"

```
(∩^o^)⊃━☆ﾟ.*･｡ﾟ ⇒ Casting magic
(∩｀-´)⊃━☆ﾟ.*･｡ﾟ ⇒ Serious spell
(∩ᄑ_ᄑ)⊃━☆ﾟ*･｡*･:≡( ε:) ⇒ Wizard zapping
☆ﾟ.*･｡ﾟ(^ω^) ⇒ Star wand smile
☆(ゝω・)v ⇒ Winking star
☆⌒(ゝ。∂) ⇒ Playful wink
☆〜（ゝ。∂） ⇒ Cheeky star wink
☆ﾐ(o*･ω･)ﾉ ⇒ Shooting star throw
☆彡(ノ^ ^)ノ ⇒ Star swoosh
(*ﾟ▽ﾟ)ﾉ☆ ⇒ Tossing a star
(*≧▽≦)ﾉ☆ ⇒ Excited star throw
★~(◠‿◕✿) ⇒ Twirling star
```

### Category `shrug` — Shrug (main group: Actions; 50 kaomoji, dedicated page: /shrug-kaomoji)

Group `classic-shrug` · tags: shrug, idk, whatever, dunno · description: "shrugging face"

```
¯\_(ツ)_/¯ ⇒ Classic shrug
¯\(ツ)/¯ ⇒ Short shrug
¯\_( ͡° ͜ʖ ͡°)_/¯ ⇒ Lenny shrug
¯\_(•_•)_/¯ ⇒ Blank shrug
¯\_(ಠ_ಠ)_/¯ ⇒ Disapproving shrug
¯\_(⊙_ʖ⊙)_/¯ ⇒ Silly shrug
¯\_(°ペ)_/¯ ⇒ Confused shrug
¯\_(シ)_/¯ ⇒ Smiling shrug
¯\_(◉‿◉)_/¯ ⇒ Wide-eyed shrug
¯\_(-_-)_/¯ ⇒ Tired shrug
¯\_(´・ω・`)_/¯ ⇒ Awkward shrug
¯\_(￣ー￣)_/¯ ⇒ Smug shrug
¯\_(・_・)_/¯ ⇒ Puzzled shrug
¯\_(ತ_ʖತ)_/¯ ⇒ Skeptical shrug
```

Group `hands-up` · tags: shrug, whatever, meh, oh well · description: "face shrugging with hands up"

```
┐(￣ヘ￣)┌ ⇒ Whatever shrug
┐(￣ー￣)┌ ⇒ Unbothered shrug
┐(´ー`)┌ ⇒ Lazy shrug
┐(´～｀)┌ ⇒ Nonchalant shrug
┐(￣～￣)┌ ⇒ Meh shrug
┐( ˘_˘ )┌ ⇒ Resigned shrug
┐(‘～`;)┌ ⇒ Nervous shrug
┐(︶▽︶)┌ ⇒ Oh well grin
┐(￣∀￣)┌ ⇒ Grinning shrug
┐(´∀｀)┌ ⇒ Laid-back shrug
┐(シ)┌ ⇒ Tiny shrug
┐( ´ д ` )┌ ⇒ Exasperated shrug
┐( ˘ ､ ˘ )┌ ⇒ Sighing shrug
┐(´д｀)┌ ⇒ Fed up shrug
┐(︶︿︶)┌ ⇒ Bored shrug
╮(￣～￣)╭ ⇒ Who knows
╮(￣▽￣)╭ ⇒ Oh well
╮(╯▽╰)╭ ⇒ Hopeless shrug
╮(╯∀╰)╭ ⇒ Cheeky shrug
╮(︶﹏︶)╭ ⇒ Grumpy shrug
╮(︶︿︶)╭ ⇒ Unimpressed shrug
╮( ˘ ､ ˘ )╭ ⇒ Sighing meh
╮(─▽─)╭ ⇒ Deadpan shrug
╮(￣ω￣;)╭ ⇒ Sweaty shrug
╮(. ❛ ᴗ ❛.)╭ ⇒ Innocent shrug
```

Group `other-shrug` · tags: shrug, no idea, confused, whatever · description: "face shrugging with arms out"

```
ヽ(ー_ー )ノ ⇒ Not my problem
ヽ(´ー｀)┌ ⇒ Half shrug
ヽ(～～～ )ノ ⇒ Speechless shrug
乁( •_• )ㄏ ⇒ No idea
乁(ツ)ㄏ ⇒ Simple no idea
乁( ◔ ౪◔)「 ⇒ Goofy no idea
ʅ(°_°)ʃ ⇒ Clueless
ʅ(￣ー￣)ʃ ⇒ Smirking clueless
ʅ（´◔౪◔）ʃ ⇒ Derpy clueless
ʅ(ツ)ʃ ⇒ Carefree clueless
ʅ(◞‿◟)ʃ ⇒ Sheepish clueless
```

### Category `bunny` — Bunny (main group: Animals; 51 kaomoji, dedicated page: /bunny-kaomoji)

Group `bunny-ears` · tags: bunny, rabbit, bunny ears, animal · description: "bunny face with long ears"

```
(\_/) ⇒ Bunny ears
／(・ × ・)＼ ⇒ Bunny with long ears
／(=・ x ・=)＼ ⇒ Rabbit with whiskers
／(^ x ^)＼ ⇒ Happy bunny
／(^ x ^=)＼ ⇒ Smiling rabbit
／(≧ x ≦)＼ ⇒ Excited bunny
／(・x・)＼ ⇒ Plain bunny
／(*・x・*)＼ ⇒ Blushing bunny
／(￣x￣)＼ ⇒ Sleepy rabbit
／(=´x`=)＼ ⇒ Smug rabbit
／(˃ᆺ˂)＼ ⇒ Squealing bunny
／(•ᆺ•)＼ ⇒ Curious bunny
／(◕ᆺ◕)＼ ⇒ Wide-eyed bunny
／(˘ᆺ˘)＼ ⇒ Calm bunny
／(ㆁᆺㆁ)＼ ⇒ Dazed bunny
／(╥ᆺ╥)＼ ⇒ Crying bunny
／(>ᆺ<)＼ ⇒ Flustered bunny
／(°ᆺ°)＼ ⇒ Shocked bunny
／(ᵔᆺᵔ)＼ ⇒ Content bunny
／(-ᆺ-)＼ ⇒ Dozing bunny
／(´•ᆺ•`)＼ ⇒ Worried bunny
／(｡•ㅅ•｡)＼ ⇒ Shy little bunny
```

Group `bunny-face` · tags: bunny, rabbit, cute, soft · description: "cute bunny face"

```
૮ ˶ᵔ ᵕ ᵔ˶ ა ⇒ Sweet bunny
૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა ⇒ Snug little bunny
૮₍ ˃ ⤙ ˂ ₎ა ⇒ Pouty bunny
૮₍´˶• . • ⑅ ₎ა ⇒ Teary-eyed bunny
૮(˶ᵔᵕᵔ˶)ა ⇒ Fluffy bunny
૮₍ ˶•⤙•˶ ₎ა ⇒ Kissy bunny
૮₍ ´• ˕ •` ₎ა ⇒ Thoughtful bunny
૮₍ ˃ ᵕ ˂ ₎ა ⇒ Giggling bunny
૮₍ ꈍ ᴗ ꈍ ₎ა ⇒ Peaceful bunny
૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა♡ ⇒ Bunny with a heart
(•ㅅ•) ⇒ Little bunny face
(・ㅅ・) ⇒ Tiny rabbit face
(◕ㅅ◕) ⇒ Round-eyed bunny
(˘ㅅ˘) ⇒ Drowsy bunny
(｡•ㅅ•｡)♡ ⇒ Bunny sending love
(⁀ㅅ⁀) ⇒ Smiling bunny nose
(ᵔㅅᵔ) ⇒ Happy bunny nose
(っ•ㅅ•)っ ⇒ Bunny wants a hug
(ฅ•ㅅ•ฅ) ⇒ Bunny paws
```

Group `bunny-hop` · tags: bunny, rabbit, hop, happy · description: "bunny with paws up"

```
∩(・ω・)∩ ⇒ Bunny paws up
∩( ・ω・)∩ ⇒ Hopping bunny
∩(￣ー￣)∩ ⇒ Smug hopping bunny
∩(︶▽︶)∩ ⇒ Joyful hop
∩(´∀｀)∩ ⇒ Laughing bunny
∩(^ω^)∩ ⇒ Cheerful bunny hop
∩(>ω<)∩ ⇒ Excited bunny hop
∩(=・ω・=)∩ ⇒ Whiskered hop
∩(˘ᵕ˘)∩ ⇒ Gentle bunny hop
∩(•ㅅ•)∩ ⇒ Little bunny hop
```

### Category `angry` — Angry (main group: Emotions; 59 kaomoji, dedicated page: /angry-kaomoji)

Group `mad` · tags: angry, mad, rage, annoyed · description: "angry face"

```
(╬ Ò﹏Ó) ⇒ Seething frown
(╬ಠ益ಠ) ⇒ Furious glare
(╬≖_≖) ⇒ Annoyed stare
(╬￣皿￣) ⇒ Gritting teeth
(╬ﾟдﾟ) ⇒ Fuming
(＃`Д´) ⇒ Shouting angrily
(＃｀皿´) ⇒ Snarling
(#`皿´) ⇒ Clenched teeth
(｀Д´) ⇒ Yelling
(｀皿´＃) ⇒ Growling
(｀Д´＃) ⇒ Angry shout
(｀ε´) ⇒ Pouting angrily
(｀ー´) ⇒ Irritated
(`ヘ´) ⇒ Grumpy frown
(｀へ´) ⇒ Sulky frown
(-_-メ) ⇒ Irritated vein
(ﾒ` ﾛ ´) ⇒ Ticked off
(ﾒ｀д´) ⇒ Cross face
(ꐦ ಠ皿ಠ ) ⇒ Raging glare
(҂ `з´ ) ⇒ Scowling
(っ`-´c) ⇒ Grumbling
(◣_◢) ⇒ Menacing glare
(▼皿▼#) ⇒ Evil fury
(ﾟДﾟ#) ⇒ Outraged
(๑`^´๑) ⇒ Huffy pout
(⋋▂⋌) ⇒ Boiling over
```

Group `glare` · tags: angry, glare, annoyed, unimpressed · description: "glaring disapproving face"

```
(ಠ_ಠ) ⇒ Unimpressed stare
(ಠ益ಠ) ⇒ Raging stare
(ಠ︵ಠ) ⇒ Disapproving frown
(ಠ ∩ಠ) ⇒ Glaring mouth open
(ಠ⌣ಠ) ⇒ Smug glare
ಠ_ಠ ⇒ Look of disapproval
ಠ╭╮ಠ ⇒ Judging stare
(¬_¬) ⇒ Side-eye
(¬_¬") ⇒ Annoyed side-eye
(¬､¬) ⇒ Doubtful side-eye
(￣^￣) ⇒ Grumpy huff
(￣ヘ￣) ⇒ Pouty grump
(￣︿￣) ⇒ Sour frown
(눈_눈) ⇒ Unamused stare
(눈‸눈) ⇒ Fed-up stare
```

Group `fight` · tags: angry, fight, rage, furious · description: "furious face ready to fight"

```
(#`Д´)ﾉ ⇒ Angry wave
(ノಠ益ಠ)ノ ⇒ Furious arms up
(ノ°益°)ノ ⇒ Enraged arms up
(ノ｀Д´)ノ ⇒ Shouting arms up
(屮｀∀´)屮 ⇒ Mocking taunt
(•̀o•́)ง ⇒ Determined fist
(ง'̀-'́)ง ⇒ Ready to fight
(ง •̀_•́)ง ⇒ Fighting stance
(╯°益°)╯ ⇒ Raging lunge
(╯`Д´)╯ ⇒ Angry lunge
ヽ(`Д´)ﾉ ⇒ Throwing a fit
ヽ(#`Д´)ﾉ ⇒ Tantrum
ヽ(｀⌒´メ)ノ ⇒ Stomping mad
ヾ(｀ヘ´)ﾉﾞ ⇒ Shooing away
ヾ(`Д´*)ﾉ ⇒ Flailing angrily
٩(╬ʘ益ʘ╬)۶ ⇒ Full rage
٩(ఠ益ఠ)۶ ⇒ Beyond furious
(๑•̀ㅁ•́๑)✧ ⇒ Fired up
```

### Category `angel` — Angel (main group: Love; 53 kaomoji, dedicated page: /angel-kaomoji)

Group `angel-wings` · tags: angel, wings, innocent, sweet · description: "angel face with wings"

```
ʚ(ˊᗜˋ)ɞ ⇒ Happy angel
ʚ( ˘ᵕ˘ )ɞ ⇒ Peaceful angel
ʚ(•‿•)ɞ ⇒ Simple angel
ʚ(◕‿◕)ɞ ⇒ Bright-eyed angel
ʚ(｡◕‿◕｡)ɞ ⇒ Sweet little angel
ʚ(*´▽`*)ɞ ⇒ Blissful angel
ʚ(˶ᵔ ᵕ ᵔ˶)ɞ ⇒ Gentle angel
ʚ(ᵔ◡ᵔ)ɞ ⇒ Smiling angel
ʚ(♡‿♡)ɞ ⇒ Loving angel
ʚ(˘︶˘)ɞ ⇒ Content angel
ʚ( ˶ˆᗜˆ˵ )ɞ ⇒ Cheerful angel
ʚ(＾▽＾)ɞ ⇒ Grinning angel
ʚ(◡ ω ◡)ɞ ⇒ Dreamy angel
ʚ(ꈍᴗꈍ)ɞ ⇒ Serene angel
ʚ(˃ᴗ˂)ɞ ⇒ Giggling angel
ʚ(-ω-)ɞ ⇒ Sleepy angel
ʚ(╥﹏╥)ɞ ⇒ Sad angel
ʚ(✿◠‿◠)ɞ ⇒ Flower angel
ʚ(⸝⸝ᵕᴗᵕ⸝⸝)ɞ ⇒ Shy angel
ʚ(｀・ω・´)ɞ ⇒ Determined angel
ʚ(ᵕᴗᵕ)ɞ ⇒ Calm angel
ʚ(˘◡˘)ɞ ⇒ Soft angel smile
ʚ(^‿^)ɞ ⇒ Joyful angel
꒰ঌ(•ᴗ•)໒꒱ ⇒ Tiny angel
｡ﾟ✧ ʚ(•ᴗ•)ɞ ✧ﾟ｡ ⇒ Sparkling angel
✧ ʚ(ˊᵕˋ)ɞ ✧ ⇒ Twinkling angel
꒰ঌ(ᵔᴗᵔ)໒꒱ ⇒ Little angel
꒰ঌ(˶ˆᗜˆ˵)໒꒱ ⇒ Beaming angel
꒰ঌ(◕‿◕)໒꒱ ⇒ Wide-eyed angel
꒰ঌ(˘ᵕ˘)໒꒱ ⇒ Restful angel
꒰ঌ(♡‿♡)໒꒱ ⇒ Angel in love
꒰ঌ(ꈍᴗꈍ)໒꒱ ⇒ Dreaming angel
```

Group `flying-angel` · tags: angel, flying, happy, innocent · description: "happy flying angel"

```
ଘ(੭ˊᵕˋ)੭ ⇒ Flying angel
ଘ(੭*ˊᵕˋ)੭* ⇒ Soaring angel
ଘ(੭ˊ꒳ˋ)੭✧ ⇒ Sparkly flying angel
ଘ(⸝⸝ᵕᴗᵕ⸝⸝)ଓ ⇒ Blushing angel
ଘ(˶ᵔ ᵕ ᵔ˶)ଓ ⇒ Rosy-cheeked angel
ଘ(•‿•)ଓ ⇒ Angel with wings out
ଘ(◕‿◕)ଓ ⇒ Fluttering angel
ଘ( ˊᵕˋ )ଓ ⇒ Hovering angel
⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾ ⇒ Floating angel
⁽⁽ଘ(ˊᗜˋ)ଓ⁾⁾ ⇒ Bouncing angel
ଘ(｡•́‿•̀｡)ଓ ⇒ Kind angel
ଘ(♡‿♡)ଓ ⇒ Lovestruck angel
ଘ(˘︶˘)ଓ ⇒ Drifting angel
ଘ(੭•‿•)੭ ⇒ Angel arms up
ଘ(੭◕‿◕)੭ ⇒ Waving angel
ଘ(੭♡‿♡)੭ ⇒ Angel full of love
ଘ(੭˘︶˘)੭ ⇒ Cozy flying angel
ଘ(੭ˊᗜˋ)੭ ⇒ Celebrating angel
ଘ(੭ᵔ◡ᵔ)੭ ⇒ Happy flying angel
ଘ(੭˃ᴗ˂)੭ ⇒ Excited flying angel
ଘ(✿◠‿◠)ଓ ⇒ Flower flying angel
```

### Category `blush` — Blush (main group: Emotions; 52 kaomoji, dedicated page: /blush-kaomoji)

Group `shy` · tags: blush, shy, embarrassed, flustered · description: "shy blushing face"

```
(⁄ ⁄•⁄ω⁄•⁄ ⁄) ⇒ Shy and blushing
(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄) ⇒ Embarrassed squirm
(⁄ ⁄^⁄ω⁄^⁄ ⁄) ⇒ Bashful blush
(*/ω＼*) ⇒ Hiding face
(*/▽＼*) ⇒ Peeking through hands
(*/_＼) ⇒ Covering face
(*ノωノ) ⇒ Hiding a smile
(*ノ▽ノ) ⇒ Hiding a grin
(*ﾉ∀`*) ⇒ Embarrassed giggle
(〃ノωノ) ⇒ Shyly hiding
(//▽//) ⇒ Bright red cheeks
(//ω//) ⇒ Red-faced
(/ω＼) ⇒ Covering eyes
(/▽＼) ⇒ Too shy to look
(>/////<) ⇒ Totally flustered
(⸝⸝⸝>﹏<⸝⸝⸝) ⇒ Flustered squirm
(＞﹏＜) ⇒ Cringing
(〃＞＿＜;〃) ⇒ Awkward embarrassment
(ﾉ∀`*) ⇒ Sheepish laugh
(✿//▽//) ⇒ Flower blush
(*/ᴗ＼*) ⇒ Hiding shy smile
```

Group `rosy` · tags: blush, rosy cheeks, happy, cute · description: "smiling face with rosy cheeks"

```
(〃▽〃) ⇒ Flustered smile
(〃ω〃) ⇒ Rosy omega face
(〃∀〃) ⇒ Blushing grin
(〃´∀`) ⇒ Smitten blush
(〃ﾟ3ﾟ〃) ⇒ Whistling innocently
(*^.^*) ⇒ Rosy cheeks
(*^_^*) ⇒ Blushing smile
(*´ω`*) ⇒ Warm blush
(o^ ^o) ⇒ Shy grin
(✿´‿`) ⇒ Gentle blush
(˶˃ᆺ˂˶) ⇒ Squinting blush
(˶• ᴗ •˶) ⇒ Soft rosy cheeks
(˶ˊᵕˋ˶) ⇒ Sweet blush
(⸝⸝⸝• ω •⸝⸝⸝) ⇒ Glowing cheeks
(⸝⸝ᵕᴗᵕ⸝⸝) ⇒ Peaceful blush
(⸝⸝˃ᴗ˂⸝⸝) ⇒ Giggly blush
(灬º‿º灬) ⇒ Blushing happily
(灬╹ω╹灬) ⇒ Bashful smile
(灬ºωº灬) ⇒ Pink-cheeked wonder
(๑•́ ₃ •̀๑) ⇒ Pouty blush
(๑>ᴗ<๑) ⇒ Grinning blush
(っ˶´ ˘ `˶ς) ⇒ Wistful blush
(●´ω｀●) ⇒ Round-cheeked blush
(●´∀｀●) ⇒ Blushing laugh
(●＾o＾●) ⇒ Delighted blush
(●♡∀♡) ⇒ Lovesick blush
(*≧ω≦*) ⇒ Squealing blush
(〃ˆᴗˆ〃) ⇒ Pleased blush
(*ˊᵕˋ*) ⇒ Shy happiness
(⸝⸝ᵔᴗᵔ⸝⸝) ⇒ Content blush
(〃•ᴗ•〃) ⇒ Rosy little face
```

### Category `hug` — Hug (main group: Love; 24 kaomoji, homepage section only)

Group `hug` · tags: hug, cuddle, comfort, friendship · description: "face reaching out for a hug"

```
(づ｡◕‿‿◕｡)づ ⇒ Big warm hug
(っ´▽`)っ ⇒ Coming in for a hug
⊂(・▽・⊂) ⇒ Open arms
⊂(◉‿◉)つ ⇒ Excited open arms
⊂(´・ω・｀⊂) ⇒ Shy hug
⊂(￣▽￣)⊃ ⇒ Wide open arms
(つ≧▽≦)つ ⇒ Excited hug
(つ✧ω✧)つ ⇒ Sparkly hug
(つ ͡° ͜ʖ ͡°)つ ⇒ Lenny hug
(づ◡﹏◡)づ ⇒ Sleepy hug
(づ ◕‿◕ )づ ⇒ Happy hug
(づ｡◕‿◕｡)づ ⇒ Kawaii hug
(っ´ω`)ﾉ(╥ω╥) ⇒ Comforting a friend
(ノ_<。)ヾ(´ ▽ ` ) ⇒ Cheering someone up
(っ＾▿＾)っ ⇒ Cheerful hug
(っ◕‿◕)っ ⇒ Friendly hug
(っಠ‿ಠ)っ ⇒ Suspicious hug
(⊃｡•́‿•̀｡)⊃ ⇒ Gentle hug
⊂(´• ω •`⊂) ⇒ Soft open arms
(ɔ◔‿◔)ɔ ♥ ⇒ Hug with love
(っ.❛ ᴗ ❛.)っ ⇒ Cozy hug
(∩˃o˂∩)♡ ⇒ Squeeze with a heart
(つ˵•́ω•̀˵)つ ⇒ Eager hug
⊂((・▽・))⊃ ⇒ Wiggly hug
```

### Category `bear` — Bear (main group: Animals; 29 kaomoji, homepage section only)

Group `bear` · tags: bear, teddy, animal, cute · description: "bear face"

```
ʕ•ᴥ•ʔ ⇒ Classic bear
ʕ·ᴥ·ʔ ⇒ Little bear
ʕ ᵔᴥᵔ ʔ ⇒ Happy bear
ʕ￫ᴥ￩ʔ ⇒ Side-eyeing bear
ʕ→ᴥ←ʔ ⇒ Shifty bear
ʕ´•ᴥ•`ʔ ⇒ Shy bear
ʕ≧ᴥ≦ʔ ⇒ Excited bear
ʕ•̀ω•́ʔ✧ ⇒ Determined bear
ʕ ꈍᴥꈍʔ ⇒ Sleepy bear
ʕ ˵• ₒ •˵ ʔ ⇒ Surprised little bear
ʕ ˙ᴥ˙ ʔ ⇒ Calm bear
ʕ ·(エ)· ʔ ⇒ Teddy bear
ʕっ•ᴥ•ʔっ ⇒ Bear reaching out
ʕ ⊃･ ◡ ･ ʔ⊃ ⇒ Bear offering a hug
ʕ ◕ᴥ◕ ʔ ⇒ Bright-eyed bear
ʕ•ᴥ•ʔﾉ♡ ⇒ Bear sending love
ʕ ಠᴥಠ ʔ ⇒ Disapproving bear
ʕ T ᴥ T ʔ ⇒ Crying bear
ʕ ᵕᴥᵕ ʔ ⇒ Peaceful bear
ʕ ˶ᵔ ᴥ ᵔ˶ ʔ ⇒ Rosy-cheeked bear
ʕ ´ᴥ` ʔ ⇒ Mellow bear
ʕ⊙ᴥ⊙ʔ ⇒ Surprised bear
ʕ ﾟ ● ﾟʔ ⇒ Bear with a big nose
⊂(￣(ｴ)￣)⊃ ⇒ Bear hug
(￣(ｴ)￣) ⇒ Bear face
(／(ｴ)＼) ⇒ Bear covering eyes
(*￣(ｴ)￣*) ⇒ Blushing bear
(´(ｴ)｀) ⇒ Shy bear face
(ᵔᴥᵔ) ⇒ Smiling bear
```

### Category `dog` — Dog (main group: Animals; 21 kaomoji, homepage section only)

Group `dog` · tags: dog, puppy, animal, cute · description: "dog face"

```
૮ ˶• ﻌ •˶ ა ⇒ Cute puppy
૮ ･ﻌ･ა ⇒ Little puppy
૮ ◞ ﻌ ◟ ა ⇒ Sad puppy
૮ ⚆ﻌ⚆ა ⇒ Wide-eyed puppy
૮ ˶ᵔ ﻌ ᵔ˶ ა ⇒ Happy puppy
∪･ω･∪ ⇒ Floppy-eared dog
∪＾ェ＾∪ ⇒ Grinning dog
∪´ω`∪ ⇒ Content dog
U＾ェ＾U ⇒ Cheerful dog
U・ᴥ・U ⇒ Happy dog
U^ｪ^U ⇒ Smiling dog
U •ﻌ• U ⇒ Calm dog
(❍ᴥ❍ʋ) ⇒ Drooling dog
(◕ᴥ◕ʋ) ⇒ Bright-eyed dog
(ᵔᴥᵔʋ) ⇒ Joyful dog
V●ᴥ●V ⇒ Pointy-eared dog
V•ᴥ•V ⇒ Pointy-eared pup
V^ᴥ^V ⇒ Happy pointy-eared pup
(・ｪ・) ⇒ Small dog face
(U・x・U) ⇒ Floppy-eared puppy
(ᐡ•ﻌ•ᐡ) ⇒ Fluffy dog
```

### Category `sleepy` — Sleepy (main group: Emotions; 20 kaomoji, homepage section only)

Group `sleepy` · tags: sleepy, sleep, tired, zzz, night · description: "sleeping face"

```
(－_－) zzZ ⇒ Snoozing
(￣o￣) zzZZzzZZ ⇒ Snoring loudly
(∪｡∪)｡｡｡zzZ ⇒ Deep sleep
(-.-)Zzz... ⇒ Dozing off
(ᴗ˳ᴗ) ⇒ Peacefully asleep
(ᴗ_ᴗ) ⇒ Eyes closed
(-_-) zzZ ⇒ Napping
(￣ρ￣)..zzZZ ⇒ Drooling in sleep
(＿ ＿*) Z z z ⇒ Face down asleep
(x . x) ~~zzZ ⇒ Knocked out
(´〜｀*) zzz ⇒ Sleepy sigh
(=_=) ⇒ Exhausted
(～﹃～)~zZ ⇒ Drowsy drool
(ᵕ—ᴗ—) ⇒ Resting eyes
(｡-ω-)zzz ⇒ Cozy nap
(￣ー￣)zzZ ⇒ Smug nap
(～ o ～) Zz ⇒ Yawning
(ᴗ ᴗ)ᶻᶻᶻ ⇒ Sound asleep
(っ- ‸ - ς) ⇒ Drifting off
(-ω-) zzZ ⇒ Comfy snooze
```

### Category `surprised` — Surprised (main group: Emotions; 26 kaomoji, homepage section only)

Group `surprised` · tags: surprised, shocked, wow, omg · description: "surprised shocked face"

```
(°ロ°) ⇒ Shocked face
(⊙_⊙) ⇒ Wide-eyed stare
(⊙ω⊙) ⇒ Stunned
(⊙▽⊙) ⇒ Amazed
(⊙０⊙) ⇒ Speechless
(O_O) ⇒ Wide eyes
(o_O) ⇒ Confused surprise
(O_o) ⇒ Double take
(°o°) ⇒ Gasping
(ﾟДﾟ) ⇒ Startled
(☉｡☉)! ⇒ Surprised blink
(◎_◎;) ⇒ Dizzy surprise
(＊〇□〇)……！ ⇒ Utterly shocked
(・□・;) ⇒ Awkward surprise
(゜-゜) ⇒ Blank surprise
(□_□) ⇒ Blank stare
w(°ｏ°)w ⇒ Whoa
Σ(°△°|||) ⇒ Horrified
Σ(O_O) ⇒ Shocked gasp
Σ(ﾟДﾟ) ⇒ Startled shout
Σ(°ロ°) ⇒ Startled jump
Σ(っ °Д °;)っ ⇒ Running away in shock
(ʘᗩʘ') ⇒ Jaw dropped
(ʘ_ʘ) ⇒ Staring in shock
∑(O_O;) ⇒ Nervous shock
ヽ(°〇°)ﾉ ⇒ Arms up in shock
```

### Category `table-flip` — Table Flip (main group: Actions; 21 kaomoji, homepage section only)

Group `flip` · tags: table flip, rage, flip, angry · description: "face flipping a table"

```
(╯°□°)╯︵ ┻━┻ ⇒ Classic table flip
(ノಠ益ಠ)ノ彡┻━┻ ⇒ Angry table flip
(╯ರ ~ ರ)╯︵ ┻━┻ ⇒ Grumpy table flip
┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻ ⇒ Double table flip
(ﾉ≧∇≦)ﾉ ﾐ ┸━┸ ⇒ Happy table flip
(╯‵□′)╯︵┻━┻ ⇒ Furious table flip
(┛ಠ_ಠ)┛彡┻━┻ ⇒ Disapproving flip
(┛◉Д◉)┛彡┻━┻ ⇒ Wild-eyed flip
(ノ°Д°）ノ︵ ┻━┻ ⇒ Shocked table flip
(ﾉ｀Д´)ﾉ彡┻━┻ ⇒ Raging flip
┻━┻ ︵ ¯\(ツ)/¯ ︵ ┻━┻ ⇒ Shrugging double flip
(╯°Д°)╯︵ /(.□ . \) ⇒ Flipping a person
ʕノ•ᴥ•ʔノ ︵ ┻━┻ ⇒ Bear flips table
(ﾉ´･ω･)ﾉ ﾐ ┸━┸ ⇒ Casual table flip
(╯✧∇✧)╯︵ ┻━┻ ⇒ Sparkly table flip
```

Group `unflip` · tags: table flip, calm down, put table back · description: "face calmly putting a table back"

```
┬─┬ノ( º _ ºノ) ⇒ Putting the table back
┬─┬ ノ( ゜-゜ノ) ⇒ Calmly fixing the table
┬──┬ ¯\_(ツ) ⇒ Shrugging at the table
(ヘ･_･)ヘ┳━┳ ⇒ Calming down
┳━┳ ヽ(ಠل͜ಠ)ﾉ ⇒ Smug table fix
(ノ^_^)ノ┻━┻ ┬─┬ ノ( ^_^ノ) ⇒ Flip and fix
```

### Category `wave` — Wave (main group: Actions; 19 kaomoji, homepage section only)

Group `wave` · tags: wave, hello, hi, bye · description: "face waving hello"

```
(・ω・)ノ ⇒ Little wave
(^_^)/ ⇒ Simple hello
(＾▽＾)/ ⇒ Happy hello
( ´ ▽ ` )ﾉ ⇒ Friendly wave
(^-^)/ ⇒ Cheerful hi
(｡･∀･)ﾉﾞ ⇒ Waving bye
(^o^)/ ⇒ Excited hello
(￣▽￣)ノ ⇒ Casual hi
(°▽°)/ ⇒ Waving hello
(・∀・)ノ ⇒ Bright hello
ヾ(＾∇＾) ⇒ Cheerful bye
ヾ(☆▽☆) ⇒ Starry wave
ヾ(・ω・*) ⇒ Cute wave
ヾ(￣▽￣) Bye~Bye~ ⇒ Bye-bye
(＾０＾)ノ ⇒ Loud hello
(*＾▽＾)／ ⇒ Big wave
ヾ(•ω•`)o ⇒ Shy wave
(｡･ω･)ﾉﾞ ⇒ Gentle wave
(⌒▽⌒)/ ⇒ Sunny wave
```
