import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FormattingTool } from "@/components/FormattingTool";
import { JsonLd } from "@/components/JsonLd";
import { FormattingGuide } from "@/content/formatting";
import { buildMetadata, webApplicationJsonLd } from "@/lib/seo";

const path = "/discord-text-formatting";
const title = "Discord Text Formatting Guide – Bold, Color & Markdown";
const description =
  "Learn Discord text formatting: bold, italic, underline, spoiler, headers, subtext, code blocks and colored text. Copy ready-made Discord markdown in one click.";

export const metadata = buildMetadata({ title, description, path });

export default function DiscordTextFormattingPage() {
  return (
    <>
      <JsonLd data={webApplicationJsonLd({ name: "Discord Text Formatting Tool", description, path })} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: "Discord Text Formatting", path }]} />
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          Discord Text Formatting: Markdown Guide &amp; Generator
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">
          Type your message once and copy it as bold, italic, underlined, spoiler, header, subtext, code or
          colored text, all using Discord’s built-in markdown.
        </p>
      </div>

      <section aria-label="Discord markdown formatting tool">
        <FormattingTool headingLevel="h2" />
      </section>

      <article className="cv-auto mt-12">
        <FormattingGuide />
      </article>
    </>
  );
}
