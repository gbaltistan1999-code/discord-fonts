import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TimestampPage, timestampMetadata } from "@/components/TimestampPage";
import { isLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? timestampMetadata(lang) : {};
}

export default async function LocaleTimestampPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <TimestampPage locale={lang} />;
}
