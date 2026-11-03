import { SimplePage } from "@/components/SimplePage";
import { TermsContent } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Terms of Use – ${siteConfig.name}`,
  description: `The terms of use for ${siteConfig.name}, a free Discord font and text formatting generator. Please read them before using the site.`,
  path: "/terms",
});

export default function Page() {
  return (
    <SimplePage title="Terms of Use" crumb="Terms of Use" path="/terms" updated={siteConfig.lastUpdated}>
      <TermsContent />
    </SimplePage>
  );
}
