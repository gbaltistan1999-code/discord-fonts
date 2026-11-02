import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FontGenerator } from "@/components/FontGenerator";
import { JsonLd } from "@/components/JsonLd";
import {
  FancyTextArticle,
  fancyTextFaqs,
  fancyTextPage as page,
  fancyTextRelated,
} from "@/content/fancy-text";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  imageAlt: page.h1,
});

export default function FancyTextGeneratorPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(fancyTextFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <section aria-label="Fancy text generator">
        <FontGenerator
          variant="list"
          sampleText={page.sampleText}
          order={page.order}
          showSupport
          hero={
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h1 className="bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-violet-300 dark:to-fuchsia-300">
                {page.h1}
              </h1>
              <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{page.intro}</p>
            </div>
          }
        />
      </section>

      <article className="prose-content cv-auto mt-12">
        <FancyTextArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={fancyTextFaqs} heading="FAQ" />
      </div>

      <section aria-labelledby="related-links" className="prose-content mt-12">
        <h2 id="related-links">Related links</h2>
        <ul>
          {fancyTextRelated.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
