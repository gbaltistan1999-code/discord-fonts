import type { Metadata } from "next";
import { defaultLocale, localeInfo, localePath, localesFor, type Locale } from "./i18n";
import { absoluteUrl, siteConfig } from "./site";

interface PageSeo {
  title: string;
  description: string;
  /** English path starting with "/"; the canonical URL adds the locale prefix. */
  path: string;
  locale?: Locale;
  /** The page's route has its own opengraph-image.tsx. */
  ownImage?: boolean;
}

/** The shared share-image (app/opengraph-image.tsx, outside the route groups so its URL has no hash). */
const DEFAULT_OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.ogImageAlt };

/** hreflang links for a page published in every language, or undefined. */
export function languageAlternates(path: string): Record<string, string> | undefined {
  const available = localesFor(path);
  if (available.length < 2) return undefined;
  const languages: Record<string, string> = {};
  for (const locale of available) languages[localeInfo[locale].lang] = absoluteUrl(localePath(locale, path));
  languages["x-default"] = absoluteUrl(path);
  return languages;
}

/**
 * Consistent canonical, hreflang, Open Graph and Twitter metadata for a page.
 *
 * Share image: a page with its own opengraph-image.tsx (`ownImage`) leaves it
 * to Next.js, which writes the URL (it carries a hash inside route groups).
 * Every other page names the shared default, because setting `openGraph`
 * here stops the page from inheriting an image file from a parent.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale = defaultLocale,
  ownImage = false,
}: PageSeo): Metadata {
  const images = ownImage ? undefined : [DEFAULT_OG_IMAGE];
  const url = absoluteUrl(localePath(locale, path));
  const languages = languageAlternates(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, ...(languages && { languages }) },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: localeInfo[locale].ogLocale,
      ...(languages && {
        alternateLocale: localesFor(path).filter((l) => l !== locale).map((l) => localeInfo[l].ogLocale),
      }),
      ...(images && { images }),
    },
    twitter: { card: "summary_large_image", title, description, ...(images && { images }) },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

type JsonLd = Record<string, unknown>;

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: "Discord Fonts Generator",
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: organizationJsonLd(),
  };
}

/** The site as an Organization, so search engines can show its logo. */
export function organizationJsonLd(): JsonLd {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/apple-icon.png"),
      width: 180,
      height: 180,
    },
  };
}

export function webApplicationJsonLd({
  name,
  description,
  path,
  locale = defaultLocale,
}: {
  name: string;
  description: string;
  /** English path; the locale prefix is added. */
  path: string;
  locale?: Locale;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(localePath(locale, path)),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    inLanguage: localeInfo[locale].lang,
    dateModified: siteConfig.lastUpdated,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${siteConfig.url}/#website` },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    // The post's own share image has a hashed URL inside the route group, so use the stable shared one.
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    datePublished,
    dateModified,
    inLanguage: siteConfig.language,
    author: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl("/") },
    publisher: { "@id": `${siteConfig.url}/#website` },
  };
}

export function faqJsonLd(faqs: readonly { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(crumbs: readonly Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
