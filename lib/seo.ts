import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

interface PageSeo {
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL. */
  path: string;
  /** Override the OG image alt text. */
  imageAlt?: string;
}

/** Consistent canonical, Open Graph and Twitter metadata for a page. */
export function buildMetadata({ title, description, path, imageAlt }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: ogImagePath(path), width: 1200, height: 630, alt: imageAlt ?? siteConfig.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImagePath(path), alt: imageAlt ?? siteConfig.ogImageAlt }],
    },
  };
}

/** Style pages have their own generated image; everything else shares the home image. */
function ogImagePath(path: string): string {
  return path.startsWith("/discord-font-generator/") ? `${path}/opengraph-image` : "/opengraph-image";
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
  };
}

export function webApplicationJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    inLanguage: siteConfig.language,
    dateModified: siteConfig.lastUpdated,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
