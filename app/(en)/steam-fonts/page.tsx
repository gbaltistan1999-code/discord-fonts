import { PlatformPageView, platformMetadata } from "@/components/PlatformPage";

export const metadata = platformMetadata("steam-fonts");

export default function SteamFontsPage() {
  return <PlatformPageView slug="steam-fonts" />;
}
