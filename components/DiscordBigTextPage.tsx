import Link from "next/link";
import {
  BigTextGuide,
  BigTextIdeas,
  BigTextTips,
  discordBigTextFaqs,
  discordBigTextPage as page,
} from "@/content/discord-big-text";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { BigTextGenerator } from "./BigTextGenerator";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { JsonLd } from "./JsonLd";

const moreTools = [
  { href: "/", label: "Discord Fonts Generator", note: "220+ fancy fonts to copy and paste" },
  {
    href: "/discord-text-formatting",
    label: "Discord Text Formatting",
    note: "Bold, spoilers, headers and more",
  },
  { href: "/small-text-discord", label: "Discord Small Text", note: "Tiny text and -# subtext" },
  {
    href: "/blog/discord-colored-text",
    label: "Discord Colored Text",
    note: "Color your messages with ANSI",
  },
  { href: "/discord-symbols", label: "Discord Symbols", note: "Hearts, stars, dividers and more" },
  { href: "/discord-bio-ideas", label: "Discord Bio Ideas", note: "About Me bios and templates" },
] as const;

const sectionHeading = "text-2xl font-extrabold tracking-tight text-balance sm:text-3xl";

export function discordBigTextMetadata() {
  return buildMetadata({ title: page.title, description: page.description, path: page.path, ownImage: true });
}

/** /discord-big-text: big text generator, guide, copyable ideas, tips and FAQ. */
export function DiscordBigTextPage() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationJsonLd({ name: page.name, description: page.description, path: page.path }),
          faqJsonLd(discordBigTextFaqs),
        ]}
      />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <section
        aria-label="Big text generator"
        className="-mx-4 mt-6 border-y border-accent/20 bg-linear-to-br from-accent-soft via-surface to-accent-soft px-4 pt-6 pb-7 sm:mx-0 sm:rounded-3xl sm:border sm:px-8 sm:pt-8 sm:pb-9"
      >
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h1 className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-teal-300 dark:to-cyan-300">
            {page.h1}
          </h1>
          <p className="mt-3 text-lg font-semibold text-text">{page.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-pretty text-muted sm:text-lg">{page.intro}</p>
        </div>
        <BigTextGenerator />
      </section>

      <article className="prose-content cv-auto mt-14">
        <BigTextGuide />
      </article>

      <div className="cv-auto mt-14">
        <BigTextIdeas headingClass={sectionHeading} />
      </div>

      <article className="prose-content cv-auto mt-14">
        <BigTextTips />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={discordBigTextFaqs} heading={page.faqHeading} />
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
