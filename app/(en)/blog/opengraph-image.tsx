import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Fonts Blog";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Fonts Blog",
    subtitle: "Guides, tips and name ideas for fancy fonts on Discord.",
    tags: ["Guides", "Tips", "Name ideas"],
  });
}
