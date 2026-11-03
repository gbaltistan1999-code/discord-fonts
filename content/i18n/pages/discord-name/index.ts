import type { Locale } from "@/lib/i18n";
import type { ToolPageContent } from "../../types";
import { discordNameDe } from "./de";
import { discordNameEn } from "./en";
import { discordNameEs } from "./es";
import { discordNameFr } from "./fr";
import { discordNameJa } from "./ja";
import { discordNamePtBr } from "./pt-br";

const pages: Record<Locale, ToolPageContent> = {
  en: discordNameEn,
  es: discordNameEs,
  "pt-br": discordNamePtBr,
  fr: discordNameFr,
  de: discordNameDe,
  ja: discordNameJa,
};

export function getDiscordName(locale: Locale): ToolPageContent {
  return pages[locale];
}
