import Image from "next/image";
import Link from "next/link";

/**
 * Blog post image that links to a related page on the site. The alt text stays descriptive (it is also the
 * link's anchor text for search engines); the visible pill tells readers where the image goes.
 */
export function BlogImage({
  src,
  alt,
  href,
  label,
  caption,
  width = 1200,
  height = 675,
  priority = false,
}: {
  src: string;
  alt: string;
  /** Internal page the image opens. */
  href: string;
  /** Destination name shown on the image, e.g. "Discord Font Generator". */
  label: string;
  caption?: string;
  width?: number;
  height?: number;
  /** Set for the banner at the top of a post. */
  priority?: boolean;
}) {
  return (
    <figure>
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-xl no-underline outline-offset-4"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          unoptimized
          className="h-auto w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.015]"
        />
        <span className="absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-md backdrop-blur transition-colors group-hover:bg-white sm:text-sm">
          {label}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
      {caption && <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
