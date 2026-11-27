import { describe, expect, it } from "vitest";
import { buildWelcome } from "./welcome-message";

const base = {
  server: "Cozy Corner",
  rules: "rules",
  roles: "roles",
  intro: "introductions",
  chat: "general",
  useRules: true,
  useRoles: true,
  useIntro: true,
  useChat: true,
};
const vibes = ["simple", "aesthetic", "gaming", "cute", "professional"];

describe("buildWelcome", () => {
  it("every vibe includes the server name and all chosen channels, under Discord's limit", () => {
    for (const vibe of vibes) {
      const text = buildWelcome(vibe, base);
      expect(text).toContain("Cozy Corner");
      for (const c of ["#rules", "#roles", "#introductions", "#general"]) expect(text).toContain(c);
      expect(text.length).toBeLessThan(2000);
    }
  });

  it("leaves out unticked channels and handles no channels at all", () => {
    const text = buildWelcome("simple", { ...base, useRoles: false });
    expect(text).not.toContain("#roles");
    const none = buildWelcome("aesthetic", {
      ...base,
      useRules: false,
      useRoles: false,
      useIntro: false,
      useChat: false,
    });
    expect(none).not.toMatch(/#[a-z]/);
    expect(none).not.toMatch(/\n{3,}/);
  });

  it("does not double the # and falls back when names are empty", () => {
    const text = buildWelcome("professional", { ...base, server: "  ", rules: "#rules", chat: "" });
    expect(text).toContain("Welcome to our server");
    expect(text).not.toContain("##rules");
    expect(text).toContain("#channel");
  });

  it("aesthetic vibe draws a tree with a matching top and bottom", () => {
    const lines = buildWelcome("aesthetic", base).split("\n");
    expect(lines.filter((l) => l.startsWith("╭・"))).toHaveLength(1);
    expect(lines.filter((l) => l.startsWith("╰・"))).toHaveLength(1);
  });
});
