import type { TimestampIssue, TimestampStyleCode } from "@/lib/discord-timestamp";
import type { Theme } from "./style-order";
import type { FontCategory } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";
import type { Faq } from "../faqs";

/**
 * Interface strings. Plain data only (no functions), so they can be passed to
 * client components. "{name}" style placeholders are filled with `fill()`.
 */
export interface UiStrings {
  locale: Locale;
  /** Breadcrumb label for the homepage. */
  home: string;
  breadcrumb: string;
  skipToContent: string;
  /** Screen-reader name of the logo link, e.g. "{name} home". */
  homeLink: string;
  menu: string;
  language: string;
  groups: { generators: string; platforms: string; tools: string; more: string };
  links: {
    discordFonts: string;
    discordFontsGenerator: string;
    fancyText: string;
    nameGenerator: string;
    usernameGenerator: string;
    smallText: string;
    numberFonts: string;
    discordSymbols: string;
    timestampGenerator: string;
    textFormatting: string;
    timestamp: string;
    blog: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  /** "{name} Font", e.g. "Bold Font". */
  styleFont: string;
  /** "{name} Fonts", e.g. "Roblox Fonts". */
  platformFonts: string;
  /** Short style names by style page slug, e.g. { bold: "Bold" }. */
  styleNames: Record<string, string>;
  footer: { styles: string; platforms: string; site: string; disclaimer: string; copyright: string };
}

export interface ToastStrings {
  /** "Copied {label}!" */
  copiedLabel: string;
  copied: string;
  failed: string;
}

export interface GeneratorStrings {
  sampleText: string;
  /** Translated style names by style id; English uses the names in lib/fonts. */
  styleNames?: Record<string, string>;
  inputLabel: string;
  placeholder: string;
  clear: string;
  clearSr: string;
  hint: string;
  /** "{count} chars" */
  chars: string;
  filterGroup: string;
  all: string;
  categories: Record<FontCategory, string>;
  themeGroup: string;
  /** Button label and the example text shown until the visitor types. */
  themes: Record<Theme, { label: string; sample: string }>;
  scopeGroup: string;
  scopeAll: string;
  favorites: string;
  recent: string;
  /** "{count} style" / "{count} styles" */
  countOne: string;
  countMany: string;
  emptyFavorites: string;
  emptyRecent: string;
  emptyGroup: string;
  /** "Show {count} more styles" */
  showMore: string;
  randomTitle: string;
  randomDescription: string;
  shuffle: string;
  /** "Generate {count} more" */
  generateMore: string;
  /** "Random {n}" */
  randomName: string;
  resultsLabel: string;
  randomLabel: string;
  copy: string;
  copied: string;
  /** Screen-reader suffix for Copy, "{name} text". */
  copySr: string;
  /** "Save {name} to favorites" */
  saveFavorite: string;
  removeFavorite: string;
  clickToCopy: string;
  intensity: string;
  limitedSupport: string;
  limitedSupportTitle: string;
  /** "Over {limit} characters" */
  overLimit: string;
  platformsTitle: string;
  /** Accessible name of the second results list when random styles sit in between. */
  moreResultsLabel: string;
  /** The display-name preview on the Discord Name Generator. */
  namePreview: {
    title: string;
    /** Contains "{name}", the selected style's name. */
    showing: string;
    copyName: string;
    /** "{limit}" is the character limit. */
    tooLong: string;
    /** Timestamp shown next to the sample message. */
    time: string;
    message: string;
    online: string;
  };
}

export interface FormattingStrings {
  sampleText: string;
  inputLabel: string;
  /** "Type a message, e.g. “{sample}”" */
  placeholder: string;
  formatsLabel: string;
  /** Format names by id (bold, italic, ...). */
  formatNames: Record<string, string>;
  copy: string;
  /** "{name} markdown" */
  copySr: string;
  coloredTitle: string;
  /** Contains "{ansi}", replaced with the word ansi in code style. */
  coloredDescription: string;
  coloredLabel: string;
  textColor: string;
  background: string;
  none: string;
  bold: string;
  underline: string;
  /** Color names by ANSI code. */
  colorNames: Record<number, string>;
}

export interface TimestampStrings {
  date: string;
  time: string;
  timeZone: string;
  zoneHint: string;
  /** "{zone}" is the visitor's own zone. */
  useMyZone: string;
  now: string;
  plus15Min: string;
  plus1Hour: string;
  plus1Day: string;
  plus1Week: string;
  reset: string;
  includeSeconds: string;
  unixLabel: string;
  unixUnits: string;
  unixPlaceholder: string;
  load: string;
  unixHint: string;
  /** "{seconds}" */
  unixLoaded: string;
  unixReadAsMs: string;
  /** "{time}", "{zone}", "{shown}" */
  skipped: string;
  /** "{time}", "{zone}", "{offset}" */
  repeated: string;
  /** Messages by TimestampIssue; "farFuture" has "{year}". */
  issues: Record<TimestampIssue, string>;
  resultsTitle: string;
  resultsNote: string;
  unixTime: string;
  copy: string;
  copied: string;
  unixCopyLabel: string;
  /** "{name} code" */
  codeCopyLabel: string;
  styles: Record<TimestampStyleCode, { name: string; use: string }>;
  messagePreview: string;
  sampleAuthor: string;
  today: string;
  eventStarts: string;
  combinedTitle: string;
  combinedDescription: string;
  copyCombined: string;
  combinedLabel: string;
  zonePicker: {
    /** "{count}" zones */
    search: string;
    yours: string;
    /** "{query}" */
    noMatch: string;
    listLabel: string;
  };
}

export interface Strings {
  ui: UiStrings;
  toast: ToastStrings;
  generator: GeneratorStrings;
  formatting: FormattingStrings;
  /** Kept in strings/timestamp.ts and joined in by getStrings(). */
  timestamp: TimestampStrings;
  /** Style card label on the homepage, "{name} font generator". */
  styleCard: string;
}

/** Copy for a tool page (Fancy Text, Name, Timestamp, Formatting). Server-only (it holds JSX). */
export interface ToolPageContent {
  /** Breadcrumb label. */
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Example text in the generator before the visitor types. */
  sampleText?: string;
  /** Accessible name of the tool section. */
  toolLabel: string;
  faqHeading: string;
  faqs: readonly Faq[];
  Article: () => React.ReactNode;
  relatedHeading: string;
  related: readonly { href: string; label: string }[];
}

/** Homepage copy. Server-only (it holds JSX). */
export interface HomeContent {
  title: string;
  description: string;
  h1: string;
  /** Optional smaller second line inside the H1. */
  h1Tagline?: string;
  /** "Turn any text into {count} Discord fonts…" */
  intro: string;
  generatorLabel: string;
  formattingTitle: string;
  formattingIntro: React.ReactNode;
  popularTitle: string;
  popularIntro: string;
  moreGenerators: string;
  socialTitle: string;
  socialIntro: string;
  gamingTitle: string;
  gamingIntro: string;
  faqHeading: string;
  faqs: readonly Faq[];
  Article: () => React.ReactNode;
}

/** What each per-language strings file holds; the timestamp strings are joined in by getStrings(). */
export type BaseStrings = Omit<Strings, "timestamp">;

/** Copy for the Text Formatting page. Server-only (it holds JSX). */
export interface FormattingPageContent {
  /** Breadcrumb label. */
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  toolLabel: string;
  /** Name of the tool in structured data. */
  appName: string;
  Guide: () => React.ReactNode;
  /** FAQ section and FAQPage structured data. Only the English page has one so far. */
  faqs?: readonly Faq[];
}

/** One style page (bold, cursive, ...) in a language. Server-only (it holds JSX). */
export interface StylePageText {
  /** Breadcrumb label, e.g. "Bold Font Generator". */
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  /** Label of the generator's tab with this page's styles. */
  featuredLabel: string;
  body: React.ReactNode;
}

/** All style pages in a language, plus the text every style page shares. */
export interface StylePagesContent {
  pages: Record<string, StylePageText>;
  /** Accessible name of the tool section; "{name}" is the page name. */
  toolLabel: string;
  /** Closing paragraph pointing back to the main generator. */
  outro: React.ReactNode;
  moreHeading: string;
}

/** One platform page (Roblox, Instagram, ...) in a language. Server-only (it holds JSX). */
export interface PlatformPageText {
  h1: string;
  title: string;
  description: string;
  intro: string;
  sampleText: string;
  featuredLabel: string;
  faqs: readonly Faq[];
  body: React.ReactNode;
}

/** All platform pages in a language, plus the text every platform page shares. "{name}" is the platform. */
export interface PlatformPagesContent {
  pages: Record<string, PlatformPageText>;
  breadcrumb: string;
  toolLabel: string;
  faqHeading: string;
  notAffiliated: string;
  outro: React.ReactNode;
}
