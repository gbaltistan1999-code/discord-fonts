import type { Metadata } from "next";
import { BlogCards } from "@/components/BlogCards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Discord Fonts Blog – Guides, Tips and Name Ideas",
  description:
    "Guides and tips for fancy fonts on Discord and social media: how to change your font, style your name and bio, and fix fonts that show as boxes.",
  path: "/blog",
  ownImage: true,
});

export default function BlogIndexPage() {
  return (
    <div className="pt-6">
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <header className="mx-auto mt-4 mb-10 max-w-2xl text-center">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-5xl">
          Discord Fonts{" "}
          <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-cyan-300">
            Blog
          </span>
        </h1>
        <p className="mt-3 text-base text-muted sm:text-lg">
          Guides and tips for using fancy fonts on Discord and beyond.
        </p>
      </header>
      <BlogCards posts={blogPosts} headingLevel={2} />
    </div>
  );
}
