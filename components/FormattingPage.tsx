import { getStrings } from "@/content/i18n";
import { getFormattingPage } from "@/content/i18n/pages/formatting";
import { localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { FormattingTool } from "./FormattingTool";
import { JsonLd } from "./JsonLd";

const PATH = "/discord-text-formatting";

export function formattingMetadata(locale: Locale) {
  const page = getFormattingPage(locale);
  return buildMetadata({ title: page.title, description: page.description, path: PATH, locale });
}

/** The Discord Text Formatting page in any language. */
export function FormattingPage({ locale }: { locale: Locale }) {
  const page = getFormattingPage(locale);
  const { formatting } = getStrings(locale);
  const Guide = page.Guide;

  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.appName, description: page.description, path: PATH, locale })}
      />
      {page.faqs && page.faqs.length > 0 && <JsonLd data={faqJsonLd(page.faqs)} />}

      <div className="pt-6">
        <Breadcrumbs locale={locale} items={[{ name: page.name, path: localePath(locale, PATH) }]} />
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">{page.intro}</p>
      </div>

      <section aria-label={page.toolLabel}>
        <FormattingTool headingLevel="h2" strings={formatting} />
      </section>

      <article className="cv-auto mt-12">
        <Guide />
      </article>

      {page.faqs && page.faqs.length > 0 && (
        <div className="cv-auto mt-12">
          <FaqList faqs={page.faqs} heading="Frequently Asked Questions" />
        </div>
      )}
    </>
  );
}
