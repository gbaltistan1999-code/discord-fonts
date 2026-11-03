import type { Locale } from "@/lib/i18n";
import { de } from "./strings/de";
import { en } from "./strings/en";
import { es } from "./strings/es";
import { fr } from "./strings/fr";
import { ja } from "./strings/ja";
import { ptBr } from "./strings/pt-br";
import type { Strings } from "./types";

const strings: Record<Locale, Strings> = { en, es, "pt-br": ptBr, fr, de, ja };

/** Interface strings for a locale. */
export function getStrings(locale: Locale): Strings {
  return strings[locale];
}
