import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Discord Fonts Generator: Copy and Paste Cool Text",
  description:
    "Free Discord fonts generator. Turn your text into bold, script, gothic and decorated styles, then copy and paste into Discord names, nicknames, bios and messages.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Discord Fonts Generator: Copy and Paste Cool Text",
    description: "Free Discord fonts generator with dozens of copy-and-paste text styles.",
    type: "website",
    siteName: "DiscordFonts",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const footerLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Disclaimer", "/disclaimer"],
  ["Terms", "/terms"],
  ["Privacy", "/privacy"],
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-5">
          <header className="py-6">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              DiscordFonts
            </Link>
          </header>

          <main className="flex-1 pb-16">{children}</main>

          <footer className="border-t border-neutral-200 py-6 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map(([label, href]) => (
                <Link key={href} href={href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  {label}
                </Link>
              ))}
            </nav>
            <p className="mt-4">
              © {new Date().getFullYear()} DiscordFonts. Independent tool, not affiliated with Discord Inc.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
