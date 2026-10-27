import type { Metadata } from "next";
import Link from "next/link";
import { StyleLinks } from "@/components/StyleLinks";
import { convert } from "@/lib/fonts";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found – Discord Fonts" },
  description:
    "This page doesn’t exist. Head back to the Discord Fonts generator to copy and paste cool Discord font styles.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="py-12 text-center sm:py-16">
      <p aria-hidden="true" className="fancy-text text-6xl font-bold text-accent sm:text-7xl">
        {convert("upside-down", "404")}
      </p>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
        This page got flipped upside down
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-muted">
        We couldn’t find the page you were looking for. It may have moved, or the link might be mistyped.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-accent-solid px-5 py-3 font-semibold text-on-accent transition-opacity hover:opacity-90"
        >
          Go to the Discord Fonts generator
        </Link>
        <Link
          href="/discord-text-formatting"
          className="rounded-xl border border-border bg-surface px-5 py-3 font-semibold text-text hover:border-accent"
        >
          Text formatting guide
        </Link>
      </div>
      <h2 className="mt-14 mb-4 text-left text-xl font-bold">Popular Discord font styles</h2>
      <div className="text-left">
        <StyleLinks />
      </div>
    </div>
  );
}
