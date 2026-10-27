import { SimplePage } from "@/components/SimplePage";
import { ContactContent } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Contact ${siteConfig.name} – Questions, Bugs & Style Requests`,
  description: `Contact the ${siteConfig.name} team with questions, bug reports or Discord font style requests. We usually reply within a few business days.`,
  path: "/contact",
});

export default function Page() {
  return (
    <SimplePage title="Contact Us" crumb="Contact" path="/contact">
      <ContactContent />
    </SimplePage>
  );
}
