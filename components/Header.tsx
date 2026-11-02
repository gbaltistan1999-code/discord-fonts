import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { ThemeToggle } from "./ThemeToggle";

const linkClass =
  "rounded-lg px-2 py-2 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:text-text sm:px-3";

const toolLinks = [
  { href: "/discord-text-formatting", label: "Text Formatting" },
  { href: "/fancy-text-generator", label: "Fancy Text Generator" },
  { href: "/discord-name-generator", label: "Discord Name Generator" },
] as const;

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
