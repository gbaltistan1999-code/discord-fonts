import { describe, expect, it } from "vitest";
import {
  applyMap,
  charMaps,
  clampZalgo,
  combineEach,
  convert,
  fontCategories,
  fontStyles,
  getStylesByCategory,
  graphemes,
  randomStyle,
  rangeMap,
  reverseText,
  spaceOut,
  visibleLength,
  zalgo,
  zipMap,
} from "./fonts";

describe("map builders", () => {
  it("rangeMap maps contiguous blocks and applies exceptions", () => {
    const map = rangeMap(0x1d400, 0x1d41a, 0x1d7ce, { A: "x" });
    expect(map.A).toBe("x");
    expect(map.b).toBe("𝐛");
    expect(map["9"]).toBe("𝟗");
  });

  it("zipMap rejects mismatched lengths", () => {
    expect(() => zipMap("ab", "a")).toThrow();
  });

  it("every char map has full A–Z / a–z coverage", () => {
    for (const [name, map] of Object.entries(charMaps)) {
      if (name === "smallCaps") continue; // lowercase-only by design
      for (const letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz") {
        expect(map[letter], `${name} is missing ${letter}`).toBeTruthy();
      }
    }
  });
});

describe("primitives", () => {
  it("applyMap leaves unmapped characters alone", () => {
    expect(applyMap("a-b!", { a: "1", b: "2" })).toBe("1-2!");
  });

  it("graphemes keeps emoji sequences intact", () => {
    expect(graphemes("a👍🏽b")).toEqual(["a", "👍🏽", "b"]);
  });

  it("reverseText reverses by grapheme", () => {
    expect(reverseText("ab👍🏽")).toBe("👍🏽ba");
  });

  it("combineEach can skip whitespace", () => {
    expect(combineEach("a b", "̶", false)).toBe("a̶ b̶");
    expect(combineEach("a b", "̶", true)).toBe("a̶ ̶b̶");
  });

  it("spaceOut separates letters and widens word gaps", () => {
    expect(spaceOut("hi yo")).toBe("h i   y o");
  });

  it("zalgo is deterministic and respects intensity", () => {
    expect(zalgo("hello", 3)).toBe(zalgo("hello", 3));
    expect(zalgo("hello", 10).length).toBeGreaterThan(zalgo("hello", 1).length);
    expect(clampZalgo(99)).toBe(10);
    expect(clampZalgo(-5)).toBe(1);
  });

  it("visibleLength counts astral characters once", () => {
    expect(visibleLength(convert("bold-serif", "abc"))).toBe(3);
  });
});

describe("styles", () => {
  it("has at least 50 styles with unique ids", () => {
    expect(fontStyles.length).toBeGreaterThanOrEqual(50);
    expect(new Set(fontStyles.map((s) => s.id)).size).toBe(fontStyles.length);
  });

  it("every category has styles", () => {
    for (const { id } of fontCategories) expect(getStylesByCategory(id).length).toBeGreaterThan(0);
  });

  it("every style transforms text without throwing and changes it", () => {
    for (const style of fontStyles) {
      const out = style.transform("Hello World 123");
      expect(out.length, style.id).toBeGreaterThan(0);
      expect(out, style.id).not.toBe("Hello World 123");
    }
  });

  it("produces the expected output for common styles", () => {
    expect(convert("bold-serif", "Discord 1")).toBe("𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝟏");
    expect(convert("script", "Hello")).toBe("ℋℯ𝓁𝓁ℴ");
    expect(convert("fraktur", "Chris")).toBe("ℭ𝔥𝔯𝔦𝔰");
    expect(convert("small-caps", "Discord")).toBe("Dɪꜱᴄᴏʀᴅ");
    expect(convert("fullwidth", "ab 1")).toBe("ａｂ　１");
    expect(convert("upside-down", "hello")).toBe("ollǝɥ");
    expect(convert("circled", "Ab1")).toBe("Ⓐⓑ①");
    expect(convert("star-wings", "x")).toBe("★彡 𝔁 彡★");
    expect(convert("middle-dot", "ab c")).toBe("𝒂·𝒃· ·𝒄");
    expect(convert("angle-melody", "ab")).toBe("¸¸♬·¯·♩¸¸♪·¯·♫¸¸ ⟨a⟩⟨b⟩ ¸¸♬·¯·♩¸¸♪·¯·♫¸¸");
    expect(convert("random-bars", "Discord")).toBe(convert("random-bars", "Discord"));
  });

  it("randomStyle is stable per seed and varies across seeds", () => {
    expect(randomStyle("Discord", 7)).toBe(randomStyle("Discord", 7));
    const outputs = new Set(Array.from({ length: 24 }, (_, i) => randomStyle("Discord", i + 1)));
    expect(outputs.size).toBeGreaterThan(20);
  });

  it("throws on unknown style ids", () => {
    expect(() => convert("nope", "x")).toThrow();
  });
});
