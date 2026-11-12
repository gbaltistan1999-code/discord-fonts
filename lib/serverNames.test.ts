import { describe, expect, it } from "vitest";
import { fancyServerNameExamples, serverNameCategories, styleName } from "@/content/server-names-data";
import {
  cleanKeyword,
  generateServerNames,
  isValidServerName,
  seededRandom,
  SERVER_THEMES,
} from "./serverNames";

describe("generateServerNames", () => {
  it("returns the requested number of unique, valid names for every theme", () => {
    for (const theme of SERVER_THEMES) {
      const names = generateServerNames({ theme, count: 24, random: seededRandom(1) });
      expect(names).toHaveLength(24);
      expect(new Set(names.map((n) => n.toLowerCase())).size).toBe(24);
      for (const name of names) expect(isValidServerName(name), name).toBe(true);
    }
  });

  it("builds every name around the keyword", () => {
    const names = generateServerNames({ keyword: "  pixel   pals!! ", random: seededRandom(7) });
    expect(names.length).toBeGreaterThan(0);
    for (const name of names) expect(name).toContain("Pixel Pals");
  });

  it("is repeatable with a seeded random source", () => {
    expect(generateServerNames({ random: seededRandom(42) })).toEqual(
      generateServerNames({ random: seededRandom(42) }),
    );
  });
});

describe("cleanKeyword", () => {
  it("capitalizes words, strips symbols and caps the length", () => {
    expect(cleanKeyword("night  owls#")).toBe("Night Owls");
    expect(cleanKeyword("a".repeat(50)).length).toBeLessThanOrEqual(24);
  });
});

describe("server name lists", () => {
  it("has no duplicate names", () => {
    const all = serverNameCategories.flatMap((c) => c.names.map((n) => n.toLowerCase()));
    expect(new Set(all).size).toBe(all.length);
  });

  it("has fancy examples that change the text and fit Discord's limit", () => {
    for (const e of fancyServerNameExamples) {
      const styled = styleName(e.name, e.font, e.frame);
      expect(styled).not.toBe(e.name);
      expect(isValidServerName(styled), styled).toBe(true);
    }
  });
});
