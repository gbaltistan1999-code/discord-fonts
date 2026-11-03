import Link from "next/link";
import { getStrings } from "@/content/i18n";
import { getHome } from "@/content/i18n/home";
import { generatorPages } from "@/content/generator-pages";
import { fontStyles } from "@/lib/fonts";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import { FaqList } from "./FaqList";
import { FontGenerator } from "./FontGenerator";
import { FormattingTool } from "./FormattingTool";
import { JsonLd } from "./JsonLd";
import { StyleLinks } from "./StyleLinks";

export function homeMetadata(locale: Locale) {
  const home = getHome(locale);
  return buildMetadata({ title: home.title, description: home.description, path: "/", locale });
}

function SectionHeader({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <header className="mb-6 max-w-2xl">
      <h2 id={id} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-muted">{children}</p>
    </header>
  );
}

/** The homepage in any language. */
export function HomePage({ locale }: { locale: Locale }) {
  const home = getHome(locale);
  const { ui, generator, formatting, styleCard } = getStrings(locale);
  const Article = home.Article;
  const generatorNames: Record<string, string> = {
    "/fancy-text-generator": ui.links.fancyText,
    "/discord-name-generator": ui.links.nameGenerator,
    "/discord-timestamp-generator": ui.links.timestampGenerator,
  };

  return (
    <>
      <JsonLd
        data={[
          websiteJsonLd(),
          webApplicationJsonLd({
            name: ui.links.discordFontsGenerator,
            description: home.description,
            path: "/",
            locale,
          }),
          faqJsonLd(home.faqs),
        ]}
      />

      <section className="mx-auto max-w-3xl pt-12 pb-10 text-center sm:pt-20 sm:pb-12">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-balance text-text sm:text-[2.75rem]">
          {home.h1}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-pretty text-muted sm:text-lg">
          {fill(home.intro, { count: fontStyles.length })}
        </p>
      </section>

      <section id="font-styles" aria-label={home.generatorLabel} className="mx-auto max-w-5xl scroll-mt-4">
        <FontGenerator
          strings={generator}
          platformLinks={{
            title: generator.platformsTitle,
            homeHref: localePath(locale, "/"),
            homeLabel: ui.links.discordFonts,
            platformFonts: ui.platformFonts,
          }}
        />
      </section>

      <div className="mx-auto max-w-5xl">
        <section aria-labelledby="formatting-tool" className="mt-20 border-t border-border pt-16">
          <SectionHeader id="formatting-tool" title={home.formattingTitle}>
            {home.formattingIntro}
          </SectionHeader>
          <div className="max-w-3xl">
            <FormattingTool strings={formatting} />
          </div>
        </section>

        <section aria-labelledby="popular-styles" className="cv-auto mt-20 border-t border-border pt-16">
          <SectionHeader id="popular-styles" title={home.popularTitle}>
            {home.popularIntro}
          </SectionHeader>
          <StyleLinks names={ui.styleNames} cardLabel={styleCard} />
          <p className="mt-4 text-sm text-muted">
            {home.moreGenerators}{" "}
            {generatorPages.map((page, i) => (
              <span key={page.path}>
                {i > 0 && " · "}
                <Link href={page.path} className="text-text underline underline-offset-4 hover:text-accent">
                  {generatorNames[page.path] ?? page.name}
                </Link>
              </span>
            ))}
          </p>
        </section>

        <div className="cv-auto mt-20 border-t border-border pt-4">
          <article className="mx-auto max-w-3xl">
            <Article />
          </article>
          <div className="mx-auto mt-16 max-w-3xl">
            <FaqList faqs={home.faqs} heading={home.faqHeading} />
          </div>
        </div>
      </div>
    </>
  );
}
