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
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(discordNameFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">{page.intro}</p>
      </div>

      <section aria-label="Discord name generator">
        <FontGenerator
          sampleText={page.sampleText}
          order={page.order}
          randomAfter={page.order.length}
          showSupport
          namePreview
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
    </>
  );
}
