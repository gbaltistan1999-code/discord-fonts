import { SimplePage } from "@/components/SimplePage";
import { AboutContent } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `About ${siteConfig.name} – Free Discord Font Generator`,
  description: `Learn about ${siteConfig.name}, the free Discord font generator that converts text into Unicode styles in your browser. Fast, private and mobile-friendly.`,
  path: "/about",
});

export default function Page() {
  return (
    <SimplePage title={`About ${siteConfig.name}`} crumb="About" path="/about">
      <AboutContent />
    </SimplePage>
  );
}
