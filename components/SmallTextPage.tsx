import { smallTextPage as page } from "@/content/small-text-discord";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { FontGenerator } from "./FontGenerator";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";

export const smallTextMetadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  ownImage: true,
});

/** /small-text-discord: tiny-text generator plus the small text guide. */
export function SmallTextPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <section aria-label="Small text generator">
        <FontGenerator
          variant="list"
          featured={{ label: "Small text styles", ids: page.featuredIds }}
          sampleText="small text"
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
