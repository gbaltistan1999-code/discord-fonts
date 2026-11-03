import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DiscordNamePage, discordNameMetadata } from "@/components/DiscordNamePage";
import { isLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? discordNameMetadata(lang) : {};
}

export default async function LocaleDiscordNamePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <DiscordNamePage locale={lang} />;
}
