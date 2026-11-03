import { SiteDocument, rootMetadata, rootViewport } from "@/components/SiteDocument";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Root layout for the English site (no URL prefix). */
export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
