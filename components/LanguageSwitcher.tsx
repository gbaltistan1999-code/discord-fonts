"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { localeInfo, locales, splitLocale, switchLocaleHref } from "@/lib/i18n";

/**
 * Globe button listing every language. Each link goes to the same page in that
 * language when it's translated, otherwise to that language's homepage.
 */
export function LanguageSwitcher({ label }: { label: string }) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = splitLocale(pathname).locale;

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
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${localeInfo[current].label}`}
        title={label}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-text transition-colors hover:bg-surface-2"
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
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      </button>
      <ul
        id={listId}
        hidden={!open}
        className="absolute right-0 z-40 mt-2 w-52 rounded-xl border border-border bg-surface p-1.5 shadow-xl"
      >
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <Link
                href={switchLocaleHref(pathname, locale)}
                hrefLang={localeInfo[locale].lang}
                lang={localeInfo[locale].lang}
                aria-current={active ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface-2 ${
                  active ? "font-semibold text-accent" : "font-medium text-text"
                }`}
              >
                {localeInfo[locale].label}
                {active && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="size-4"
                  >
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
