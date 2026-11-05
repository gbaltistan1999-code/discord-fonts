import { discordTimestampPage } from "@/content/discord-timestamp";
import { getStrings } from "@/content/i18n";
import { getTimestampPage } from "@/content/i18n/pages/timestamp";
import { defaultLocale, localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { TimestampGenerator } from "./TimestampGenerator";
import { ToolPageEnd } from "./ToolPageEnd";

const PATH = discordTimestampPage.path;

export function timestampMetadata(locale: Locale) {
  const page = getTimestampPage(locale);
  // Only the English route has its own share image; translations use the shared one.
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: PATH,
    locale,
    ownImage: locale === defaultLocale,
  });
}

/** The Discord Timestamp Generator page in any language. */
export function TimestampPage({ locale }: { locale: Locale }) {
  const page = getTimestampPage(locale);
  const { timestamp, ui } = getStrings(locale);

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
        <TimestampGenerator
          strings={timestamp}
          hero={
            <div className="mx-auto mb-7 max-w-3xl text-center">
              <h1 className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-teal-300 dark:to-cyan-300">
                {page.h1}
              </h1>
              <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{page.intro}</p>
            </div>
          }
        />
      </section>

      <ToolPageEnd content={page}>
        <p className="text-sm text-muted">{ui.footer.disclaimer}</p>
      </ToolPageEnd>
    </>
  );
}
