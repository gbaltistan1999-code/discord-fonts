import type { UsernameStyle } from "@/lib/usernameGenerator";

/** Interface text. Plain strings so a server page can pass a translation. */
export interface UsernameGeneratorStrings {
  styles: Record<UsernameStyle, string>;
  anyLength: string;
  keywordLabel: string;
  placeholder: string;
  style: string;
  length: string;
  allowNumbers: string;
  allowSeparators: string;
  generate: string;
  results: string;
  /** "{count}" is replaced with the number of names. */
  count: string;
  generateMore: string;
  copy: string;
  copied: string;
  followsRules: string;
  makeFancy: string;
  /** Home page of the font generator in this language, e.g. "/" or "/pt-br". */
  fontGeneratorPath: string;
}

export const usernameGeneratorStringsEn: UsernameGeneratorStrings = {
  styles: {
    random: "Random",
    cool: "Cool",
    aesthetic: "Aesthetic",
    gaming: "Gaming",
    cute: "Cute",
    funny: "Funny",
    dark: "Dark",
    short: "Short",
  },
  anyLength: "Any",
  keywordLabel: "Keyword (optional)",
  placeholder: "Add a word, e.g. luna, shadow, pixel",
  style: "Style",
  length: "Length",
  allowNumbers: "Allow numbers",
  allowSeparators: "Allow _ and .",
  generate: "Generate usernames",
  results: "Your usernames",
  count: "{count} names, all checked against Discord's rules",
  generateMore: "Generate more",
  copy: "Copy",
  copied: "Copied!",
  followsRules: "Follows Discord rules",
  makeFancy: "Make it fancy",
  fontGeneratorPath: "/",
};
