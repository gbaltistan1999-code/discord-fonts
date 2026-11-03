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
  searchLabel: string;
  searchPlaceholder: string;
  scopeGroup: string;
  scopeAll: string;
  favorites: string;
  recent: string;
  /** "{count} style" / "{count} styles" */
  countOne: string;
  countMany: string;
  /** "No style is called “{query}”, so here is your text in every style." */
  noMatch: string;
  moveToTextBox: string;
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

export interface Strings {
  ui: UiStrings;
  toast: ToastStrings;
  generator: GeneratorStrings;
  formatting: FormattingStrings;
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
  /** "Turn any text into {count} Discord fonts…" */
  intro: string;
  generatorLabel: string;
  formattingTitle: string;
  formattingIntro: React.ReactNode;
  popularTitle: string;
  popularIntro: string;
  moreGenerators: string;
  faqHeading: string;
  faqs: readonly Faq[];
  Article: () => React.ReactNode;
}
