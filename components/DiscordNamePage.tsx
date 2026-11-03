import { discordNamePage } from "@/content/discord-name";
import { getStrings } from "@/content/i18n";
import { getDiscordName } from "@/content/i18n/pages/discord-name";
import { localePath, type Locale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FontGenerator } from "./FontGenerator";
import { JsonLd } from "./JsonLd";
import { platformLinksProps } from "./platform-links-props";
import { ToolPageEnd } from "./ToolPageEnd";

const PATH = discordNamePage.path;

export function discordNameMetadata(locale: Locale) {
  const page = getDiscordName(locale);
  return buildMetadata({ title: page.title, description: page.description, path: PATH, locale });
}

/** The Discord Name Generator page in any language. */
export function DiscordNamePage({ locale }: { locale: Locale }) {
  const page = getDiscordName(locale);
  const { generator } = getStrings(locale);

  return (
    <div className="accent-teal">
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
          order={discordNamePage.order}
          randomAfter={discordNamePage.order.length}
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

      <ToolPageEnd content={page} />
    </div>
  );
}
