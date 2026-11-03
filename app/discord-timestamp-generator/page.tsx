import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { TimestampGenerator } from "@/components/TimestampGenerator";
import {
  DiscordTimestampArticle,
  discordTimestampFaqs,
  discordTimestampPage as page,
  discordTimestampRelated,
} from "@/content/discord-timestamp";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  imageAlt: "Discord Timestamp Generator: one code that shows the right local time for everyone",
});

export default function DiscordTimestampGeneratorPage() {
  return (
    <>
      <JsonLd
        data={webApplicationJsonLd({ name: page.h1, description: page.description, path: page.path })}
      />
      <JsonLd data={faqJsonLd(discordTimestampFaqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: page.name, path: page.path }]} />
      </div>

      <section aria-label="Discord timestamp generator">
        <TimestampGenerator
          hero={
            <div className="mx-auto mb-7 max-w-3xl text-center">
              <h1 className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-indigo-300 dark:to-violet-300">
                {page.h1}
              </h1>
              <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{page.intro}</p>
            </div>
          }
        />
      </section>

      <article className="prose-content cv-auto mt-12">
        <DiscordTimestampArticle />
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={discordTimestampFaqs} heading="Discord Timestamp FAQ" />
      </div>

      <section aria-labelledby="related-tools" className="prose-content mt-12">
        <h2 id="related-tools">Related Tools</h2>
        <ul>
          {discordTimestampRelated.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">This site is not affiliated with or endorsed by Discord Inc.</p>
      </section>
    </>
  );
}
