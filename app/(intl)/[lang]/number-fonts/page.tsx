import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NumberFontsPage, numberFontsMetadata } from "@/components/NumberFontsPage";
import { isAvailable, isLocale } from "@/lib/i18n";

const PATH = "/number-fonts";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) && isAvailable(PATH, lang) ? numberFontsMetadata(lang) : {};
}

/** Translated number fonts page; languages without a translation are a 404. */
export default async function LocaleNumberFontsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang) || !isAvailable(PATH, lang)) notFound();
  return <NumberFontsPage locale={lang} />;
}
