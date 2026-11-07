import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Username Generator: cool, unique names that follow Discord's username rules";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Username Generator",
    subtitle: "Cool, unique and aesthetic names that follow Discord's username rules.",
    tags: ["8 styles", "Rule-checked", "Free"],
  });
}
