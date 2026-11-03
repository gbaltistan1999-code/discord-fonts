import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getStrings } from "@/content/i18n";
import { localeInfo, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ToastProvider } from "./ToastProvider";
import "@/app/globals.css";

// Not preloaded: text paints immediately in the size-matched fallback, keeping Inter off the LCP critical path.
const inter = Inter({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-inter" });

/** Metadata shared by every root layout; pages override title, description and URLs. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "utilities",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: { google: siteConfig.googleSiteVerification },
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0d13" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6fb" },
  ],
};

/** The <html> document for a language: header, footer, toast and skip link around the page. */
export function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const { ui, toast } = getStrings(locale);
  return (
    // "dark" is the server default; the inline script corrects it before paint.
    <html lang={localeInfo[locale].lang} className={`dark ${inter.variable}`} suppressHydrationWarning>
      {/* This component is the root layout's document, where a plain <head> is correct. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-text antialiased">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-accent-solid px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {ui.skipToContent}
        </a>
        <ToastProvider strings={toast}>
          <Header locale={locale} />
          <main id="main" className="mx-auto max-w-6xl px-4">
            {children}
          </main>
          <Footer locale={locale} />
        </ToastProvider>
      </body>
    </html>
  );
}
