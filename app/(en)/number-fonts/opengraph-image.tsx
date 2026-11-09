import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Number Fonts: copy and paste fancy numbers like bold, circled and superscript digits";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Number Fonts Generator",
    subtitle: "Turn 123 into bold, circled, tiny or outlined numbers you can copy and paste.",
    tags: ["Bold", "Circled", "Superscript"],
  });
}
