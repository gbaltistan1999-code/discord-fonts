import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FancyTextPage, fancyTextMetadata } from "@/components/FancyTextPage";
import { isLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? fancyTextMetadata(lang) : {};
}

export default async function LocaleFancyTextPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <FancyTextPage locale={lang} />;
}
