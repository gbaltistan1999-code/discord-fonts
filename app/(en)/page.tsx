import { HomePage, homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("en");

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
