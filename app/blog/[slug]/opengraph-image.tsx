import { blogPosts, getBlogPost } from "@/content/blog";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Fonts blog post";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getBlogPost((await params).slug);
  return renderOgImage({
    title: post?.title ?? "Discord Fonts Blog",
    subtitle: "Guides and tips from the Discord Fonts blog.",
    tags: ["Guide", "Discord", "Fancy fonts"],
  });
}
