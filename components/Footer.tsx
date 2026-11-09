import Link from "next/link";
import { getStrings } from "@/content/i18n";
import { platformPages } from "@/content/platforms";
import { stylePages } from "@/content/style-pages";
import { defaultLocale, fill, hrefFor, localePath, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function Footer({ locale = defaultLocale }: { locale?: Locale }) {
  const { ui } = getStrings(locale);
  // Untranslated pages link to their English version.
  const siteLinks = [
    { href: localePath(locale, "/"), label: ui.links.discordFontsGenerator },
    { href: hrefFor(locale, "/fancy-text-generator"), label: ui.links.fancyText },
    { href: hrefFor(locale, "/discord-name-generator"), label: ui.links.nameGenerator },
    { href: hrefFor(locale, "/discord-username-generator"), label: ui.links.usernameGenerator },
    { href: hrefFor(locale, "/small-text-discord"), label: ui.links.smallText },
    { href: hrefFor(locale, "/discord-timestamp-generator"), label: ui.links.timestampGenerator },
    { href: hrefFor(locale, "/discord-text-formatting"), label: ui.links.textFormatting },
    { href: "/blog", label: ui.links.blog },
    { href: "/about", label: ui.links.about },
    { href: "/contact", label: ui.links.contact },
    { href: "/privacy-policy", label: ui.links.privacy },
    { href: "/terms", label: ui.links.terms },
  ];

  return (
    <footer className="cv-auto mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <nav aria-labelledby="footer-styles">
          <h2 id="footer-styles" className="text-sm font-semibold">
            {ui.footer.styles}
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm">
            {stylePages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={hrefFor(locale, `/discord-font-generator/${page.slug}`)}
                  className="inline-block py-1 text-muted hover:text-accent"
                >
                  {fill(ui.styleFont, { name: ui.styleNames[page.slug] ?? page.name })}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-platforms">
          <h2 id="footer-platforms" className="text-sm font-semibold">
            {ui.footer.platforms}
          </h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm">
            {platformPages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={hrefFor(locale, `/${page.slug}`)}
                  className="inline-block py-1 text-muted hover:text-accent"
                >
                  {fill(ui.platformFonts, { name: page.name })}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-site">
          <h2 id="footer-site" className="text-sm font-semibold">
            {ui.footer.site}
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
          <p>{ui.footer.disclaimer}</p>
          <p>{fill(ui.footer.copyright, { year: new Date().getFullYear(), name: siteConfig.name })}</p>
          {/* External SVG badges: next/image would need remotePatterns and adds nothing for an SVG.
              Lazy so they only download when the footer scrolls into view. */}
          <div className="flex flex-wrap items-center gap-3" style={{ marginTop: "15px" }}>
            <a
              href="https://sellwithboost.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://sellwithboost.com/badge/listing.svg"
                alt="Listed on Sell With Boost"
                width={160}
                height={40}
                loading="lazy"
                decoding="async"
                style={{ height: "40px", width: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
