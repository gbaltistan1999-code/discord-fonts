import Link from "next/link";
import {
  BioIdeasIntro,
  BioSymbols,
  DiscordBioIdeasArticle,
  discordBioIdeasFaqs,
  discordBioIdeasPage as page,
} from "@/content/discord-bio-ideas";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { BioIdeas } from "./BioIdeas";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { JsonLd } from "./JsonLd";

const moreTools = [
  { href: "/", label: "Discord Fonts Generator", note: "220+ fancy fonts for bios, names and statuses" },
  { href: "/discord-username-generator", label: "Discord Username Generator", note: "Valid @username ideas" },
  {
    href: "/discord-status-ideas",
    label: "Discord Status Ideas",
    note: "Funny, aesthetic and cool statuses",
  },
  { href: "/discord-symbols", label: "Discord Symbols", note: "Hearts, stars, dividers and more" },
  {
    href: "/discord-text-formatting",
    label: "Discord Text Formatting",
    note: "Bold, spoilers, headers and more",
  },
  { href: "/invisible-text", label: "Invisible Text for Discord", note: "Blank characters to copy" },
] as const;

const sectionHeading = "text-2xl font-extrabold tracking-tight text-balance sm:text-3xl";

export function discordBioIdeasMetadata() {
  return buildMetadata({ title: page.title, description: page.description, path: page.path, ownImage: true });
}

/** /discord-bio-ideas: categorized About Me bios with fonts, templates, symbols, guide and FAQ. */
export function DiscordBioIdeasPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(discordBioIdeasFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <div className="mx-auto max-w-3xl pt-6 pb-8 text-center">
        <h1 className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-teal-300 dark:to-cyan-300">
          {page.h1}
        </h1>
        <p className="mt-3 text-lg font-semibold text-text">{page.subtitle}</p>
        <p className="mx-auto mt-4 max-w-2xl text-base text-pretty text-muted sm:text-lg [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-3">
          <BioIdeasIntro />
        </p>
      </div>

      <BioIdeas />

      <div className="cv-auto mt-14">
        <BioSymbols headingClass={sectionHeading} />
      </div>

      <article className="prose-content cv-auto mt-14">
        <DiscordBioIdeasArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={discordBioIdeasFaqs} heading={page.faqHeading} />
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
