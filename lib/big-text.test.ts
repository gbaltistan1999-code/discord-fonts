import { describe, expect, it } from "vitest";
import {
  asciiBanner,
  asciiBannerBlock,
  BANNER_MAX,
  bannerText,
  emojiLetters,
  emojiShortcodes,
  oneLine,
} from "./big-text";

describe("emojiLetters", () => {
  it("spells letters with regional indicators separated by spaces", () => {
    expect(emojiLetters("Hey")).toBe("🇭 🇪 🇾");
  });

  it("never puts two regional indicators next to each other, so no flags form", () => {
    const out = emojiLetters("us gb");
    expect(out).toBe("🇺 🇸   🇬 🇧");
    expect(/[\u{1F1E6}-\u{1F1FF}]{2}/u.test(out)).toBe(false);
  });

  it("uses keycaps for digits and ❗ ❓ for punctuation", () => {
    expect(emojiLetters("é")).toBe("🇪");
    expect(emojiLetters("a1!?")).toBe("🇦 1️⃣ ❗ ❓");
  });

  it("keeps other characters and line breaks", () => {
    expect(emojiLetters("ok 👍\nhi")).toBe("🇴 🇰   👍\n🇭 🇮");
  });
});

describe("emojiShortcodes", () => {
  it("writes Discord shortcodes", () => {
    expect(emojiShortcodes("Hi 2!")).toBe(
      ":regional_indicator_h: :regional_indicator_i:   :two: :exclamation:",
    );
  });
});

describe("oneLine", () => {
  it("joins lines for headers", () => {
    expect(oneLine("  big\n text ")).toBe("big text");
  });
});

describe("asciiBanner", () => {
  it("draws 5 rows of block letters", () => {
    const rows = asciiBanner("hi").split("\n");
    expect(rows).toHaveLength(5);
    expect(rows[0]).toBe("█   █  █████");
    expect(rows[2]).toBe("█████    █");
  });

  it("drops characters the font can't draw and limits the length", () => {
    expect(bannerText("héllo wörld & friends")).toBe("HELLO WORL");
    expect(bannerText("abcdefghijklmnop")).toHaveLength(BANNER_MAX);
    expect(asciiBanner("@@@")).toBe("");
    expect(asciiBannerBlock("")).toBe("");
  });

  it("wraps the banner in a code block", () => {
    expect(asciiBannerBlock("a")).toBe("```\n ███\n█   █\n█████\n█   █\n█   █\n```");
  });
});
