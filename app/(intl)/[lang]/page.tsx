import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage, homeMetadata } from "@/components/HomePage";
import { isLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? homeMetadata(lang) : {};
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomePage locale={lang} />;
}
