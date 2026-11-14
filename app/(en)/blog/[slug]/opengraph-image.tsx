import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { blogPosts, getBlogPost } from "@/content/blog";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Fonts blog post";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/**
 * A post with a banner uses it as its share image: add a 1200x630 JPEG at
 * assets/blog-share/<slug>.jpg. Other posts get the generated title card.
 */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  const banner = join(process.cwd(), "assets", "blog-share", `${slug}.jpg`);
  if (existsSync(banner)) {
    const data = await readFile(banner, "base64");
    return new ImageResponse(
      // eslint-disable-next-line @next/next/no-img-element -- rendered to PNG by next/og, not the browser
      <img src={`data:image/jpeg;base64,${data}`} alt="" width={ogSize.width} height={ogSize.height} />,
      ogSize,
    );
  }

  return renderOgImage({
    title: post?.title ?? "Discord Fonts Blog",
    subtitle: "Guides and tips from the Discord Fonts blog.",
    tags: ["Guide", "Discord", "Fancy fonts"],
  });
}
