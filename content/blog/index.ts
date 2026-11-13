import type { Faq } from "../faqs";
import { discordColoredText } from "./discord-colored-text";
import { addEmojisToDiscordServer } from "./how-to-add-emojis-to-discord-server";
import { changeNicknameOnDiscord } from "./how-to-change-nickname-on-discord";
import { changeFontOnDiscord } from "./how-to-change-font-on-discord";
import { whatFontDoesDiscordUse } from "./what-font-does-discord-use";

export type BlogIcon = "palette" | "type" | "sparkle" | "chat";

export interface BlogPost {
  /** URL path segment under /blog. */
  slug: string;
  /** Page title and H1. */
  title: string;
  /** Shorter title tag for search results, when the H1 is long. */
  metaTitle?: string;
  /** Meta description, also used as the card summary on /blog. */
  description: string;
  /** Short line shown in small caps under the title on blog cards. */
  tagline: string;
  /** Icon on blog cards. */
  icon: BlogIcon;
  /** ISO dates (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  /** Rendered as the post's FAQ section and FAQPage structured data. */
  faqs: readonly Faq[];
  body: React.ReactNode;
  /** Closing section shown after the FAQ. */
  outro?: React.ReactNode;
  /** Hide the "Try it now" generator box, for posts that already link to the homepage in the text. */
  hideGeneratorCta?: boolean;
}

/** Newest first. To add a post, create a file in this folder and list it here. */
export const blogPosts: readonly BlogPost[] = [
  whatFontDoesDiscordUse,
  changeNicknameOnDiscord,
  addEmojisToDiscordServer,
  discordColoredText,
  changeFontOnDiscord,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
