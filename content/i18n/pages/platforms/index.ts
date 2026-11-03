import type { Locale } from "@/lib/i18n";
import type { PlatformPagesContent } from "../../types";
import { platformsDe } from "./de";
import { platformsEn } from "./en";
import { platformsEs } from "./es";
import { platformsFr } from "./fr";
import { platformsJa } from "./ja";
import { platformsPtBr } from "./pt-br";

const pages: Record<Locale, PlatformPagesContent> = {
  en: platformsEn,
  es: platformsEs,
  "pt-br": platformsPtBr,
  fr: platformsFr,
  de: platformsDe,
  ja: platformsJa,
};

export function getPlatformPages(locale: Locale): PlatformPagesContent {
  return pages[locale];
}
