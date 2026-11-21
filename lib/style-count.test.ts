import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { STYLE_COUNT_LABEL } from "./fonts";
import { siteConfig } from "./site";

/** Every source file under a folder. */
function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(entry.name) && !entry.name.includes(".test.") ? [path] : [];
  });
}

describe("style count", () => {
  it("the meta description uses the rounded style count", () => {
    expect(siteConfig.description).toContain(`${STYLE_COUNT_LABEL}+`);
  });

  it("hard-coded English counts like '220+ fancy fonts' match the rounded count", () => {
    const wrong: string[] = [];
    for (const file of ["components", "content", "lib"].flatMap(sourceFiles)) {
      // Only the English pages hard-code it; translations use {count}.
      if (file.includes(join("content", "i18n"))) continue;
      for (const [, n] of readFileSync(file, "utf8").matchAll(/\b(\d{3})\+ (?:fancy )?(?:fonts|styles)/g)) {
        if (Number(n) !== STYLE_COUNT_LABEL) wrong.push(`${file}: ${n}+`);
      }
    }
    expect(wrong).toEqual([]);
  });
});
