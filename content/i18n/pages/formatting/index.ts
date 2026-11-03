import type { Locale } from "@/lib/i18n";
import type { FormattingPageContent } from "../../types";
import { formattingDe } from "./de";
import { formattingEn } from "./en";
import { formattingEs } from "./es";
import { formattingFr } from "./fr";
import { formattingJa } from "./ja";
import { formattingPtBr } from "./pt-br";

const pages: Record<Locale, FormattingPageContent> = {
  en: formattingEn,
  es: formattingEs,
  "pt-br": formattingPtBr,
  fr: formattingFr,
  de: formattingDe,
  ja: formattingJa,
};

export function getFormattingPage(locale: Locale): FormattingPageContent {
  return pages[locale];
}
