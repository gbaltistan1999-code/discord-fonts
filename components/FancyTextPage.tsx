import { fancyTextPage } from "@/content/fancy-text";
import { getStrings } from "@/content/i18n";
import { getFancyText } from "@/content/i18n/pages/fancy-text";
import { localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FontGenerator } from "./FontGenerator";
import { JsonLd } from "./JsonLd";
import { platformLinksProps } from "./platform-links-props";
import { ToolPageEnd } from "./ToolPageEnd";

const PATH = fancyTextPage.path;

export function fancyTextMetadata(locale: Locale) {
  const page = getFancyText(locale);
  return buildMetadata({ title: page.title, description: page.description, path: PATH, locale });
}

/** The Fancy Text Generator page in any language. */
export function FancyTextPage({ locale }: { locale: Locale }) {
  const page = getFancyText(locale);
  const { generator } = getStrings(locale);

  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: PATH, locale })}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <div className="pt-6">
        <Breadcrumbs locale={locale} items={[{ name: page.name, path: localePath(locale, PATH) }]} />
      </div>

      <section aria-label={page.toolLabel}>
        <FontGenerator
          variant="list"
          strings={generator}
          platformLinks={platformLinksProps(locale)}
          sampleText={page.sampleText}
          order={fancyTextPage.order}
          showSupport
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

      <ToolPageEnd content={page} />
    </>
  );
}
