import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Discord Timestamp Generator: one code that shows the right local time for everyone";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    title: "Discord Timestamp Generator",
    subtitle: "<t:1793740800:R> shows the right local time for everyone in your server.",
    tags: ["Countdowns", "All 9 formats", "Any time zone"],
  });
}
