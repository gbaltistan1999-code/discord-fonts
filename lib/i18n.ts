/**
 * Languages the site is published in. English lives at the root ("/"); every
 * other language lives under its own prefix ("/es", "/pt-br", ...).
 *
 * Only paths listed in `translatedPaths` exist in every language. Links to
 * other pages from a translated page go to the English version.
 */

export const locales = ["en", "es", "pt-br", "fr", "de", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Locales with their own URL prefix. */
export const prefixedLocales = locales.filter((l): l is Exclude<Locale, "en"> => l !== defaultLocale);

export const localeInfo: Record<
  Locale,
  {
    /** Value for <html lang> and hreflang. */
    lang: string;
    /** Open Graph locale. */
    ogLocale: string;
    /** The language's own name, shown in the language switcher. */
    label: string;
  }
> = {
  en: { lang: "en", ogLocale: "en_US", label: "English" },
  es: { lang: "es", ogLocale: "es_ES", label: "Español" },
  "pt-br": { lang: "pt-BR", ogLocale: "pt_BR", label: "Português (Brasil)" },
  fr: { lang: "fr", ogLocale: "fr_FR", label: "Français" },
  de: { lang: "de", ogLocale: "de_DE", label: "Deutsch" },
  ja: { lang: "ja", ogLocale: "ja_JP", label: "日本語" },
};

/** Pages published in every locale (English paths). */
export const translatedPaths: readonly string[] = ["/"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isTranslated(path: string): boolean {
  return translatedPaths.includes(path);
}

/** "/" in Spanish → "/es"; "/about" in English → "/about". */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Splits "/es/x" into { locale: "es", path: "/x" }. English paths have no prefix. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (first && first !== defaultLocale && isLocale(first)) {
    return { locale: first, path: `/${rest.join("/")}`.replace(/\/$/, "") || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/**
 * Where the language switcher sends a visitor: the same page when it exists in
 * that language (every page exists in English), otherwise that language's home.
 */
export function switchLocaleHref(pathname: string, target: Locale): string {
  const { path } = splitLocale(pathname);
  return localePath(target, target === defaultLocale || isTranslated(path) ? path : "/");
}

/** Fills "{name}" style placeholders. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
