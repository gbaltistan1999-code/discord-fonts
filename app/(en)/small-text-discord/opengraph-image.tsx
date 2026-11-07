import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Small Text Discord: make text small with -# subtext or copy-paste tiny text";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Small Text Generator for Discord",
    subtitle: "Use -# for subtext in messages, or copy tiny text for your name and bio.",
    tags: ["Subtext", "Small caps", "Superscript"],
  });
}
