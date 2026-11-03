import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FormattingPage, formattingMetadata } from "@/components/FormattingPage";
import { isLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? formattingMetadata(lang) : {};
}

export default async function LocaleFormattingPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <FormattingPage locale={lang} />;
}
