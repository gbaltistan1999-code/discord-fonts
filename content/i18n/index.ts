import type { Locale } from "@/lib/i18n";
import { de } from "./strings/de";
import { en } from "./strings/en";
import { es } from "./strings/es";
import { fr } from "./strings/fr";
import { ja } from "./strings/ja";
import { ptBr } from "./strings/pt-br";
import { timestampStrings } from "./strings/timestamp";
import type { BaseStrings, Strings } from "./types";

const base: Record<Locale, BaseStrings> = { en, es, "pt-br": ptBr, fr, de, ja };

const strings = Object.fromEntries(
  Object.entries(base).map(([locale, s]) => [
    locale,
    { ...s, timestamp: timestampStrings[locale as Locale] },
  ]),
) as Record<Locale, Strings>;

/** Interface strings for a locale. */
export function getStrings(locale: Locale): Strings {
  return strings[locale];
}
