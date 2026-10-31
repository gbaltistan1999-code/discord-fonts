import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts, formatPostDate } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Discord Fonts Blog – Guides, Tips and Name Ideas",
  description:
    "Guides and tips for fancy fonts on Discord and social media: how to change your font, style your name and bio, and fix fonts that show as boxes.",
  path: "/blog",
  imageAlt: "Discord Fonts Blog",
});

export default function BlogIndexPage() {
  return (
    <div className="pt-6">
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
        Discord Fonts Blog
      </h1>
      <p className="mt-3 max-w-3xl text-base text-muted sm:text-lg">
        Guides and tips for using fancy fonts on Discord and beyond.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-colors hover:border-accent"
            >
              <p className="text-xs text-muted">
                <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time> ·{" "}
                {post.readingMinutes} min read
              </p>
              <h2 className="mt-2 text-lg leading-snug font-bold text-text group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.description}</p>
              <span className="mt-auto pt-4 text-sm font-semibold text-accent">Read article →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
