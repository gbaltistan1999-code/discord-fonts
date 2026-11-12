"use client";

import { useCopy } from "./ToastProvider";

/** A wrapping list of names; tapping one copies it and shows the shared toast. */
export function CopyChips({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const copy = useCopy();
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <button
            type="button"
            onClick={() => copy(item, item)}
            className="min-h-11 rounded-lg bg-surface-2 px-3 text-left text-[15px] text-text transition-colors hover:bg-accent-soft"
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
