import { numberFontsPage as page } from "@/content/number-fonts";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { FontGenerator } from "./FontGenerator";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";

export const numberFontsMetadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  ownImage: true,
});

/** /number-fonts: generator filtered to styles that restyle digits, plus the number fonts guide. */
export function NumberFontsPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <section aria-label="Number fonts generator">
        <FontGenerator
          variant="list"
          featured={{ label: "Number styles", ids: page.featuredIds }}
          sampleText="0123456789"
          hero={<HeroHeading title={page.h1} intro={page.intro} />}
        />
      </section>

      <article className="prose-content cv-auto mt-12">{page.body}</article>

      <div className="cv-auto mt-12">
        <FaqList faqs={page.faqs} heading="Frequently Asked Questions" />
      </div>
    </>
  );
}
