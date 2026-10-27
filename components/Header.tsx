import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/#font-styles", label: "Font Styles", mobile: true },
  { href: "/discord-text-formatting", label: "Text Formatting", mobile: true },
  { href: "/about", label: "About", mobile: false },
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-surface/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 font-bold tracking-tight">
          <Logo />
          <span className="hidden text-lg min-[400px]:inline">{siteConfig.name}</span>
          <span className="sr-only min-[400px]:hidden">{siteConfig.name} home</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-text sm:px-3 ${
                link.mobile ? "" : "hidden sm:block"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
