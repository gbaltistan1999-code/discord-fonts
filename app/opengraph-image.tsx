import { ogSize, renderOgImage } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Fonts Generator",
    subtitle: "Copy & paste 170+ cool Discord font styles for names, bios and messages.",
    tags: ["Bold", "Cursive", "Gothic", "Aesthetic", "Glitch"],
  });
}
