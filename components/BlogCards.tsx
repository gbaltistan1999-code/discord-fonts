import Link from "next/link";
import type { BlogIcon, BlogPost } from "@/content/blog";

/** Each card takes the next color in turn, so neighbouring cards never match. */
const CARD_COLORS = [
  {
    card: "border-teal-500/30 hover:border-teal-500/70",
    tile: "bg-teal-500/15 text-teal-700 dark:text-teal-300",
    tagline: "text-teal-700 dark:text-teal-300",
  },
  {
    card: "border-pink-500/30 hover:border-pink-500/70",
    tile: "bg-pink-500/15 text-pink-700 dark:text-pink-300",
    tagline: "text-pink-700 dark:text-pink-300",
  },
  {
    card: "border-violet-500/30 hover:border-violet-500/70",
    tile: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
    tagline: "text-violet-700 dark:text-violet-300",
  },
  {
    card: "border-amber-500/30 hover:border-amber-500/70",
    tile: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
    tagline: "text-amber-800 dark:text-amber-300",
  },
  {
    card: "border-sky-500/30 hover:border-sky-500/70",
    tile: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
    tagline: "text-sky-700 dark:text-sky-300",
  },
] as const;

const ICONS: Record<BlogIcon, React.ReactNode> = {
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.2-9-7.2Z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="10" cy="7.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" />
    </>
  ),
  type: (
    <>
      <path d="M4 7V5h11v2M9.5 5v14M7 19h5" />
      <path d="M14 13v-1.5h6V13M17 11.5V19M15.5 19h3" />
    </>
  ),
  sparkle: <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3Z" />,
  chat: <path d="M5 5h14v10H9l-4 4V5Z" />,
};

export function BlogCards({ posts, headingLevel = 3 }: { posts: readonly BlogPost[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className={`grid gap-5 md:grid-cols-2 ${posts.length >= 3 ? "lg:grid-cols-3" : ""}`}>
      {posts.map((post, i) => {
        const color = CARD_COLORS[i % CARD_COLORS.length] ?? CARD_COLORS[0];
        return (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className={`group flex h-full flex-col rounded-2xl border bg-surface p-6 shadow-sm transition-colors sm:p-7 ${color.card}`}
            >
              <div className="flex items-start gap-4">
                <span className={`grid size-14 shrink-0 place-items-center rounded-2xl ${color.tile}`}>
                  <svg
                    viewBox="0 0 24 24"
                    className="size-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[post.icon]}
                  </svg>
                </span>
                <div className="min-w-0">
                  <Heading className="text-lg leading-snug font-bold text-text">{post.title}</Heading>
                  <p className={`mt-1.5 text-xs font-semibold tracking-[0.12em] uppercase ${color.tagline}`}>
                    {post.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted">{post.description}</p>
              <p className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm">
                <span className={`font-semibold ${color.tagline}`}>
                  Read article{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="text-xs text-muted">{post.readingMinutes} min read</span>
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
