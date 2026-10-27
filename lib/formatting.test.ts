import { describe, expect, it } from "vitest";
import { ansiBlock, markdownFormats, prefixLines, wrapLines } from "./formatting";

const apply = (id: string, text: string) => markdownFormats.find((f) => f.id === id)!.apply(text);

describe("markdown formats", () => {
  it("wraps inline styles per line", () => {
    expect(wrapLines("a\n\nb", "**")).toBe("**a**\n\n**b**");
    expect(apply("strikethrough", "gg")).toBe("~~gg~~");
  });

  it("prefixes line-based styles on every line", () => {
    expect(prefixLines("a\nb", "> ")).toBe("> a\n> b");
    expect(apply("subtext", "hi")).toBe("-# hi");
  });

  it("builds fenced code and spoiler blocks", () => {
    expect(apply("code-block", "x")).toBe("```\nx\n```");
    expect(apply("spoiler", "secret")).toBe("||secret||");
  });

  it("builds ansi color blocks", () => {
    expect(ansiBlock("hi", { color: 31 })).toBe("```ansi\n\u001b[0;31mhi\u001b[0m\n```");
    expect(ansiBlock("hi", { color: 34, background: 45, bold: true, underline: true })).toBe(
      "```ansi\n\u001b[1;4;34;45mhi\u001b[0m\n```",
    );
  });
});
