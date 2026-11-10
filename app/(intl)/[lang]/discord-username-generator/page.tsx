import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UsernameGeneratorPage, usernameGeneratorMetadata } from "@/components/UsernameGeneratorPage";
import { isAvailable, isLocale } from "@/lib/i18n";

const PATH = "/discord-username-generator";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) && isAvailable(PATH, lang) ? usernameGeneratorMetadata(lang) : {};
}

/** Translated username generator page; languages without a translation are a 404. */
export default async function LocaleUsernameGeneratorPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang) || !isAvailable(PATH, lang)) notFound();
  return <UsernameGeneratorPage locale={lang} />;
}
