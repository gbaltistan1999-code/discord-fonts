import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

/** `show` hides a link until the header is wide enough to fit it. */
const navLinks = [
  { href: "/#font-styles", label: "Font Styles", show: "hidden sm:block" },
  { href: "/fancy-text-generator", label: "Fancy Text Generator", show: "hidden lg:block" },
  { href: "/discord-name-generator", label: "Discord Name Generator", show: "hidden lg:block" },
  { href: "/discord-text-formatting", label: "Text Formatting", show: "" },
  { href: "/blog", label: "Blog", show: "" },
  { href: "/about", label: "About", show: "hidden sm:block" },
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-2 py-2 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:text-text sm:px-3 ${link.show}`}
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
