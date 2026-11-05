import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, formatPostDate, getBlogPost } from "@/content/blog";
import { articleJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ownImage: true,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        })}
      />
      {post.faqs.length > 0 && <JsonLd data={faqJsonLd(post.faqs)} />}

      <div className="pt-6">
        <Breadcrumbs
          items={[
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]}
        />
      </div>

      <article>
        <header className="max-w-[72ch]">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-muted">
            <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time> ·{" "}
            {post.readingMinutes} min read
            {post.dateModified !== post.datePublished && (
              <>
                {" "}
                · Updated <time dateTime={post.dateModified}>{formatPostDate(post.dateModified)}</time>
              </>
            )}
          </p>
        </header>

        <div className="prose-content mt-8">{post.body}</div>

        {post.faqs.length > 0 && (
          <div className="mt-12 max-w-[72ch]">
            <FaqList faqs={post.faqs} heading="Frequently Asked Questions" twoColumns={false} />
          </div>
        )}

        {post.outro && <div className="prose-content mt-4">{post.outro}</div>}
      </article>

      {!post.hideGeneratorCta && (
        <aside className="mt-12 rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <p className="text-lg font-bold text-text">Try it now</p>
          <p className="mt-1 text-sm text-muted">
            Type your name once and copy any of 170+ fancy font styles for Discord.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full bg-accent-solid px-5 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            Open the font generator
          </Link>
        </aside>
      )}

      {others.length > 0 && (
        <section aria-labelledby="more-posts" className="mt-12">
          <h2 id="more-posts" className="text-2xl font-bold tracking-tight">
            More from the blog
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block h-full rounded-xl border border-border bg-surface p-4 font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
