import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { pageImages } from "@/content/page-images";

const root = join(__dirname, "..");

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.tsx?$/.test(name) && !name.endsWith(".test.ts") ? [full] : [];
  });
}

describe("image sitemap", () => {
  const listed = new Set(Object.values(pageImages).flat());

  it("lists only images that exist in public/", () => {
    for (const src of listed) expect(existsSync(join(root, "public", src)), src).toBe(true);
  });

  it("lists every content image used on a page", () => {
    const used = new Set<string>();
    for (const file of sourceFiles(join(root, "content"))) {
      for (const m of readFileSync(file, "utf8").matchAll(/"(\/[\w/-]+\.(?:webp|png|jpg|svg))"/g)) used.add(m[1]!);
    }
    for (const src of used) expect(listed.has(src), `${src} is missing from content/page-images.ts`).toBe(true);
  });
});
