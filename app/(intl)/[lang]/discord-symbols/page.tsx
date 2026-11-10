import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DiscordSymbolsPage, discordSymbolsMetadata } from "@/components/DiscordSymbolsPage";
import { isAvailable, isLocale } from "@/lib/i18n";

const PATH = "/discord-symbols";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) && isAvailable(PATH, lang) ? discordSymbolsMetadata(lang) : {};
}

/** Translated Discord symbols page; languages without a translation are a 404. */
export default async function LocaleDiscordSymbolsPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang) || !isAvailable(PATH, lang)) notFound();
  return <DiscordSymbolsPage locale={lang} />;
}
