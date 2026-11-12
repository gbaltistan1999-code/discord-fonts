import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Server Names: cool, funny and aesthetic server name ideas";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Server Names",
    subtitle: "Cool, funny, aesthetic and gaming server name ideas, plus a free generator.",
    tags: ["Gaming", "Aesthetic", "Funny"],
  });
}
