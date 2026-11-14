import Link from "next/link";
import {
  DiscordStatusIdeasArticle,
  discordStatusIdeasFaqs,
  discordStatusIdeasPage as page,
  StatusFontsCta,
  StatusIdeasTip,
} from "@/content/discord-status-ideas";
import { statusCategories } from "@/content/status-ideas-data";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";
import { StatusList } from "./StatusList";

const moreTools = [
  { href: "/", label: "Discord Font Generator", note: "220+ fancy fonts for statuses, names and bios" },
  { href: "/discord-username-generator", label: "Discord Username Generator", note: "Valid @username ideas" },
  { href: "/discord-symbols", label: "Discord Symbols", note: "Hearts, stars, dividers and more" },
  { href: "/discord-server-names", label: "Discord Server Names", note: "Cool, funny and aesthetic ideas" },
  { href: "/discord-name-generator", label: "Discord Name Generator", note: "Fancy display names" },
  {
    href: "/discord-text-formatting",
    label: "Discord Text Formatting",
    note: "Bold, spoilers, headers and more",
  },
] as const;

const sectionHeading = "text-2xl font-extrabold tracking-tight text-balance sm:text-3xl";
const linkText = "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-3";

export function discordStatusIdeasMetadata() {
  return buildMetadata({ title: page.title, description: page.description, path: page.path, ownImage: true });
}

/** /discord-status-ideas: categorized status lists with copy and "Style it", guide and FAQ. */
export function DiscordStatusIdeasPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(discordStatusIdeasFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <div className="pt-6">
        <HeroHeading title={page.h1} intro={page.intro} />
        <p
          className={`mx-auto max-w-2xl rounded-xl border border-border bg-surface px-4 py-3 text-center text-sm text-muted ${linkText}`}
        >
          <StatusIdeasTip />
        </p>
      </div>

      <nav aria-labelledby="browse-statuses" className="mt-12">
        <h2 id="browse-statuses" className={sectionHeading}>
          {page.browseHeading}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {statusCategories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="inline-block rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {statusCategories.map((c) => (
          <section
            key={c.id}
            id={c.id}
            aria-labelledby={`${c.id}-statuses`}
            className="scroll-mt-20 rounded-2xl border border-border bg-surface p-4 sm:p-5"
          >
            <h2 id={`${c.id}-statuses`} className="text-xl font-bold tracking-tight text-text">
              {c.heading}
            </h2>
            <StatusList items={c.statuses} className="mt-4" />
          </section>
        ))}
      </div>

      <p className={`mt-8 max-w-3xl text-muted ${linkText}`}>
        <StatusFontsCta />
      </p>

      <article className="prose-content cv-auto mt-14">
        <DiscordStatusIdeasArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={discordStatusIdeasFaqs} heading={page.faqHeading} />
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
