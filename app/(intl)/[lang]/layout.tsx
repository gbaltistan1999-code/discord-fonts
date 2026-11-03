import { notFound } from "next/navigation";
import { SiteDocument, rootMetadata, rootViewport } from "@/components/SiteDocument";
import { defaultLocale, isLocale, prefixedLocales } from "@/lib/i18n";

export const metadata = rootMetadata;
export const viewport = rootViewport;

// Only the listed languages exist; anything else under "/x" is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}

/** Root layout for the translated sites ("/es", "/pt-br", ...), so <html lang> matches the page. */
export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) notFound();
  return <SiteDocument locale={lang}>{children}</SiteDocument>;
}
