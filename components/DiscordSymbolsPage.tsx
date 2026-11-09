import { DiscordSymbolsArticle, discordSymbolsFaqs as faqs, discordSymbolsPage as page } from "@/content/discord-symbols";
import { channelPacks } from "@/content/discord-symbols-data";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { ChannelNameBuilder } from "./ChannelNameBuilder";
import { ChannelPacks } from "./ChannelPacks";
import { FaqList } from "./FaqList";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";
import { SymbolLibrary } from "./SymbolLibrary";

export const discordSymbolsMetadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  ownImage: true,
});

const sectionHeading = "text-2xl font-extrabold tracking-tight text-balance sm:text-3xl";

/** /discord-symbols: channel name builder, ready-made packs, symbol library and guide. */
export function DiscordSymbolsPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: "Discord Channel Name Builder", description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <section
        aria-label="Discord channel name builder"
        className="-mx-4 border-y border-accent/20 bg-linear-to-br from-accent-soft via-surface to-accent-soft px-4 pt-6 pb-7 sm:mx-0 sm:rounded-3xl sm:border sm:px-10 sm:pt-8 sm:pb-9"
      >
        <HeroHeading title={page.h1} intro={page.intro} />
        <ChannelNameBuilder />
      </section>

      <section aria-labelledby="channel-templates" className="mt-14">
        <h2 id="channel-templates" className={sectionHeading}>
          Aesthetic Discord Channel Name Templates
        </h2>
        <p className="mt-2 mb-5 max-w-3xl text-muted">
          Tap a name to copy it, or use <strong className="text-text">Copy all</strong> to grab a whole set on
          separate lines. Category and voice channel names keep their capitals and spaces.
        </p>
        <ChannelPacks packs={channelPacks} />
      </section>

      <section aria-labelledby="symbol-library" className="mt-14">
        <h2 id="symbol-library" className={sectionHeading}>
          Discord Symbols to Copy and Paste
        </h2>
        <p className="mt-2 mb-5 max-w-3xl text-muted">
          Tap any symbol to copy it. Search by name or filter by category, and save the ones you use most to
          your favorites.
        </p>
        <SymbolLibrary />
      </section>

      <article className="prose-content cv-auto mt-14">
        <DiscordSymbolsArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={faqs} heading="Discord Symbols FAQ" />
      </div>
    </>
  );
}
