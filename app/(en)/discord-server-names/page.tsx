import { DiscordServerNamesPage, discordServerNamesMetadata } from "@/components/DiscordServerNamesPage";

export const metadata = discordServerNamesMetadata();

export default function DiscordServerNamesRoute() {
  return <DiscordServerNamesPage />;
}
