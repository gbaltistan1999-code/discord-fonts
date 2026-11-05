import Link from "next/link";
import { en } from "@/content/i18n/strings/en";
import { platformPages } from "@/content/platforms";
import { convert } from "@/lib/fonts";
import { defaultLocale, fill, hrefFor, type Locale } from "@/lib/i18n";

export const socialSlugs = [
  "instagram-fonts",
  "tiktok-fonts",
  "whatsapp-fonts",
  "facebook-fonts",
  "twitter-fonts",
  "youtube-fonts",
  "snapchat-fonts",
  "telegram-fonts",
  "linkedin-fonts",
  "threads-fonts",
  "pinterest-fonts",
  "twitch-fonts",
] as const;

export const gamingSlugs = [
  "free-fire-fonts",
  "pubg-fonts",
  "roblox-fonts",
  "minecraft-fonts",
  "fortnite-fonts",
  "valorant-fonts",
  "call-of-duty-fonts",
  "steam-fonts",
  "xbox-fonts",
] as const;

/** A different look on each card, in turn. */
const SAMPLE_STYLES = [
  "bold-serif",
  "bold-script",
  "bold-fraktur",
  "small-caps",
  "double-struck",
  "bubble",
  "monospace",
  "bold-italic",
] as const;

/** Grid of platform font generators (like the style cards), each name shown in a fancy style. */
export function PlatformGrid({
  slugs,
  exclude,
  locale = defaultLocale,
  platformFonts = en.ui.platformFonts,
}: {
  slugs: readonly string[];
  exclude?: string;
  locale?: Locale;
  /** "{name} Fonts" in the page's language. */
  platformFonts?: string;
}) {
  const pages = slugs
    .filter((slug) => slug !== exclude)
    .map((slug) => platformPages.find((page) => page.slug === slug))
    .filter((page) => page !== undefined);
  // Three columns when that fills every row (e.g. 9 games), otherwise four.
  const columns = pages.length % 4 !== 0 && pages.length % 3 === 0 ? 3 : 4;
  // Empty cells keep the hairline grid even: phones (2 columns) and larger screens need different counts.
  const phoneFillers = pages.length % 2;
  const wideFillers = (columns - (pages.length % columns)) % columns;
  const fillers = Math.max(phoneFillers, wideFillers);

  return (
    <ul
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border ${
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
      }`}
    >
      {pages.map((page, i) => (
        <li key={page.slug} className="bg-surface">
          <Link
            href={hrefFor(locale, `/${page.slug}`)}
            className="group flex h-full flex-col gap-1 p-4 transition-colors hover:bg-surface-2 sm:p-5"
          >
            <span aria-hidden="true" className="fancy-text truncate py-1 text-xl text-text">
              {convert(SAMPLE_STYLES[i % SAMPLE_STYLES.length] ?? "bold-serif", page.name)}
            </span>
            <span className="text-sm text-muted group-hover:text-text">
              {fill(platformFonts, { name: page.name })}
            </span>
          </Link>
        </li>
      ))}
      {Array.from({ length: fillers }, (_, i) => (
        <li
          key={`filler-${i}`}
          aria-hidden="true"
          className={`bg-surface ${i < phoneFillers ? "" : "hidden"} ${i < wideFillers ? "sm:block" : "sm:hidden"}`}
        />
      ))}
    </ul>
  );
}
