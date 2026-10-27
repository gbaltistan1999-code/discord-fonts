import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
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

      <section className="pt-8 pb-6 sm:pt-10">
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Discord Fonts Generator – Copy &amp; Paste Cool Discord Font Styles
        </h1>
        <p className="mt-4 max-w-3xl text-base text-muted sm:text-lg">
          Type below to turn your text into {fontStyles.length}+ Discord fonts instantly: bold, cursive,
          gothic, bubble, glitch and more. Copy any style with one click and paste it into your display name,
          server nickname, server name, bio or messages. It is free, works on mobile and needs no app.
        </p>
      </section>

      <section id="font-styles" aria-label="Discord font generator" className="scroll-mt-4">
        <FontGenerator sidebar={<AdSlot variant="sidebar" />} />
      </section>

      <section aria-labelledby="formatting-tool" className="mt-16">
        <h2 id="formatting-tool" className="text-2xl font-bold tracking-tight">
          Discord Text Formatting Helper
        </h2>
        <p className="mt-2 mb-5 max-w-3xl text-muted">
          Want bold, spoilers, headers or colored text in a message? Discord’s markdown handles that natively.
          Type here and copy the ready-made syntax. Full details are in the{" "}
          <Link href="/discord-text-formatting" className="text-accent underline underline-offset-2">
            Discord text formatting guide
          </Link>
          .
        </p>
        <FormattingTool />
      </section>

      <section aria-labelledby="popular-styles" className="cv-auto mt-16">
        <h2 id="popular-styles" className="text-2xl font-bold tracking-tight">
          Popular Discord Font Styles
        </h2>
        <p className="mt-2 mb-5 max-w-3xl text-muted">
          Each Discord font generator below is focused on one look, with tips on where it works best.
        </p>
        <StyleLinks />
      </section>

      <article className="cv-auto mt-8">
        <HomeArticle />
      </article>

      <div className="cv-auto mt-6">
        <FaqList faqs={homeFaqs} heading="Discord Font FAQ" />
      </div>
    </>
  );
}
