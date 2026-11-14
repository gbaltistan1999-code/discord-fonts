import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Status Ideas: funny, aesthetic and cool statuses to copy and paste";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Status Ideas",
    subtitle: "Funny, aesthetic, cool, gamer and cute statuses. Copy and paste in one click.",
    tags: ["Funny", "Aesthetic", "Gamer"],
  });
}
