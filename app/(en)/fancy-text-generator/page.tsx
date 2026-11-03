import { FancyTextPage, fancyTextMetadata } from "@/components/FancyTextPage";

export const metadata = fancyTextMetadata("en");

export default function FancyTextGeneratorPage() {
  return <FancyTextPage locale="en" />;
}
