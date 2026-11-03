import { TimestampPage, timestampMetadata } from "@/components/TimestampPage";

export const metadata = timestampMetadata("en");

export default function DiscordTimestampGeneratorPage() {
  return <TimestampPage locale="en" />;
}
