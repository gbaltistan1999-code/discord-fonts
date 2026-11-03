import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StylePageView, styleMetadata } from "@/components/StylePage";
import { getStylePage, stylePages } from "@/content/style-pages";

interface PageProps {
  params: Promise<{ style: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return stylePages.map((page) => ({ style: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return styleMetadata((await params).style, "en");
}

export default async function StylePageRoute({ params }: PageProps) {
  const style = getStylePage((await params).style);
  if (!style) notFound();
  return <StylePageView style={style} locale="en" />;
}
