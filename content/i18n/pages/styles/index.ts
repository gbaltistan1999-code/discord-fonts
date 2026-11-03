import type { Locale } from "@/lib/i18n";
import type { StylePagesContent } from "../../types";
import { stylesDe } from "./de";
import { stylesEn } from "./en";
import { stylesEs } from "./es";
import { stylesFr } from "./fr";
import { stylesJa } from "./ja";
import { stylesPtBr } from "./pt-br";

const pages: Record<Locale, StylePagesContent> = {
  en: stylesEn,
  es: stylesEs,
  "pt-br": stylesPtBr,
  fr: stylesFr,
  de: stylesDe,
  ja: stylesJa,
};

export function getStylePages(locale: Locale): StylePagesContent {
  return pages[locale];
}
