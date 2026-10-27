import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FontGenerator } from "@/components/FontGenerator";
import { JsonLd } from "@/components/JsonLd";
import { StyleLinks } from "@/components/StyleLinks";
import { getStylePage, stylePages } from "@/content/style-pages";
import { buildMetadata, webApplicationJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ style: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return stylePages.map((page) => ({ style: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getStylePage((await params).style);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/discord-font-generator/${page.slug}`,
    imageAlt: `${page.h1} – Discord Fonts`,
  });
}

export default async function StylePageRoute({ params }: PageProps) {
  const page = getStylePage((await params).style);
  if (!page) notFound();
  const path = `/discord-font-generator/${page.slug}`;

  return (
    <>
      <JsonLd data={webApplicationJsonLd({ name: page.h1, description: page.description, path })} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: `${page.name} Font Generator`, path }]} />
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">{page.intro}</p>
      </div>

      <section aria-label={`${page.name} Discord font generator`}>
        <FontGenerator featured={page.featured} />
      </section>

      <article className="prose-content cv-auto mt-12">
        {page.body}
        <p>
          Looking for more options? The main <Link href="/">Discord Fonts generator</Link> shows every style
          at once, including bold, cursive, gothic and glitch text.
        </p>
      </article>

      <section aria-labelledby="more-styles" className="cv-auto mt-12">
        <h2 id="more-styles" className="mb-4 text-2xl font-bold tracking-tight">
          More Discord Font Generators
        </h2>
        <StyleLinks exclude={page.slug} />
      </section>
    </>
  );
}
