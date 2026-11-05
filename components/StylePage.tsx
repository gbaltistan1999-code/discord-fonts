import { HeroHeading } from "./HeroHeading";
import type { Metadata } from "next";
import { getStrings } from "@/content/i18n";
import { getStylePages } from "@/content/i18n/pages/styles";
import { getStylePage, type StylePage } from "@/content/style-pages";
import { defaultLocale, fill, localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FontGenerator } from "./FontGenerator";
import { JsonLd } from "./JsonLd";
import { StyleLinks } from "./StyleLinks";

export function styleMetadata(slug: string, locale: Locale): Metadata {
  if (!getStylePage(slug)) return {};
  const text = getStylePages(locale).pages[slug]!;
  return buildMetadata({
    title: text.title,
    description: text.description,
    path: `/discord-font-generator/${slug}`,
    locale,
    // Only the English page has its own share image; translations use the default one.
    ownImage: locale === defaultLocale,
  });
}

/** A style generator page ("/discord-font-generator/bold") in any language. */
export function StylePageView({ style, locale }: { style: StylePage; locale: Locale }) {
  const content = getStylePages(locale);
  const text = content.pages[style.slug]!;
  const { ui, generator, styleCard } = getStrings(locale);
  const path = localePath(locale, `/discord-font-generator/${style.slug}`);
  const featured = { label: text.featuredLabel, ids: style.featured.ids };
  const toolLabel = fill(content.toolLabel, { name: text.name });
  const { look } = style;

  return (
    <div className={look?.accent}>
      <JsonLd
        data={webApplicationJsonLd({
          name: text.h1,
          description: text.description,
          path: `/discord-font-generator/${style.slug}`,
          locale,
        })}
      />

      {look ? (
        <>
          <div className="pt-6">
            <Breadcrumbs locale={locale} items={[{ name: text.name, path }]} />
          </div>
          <section aria-label={toolLabel}>
            <FontGenerator
              variant="list"
              strings={generator}
              featured={featured}
              hero={
                <div className="mx-auto mb-6 max-w-3xl text-center">
                  <h1
                    className={`bg-linear-to-r bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl ${look.heading}`}
                  >
                    {text.h1}
                  </h1>
                  <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{text.intro}</p>
                </div>
              }
            />
          </section>
        </>
      ) : (
        <>
          <div className="pt-6">
            <Breadcrumbs locale={locale} items={[{ name: text.name, path }]} />
          </div>
          <section aria-label={toolLabel}>
            <FontGenerator
              hero={<HeroHeading title={text.h1} intro={text.intro} />}
              strings={generator}
              featured={featured}
            />
          </section>
        </>
      )}

      <article className="prose-content cv-auto mt-12">
        {text.body}
        {content.outro}
      </article>

      <section aria-labelledby="more-styles" className="cv-auto mt-12">
        <h2 id="more-styles" className="mb-4 text-2xl font-bold tracking-tight">
          {content.moreHeading}
        </h2>
        <StyleLinks exclude={style.slug} locale={locale} names={ui.styleNames} cardLabel={styleCard} />
      </section>
    </div>
  );
}
