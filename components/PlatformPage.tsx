import type { Metadata } from "next";
import { getStrings } from "@/content/i18n";
import { getPlatformPages } from "@/content/i18n/pages/platforms";
import { getPlatformPage, type PlatformPage } from "@/content/platforms";
import { defaultLocale, fill, localePath, type Locale } from "@/lib/i18n";
import { renderOgImage } from "@/lib/og";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { FontGenerator } from "./FontGenerator";
import { JsonLd } from "./JsonLd";
import { platformLinksProps } from "./platform-links-props";

/*
 * Platform pages ("/roblox-fonts", ...) are fixed routes in English rather than
 * one dynamic "/[platform]" route, because the top-level dynamic segment is
 * used by the translated site ("/[lang]"). Each route file just picks its slug.
 * Translations live under "/[lang]/[platform]".
 */

function page(slug: string): PlatformPage {
  const found = getPlatformPage(slug);
  if (!found) throw new Error(`Unknown platform page: ${slug}`);
  return found;
}

export function platformMetadata(slug: string, locale: Locale = defaultLocale): Metadata {
  const p = page(slug);
  const text = getPlatformPages(locale).pages[p.slug]!;
  return buildMetadata({
    title: text.title,
    description: text.description,
    path: `/${p.slug}`,
    locale,
    // Only the English page has its own share image; translations use the default one.
    ownImage: locale === defaultLocale,
  });
}

export function platformOgImage(slug: string) {
  const p = page(slug);
  return renderOgImage({
    title: p.h1,
    subtitle: `Copy & paste free fonts for ${p.name} names, bios and posts.`,
    tags: ["Free", "Copy & Paste", "Works on mobile"],
  });
}

/** A platform page ("/roblox-fonts") in any language. */
export function PlatformPageView({ slug, locale = defaultLocale }: { slug: string; locale?: Locale }) {
  const p = page(slug);
  const content = getPlatformPages(locale);
  const text = content.pages[p.slug]!;
  const { generator } = getStrings(locale);
  const name = { name: p.name };

  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({
          name: text.h1,
          description: text.description,
          path: `/${p.slug}`,
          locale,
        })}
      />
      <JsonLd data={faqJsonLd(text.faqs)} />

      <div className="pt-6">
        <Breadcrumbs
          locale={locale}
          items={[{ name: fill(content.breadcrumb, name), path: localePath(locale, `/${p.slug}`) }]}
        />
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {text.h1}
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">{text.intro}</p>
      </div>

      <section aria-label={fill(content.toolLabel, name)}>
        <FontGenerator
          strings={generator}
          platformLinks={platformLinksProps(locale)}
          featured={{ label: text.featuredLabel, ids: p.featured.ids }}
          sampleText={text.sampleText}
        />
      </section>

      <article className="prose-content cv-auto mt-12">
        {text.body}
        {content.outro}
        <p className="text-sm text-muted">{fill(content.notAffiliated, name)}</p>
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={text.faqs} heading={fill(content.faqHeading, name)} />
      </div>
    </>
  );
}
