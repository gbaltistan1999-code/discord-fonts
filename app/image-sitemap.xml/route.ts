import { pageImages } from "@/content/page-images";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Image sitemap (Google's image extension), listing the content images on each page. */
export function GET() {
  const urls = Object.entries(pageImages)
    .map(
      ([path, images]) =>
        `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n${images
          .map((src) => `    <image:image>\n      <image:loc>${absoluteUrl(src)}</image:loc>\n    </image:image>\n`)
          .join("")}  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
