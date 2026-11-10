import { DiscordSymbolsPage, discordSymbolsMetadata } from "@/components/DiscordSymbolsPage";

export const metadata = discordSymbolsMetadata("en");

export default function DiscordSymbolsRoute() {
  return <DiscordSymbolsPage />;
}
