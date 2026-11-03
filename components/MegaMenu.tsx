"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

export interface MenuLink {
  href: string;
  label: string;
}

export interface MenuGroup {
  title: string;
  links: readonly MenuLink[];
}

interface MegaMenuProps {
  /** Button text, e.g. "Menu". */
  label: string;
  /** Groups shown two per row on wider screens, stacked on phones. */
  groups: readonly MenuGroup[];
}

/**
 * The site menu: one button that opens a panel of grouped links (disclosure
 * pattern). Closes on Escape, outside click, focus leaving it, or navigation.
 */
export function MegaMenu({ label, groups }: MegaMenuProps) {
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(e) => {
        // Close when keyboard focus leaves the menu entirely.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${
          open
            ? "border-accent bg-accent-solid text-on-accent"
            : "border-border bg-surface text-text hover:border-text/30 hover:bg-surface-2"
        }`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="size-5"
        >
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
        {label}
      </button>

      <div
        id={panelId}
        hidden={!open}
        // Phones: span the viewport with a 16px gutter; wider screens: hang under the button.
        className="fixed inset-x-4 top-[4.25rem] z-40 max-h-[calc(100dvh-5.25rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-surface shadow-xl sm:absolute sm:inset-x-auto sm:top-full sm:right-0 sm:mt-2 sm:w-[34rem]"
      >
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0">
          {groups.map((group, index) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className={`p-3 sm:p-4 ${index % 2 === 1 ? "sm:border-l sm:border-border" : ""} ${
                index >= 2 ? "sm:border-t sm:border-border" : ""
              }`}
            >
              <p className="px-2 pb-1.5 text-xs font-semibold tracking-wider text-muted uppercase">
                {group.title}
              </p>
              <ul className="grid grid-cols-2 gap-0.5 sm:grid-cols-1">
                {group.links.map((link) => {
                  const current = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={current ? "page" : undefined}
                        className={`block rounded-lg px-2 py-2 text-sm transition-colors hover:bg-surface-2 ${
                          current ? "font-semibold text-accent" : "font-medium text-text"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
}
