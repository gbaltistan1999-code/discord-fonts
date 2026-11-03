import Image from "next/image";
import Link from "next/link";
import { convert } from "@/lib/fonts";

/** A word in a Unicode style, generated rather than typed so the characters are always right. */
export const fancy = (styleId: string, text: string) => convert(styleId, text);

/** Link to a style generator page (those pages are in English). */
export const styleLink = (slug: string, label: string) => (
  <Link href={`/discord-font-generator/${slug}`}>{label}</Link>
);

export const inlineLink = "text-text underline underline-offset-4";

/** The homepage example image with a translated alt text and caption. */
export function ExamplesFigure({ alt, caption }: { alt: string; caption: string }) {
  return (
    <figure>
      <Image
        src="/discord-fonts-examples.svg"
        alt={alt}
        width={640}
        height={390}
        unoptimized
        className="h-auto w-full max-w-xl rounded-xl"
      />
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
