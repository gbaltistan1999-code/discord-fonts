import Link from "next/link";
import {
  UsernameGeneratorArticlePtBr,
  usernameGeneratorFaqsPtBr,
  usernameGeneratorPagePtBr,
  usernameGeneratorStringsPtBr,
  usernameMoreToolsPtBr,
} from "@/content/i18n/pages/username-generator/pt-br";
import {
  UsernameGeneratorArticle,
  usernameGeneratorFaqs,
  usernameGeneratorPage,
} from "@/content/username-generator";
import { localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";
import { usernameGeneratorStringsEn } from "@/content/username-generator-strings";
import { UsernameGenerator } from "./UsernameGenerator";

const moreToolsEn = [
  { href: "/", label: "Discord Fonts Generator", note: "224+ fancy fonts for names and bios" },
  { href: "/fancy-text-generator", label: "Fancy Text Generator", note: "Styled text for any app" },
  { href: "/discord-name-generator", label: "Discord Name Generator", note: "Fancy display names" },
  { href: "/small-text-discord", label: "Small Text Generator", note: "Tiny text and -# subtext" },
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

const content = {
  en: {
    page: { ...usernameGeneratorPage, faqHeading: "FAQ", moreToolsHeading: "More Discord tools" },
    faqs: usernameGeneratorFaqs,
    Article: UsernameGeneratorArticle,
    moreTools: moreToolsEn,
    strings: usernameGeneratorStringsEn,
  },
  "pt-br": {
    page: usernameGeneratorPagePtBr,
    faqs: usernameGeneratorFaqsPtBr,
    Article: UsernameGeneratorArticlePtBr,
    moreTools: usernameMoreToolsPtBr,
    strings: usernameGeneratorStringsPtBr,
  },
};

const getContent = (locale: Locale) => (locale === "pt-br" ? content["pt-br"] : content.en);

export function usernameGeneratorMetadata(locale: Locale = "en") {
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

export function UsernameGeneratorPage({ locale = "en" }: { locale?: Locale }) {
  const { page, faqs, Article, moreTools, strings } = getContent(locale);
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.name, description: page.description, path: page.path, locale })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="pt-6">
        <Breadcrumbs locale={locale} items={[{ name: page.name, path: localePath(locale, page.path) }]} />
      </div>

      <UsernameGenerator strings={strings} hero={<HeroHeading title={page.h1} intro={page.intro} />} />

      <article className="prose-content cv-auto mt-12">
        <Article />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={faqs} heading={page.faqHeading} />
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
