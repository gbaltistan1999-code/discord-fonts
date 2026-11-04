import { describe, expect, it } from "vitest";
import { platformPages } from "@/content/platforms";
import { getFontStyle } from "./fonts";

describe("platform pages", () => {
  it("have unique slugs", () => {
    const slugs = platformPages.map((page) => page.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(platformPages.map((page) => [page.slug, page] as const))(
    "%s features real styles once",
    (_, page) => {
      expect(page.featured.ids.filter((id) => !getFontStyle(id))).toEqual([]);
      expect(new Set(page.featured.ids).size).toBe(page.featured.ids.length);
    },
  );
});
