"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { en } from "@/content/i18n/strings/en";
import { platformPages } from "@/content/platforms";
import { defaultLocale, fill, hrefFor, type Locale } from "@/lib/i18n";

export interface PlatformLinksProps {
  /** Language of the page; platform links go to that language. */
  locale?: Locale;
  title?: string;
  /** The Discord fonts home in the page's language. */
  homeHref?: string;
  homeLabel?: string;
  /** "{name} Fonts" */
  platformFonts?: string;
}

/** Sidebar panel linking to the font generator for each social platform. */
export function PlatformLinks({
  title = en.generator.platformsTitle,
  homeHref = "/",
  homeLabel = en.ui.links.discordFonts,
  platformFonts = en.ui.platformFonts,
  locale = defaultLocale,
}: PlatformLinksProps) {
  const pathname = usePathname();
  const links = [
    { href: homeHref, label: homeLabel },
    ...platformPages.map((page) => ({
      href: hrefFor(locale, `/${page.slug}`),
      label: fill(platformFonts, { name: page.name }),
    })),
  ];

  return (
    <nav aria-labelledby="platform-links" className="rounded-xl border border-border bg-surface p-4">
      <h2 id="platform-links" className="mb-3 text-xs font-semibold tracking-wider text-muted uppercase">
        {title}
      </h2>
      <ul className="space-y-1.5">
        {links.map((link) => {
          const current = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                  current
                    ? "border-accent bg-surface-2 text-text"
                    : "border-border text-text hover:border-text/30 hover:bg-surface-2"
                }`}
              >
                {link.label}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 text-muted" fill="currentColor">
                  <path d="M7.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L11.6 10 7.3 5.7a1 1 0 0 1 0-1.4Z" />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
