import type { LocaleBundle } from "@/types/i18n";

// Legal pages are written to describe how this site actually works.
// Have them reviewed for your jurisdiction before launch (see README).
export const pages: LocaleBundle["pages"] = {
  about: {
    title: "About KaomojiZone",
    description: "What KaomojiZone is, how the kaomoji library is put together, and how the site handles your privacy.",
    h1: "About KaomojiZone",
    intro: "KaomojiZone is a free, simple library of Japanese text faces (kaomoji) that you can search, browse and copy with one click.",
    sections: [
      {
        heading: "What this site does",
        paragraphs: [
          "We collect 828 kaomoji in 18 categories, organized by emotion, animal and action, each with a short descriptive label. You can search, filter, copy in one click, copy in a Discord-safe format, and build your own faces in the [Kaomoji Maker](page:maker).",
          "The site is available in English, Spanish, Indonesian, Brazilian Portuguese and Vietnamese. The kaomoji are the same in every language. Labels, search words and explanations are translated.",
        ],
      },
      {
        heading: "How the library is put together",
        paragraphs: [
          "Kaomoji are common text expressions shared widely across the internet. Our library is a curated selection: every kaomoji appears only once, is placed in the category where it fits best, and has a unique, human-readable label. We check that each one is made of standard Unicode characters.",
          "We don't publish popularity rankings or “most copied” counts, because we don't track what visitors copy.",
        ],
      },
      {
        heading: "Our approach to privacy",
        paragraphs: [
          "Searching, copying and the Kaomoji Maker all run inside your browser. We don't use analytics, advertising or tracking scripts. If you allow it, your recently copied kaomoji and Discord-safe setting are remembered in your own browser's storage, and nowhere else. See the [Privacy Policy](page:privacy) for details.",
        ],
      },
      {
        heading: "Honest limitations",
        list: [
          "Some kaomoji use characters that older devices or certain apps can't display. They may appear as boxes.",
          "Screen readers often read kaomoji symbol by symbol, so we give every kaomoji a spoken label on this site.",
          "Platforms like Discord can change how kaomoji look because of text formatting. Our Discord-safe copy helps with that.",
        ],
      },
      {
        heading: "Get in touch",
        paragraphs: [
          "Found a kaomoji that displays incorrectly, or want to suggest one? Visit the [contact page](page:contact).",
        ],
      },
    ],
  },
  contact: {
    title: "Contact KaomojiZone",
    description: "How to contact KaomojiZone with kaomoji suggestions, display problems or other questions.",
    h1: "Contact us",
    intro: "Suggestions for new kaomoji, reports of faces that don't display correctly, and general feedback are all welcome.",
    sections: [
      {
        heading: "Helpful details to include",
        list: [
          "For display problems: the kaomoji, your device, operating system and app, and what you see instead (boxes, question marks, missing parts).",
          "For suggestions: the kaomoji itself and which category you think it fits.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description: "How KaomojiZone handles your data: searching, copying and making kaomoji happen in your browser, with no analytics or advertising.",
    h1: "Privacy Policy",
    intro: "This policy explains what information KaomojiZone handles and how. Short version: what you search, copy or create stays in your browser.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "KaomojiZone (the “site”, “we”) is a website offering kaomoji to copy and paste. You can reach us through the [contact page](page:contact).",
        ],
      },
      {
        heading: "Information we do not collect",
        paragraphs: [
          "We do not require accounts, and we do not ask for your name, email or other personal information to use the site. What you type in the search box, the kaomoji you copy and the faces you build in the Kaomoji Maker are processed only in your browser. They are never sent to us or stored on a server.",
          "We do not use analytics services, advertising networks, social media tracking pixels or fingerprinting.",
        ],
      },
      {
        heading: "Information stored in your browser",
        paragraphs: ["The site uses your browser's local storage (not cookies) for the following:"],
        list: [
          "Your cookie and storage choice (key: kz-consent). This is necessary so we don't ask you on every page. It stays until you clear your browser data or change your choice.",
          "Only if you allow Preferences: your recently copied kaomoji (key: kz-recent, up to 12 items) and your Discord-safe copy setting (key: kz-discord-safe).",
        ],
      },
      {
        heading: "Server and hosting logs",
        paragraphs: [
          "Like any website, the servers that deliver these pages receive technical information needed to send you the page, such as your IP address, browser type and the page requested. Our hosting provider may keep this in short-term logs for security and reliability. We do not use these logs to identify or profile visitors. [Owner: name your hosting provider and its log retention period here before launch.]",
        ],
      },
      {
        heading: "Clipboard access",
        paragraphs: [
          "When you click a kaomoji, the site writes that kaomoji to your clipboard. The site never reads your clipboard.",
        ],
      },
      {
        heading: "Your choices and rights",
        list: [
          "Change or withdraw your storage choice at any time with “Cookie settings” in the footer. Withdrawing Preferences deletes your recently copied list and Discord-safe setting from your browser.",
          "You can clear all site data through your browser settings.",
          "Depending on where you live (for example under the GDPR in the EU/UK, LGPD in Brazil or similar laws), you may have rights to access, correct or delete personal data. Because we don't hold personal data about visitors, there is normally nothing for us to retrieve, but you can contact us with any request.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "The site is suitable for general audiences and does not knowingly collect personal information from anyone, including children.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "If we add a feature that changes how data is handled (for example, an analytics service), we will update this policy first and, where required, ask for your consent before it runs.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    description: "The terms for using KaomojiZone, including acceptable use, intellectual property and limitations.",
    h1: "Terms and Conditions",
    intro: "By using KaomojiZone you agree to these terms. Please read them. They're short.",
    sections: [
      {
        heading: "Using the site",
        paragraphs: [
          "KaomojiZone is provided free for personal and commercial use. You may copy kaomoji from the site and use them in your messages, posts, profiles, designs and other content.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: ["You agree not to use the site or its content to:"],
        list: [
          "Send spam or harass, threaten or impersonate others.",
          "Evade the rules, filters or moderation of other platforms.",
          "Disrupt the site, for example by overloading it with automated requests or trying to break its security.",
          "Republish the site's compiled library, labels or written content as your own website or product in bulk.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Individual kaomoji are common text expressions and are not claimed as our property. The site's design, written explanations, card labels, translations and the selection and arrangement of the library are our work and are protected by applicable law. Quoting small parts with a link back is welcome.",
        ],
      },
      {
        heading: "Compatibility and availability",
        paragraphs: [
          "Kaomoji are made of Unicode characters that may not display on every device, font or platform, and may be changed by a platform's formatting. We do our best to keep the site available and accurate, but we don't guarantee that it will always be available, error-free, or that every kaomoji will work everywhere.",
        ],
      },
      {
        heading: "No warranty and limitation of liability",
        paragraphs: [
          "The site is provided “as is” without warranties of any kind. To the extent permitted by law, we are not liable for any indirect or consequential loss arising from use of the site, including how a pasted kaomoji is displayed or interpreted by others. Some jurisdictions don't allow certain limitations, so parts of this section may not apply to you. [Owner: have this section reviewed for your jurisdiction.]",
        ],
      },
      {
        heading: "Third-party platforms",
        paragraphs: [
          "Mentions of Discord, Instagram, TikTok, X, WhatsApp and other services are for explanation only. We're not affiliated with or endorsed by them. Your use of those services is governed by their own terms.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update these terms. The date at the top shows the latest version. Continued use of the site means you accept the updated terms.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: "KaomojiZone uses no tracking cookies. This page explains the small amount of browser storage we use and how to control it.",
    h1: "Cookie Policy",
    intro: "KaomojiZone does not set tracking or advertising cookies. We use your browser's local storage for a few small things, explained below.",
    sections: [
      {
        heading: "What we store",
        list: [
          "Necessary: kz-consent stores your cookie and storage choice so the banner isn't shown on every page. It can't be switched off, because without it we couldn't remember your choice.",
          "Preferences (optional, off by default): kz-recent stores up to 12 recently copied kaomoji, and kz-discord-safe stores whether Discord-safe copy is on.",
          "Analytics: not used.",
          "Marketing: not used.",
        ],
      },
      {
        heading: "Cookies vs local storage",
        paragraphs: [
          "Cookies are sent to the server with every page request. Local storage stays in your browser and is never sent to us. We use local storage only. Privacy laws generally treat both the same way, so we ask for your consent before storing anything optional.",
        ],
      },
      {
        heading: "Changing your choice",
        paragraphs: [
          "Use “Cookie settings” in the footer of any page to change your choice. If you turn off Preferences, your recently copied list and Discord-safe setting are deleted immediately. You can also clear site data in your browser settings at any time.",
        ],
      },
      {
        heading: "If we add services in the future",
        paragraphs: [
          "If we ever add analytics or other optional services, we will list them here and they will stay off until you opt in.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Important information about kaomoji display, compatibility, accessibility and platform formatting on KaomojiZone.",
    h1: "Disclaimer",
    intro: "Please keep the following limitations in mind when using kaomoji from this site.",
    sections: [
      {
        heading: "Display and compatibility",
        paragraphs: [
          "Kaomoji are built from Unicode characters taken from many scripts and symbol sets. Whether a kaomoji displays correctly depends on the fonts installed on the device showing it and on the app being used. Some kaomoji may appear as boxes, question marks or with misplaced accents on some devices.",
        ],
      },
      {
        heading: "Platform formatting",
        paragraphs: [
          "Some platforms change text automatically. For example, Discord interprets \\ _ * ~ ` | as formatting characters. Our Discord-safe copy option escapes these characters, but other platforms may apply their own rules, character limits or filters.",
        ],
      },
      {
        heading: "Accessibility",
        paragraphs: [
          "Screen readers may read kaomoji symbol by symbol or skip them. Don't rely on kaomoji alone to communicate important information.",
        ],
      },
      {
        heading: "Meanings",
        paragraphs: [
          "The labels and explanations on this site describe how kaomoji are commonly used. Meanings can vary between communities and contexts, so the reader may interpret a kaomoji differently than you intended.",
        ],
      },
      {
        heading: "No affiliation",
        paragraphs: [
          "KaomojiZone is an independent website. It is not affiliated with, sponsored by or endorsed by Discord, Instagram, TikTok, X, WhatsApp, Messenger, Zalo, the Unicode Consortium or any other company or organization mentioned on this site. All trademarks belong to their owners.",
        ],
      },
    ],
  },
  faq: {
    title: "Kaomoji FAQ: Common Questions Answered",
    description: "Answers to common questions about kaomoji: what they are, how to type and copy them, why they show boxes, and how to use them on Discord.",
    h1: "Kaomoji FAQ",
    intro: "Quick answers to the questions people ask most about kaomoji and this site.",
    groups: [
      {
        heading: "About kaomoji",
        faqs: [
          {
            q: "What is a kaomoji?",
            a: "A kaomoji is a face made from text characters, read upright, such as (◕‿◕) or (╥﹏╥). The word is Japanese: kao means face and moji means character.",
          },
          {
            q: "How do you pronounce kaomoji?",
            a: "Roughly “kah-oh-moh-jee”, with four short syllables.",
          },
          {
            q: "Are kaomoji the same as emoticons?",
            a: "Kaomoji are a type of emoticon. Western emoticons like :) are read sideways, while kaomoji are read upright and usually use a wider range of characters.",
          },
          {
            q: "Why do kaomoji use characters from so many languages?",
            a: "Kaomoji creators pick characters for their shape, not their meaning. ಠ (Kannada) makes a stern eye, ω (Greek) a cat mouth, and ฅ (Thai) a paw.",
          },
        ],
      },
      {
        heading: "Copying and typing",
        faqs: [
          {
            q: "How do I copy a kaomoji from this site?",
            a: "Tap or click it. It's copied immediately, and a “Copied” message confirms it. Keyboard users can press Tab to reach a kaomoji, then Enter or Space.",
          },
          {
            q: "Copying doesn't work. What can I do?",
            a: "Some browsers block clipboard access in certain modes. If the automatic copy fails, select the kaomoji text by hand and copy it with your device's normal copy command.",
          },
          {
            q: "Can I type kaomoji without copying them?",
            a: "Yes. Set up text replacement shortcuts on your phone or computer, use a Japanese keyboard's kaomoji suggestions, or on Windows press Windows key + . (period) and open the kaomoji tab.",
          },
        ],
      },
      {
        heading: "Display problems",
        faqs: [
          {
            q: "Why do I see boxes instead of a kaomoji?",
            a: "Your device has no font that includes one or more of its characters. Updating your device or app can help, or choose a kaomoji built from more common characters.",
          },
          {
            q: "It looks fine to me but my friend sees boxes. Why?",
            a: "Each device draws text with its own fonts. Your device has the needed characters, and theirs doesn't.",
          },
          {
            q: "Why do kaomoji look slightly different in different apps?",
            a: "Fonts differ, so character widths and shapes change slightly. Some symbols, like ❤, may also be shown as colorful emoji in certain apps.",
          },
        ],
      },
      {
        heading: "Discord and other platforms",
        faqs: [
          {
            q: "What does Discord-safe copy do?",
            a: "It adds a backslash before \\ _ * ~ ` and |, which Discord would otherwise treat as formatting. The kaomoji then displays exactly as intended.",
          },
          {
            q: "Should I keep Discord-safe copy on all the time?",
            a: "Only when pasting into Discord or other Markdown-based apps. In most other apps the extra backslashes would be visible.",
          },
          {
            q: "Can I use kaomoji in usernames?",
            a: "Often yes, but many platforms restrict usernames to letters and numbers or limit special characters. Display names usually allow more than usernames.",
          },
        ],
      },
    ],
  },
};
