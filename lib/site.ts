/**
 * Site-wide configuration. Change the domain, name or default SEO copy here.
 *
 * Production always uses PRODUCTION_URL, so canonical tags, the sitemap and robots.txt can't drift
 * to an old domain through a stale environment variable. Elsewhere the base URL comes from
 * NEXT_PUBLIC_SITE_URL, then the Vercel production domain, then http://localhost:3000.
 */
const PRODUCTION_URL = "https://discordfont.app";

function resolveSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL;
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const url = explicit || (vercel ? `https://${vercel}` : "http://localhost:3000");
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "DiscordFonts",
  url: resolveSiteUrl(),
  locale: "en_US",
  language: "en",
  title: "Discord Fonts – Copy & Paste Cool Discord Font Generator",
  description:
    "Free Discord Fonts generator: turn text into 200+ cool styles to copy and paste. Pick a Discord font for your name, nickname, server, bio or messages.",
  ogImageAlt: "Discord Fonts generator – copy and paste cool Discord font styles",
  contactEmail: "eshfaqihmed@gmail.com",
  /**
   * Web3Forms access key for the contact form (public by design; it only lets the form email you).
   * Empty means the form opens the visitor's email app instead.
   */
  web3formsKey: "",
  disclaimer: "This site is not affiliated with or endorsed by Discord Inc.",
  /** Google Search Console HTML-tag verification token (rendered as google-site-verification). */
  googleSiteVerification: "9s4EYvOAQb0JA1TvevOu3OSVYPhO9LHHWHpWL1-qan0",
  /** Used as dateModified / sitemap lastModified. Update when content changes. */
  lastUpdated: "2026-11-02",
} as const;

export function absoluteUrl(path = "/"): string {
  return path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`;
}
