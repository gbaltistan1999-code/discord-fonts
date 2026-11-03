import type { Metadata } from "next";
import { getPlatformPage, platformOutro, type PlatformPage } from "@/content/platforms";
import { renderOgImage } from "@/lib/og";
import { buildMetadata, faqJsonLd, webApplicationJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { FontGenerator } from "./FontGenerator";
import { JsonLd } from "./JsonLd";

/*
 * Platform pages ("/roblox-fonts", ...) are fixed routes rather than one
 * dynamic "/[platform]" route, because the top-level dynamic segment is used
 * by the translated site ("/[lang]"). Each route file just picks its slug.
 */

function page(slug: string): PlatformPage {
  const found = getPlatformPage(slug);
  if (!found) throw new Error(`Unknown platform page: ${slug}`);
  return found;
}

export function platformMetadata(slug: string): Metadata {
  const p = page(slug);
  return buildMetadata({ title: p.title, description: p.description, path: `/${p.slug}`, ownImage: true });
}

export function platformOgImage(slug: string) {
  const p = page(slug);
  return renderOgImage({
    title: p.h1,
    subtitle: `Copy & paste free fonts for ${p.name} names, bios and posts.`,
    tags: ["Free", "Copy & Paste", "Works on mobile"],
  });
}

export function PlatformPageView({ slug }: { slug: string }) {
  const p = page(slug);
  const path = `/${p.slug}`;

  return (
    <>
      <JsonLd data={webApplicationJsonLd({ name: p.h1, description: p.description, path })} />
      <JsonLd data={faqJsonLd(p.faqs)} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: `${p.name} Fonts`, path }]} />
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {p.h1}
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">{p.intro}</p>
      </div>

      <section aria-label={`${p.name} font generator`}>
        <FontGenerator featured={p.featured} sampleText={p.sampleText} />
      </section>

      <article className="prose-content cv-auto mt-12">
        {p.body}
        {platformOutro}
        <p className="text-sm text-muted">This site is not affiliated with or endorsed by {p.name}.</p>
      </article>

      <div className="cv-auto mt-12">
        <FaqList faqs={p.faqs} heading={`${p.name} Fonts FAQ`} />
      </div>
    </>
  );
}
