import Link from "next/link";
import {
  UsernameGeneratorArticle,
  usernameGeneratorFaqs,
  usernameGeneratorPage as page,
} from "@/content/username-generator";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";
import { UsernameGenerator } from "./UsernameGenerator";

export const usernameGeneratorMetadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  ownImage: true,
});

const moreTools = [
  { href: "/", label: "Discord Fonts Generator", note: "224+ fancy fonts for names and bios" },
  { href: "/fancy-text-generator", label: "Fancy Text Generator", note: "Styled text for any app" },
  { href: "/discord-name-generator", label: "Discord Name Generator", note: "Fancy display names" },
  {
    href: "/discord-timestamp-generator",
    label: "Discord Timestamp Generator",
    note: "Local times for everyone",
  },
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
    href: "/blog/discord-colored-text",
    label: "How to Write Colored Text in Discord",
    note: "Guide: ANSI color codes",
  },
] as const;

export function UsernameGeneratorPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.name, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(usernameGeneratorFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <UsernameGenerator hero={<HeroHeading title={page.h1} intro={page.intro} />} />

      <article className="prose-content cv-auto mt-12">
        <UsernameGeneratorArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={usernameGeneratorFaqs} heading="FAQ" />
      </div>

      <section aria-labelledby="more-tools" className="cv-auto mt-12">
        <h2 id="more-tools" className="mb-4 text-2xl font-bold tracking-tight">
          More Discord tools
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
