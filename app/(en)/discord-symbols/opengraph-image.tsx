import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Symbols: copy and paste channel name symbols and dividers";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Symbols",
    subtitle: "Build aesthetic channel names and copy 300+ symbols, dividers and brackets.",
    tags: ["Channel names", "Dividers", "Brackets"],
  });
}
