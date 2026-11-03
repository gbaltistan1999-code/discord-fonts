import { DiscordNamePage, discordNameMetadata } from "@/components/DiscordNamePage";

export const metadata = discordNameMetadata("en");

export default function DiscordNameGeneratorPage() {
  return <DiscordNamePage locale="en" />;
}
