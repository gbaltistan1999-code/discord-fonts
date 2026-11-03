import type { Locale } from "@/lib/i18n";
import { de } from "./strings/de";
import { en } from "./strings/en";
import { es } from "./strings/es";
import { fr } from "./strings/fr";
import { ja } from "./strings/ja";
import { ptBr } from "./strings/pt-br";
import { fontNamesDe } from "./font-names/de";
import { fontNamesEs } from "./font-names/es";
import { fontNamesFr } from "./font-names/fr";
import { fontNamesJa } from "./font-names/ja";
import { fontNamesPtBr } from "./font-names/pt-br";
import { timestampStrings } from "./strings/timestamp";
import type { BaseStrings, Strings } from "./types";

const base: Record<Locale, BaseStrings> = { en, es, "pt-br": ptBr, fr, de, ja };

/** Style names on the result cards; English keeps the names from lib/fonts. */
const fontNames: Partial<Record<Locale, Record<string, string>>> = {
  es: fontNamesEs,
  "pt-br": fontNamesPtBr,
  fr: fontNamesFr,
  de: fontNamesDe,
  ja: fontNamesJa,
};

const strings = Object.fromEntries(
  Object.entries(base).map(([locale, s]) => [
    locale,
    {
      ...s,
      generator: { ...s.generator, styleNames: fontNames[locale as Locale] },
      timestamp: timestampStrings[locale as Locale],
    },
  ]),
) as Record<Locale, Strings>;

/** Interface strings for a locale. */
export function getStrings(locale: Locale): Strings {
  return strings[locale];
}
