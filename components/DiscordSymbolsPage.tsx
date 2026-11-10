import { DiscordSymbolsArticle, discordSymbolsFaqs, discordSymbolsPage } from "@/content/discord-symbols";
import {
  builderStringsEn,
  channelPacks,
  libraryStringsEn,
  packStringsEn,
} from "@/content/discord-symbols-data";
import {
  DiscordSymbolsArticlePtBr,
  discordSymbolsFaqsPtBr,
  discordSymbolsPagePtBr,
} from "@/content/i18n/pages/discord-symbols/pt-br";
import {
  builderStringsPtBr,
  categoryTextPtBr,
  channelPacksPtBr,
  libraryStringsPtBr,
  packStringsPtBr,
} from "@/content/i18n/pages/discord-symbols/pt-br-data";
import { localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { ChannelNameBuilder } from "./ChannelNameBuilder";
import { ChannelPacks } from "./ChannelPacks";
import { FaqList } from "./FaqList";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";
import { SymbolLibrary } from "./SymbolLibrary";

const content = {
  en: {
    page: {
      ...discordSymbolsPage,
      builderLabel: "Discord channel name builder",
      appName: "Discord Channel Name Builder",
      templatesHeading: "Aesthetic Discord Channel Name Templates",
      templatesIntro: (
        <>
          Tap a name to copy it, or use <strong className="text-text">Copy all</strong> to grab a whole set on
          separate lines. Category and voice channel names keep their capitals and spaces.
        </>
      ),
      libraryHeading: "Discord Symbols to Copy and Paste",
      libraryIntro:
        "Tap any symbol to copy it. Search by name or filter by category, and save the ones you use most to your favorites.",
      faqHeading: "Discord Symbols FAQ",
    },
    faqs: discordSymbolsFaqs,
    Article: DiscordSymbolsArticle,
    packs: channelPacks,
    builder: builderStringsEn,
    packStrings: packStringsEn,
    library: libraryStringsEn,
    categoryText: undefined,
  },
  "pt-br": {
    page: discordSymbolsPagePtBr,
    faqs: discordSymbolsFaqsPtBr,
    Article: DiscordSymbolsArticlePtBr,
    packs: channelPacksPtBr,
    builder: builderStringsPtBr,
    packStrings: packStringsPtBr,
    library: libraryStringsPtBr,
    categoryText: categoryTextPtBr,
  },
};

const getContent = (locale: Locale) => (locale === "pt-br" ? content["pt-br"] : content.en);

export function discordSymbolsMetadata(locale: Locale = "en") {
  const { page } = getContent(locale);
  // Only the English page has its own share image; translations use the shared one.
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    locale,
    ownImage: locale === "en",
  });
}

const sectionHeading = "text-2xl font-extrabold tracking-tight text-balance sm:text-3xl";

/** /discord-symbols: channel name builder, ready-made packs, symbol library and guide (English and Portuguese). */
export function DiscordSymbolsPage({ locale = "en" }: { locale?: Locale }) {
  const { page, faqs, Article, packs, builder, packStrings, library, categoryText } = getContent(locale);
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.appName, description: page.description, path: page.path, locale })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="pt-6">
        <Breadcrumbs locale={locale} items={[{ name: page.name, path: localePath(locale, page.path) }]} />
      </div>

      <section
        aria-label={page.builderLabel}
        className="-mx-4 border-y border-accent/20 bg-linear-to-br from-accent-soft via-surface to-accent-soft px-4 pt-6 pb-7 sm:mx-0 sm:rounded-3xl sm:border sm:px-10 sm:pt-8 sm:pb-9"
      >
        <HeroHeading title={page.h1} intro={page.intro} />
        <ChannelNameBuilder strings={builder} />
      </section>

      <section aria-labelledby="channel-templates" className="mt-14">
        <h2 id="channel-templates" className={sectionHeading}>
          {page.templatesHeading}
        </h2>
        <p className="mt-2 mb-5 max-w-3xl text-muted">{page.templatesIntro}</p>
        <ChannelPacks packs={packs} strings={packStrings} />
      </section>

      <section aria-labelledby="symbol-library" className="mt-14">
        <h2 id="symbol-library" className={sectionHeading}>
          {page.libraryHeading}
        </h2>
        <p className="mt-2 mb-5 max-w-3xl text-muted">{page.libraryIntro}</p>
        <SymbolLibrary strings={library} categoryText={categoryText} />
      </section>

      <article className="prose-content cv-auto mt-14">
        <Article />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={faqs} heading={page.faqHeading} />
      </div>
    </>
  );
}
