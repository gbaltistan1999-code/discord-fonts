import { platformOgImage } from "@/components/PlatformPage";
import { ogSize } from "@/lib/og";

export const alt = "Fancy font generator";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return platformOgImage("snapchat-fonts");
}
