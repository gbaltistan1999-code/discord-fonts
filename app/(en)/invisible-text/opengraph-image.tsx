import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Invisible Text Generator: copy and paste blank invisible characters";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Invisible Text Generator",
    subtitle: "Copy blank invisible characters for names, messages and bios in one click.",
    tags: ["Discord", "WhatsApp", "Free Fire"],
  });
}
