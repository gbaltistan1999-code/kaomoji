// Public site configuration. No environment variables are used anywhere.
// BEFORE LAUNCH: set `url` to the real canonical domain (no trailing slash)
// and `contactEmail` to a real inbox you check. See README "Launch checklist".

export const siteConfig = {
  name: "KaomojiZone",
  /** Logo is rendered as two parts: charcoal + accent. */
  logo: { first: "Kaomoji", second: "Zone" },
  /** TODO(owner): replace with the real domain before launch. */
  url: "https://example.com",
  /** TODO(owner): replace with a real email before launch. Empty string hides mailto links and shows a notice. */
  contactEmail: "",
  /** Date the legal pages were last reviewed (ISO). Update when you edit them. */
  legalUpdated: "2026-11-12",
} as const;

export const isPlaceholderDomain = siteConfig.url.includes("example.com");
