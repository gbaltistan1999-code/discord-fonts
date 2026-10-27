import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AdSlot } from "@/components/AdSlot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToastProvider } from "@/components/ToastProvider";
import { siteConfig } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Not preloaded: text paints immediately in the size-matched fallback, keeping Inter off the LCP critical path.
const inter = Inter({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-inter" });

export const metadata: Metadata = {
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0d13" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6fb" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // "dark" is the server default; the inline script corrects it before paint.
    <html lang={siteConfig.language} className={`dark ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-text antialiased">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-accent-solid px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <ToastProvider>
          <Header />
          <div className="mx-auto max-w-6xl px-4 pt-4">
            <AdSlot variant="leaderboard" />
          </div>
          <main id="main" className="mx-auto max-w-6xl px-4">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
