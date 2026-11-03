import type { Locale } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { timestampDe } from "./de";
import { timestampEn } from "./en";
import { timestampEs } from "./es";
import { timestampFr } from "./fr";
import { timestampJa } from "./ja";
import { timestampPtBr } from "./pt-br";

const pages: Record<Locale, ToolPageContent> = {
  en: timestampEn,
  es: timestampEs,
  "pt-br": timestampPtBr,
  fr: timestampFr,
  de: timestampDe,
  ja: timestampJa,
};

export function getTimestampPage(locale: Locale): ToolPageContent {
  return pages[locale];
}
