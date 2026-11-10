import { getStrings } from "@/content/i18n";
import { smallTextPtBr } from "@/content/i18n/pages/small-text/pt-br";
import { smallTextPage, type SmallTextPageContent } from "@/content/small-text-discord";
import { localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { FontGenerator } from "./FontGenerator";
import { HeroHeading } from "./HeroHeading";
import { JsonLd } from "./JsonLd";

function getPage(locale: Locale): SmallTextPageContent {
  return locale === "pt-br" ? smallTextPtBr : smallTextPage;
}

export function smallTextMetadata(locale: Locale = "en") {
  const page = getPage(locale);
  // Only the English page has its own share image; translations use the shared one.
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    locale,
    ownImage: locale === "en",
  });
}

/** /small-text-discord: tiny-text generator plus the small text guide (English and Portuguese). */
export function SmallTextPage({ locale = "en" }: { locale?: Locale }) {
  const page = getPage(locale);
  const { generator } = getStrings(locale);
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: page.path, locale })}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <div className="pt-6">
        <Breadcrumbs locale={locale} items={[{ name: page.name, path: localePath(locale, page.path) }]} />
      </div>

      <section aria-label={page.toolLabel}>
        <FontGenerator
          variant="list"
          strings={generator}
          featured={{ label: page.featuredLabel, ids: page.featuredIds }}
          sampleText={page.sampleText}
          hero={<HeroHeading title={page.h1} intro={page.intro} />}
        />
      </section>

      <article className="prose-content cv-auto mt-12">{page.body}</article>

      <div className="cv-auto mt-12">
        <FaqList faqs={page.faqs} heading={page.faqHeading} />
      </div>
    </>
  );
}
