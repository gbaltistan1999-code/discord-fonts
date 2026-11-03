import Link from "next/link";
import { getStrings } from "@/content/i18n";
import { platformPages } from "@/content/platforms";
import { stylePages } from "@/content/style-pages";
import { defaultLocale, fill, hrefFor, localePath, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MegaMenu, type MenuGroup } from "./MegaMenu";
import { ThemeToggle } from "./ThemeToggle";

/** Menu groups in a language. Untranslated pages link to their English version. */
function menuGroups(locale: Locale): MenuGroup[] {
  const { ui } = getStrings(locale);
  return [
    {
      title: ui.groups.generators,
      links: [
        { href: hrefFor(locale, "/fancy-text-generator"), label: ui.links.fancyText },
        { href: hrefFor(locale, "/discord-name-generator"), label: ui.links.nameGenerator },
        ...stylePages.map((page) => ({
          href: hrefFor(locale, `/discord-font-generator/${page.slug}`),
          label: fill(ui.styleFont, { name: ui.styleNames[page.slug] ?? page.name }),
        })),
      ],
    },
    {
      title: ui.groups.platforms,
      links: [
        { href: localePath(locale, "/"), label: ui.links.discordFonts },
        ...platformPages.map((page) => ({
          href: hrefFor(locale, `/${page.slug}`),
          label: fill(ui.platformFonts, { name: page.name }),
        })),
      ],
    },
    {
      title: ui.groups.tools,
      links: [
        { href: hrefFor(locale, "/discord-text-formatting"), label: ui.links.textFormatting },
        { href: hrefFor(locale, "/discord-timestamp-generator"), label: ui.links.timestamp },
      ],
    },
    {
      title: ui.groups.more,
      links: [
        { href: "/blog", label: ui.links.blog },
        { href: "/about", label: ui.links.about },
        { href: "/contact", label: ui.links.contact },
      ],
    },
  ];
}

export function Header({ locale = defaultLocale }: { locale?: Locale }) {
  const { ui } = getStrings(locale);
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link
          href={localePath(locale, "/")}
          className="flex shrink-0 items-center gap-2.5 font-bold tracking-tight"
        >
          <Logo />
          <span className="text-lg">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher label={ui.language} />
          <ThemeToggle />
          <MegaMenu label={ui.menu} groups={menuGroups(locale)} />
        </div>
      </div>
    </header>
  );
}
