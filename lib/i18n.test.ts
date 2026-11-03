import { describe, expect, it } from "vitest";
import { fill, localePath, splitLocale, switchLocaleHref } from "./i18n";

describe("locale paths", () => {
  it("adds and removes prefixes", () => {
    expect(localePath("en", "/")).toBe("/");
    expect(localePath("en", "/about")).toBe("/about");
    expect(localePath("es", "/")).toBe("/es");
    expect(localePath("pt-br", "/x")).toBe("/pt-br/x");
    expect(splitLocale("/")).toEqual({ locale: "en", path: "/" });
    expect(splitLocale("/es")).toEqual({ locale: "es", path: "/" });
    expect(splitLocale("/ja/x/y")).toEqual({ locale: "ja", path: "/x/y" });
    expect(splitLocale("/roblox-fonts")).toEqual({ locale: "en", path: "/roblox-fonts" });
    expect(splitLocale("/en")).toEqual({ locale: "en", path: "/en" });
  });

  it("switches language on the same page when translated", () => {
    expect(switchLocaleHref("/", "fr")).toBe("/fr");
    expect(switchLocaleHref("/es", "de")).toBe("/de");
    expect(switchLocaleHref("/ja", "en")).toBe("/");
  });

  it("keeps English pages, and sends other languages home for untranslated pages", () => {
    expect(switchLocaleHref("/about", "en")).toBe("/about");
    expect(switchLocaleHref("/about", "es")).toBe("/es");
  });

  it("fills placeholders and leaves unknown ones", () => {
    expect(fill("{count} styles", { count: 3 })).toBe("3 styles");
    expect(fill("Copied {label}!", {})).toBe("Copied {label}!");
  });
});
