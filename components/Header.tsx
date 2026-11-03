import Link from "next/link";
import { platformPages } from "@/content/platforms";
import { stylePages } from "@/content/style-pages";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { MegaMenu, type MenuGroup } from "./MegaMenu";
import { ThemeToggle } from "./ThemeToggle";

const menuGroups: readonly MenuGroup[] = [
  {
    title: "Generators",
    links: [
      { href: "/fancy-text-generator", label: "Fancy Text Generator" },
      { href: "/discord-name-generator", label: "Discord Name Generator" },
      ...stylePages.map((page) => ({
        href: `/discord-font-generator/${page.slug}`,
        label: `${page.name} Font`,
      })),
    ],
  },
  {
    title: "Platforms",
    links: [
      { href: "/", label: "Discord Fonts" },
      ...platformPages.map((page) => ({ href: `/${page.slug}`, label: `${page.name} Fonts` })),
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/discord-text-formatting", label: "Text Formatting" },
      { href: "/discord-timestamp-generator", label: "Timestamp Generator" },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 font-bold tracking-tight">
          <Logo />
          <span className="hidden text-lg min-[400px]:inline">{siteConfig.name}</span>
          <span className="sr-only min-[400px]:hidden">{siteConfig.name} home</span>
        </Link>
        <div className="flex items-center gap-2">
          <MegaMenu label="Menu" groups={menuGroups} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
