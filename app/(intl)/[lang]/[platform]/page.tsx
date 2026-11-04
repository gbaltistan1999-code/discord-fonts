import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlatformPageView, platformMetadata } from "@/components/PlatformPage";
import { getPlatformPage, platformPages } from "@/content/platforms";
import { isLocale, isTranslated } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; platform: string }>;
}

export const dynamicParams = false;

/** Only platforms with a translation; newer pages are English-only until they are translated. */
const translatedSlug = (slug: string) => Boolean(getPlatformPage(slug)) && isTranslated(`/${slug}`);

export function generateStaticParams() {
  return platformPages.filter((page) => translatedSlug(page.slug)).map((page) => ({ platform: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, platform } = await params;
  return isLocale(lang) && translatedSlug(platform) ? platformMetadata(platform, lang) : {};
}

export default async function LocalePlatformPage({ params }: PageProps) {
  const { lang, platform } = await params;
  if (!isLocale(lang) || !translatedSlug(platform)) notFound();
  return <PlatformPageView slug={platform} locale={lang} />;
}
