import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { getStrings } from "@/content/i18n";
import { getHome } from "@/content/i18n/home";
import { homeStyleOrder } from "@/content/i18n/style-order";
import { generatorPages } from "@/content/generator-pages";
import { fontStyles } from "@/lib/fonts";
import { fill, hrefFor, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import { BlogCards } from "./BlogCards";
import { FaqList } from "./FaqList";
import { FontGenerator } from "./FontGenerator";
import { FormattingTool } from "./FormattingTool";
import { JsonLd } from "./JsonLd";
import { gamingSlugs, PlatformGrid, socialSlugs } from "./PlatformGrid";
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
    "/discord-username-generator": ui.links.usernameGenerator,
    "/small-text-discord": ui.links.smallText,
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

      <section
        id="font-styles"
        aria-label={home.generatorLabel}
        className="mx-auto max-w-5xl scroll-mt-4 pt-6"
      >
        <FontGenerator
          heroClassName="accent-teal"
          textFromQuery
          hero={
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h1 className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-teal-300 dark:to-cyan-300">
                {home.h1}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-pretty text-muted sm:text-lg">
                {fill(home.intro, { count: fontStyles.length })}
              </p>
            </div>
          }
          strings={generator}
          order={homeStyleOrder[locale]}
        />
      </section>

      <div className="mx-auto max-w-5xl">
        <section aria-labelledby="formatting-tool" className="cv-auto mt-20 border-t border-border pt-16">
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
          <StyleLinks locale={locale} names={ui.styleNames} cardLabel={styleCard} />
          <p className="mt-4 text-sm text-muted">
            {home.moreGenerators}{" "}
            {generatorPages.map((page, i) => (
              <span key={page.path}>
                {i > 0 && " · "}
                <Link
                  href={hrefFor(locale, page.path)}
                  className="text-text underline underline-offset-4 hover:text-accent"
                >
                  {generatorNames[page.path] ?? page.name}
                </Link>
              </span>
            ))}
          </p>
        </section>

        <section aria-labelledby="social-fonts" className="cv-auto mt-20 border-t border-border pt-16">
          <SectionHeader id="social-fonts" title={home.socialTitle}>
            {home.socialIntro}
          </SectionHeader>
          <PlatformGrid slugs={socialSlugs} locale={locale} platformFonts={ui.platformFonts} />
        </section>

        <section aria-labelledby="gaming-fonts" className="cv-auto mt-16">
          <SectionHeader id="gaming-fonts" title={home.gamingTitle}>
            {home.gamingIntro}
          </SectionHeader>
          <PlatformGrid slugs={gamingSlugs} locale={locale} platformFonts={ui.platformFonts} />
        </section>

        {locale === "en" && blogPosts.length > 0 && (
          <section aria-labelledby="from-the-blog" className="cv-auto mt-20 border-t border-border pt-16">
            <header className="mx-auto mb-10 max-w-2xl text-center">
              <h2 id="from-the-blog" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                From the{" "}
                <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-300">
                  Blog
                </span>
              </h2>
              <p className="mt-3 text-muted sm:text-lg">
                Step-by-step guides for fancy fonts, colored text and better Discord names.{" "}
                <Link href="/blog" className="font-semibold text-accent underline underline-offset-4">
                  See all posts
                </Link>
                .
              </p>
            </header>
            <BlogCards posts={blogPosts.slice(0, 6)} />
          </section>
        )}

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
