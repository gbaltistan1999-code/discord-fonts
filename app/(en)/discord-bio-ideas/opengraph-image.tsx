import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Bio Ideas: cool, cute and aesthetic About Me bios to copy and paste";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Bio Ideas",
    subtitle: "Cool, cute, funny, aesthetic and gamer About Me bios. Copy and paste in one click.",
    tags: ["Aesthetic", "Cute", "Gamer"],
  });
}
