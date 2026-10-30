import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FontGenerator } from "@/components/FontGenerator";
import { JsonLd } from "@/components/JsonLd";
import { getPlatformPage, platformOutro, platformPages } from "@/content/platforms";
import { buildMetadata, webApplicationJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ platform: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return platformPages.map((page) => ({ platform: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getPlatformPage((await params).platform);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    imageAlt: page.h1,
  });
}

export default async function PlatformPageRoute({ params }: PageProps) {
  const page = getPlatformPage((await params).platform);
  if (!page) notFound();
  const path = `/${page.slug}`;

  return (
    <>
      <JsonLd data={webApplicationJsonLd({ name: page.h1, description: page.description, path })} />

      <div className="pt-6">
        <Breadcrumbs items={[{ name: `${page.name} Fonts`, path }]} />
        <h1 className="max-w-4xl text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-3 mb-6 max-w-3xl text-base text-muted sm:text-lg">{page.intro}</p>
      </div>

      <section aria-label={`${page.name} font generator`}>
        <FontGenerator />
      </section>

      <article className="prose-content cv-auto mt-12">
        {page.body}
        {platformOutro}
        <p className="text-sm text-muted">This site is not affiliated with or endorsed by {page.name}.</p>
      </article>
    </>
  );
}
