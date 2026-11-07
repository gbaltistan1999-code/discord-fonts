import { describe, expect, it } from "vitest";
import {
  generateUsernames,
  isValidUsername,
  LENGTH_FILTERS,
  resolveLength,
  sanitizeKeyword,
  seededRandom,
  USERNAME_STYLES,
  WORDS,
} from "./usernameGenerator";

describe("isValidUsername", () => {
  it("accepts names that follow Discord's rules", () => {
    for (const name of ["ab", "luna.exe", "kai_codes", "shadow48", "a".repeat(32)]) {
      expect(isValidUsername(name)).toBe(true);
    }
  });

  it("rejects names Discord won't accept", () => {
    for (const name of [
      "a",
      "a".repeat(33),
      "Luna",
      "luna exe",
      "luna..exe",
      "luna-exe",
      "mydiscord",
      "everyone1",
      "overhere",
      "😀",
    ]) {
      expect(isValidUsername(name)).toBe(false);
    }
  });
});

describe("sanitizeKeyword", () => {
  it("lowercases and strips invalid characters", () => {
    expect(sanitizeKeyword("  Luna Star!! ")).toBe("lunastar");
    expect(sanitizeKeyword("Café")).toBe("cafe");
    expect(sanitizeKeyword("..pixel..art__")).toBe("pixel.art");
    expect(sanitizeKeyword("kai_99", { allowNumbers: false, allowSeparators: false })).toBe("kai");
  });
});

describe("word lists", () => {
  it("has at least 50 safe, valid words per style", () => {
    for (const [style, words] of Object.entries(WORDS)) {
      expect(words.length, style).toBeGreaterThanOrEqual(50);
      for (const word of words) expect(isValidUsername(word), `${style}: ${word}`).toBe(true);
    }
  });
});

describe("generateUsernames", () => {
  const keywords = ["", "luna", "Shadow", "pixel art", "kai", "x", "discord"];

  it("produces zero invalid names across 100 batches of every option mix", () => {
    const random = seededRandom(42);
    let batches = 0;
    for (let i = 0; i < 100; i++) {
      const style = USERNAME_STYLES[i % USERNAME_STYLES.length]!;
      const length = LENGTH_FILTERS[Math.floor(i / USERNAME_STYLES.length) % LENGTH_FILTERS.length]!;
      const allowNumbers = i % 3 !== 0;
      const allowSeparators = i % 4 !== 0;
      const keyword = keywords[i % keywords.length]!;
      const names = generateUsernames({ style, length, allowNumbers, allowSeparators, keyword, random });
      const range = resolveLength(style === "short" && length === "any" ? { min: 4, max: 6 } : length);

      expect(names, JSON.stringify({ style, length, keyword })).toHaveLength(24);
      expect(new Set(names).size).toBe(24);
      for (const name of names) {
        const where = `${name} (${style}, ${length}, "${keyword}")`;
        expect(isValidUsername(name), where).toBe(true);
        expect(name.length, where).toBeGreaterThanOrEqual(range.min);
        expect(name.length, where).toBeLessThanOrEqual(range.max);
        if (!allowNumbers) expect(name, where).not.toMatch(/[0-9]/);
        if (!allowSeparators) expect(name, where).not.toMatch(/[_.]/);
      }
      batches++;
    }
    expect(batches).toBe(100);
  });

  it("uses the keyword in most names", () => {
    const names = generateUsernames({ keyword: "Luna", style: "aesthetic", random: seededRandom(7) });
    expect(names.filter((n) => n.includes("luna")).length).toBeGreaterThanOrEqual(12);
  });

  it("supports an exact length for reuse (e.g. 4-letter names)", () => {
    const names = generateUsernames({ length: 4, random: seededRandom(3) });
    expect(names.every((n) => n.length === 4)).toBe(true);
  });

  it("is repeatable with a seeded random source", () => {
    expect(generateUsernames({ random: seededRandom(1) })).toEqual(
      generateUsernames({ random: seededRandom(1) }),
    );
  });
});
