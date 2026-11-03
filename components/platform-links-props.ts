import { getStrings } from "@/content/i18n";
import { localePath, type Locale } from "@/lib/i18n";
import type { PlatformLinksProps } from "./PlatformLinks";

/** The platform sidebar's labels and links in a language. */
export function platformLinksProps(locale: Locale): PlatformLinksProps {
  const { ui, generator } = getStrings(locale);
  return {
    locale,
    title: generator.platformsTitle,
    homeHref: localePath(locale, "/"),
    homeLabel: ui.links.discordFonts,
    platformFonts: ui.platformFonts,
  };
}
