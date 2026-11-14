"use client";

import Link from "next/link";
import { useCopy } from "./ToastProvider";

/** Status rows: tap the text to copy it, or "Style it" to open it in the font generator. */
export function StatusList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const copy = useCopy();
  return (
    <ul className={`flex flex-col gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-stretch gap-1.5">
          <button
            type="button"
            onClick={() => copy(item, item)}
            className="min-h-11 min-w-0 flex-1 rounded-lg bg-surface-2 px-3 py-2 text-left text-[15px] break-words text-text transition-colors hover:bg-accent-soft"
          >
            {item}
          </button>
          <Link
            href={`/?text=${encodeURIComponent(item)}`}
            prefetch={false}
            aria-label={`Style "${item}" with the Discord font generator`}
            className="flex min-h-11 shrink-0 items-center rounded-lg px-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
          >
            Style it
          </Link>
        </li>
      ))}
    </ul>
  );
}
