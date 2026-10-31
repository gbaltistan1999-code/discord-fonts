import type { Faq } from "../faqs";
import { changeFontOnDiscord } from "./how-to-change-font-on-discord";

export interface BlogPost {
  /** URL path segment under /blog. */
  slug: string;
  /** Page title and H1. */
  title: string;
  /** Meta description, also used as the card summary on /blog. */
  description: string;
  /** ISO dates (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  /** Rendered as the post's FAQ section and FAQPage structured data. */
  faqs: readonly Faq[];
  body: React.ReactNode;
  /** Closing section shown after the FAQ. */
  outro?: React.ReactNode;
}

/** Newest first. To add a post, create a file in this folder and list it here. */
export const blogPosts: readonly BlogPost[] = [changeFontOnDiscord];

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
