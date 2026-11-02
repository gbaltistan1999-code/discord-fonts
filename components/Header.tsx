import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { NavMenu, type NavMenuLink } from "./NavMenu";
import { ThemeToggle } from "./ThemeToggle";

const linkClass =
  "rounded-lg px-2 py-2 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:text-text sm:px-3";

// Tile colours match each page's own accent theme.
const toolLinks: readonly NavMenuLink[] = [
  {
    href: "/discord-text-formatting",
    label: "Text Formatting",
    description: "Bold, spoilers, colors and markdown",
    icon: "**",
    tone: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
  {
    href: "/fancy-text-generator",
    label: "Fancy Text Generator",
    description: "170+ fonts to copy and paste",
    icon: "𝓕",
    tone: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  },
  {
    href: "/discord-name-generator",
    label: "Discord Name Generator",
    description: "Stylish display names with preview",
    icon: "@",
    tone: "bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300",
  },
  {
    href: "/discord-font-generator/bold",
    label: "Bold Font Generator",
    description: "Heavy letters for names and titles",
    icon: "𝐁",
    tone: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
  {
    href: "/discord-font-generator/cursive",
    label: "Cursive Font Generator",
    description: "Script and italic letters",
    icon: "𝒞",
    tone: "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
  },
  {
    href: "/discord-font-generator/small-caps",
    label: "Small Caps Generator",
    description: "Tiny, minimal text",
    icon: "ꜱᴄ",
    tone: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
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
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <Link href="/#font-styles" className={`hidden sm:block ${linkClass}`}>
            Font Styles
          </Link>
          <NavMenu label="Tools" links={toolLinks} />
          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
