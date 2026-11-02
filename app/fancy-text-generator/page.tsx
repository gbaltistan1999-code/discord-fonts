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
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">{page.intro}</p>
      </div>

      <section aria-label="Fancy text generator">
        <FontGenerator sampleText={page.sampleText} order={page.order} showSupport />
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
