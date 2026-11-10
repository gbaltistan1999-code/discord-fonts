import { describe, expect, it } from "vitest";
import { fill, hrefFor, isAvailable, localePath, localesFor, splitLocale, switchLocaleHref } from "./i18n";

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

  it("handles pages translated into only some languages", () => {
    expect(localesFor("/number-fonts")).toEqual(["en", "pt-br"]);
    expect(localesFor("/about")).toEqual(["en"]);
    expect(localesFor("/fancy-text-generator")).toHaveLength(6);
    expect(isAvailable("/discord-symbols", "pt-br")).toBe(true);
    expect(isAvailable("/discord-symbols", "es")).toBe(false);
    expect(hrefFor("pt-br", "/small-text-discord")).toBe("/pt-br/small-text-discord");
    expect(hrefFor("es", "/small-text-discord")).toBe("/small-text-discord");
    expect(switchLocaleHref("/number-fonts", "pt-br")).toBe("/pt-br/number-fonts");
    expect(switchLocaleHref("/number-fonts", "fr")).toBe("/fr");
    expect(switchLocaleHref("/pt-br/discord-symbols", "en")).toBe("/discord-symbols");
  });

  it("fills placeholders and leaves unknown ones", () => {
    expect(fill("{count} styles", { count: 3 })).toBe("3 styles");
    expect(fill("Copied {label}!", {})).toBe("Copied {label}!");
  });
});
