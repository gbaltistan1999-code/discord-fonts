import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} – Discord Font Generator`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1f",
    theme_color: "#0a0f1f",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
