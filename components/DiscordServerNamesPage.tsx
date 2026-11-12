import Link from "next/link";
import {
  DiscordServerNamesArticle,
  discordServerNamesFaqs,
  discordServerNamesPage as page,
  FancyServerNamesIntro,
  ServerChannelsIntro,
} from "@/content/discord-server-names";
import {
  fancyServerNameExamples,
  serverChannelIdeas,
  serverNameCategories,
  styleName,
} from "@/content/server-names-data";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { CopyChips } from "./CopyChips";
import { FaqList } from "./FaqList";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";
import { ServerNameGenerator } from "./ServerNameGenerator";

const moreTools = [
  { href: "/", label: "Discord Fonts Generator", note: "220+ fancy fonts for names and bios" },
  { href: "/discord-symbols", label: "Discord Symbols", note: "Channel name dividers and icons" },
  { href: "/discord-name-generator", label: "Discord Name Generator", note: "Fancy display names" },
  { href: "/discord-username-generator", label: "Discord Username Generator", note: "Valid @username ideas" },
  { href: "/fancy-text-generator", label: "Fancy Text Generator", note: "Styled text for any app" },
  {
    href: "/discord-text-formatting",
    label: "Discord Text Formatting",
    note: "Bold, spoilers, headers and more",
  },
  {
    href: "/blog/how-to-change-font-on-discord",
    label: "How to Change Your Font on Discord",
    note: "Guide: names, bios and messages",
  },
  {
    href: "/blog/how-to-add-emojis-to-discord-server",
    label: "How to Add Emojis to a Discord Server",
    note: "Guide: custom server emojis",
  },
] as const;

const sectionHeading = "text-2xl font-extrabold tracking-tight text-balance sm:text-3xl";
const introText = "mt-2 max-w-3xl text-muted [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-3";

export function discordServerNamesMetadata() {
  return buildMetadata({ title: page.title, description: page.description, path: page.path, ownImage: true });
}

/** /discord-server-names: generator, categorized name lists, fancy names, guide and FAQ. */
export function DiscordServerNamesPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.appName, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(discordServerNamesFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <ServerNameGenerator hero={<HeroHeading title={page.h1} intro={page.intro} />} />

      <nav aria-labelledby="browse-names" className="mt-14">
        <h2 id="browse-names" className={sectionHeading}>
          {page.browseHeading}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {serverNameCategories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="inline-block rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                {c.label} server names
              </a>
            </li>
          ))}
          <li>
            <a
              href="#fancy"
              className="inline-block rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Fancy server names
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {serverNameCategories.map((c) => (
          <section
            key={c.id}
            id={c.id}
            aria-labelledby={`${c.id}-names`}
            className="scroll-mt-20 rounded-2xl border border-border bg-surface p-4 sm:p-5"
          >
            <h2 id={`${c.id}-names`} className="text-xl font-bold tracking-tight text-text">
              {c.label} Discord Server Names
            </h2>
            <p className="mt-1 text-sm text-muted">{c.blurb}</p>
            <CopyChips items={c.names} className="mt-4" />
          </section>
        ))}
      </div>

      <section id="fancy" aria-labelledby="fancy-names" className="mt-14 scroll-mt-20">
        <h2 id="fancy-names" className={sectionHeading}>
          {page.fancyHeading}
        </h2>
        <p className={introText}>
          <FancyServerNamesIntro />
        </p>
        <CopyChips
          items={fancyServerNameExamples.map((e) => styleName(e.name, e.font, e.frame))}
          className="mt-5"
        />
      </section>

      <article className="prose-content cv-auto mt-14">
        <DiscordServerNamesArticle />
      </article>

      <section aria-labelledby="channel-ideas" className="mt-14">
        <h2 id="channel-ideas" className={sectionHeading}>
          {page.channelsHeading}
        </h2>
        <p className={introText}>
          <ServerChannelsIntro />
        </p>
        <CopyChips items={serverChannelIdeas} className="mt-5" />
      </section>

      <div className="cv-auto mt-12">
        <FaqList faqs={discordServerNamesFaqs} heading={page.faqHeading} />
      </div>

      <section aria-labelledby="more-tools" className="cv-auto mt-12">
        <h2 id="more-tools" className="mb-4 text-2xl font-bold tracking-tight">
          {page.moreToolsHeading}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreTools.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent"
              >
                <span className="font-semibold text-text group-hover:text-accent">{tool.label}</span>
                <span className="mt-1 text-sm text-muted">{tool.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
