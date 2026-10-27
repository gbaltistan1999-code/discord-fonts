import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { FontGenerator } from "@/components/FontGenerator";
import { FormattingTool } from "@/components/FormattingTool";
import { JsonLd } from "@/components/JsonLd";
import { StyleLinks } from "@/components/StyleLinks";
import { homeFaqs } from "@/content/faqs";
import { HomeArticle } from "@/content/home";
import { fontStyles } from "@/lib/fonts";
import { buildMetadata, faqJsonLd, webApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

function SectionHeader({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <header className="mb-6 max-w-2xl">
      <h2 id={id} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-muted">{children}</p>
    </header>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          websiteJsonLd(),
          webApplicationJsonLd({
            name: "Discord Fonts Generator",
            description: siteConfig.description,
            path: "/",
          }),
          faqJsonLd(homeFaqs),
        ]}
      />

      <section className="mx-auto max-w-3xl pt-12 pb-10 text-center sm:pt-20 sm:pb-12">
        <h1 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-[2.75rem]">
          Discord Fonts Generator – Copy &amp; Paste Cool Discord Font Styles
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-pretty text-muted sm:text-lg">
          Turn any text into {fontStyles.length} Discord fonts, from bold and cursive to gothic and glitch.
          Copy a style and paste it into your Discord name, nickname, server or messages. Free, private and no
          sign-up.
        </p>
      </section>

      <section id="font-styles" aria-label="Discord font generator" className="mx-auto max-w-5xl scroll-mt-4">
        <FontGenerator />
      </section>

      <div className="mx-auto max-w-5xl">
        <section aria-labelledby="formatting-tool" className="mt-20 border-t border-border pt-16">
          <SectionHeader id="formatting-tool" title="Discord Text Formatting Helper">
            Bold, spoilers, headers and colored text use Discord’s built-in markdown. Type once and copy the
            syntax, or read the{" "}
            <Link href="/discord-text-formatting" className="text-text underline underline-offset-4">
              full formatting guide
            </Link>
            .
          </SectionHeader>
          <div className="max-w-3xl">
            <FormattingTool />
          </div>
        </section>

        <section aria-labelledby="popular-styles" className="cv-auto mt-20 border-t border-border pt-16">
          <SectionHeader id="popular-styles" title="Popular Discord Font Styles">
            Focused generators for one look at a time, each with tips on where it works best.
          </SectionHeader>
          <StyleLinks />
        </section>

        <div className="cv-auto mt-20 border-t border-border pt-4">
          <article className="mx-auto max-w-3xl">
            <HomeArticle />
          </article>
          <div className="mx-auto mt-16 max-w-3xl">
            <FaqList faqs={homeFaqs} heading="Discord Font FAQ" />
          </div>
        </div>
      </div>
    </>
  );
}
