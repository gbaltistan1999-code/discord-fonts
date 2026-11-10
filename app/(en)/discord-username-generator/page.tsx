import { UsernameGeneratorPage, usernameGeneratorMetadata } from "@/components/UsernameGeneratorPage";

export const metadata = usernameGeneratorMetadata("en");

export default function DiscordUsernameGeneratorRoute() {
  return <UsernameGeneratorPage />;
}
