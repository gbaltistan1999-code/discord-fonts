import type { Locale } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { fancyTextDe } from "./de";
import { fancyTextEn } from "./en";
import { fancyTextEs } from "./es";
import { fancyTextFr } from "./fr";
import { fancyTextJa } from "./ja";
import { fancyTextPtBr } from "./pt-br";

const pages: Record<Locale, ToolPageContent> = {
  en: fancyTextEn,
  es: fancyTextEs,
  "pt-br": fancyTextPtBr,
  fr: fancyTextFr,
  de: fancyTextDe,
  ja: fancyTextJa,
};

export function getFancyText(locale: Locale): ToolPageContent {
  return pages[locale];
}
