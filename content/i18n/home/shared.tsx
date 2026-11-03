import Image from "next/image";
import Link from "next/link";
import { convert } from "@/lib/fonts";
import { localePath, type Locale } from "@/lib/i18n";

/** A word in a Unicode style, generated rather than typed so the characters are always right. */
export const fancy = (styleId: string, text: string) => convert(styleId, text);

/** Link maker for the style generator pages in one language. */
export function styleLinkFor(locale: Locale) {
  return function styleLink(slug: string, label: string) {
    return <Link href={localePath(locale, `/discord-font-generator/${slug}`)}>{label}</Link>;
  };
}

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
