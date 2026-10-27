import Link from "next/link";
import { stylePages } from "@/content/style-pages";
import { siteConfig } from "@/lib/site";

const siteLinks = [
  { href: "/", label: "Discord Fonts Generator" },
  { href: "/discord-text-formatting", label: "Text Formatting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <nav aria-labelledby="footer-styles">
          <h2 id="footer-styles" className="text-sm font-semibold">
            Discord font styles
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm">
            {stylePages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/discord-font-generator/${page.slug}`}
                  className="inline-block py-1 text-muted hover:text-accent"
                >
                  {page.name} Font
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-site">
          <h2 id="footer-site" className="text-sm font-semibold">
            Site
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-1 text-muted hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl space-y-1 px-4 pt-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-sm text-muted">
          <p>{siteConfig.disclaimer}</p>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Text is converted in your browser and never
            stored.
          </p>
        </div>
      </div>
    </footer>
  );
}
