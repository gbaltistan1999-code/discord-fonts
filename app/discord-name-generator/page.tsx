import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FontGenerator } from "@/components/FontGenerator";
import { JsonLd } from "@/components/JsonLd";
import {
  DiscordNameArticle,
  discordNameFaqs,
  discordNamePage as page,
  discordNameRelated,
} from "@/content/discord-name";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  imageAlt: page.h1,
});

export default function DiscordNameGeneratorPage() {
  return (
    <div className="accent-teal">
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(discordNameFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <section aria-label="Discord name generator">
        <FontGenerator
          variant="list"
          sampleText={page.sampleText}
          order={page.order}
          randomAfter={page.order.length}
          showSupport
          namePreview
          hero={
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h1 className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-teal-300 dark:to-cyan-300">
                {page.h1}
              </h1>
              <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{page.intro}</p>
            </div>
          }
        />
      </section>

      <article className="prose-content cv-auto mt-12">
        <DiscordNameArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={discordNameFaqs} heading="FAQ" />
      </div>

      <section aria-labelledby="related-links" className="prose-content mt-12">
        <h2 id="related-links">Related links</h2>
        <ul>
          {discordNameRelated.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
