import { localePath, prefixedLocales } from "@/lib/i18n";

/**
 * Content images shown on each page, for /image-sitemap.xml. Keys are URL paths.
 * When you add an image to a page, list it here too (lib/page-images.test.ts checks this).
 */
const timestampImages = [
  "/discord-timestamp-example.svg",
  "/discord-timestamp-generator-steps.svg",
  "/discord-timestamp-formats.svg",
  "/discord-timestamp-time-zones.svg",
];

export const pageImages: Readonly<Record<string, readonly string[]>> = {
  "/": [
    "/home/discord-font-styles.webp",
    "/home/how-to-use-discord-font-generator.webp",
    "/home/fancy-name-on-discord.webp",
  ],
  // Translated homepages still use the language-neutral SVG.
  ...Object.fromEntries(prefixedLocales.map((l) => [localePath(l, "/"), ["/discord-fonts-examples.svg"]])),
  "/discord-timestamp-generator": timestampImages,
  ...Object.fromEntries(
    prefixedLocales.map((l) => [localePath(l, "/discord-timestamp-generator"), timestampImages]),
  ),
  "/blog/discord-colored-text": ["/blog/discord-colored-text-examples.webp"],
  "/blog/how-to-change-nickname-on-discord": [
    "/blog/how-to-change-nickname-on-discord.webp",
    "/blog/discord-nickname-desktop-menu.webp",
    "/blog/discord-nickname-desktop-field.webp",
    "/blog/discord-nickname-mobile.webp",
    "/blog/discord-nickname-nick-command.webp",
    "/blog/discord-nickname-role-permissions.webp",
    "/blog/discord-nickname-fancy-font.webp",
  ],
  "/blog/what-font-does-discord-use": [
    "/blog/what-font-does-discord-use.webp",
    "/blog/discord-whitney-vs-gg-sans.webp",
    "/blog/discord-font-alternatives.webp",
  ],
};
