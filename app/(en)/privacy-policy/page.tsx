import { SimplePage } from "@/components/SimplePage";
import { PrivacyContent } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `Privacy Policy – ${siteConfig.name}`,
  description: `Read the ${siteConfig.name} privacy policy. Text you type is converted in your browser and never sent to or stored on our servers.`,
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <SimplePage
      title="Privacy Policy"
      crumb="Privacy Policy"
      path="/privacy-policy"
      updated={siteConfig.lastUpdated}
    >
      <PrivacyContent />
    </SimplePage>
  );
}
