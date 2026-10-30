import { getPlatformPage, platformPages } from "@/content/platforms";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Fancy font generator";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return platformPages.map((page) => ({ platform: page.slug }));
}

export default async function Image({ params }: { params: Promise<{ platform: string }> }) {
  const page = getPlatformPage((await params).platform);
  return renderOgImage({
    title: page?.h1 ?? "Fancy Font Generator",
    subtitle: `Copy & paste free fonts for ${page?.name ?? "your"} names, bios and posts.`,
    tags: ["Free", "Copy & Paste", "Works on mobile"],
  });
}
