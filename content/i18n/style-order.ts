import type { Locale } from "@/lib/i18n";

/**
 * Styles shown first on the homepage generator in each language, picked for
 * what is popular in that community. The rest follow in the usual order.
 * English keeps the default order.
 */
export const homeStyleOrder: Partial<Record<Locale, readonly string[]>> = {
  // Cursive bios and decorated gamer nicknames (Free Fire, Fortnite, Roblox).
  es: [
    "bold-script",
    "script",
    "gamer-tag",
    "javanese-frame",
    "star-wings",
    "crown",
    "bold-serif",
    "bold-sans",
    "bold-fraktur",
    "small-caps-all",
    "sparkles",
    "hearts",
  ],
  // Free Fire style nicknames first, then cursive and aesthetic bios.
  "pt-br": [
    "gamer-tag",
    "javanese-frame",
    "star-wings",
    "crown",
    "bold-script",
    "script",
    "small-caps-all",
    "sparkles",
    "bold-fraktur",
    "bold-serif",
    "bold-sans",
    "hearts",
  ],
  // Clean, understated styles.
  fr: [
    "small-caps",
    "small-caps-all",
    "script",
    "bold-script",
    "bold-serif",
    "bold-sans",
    "italic",
    "sans-italic",
    "double-struck",
    "corner-brackets",
  ],
  // Fraktur was the everyday German typeface, so it leads.
  de: [
    "bold-fraktur",
    "fraktur",
    "gothic-caps",
    "bold-serif",
    "bold-sans",
    "small-caps",
    "bold-script",
    "script",
    "double-struck",
    "monospace",
  ],
  // Fullwidth letters and cute symbol frames.
  ja: [
    "fullwidth",
    "vaporwave-spaced",
    "kawaii",
    "sparkles",
    "sparkle-frame",
    "hearts",
    "heart-frame",
    "corner-brackets",
    "lenticular",
    "white-lenticular",
    "bunny-prefix",
    "bear-prefix",
    "small-caps-all",
    "bold-script",
  ],
};
