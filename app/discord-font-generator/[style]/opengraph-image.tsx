import { getStylePage, stylePages } from "@/content/style-pages";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Fonts style generator";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return stylePages.map((page) => ({ style: page.slug }));
}

export default async function Image({ params }: { params: Promise<{ style: string }> }) {
  const page = getStylePage((await params).style);
  return renderOgImage({
    title: page?.h1 ?? "Discord Font Generator",
    subtitle: "Copy & paste free Discord fonts for names, bios and messages.",
    tags: ["Free", "Copy & Paste", "Works on mobile"],
  });
}
