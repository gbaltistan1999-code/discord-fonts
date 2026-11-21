import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Big Text Generator: header text, emoji letters, wide text and ASCII banners";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Big Text Generator",
    subtitle: "Header text, emoji letters, wide text and ASCII banners. Copy and paste in one click.",
    tags: ["Headers", "Emoji letters", "ASCII"],
  });
}
