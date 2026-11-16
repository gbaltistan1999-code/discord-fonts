import Link from "next/link";
import {
  InvisibleTextArticle,
  invisibleTextFaqs,
  invisibleTextMoreTools,
  invisibleTextPage as page,
  invisibleTextRows,
  InvisibleTextWhatIs,
} from "@/content/invisible-text";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { HeroHeading } from "./HeroHeading";
import { InvisibleCharacters } from "./InvisibleCharacters";
import { InvisibleTextGenerator } from "./InvisibleTextGenerator";
import { JsonLd } from "./JsonLd";

export function invisibleTextMetadata() {
  return buildMetadata({ title: page.title, description: page.description, path: page.path, ownImage: true });
}

/** /invisible-text: quick copy, type-and-amount builder, character list, guide and FAQ. */
export function InvisibleTextPage() {
  return (
    <div className="accent-teal">
      <JsonLd
        data={webApplicationJsonLd({ name: page.name, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(invisibleTextFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <InvisibleTextGenerator hero={<HeroHeading title={page.h1} intro={page.intro} />} />

      <article className="prose-content mt-14">
        <InvisibleTextWhatIs />
        <h2 id="list">Invisible Character List (Copy &amp; Paste)</h2>
        <InvisibleCharacters rows={invisibleTextRows} noteHeading="Best for" />
        <InvisibleTextArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={invisibleTextFaqs} heading={page.faqHeading} />
      </div>

      <section aria-labelledby="more-tools" className="cv-auto mt-12">
        <h2 id="more-tools" className="mb-4 text-2xl font-bold tracking-tight">
          {page.moreToolsHeading}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {invisibleTextMoreTools.map((tool) => (
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
    </div>
  );
}
