import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StylePageView, styleMetadata } from "@/components/StylePage";
import { getStylePage, stylePages } from "@/content/style-pages";
import { isLocale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; style: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return stylePages.map((page) => ({ style: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, style } = await params;
  return isLocale(lang) ? styleMetadata(style, lang) : {};
}

export default async function LocaleStylePage({ params }: PageProps) {
  const { lang, style: slug } = await params;
  const style = getStylePage(slug);
  if (!isLocale(lang) || !style) notFound();
  return <StylePageView style={style} locale={lang} />;
}
