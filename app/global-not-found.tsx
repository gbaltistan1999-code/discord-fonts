import { SiteDocument } from "@/components/SiteDocument";
import NotFound, { metadata as notFoundMetadata } from "./(en)/not-found";

// The site has two root layouts (English and translated), so URLs that match
// no route at all need this standalone 404 with its own <html>.
export const metadata = notFoundMetadata;

export default function GlobalNotFound() {
  return (
    <SiteDocument locale="en">
      <NotFound />
    </SiteDocument>
  );
}
