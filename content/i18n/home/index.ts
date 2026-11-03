import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "../types";
import { homeDe } from "./de";
import { homeEn } from "./en";
import { homeEs } from "./es";
import { homeFr } from "./fr";
import { homeJa } from "./ja";
import { homePtBr } from "./pt-br";

const homes: Record<Locale, HomeContent> = {
  en: homeEn,
  es: homeEs,
  "pt-br": homePtBr,
  fr: homeFr,
  de: homeDe,
  ja: homeJa,
};

/** Homepage copy for a locale (server-only: it holds JSX). */
export function getHome(locale: Locale): HomeContent {
  return homes[locale];
}
