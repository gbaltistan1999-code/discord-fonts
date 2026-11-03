import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlatformPageView, platformMetadata } from "@/components/PlatformPage";
import { getPlatformPage, platformPages } from "@/content/platforms";
import { isLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; platform: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return platformPages.map((page) => ({ platform: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, platform } = await params;
  return isLocale(lang) && getPlatformPage(platform) ? platformMetadata(platform, lang) : {};
}

export default async function LocalePlatformPage({ params }: PageProps) {
  const { lang, platform } = await params;
  if (!isLocale(lang) || !getPlatformPage(platform)) notFound();
  return <PlatformPageView slug={platform} locale={lang} />;
}
