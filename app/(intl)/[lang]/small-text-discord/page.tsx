import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SmallTextPage, smallTextMetadata } from "@/components/SmallTextPage";
import { isAvailable, isLocale } from "@/lib/i18n";

const PATH = "/small-text-discord";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) && isAvailable(PATH, lang) ? smallTextMetadata(lang) : {};
}

/** Translated small text page; languages without a translation are a 404. */
export default async function LocaleSmallTextPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang) || !isAvailable(PATH, lang)) notFound();
  return <SmallTextPage locale={lang} />;
}
