// Shape of every locale's translation bundle. The English bundle defines the
// keys; TypeScript makes every other locale provide the same structure.
// Inline links in content strings use [text](page:<pageKey>) or [text](https://…).
import type { CategoryId, MainGroup, PageCategoryId } from "./kaomoji";
import type { MakerPartId } from "@/lib/maker";

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Kaomoji shown as copyable examples under the section. */
  examples?: string[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface UiDict {
  siteTagline: string;
  nav: {
    home: string;
    categories: string;
    maker: string;
    about: string;
    faq: string;
    menu: string;
    close: string;
    language: string;
    skipToContent: string;
    moreCategories: string;
    breadcrumb: string;
  };
  footer: {
    popular: string;
    site: string;
    legal: string;
    cookieSettings: string;
    rights: string;
    notAffiliated: string;
    madeLocal: string;
  };
  library: {
    searchLabel: string;
    searchPlaceholder: string;
    all: string;
    mainGroups: Record<MainGroup, string>;
    mainGroupsLabel: string;
    categoriesLabel: string;
    copied: string;
    copiedNamed: string;
    copyFailed: string;
    copyAria: string;
    noResults: string;
    noResultsHint: string;
    clearSearch: string;
    resultCount: string;
    discordSafe: string;
    discordSafeHint: string;
    random: string;
    randomHint: string;
    recent: string;
    recentClear: string;
    recentSessionOnly: string;
    seeAll: string;
    showAll: string;
    showLess: string;
    groupFilterLabel: string;
    allGroups: string;
    count: string;
    makerCtaTitle: string;
    makerCtaText: string;
    makerCtaButton: string;
    jsHint: string;
  };
  /** Short category names for pills, e.g. "Cat". */
  categoryNames: Record<CategoryId, string>;
  /** Section headings, e.g. "Cat Kaomoji". */
  categoryTitles: Record<CategoryId, string>;
  breadcrumbHome: string;
  symbols: {
    heartTitle: string;
    heartText: string;
    starTitle: string;
    starText: string;
    copyAria: string;
  };
  relatedTitle: string;
  relatedText: string;
  faqTitle: string;
  examplesLabel: string;
  lastUpdated: string;
  onThisPage: string;
  maker: {
    previewLabel: string;
    copy: string;
    copyDiscord: string;
    randomize: string;
    reset: string;
    none: string;
    partsTitle: string;
    parts: Record<MakerPartId, string>;
    tipsTitle: string;
  };
  cookie: {
    bannerTitle: string;
    bannerText: string;
    acceptAll: string;
    rejectOptional: string;
    settings: string;
    privacyLink: string;
    settingsTitle: string;
    settingsIntro: string;
    necessary: string;
    necessaryDesc: string;
    alwaysOn: string;
    preferences: string;
    preferencesDesc: string;
    analytics: string;
    analyticsDesc: string;
    marketing: string;
    marketingDesc: string;
    notUsed: string;
    save: string;
    close: string;
  };
  notFound: {
    title: string;
    text: string;
    home: string;
    popular: string;
  };
  contact: {
    emailLabel: string;
    noEmail: string;
    formTitle: string;
    formNote: string;
    nameLabel: string;
    topicLabel: string;
    topics: { suggestion: string; display: string; bug: string; other: string };
    messageLabel: string;
    submit: string;
    after: string;
  };
}

export interface GroupText {
  title: string;
  tags: string[];
  description: string;
}

export interface PageMeta {
  title: string;
  description: string;
  h1: string;
  intro: string;
}

export interface HomeContent extends PageMeta {
  sections: ContentSection[];
  faqs: Faq[];
  conclusion: ContentSection;
}

export interface CategoryContent extends PageMeta {
  sections: ContentSection[];
  faqs: Faq[];
}

export interface MakerContent extends PageMeta {
  sections: ContentSection[];
  faqs: Faq[];
}

export interface StaticContent extends PageMeta {
  sections: ContentSection[];
}

export interface FaqPageContent extends PageMeta {
  groups: { heading: string; faqs: Faq[] }[];
}

export interface LocaleBundle {
  ui: UiDict;
  /** Keyed by `${categoryId}.${groupId}`. */
  groups: Record<string, GroupText>;
  /** Keyed by kaomoji id. English labels come from the data files. */
  labels: Record<string, string>;
  home: HomeContent;
  categories: Record<PageCategoryId, CategoryContent>;
  maker: MakerContent;
  pages: {
    about: StaticContent;
    contact: StaticContent;
    privacy: StaticContent;
    terms: StaticContent;
    cookies: StaticContent;
    disclaimer: StaticContent;
    faq: FaqPageContent;
  };
}
