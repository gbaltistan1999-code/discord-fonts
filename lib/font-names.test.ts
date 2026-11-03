import { describe, expect, it } from "vitest";
import { homeStyleOrder } from "@/content/i18n/style-order";
import { fontStyles, getFontStyle } from "@/lib/fonts";
import { prefixedLocales } from "@/lib/i18n";
import { getStrings } from "@/content/i18n";

describe("translated style names", () => {
  const ids = fontStyles.map((style) => style.id).sort();

  it.each(prefixedLocales)("%s names every style, and only real ones", (locale) => {
    const names = getStrings(locale).generator.styleNames ?? {};
    expect(Object.keys(names).sort()).toEqual(ids);
  });

  it.each(prefixedLocales)("%s gives each style a different name", (locale) => {
    const names = Object.values(getStrings(locale).generator.styleNames ?? {});
    const repeated = names.filter((name, i) => names.indexOf(name) !== i);
    expect(repeated).toEqual([]);
  });
});

describe("homepage style order", () => {
  it.each(Object.entries(homeStyleOrder))("%s lists real styles once each", (_, order) => {
    expect(order.filter((id) => !getFontStyle(id))).toEqual([]);
    expect(new Set(order).size).toBe(order.length);
  });
});
