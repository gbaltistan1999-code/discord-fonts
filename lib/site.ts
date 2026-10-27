/**
 * Site-wide configuration. Change the domain, name or default SEO copy here.
 *
 * The base URL comes from NEXT_PUBLIC_SITE_URL. On Vercel it falls back to the
 * project's production domain, and locally to http://localhost:3000.
 */
function resolveSiteUrl(): string {
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
    "Free Discord Fonts generator: turn text into 60+ cool styles to copy and paste. Pick a Discord font for your name, nickname, server, bio or messages.",
  ogImageAlt: "Discord Fonts generator – copy and paste cool Discord font styles",
  contactEmail: "eshfaqihmed@gmail.com",
  disclaimer: "This site is not affiliated with or endorsed by Discord Inc.",
  /** Ad slots reserve their space now so enabling ads later causes no layout shift. */
  ads: { enabled: false },
  /** Used as dateModified / sitemap lastModified. Update when content changes. */
  lastUpdated: "2026-10-27",
} as const;

export function absoluteUrl(path = "/"): string {
  return path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`;
}
