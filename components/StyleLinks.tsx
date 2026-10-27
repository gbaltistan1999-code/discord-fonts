import Link from "next/link";
import { stylePages } from "@/content/style-pages";
import { convert } from "@/lib/fonts";

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
export function StyleLinks({ exclude }: { exclude?: string }) {
  const pages = stylePages.filter((page) => page.slug !== exclude);
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {pages.map((page) => (
        <li key={page.slug}>
          <Link
            href={`/discord-font-generator/${page.slug}`}
            className="group flex h-full flex-col rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent"
          >
            <span aria-hidden="true" className="fancy-text truncate py-1 text-xl text-text">
              {convert(cardSamples[page.slug] ?? "bold-serif", page.name, { zalgoIntensity: 2 })}
            </span>
            <span className="mt-1 text-sm font-medium text-muted group-hover:text-accent">
              {page.name} font generator →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
