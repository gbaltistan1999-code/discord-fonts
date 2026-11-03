import Link from "next/link";
import { en } from "@/content/i18n/strings/en";
import { stylePages } from "@/content/style-pages";
import { convert } from "@/lib/fonts";
import { defaultLocale, fill, hrefFor, type Locale } from "@/lib/i18n";

/** Sample style shown on each landing-page card. */
const cardSamples: Record<string, string> = {
  bold: "bold-serif",
  cursive: "bold-script",
  gothic: "bold-fraktur",
  "small-caps": "small-caps",
  aesthetic: "fullwidth",
  glitch: "zalgo",
  bubble: "bubble",
  "upside-down": "upside-down",
};

/** Internal links to every style generator page, each with a live sample. */
export function StyleLinks({
  exclude,
  locale = defaultLocale,
  names = en.ui.styleNames,
  cardLabel = en.styleCard,
}: {
  exclude?: string;
  locale?: Locale;
  /** Style names in the page's language, by slug. */
  names?: Record<string, string>;
  /** "{name} font generator" in the page's language. */
  cardLabel?: string;
}) {
  const pages = stylePages.filter((page) => page.slug !== exclude);
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
      {pages.map((page) => (
        <li key={page.slug} className="bg-surface">
          <Link
            href={hrefFor(locale, `/discord-font-generator/${page.slug}`)}
            className="group flex h-full flex-col gap-1 p-4 transition-colors hover:bg-surface-2 sm:p-5"
          >
            {/* The sample stays in English: the Unicode alphabets only cover A–Z. */}
            <span aria-hidden="true" className="fancy-text truncate py-1 text-xl text-text">
              {convert(cardSamples[page.slug] ?? "bold-serif", page.name, { zalgoIntensity: 2 })}
            </span>
            <span className="text-sm text-muted group-hover:text-text">
              {fill(cardLabel, { name: names[page.slug] ?? page.name })}
            </span>
          </Link>
        </li>
      ))}
      {/* Keep the hairline grid even when the item count is odd. */}
      {pages.length % 2 === 1 && <li aria-hidden="true" className="bg-surface" />}
    </ul>
  );
}
