"use client";

import type { InvisibleCharRow } from "@/content/invisible-characters";
import { useCopy } from "./ToastProvider";

/** Table of invisible characters, each with a one-tap Copy button. */
export function InvisibleCharacters({
  rows,
  noteHeading,
}: {
  rows: readonly InvisibleCharRow[];
  /** Heading of the last column, e.g. "When to use it" or "Best for". */
  noteHeading: string;
}) {
  const copy = useCopy();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[36rem]">
        <thead>
          <tr>
            <th scope="col">Character</th>
            <th scope="col">Unicode</th>
            <th scope="col">Copy</th>
            <th scope="col">{noteHeading}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.code}>
              <td>
                <strong>{c.name}</strong>
              </td>
              <td className="whitespace-nowrap">{c.code}</td>
              <td>
                <button
                  type="button"
                  onClick={() => copy(c.char, `${c.name} (invisible)`)}
                  aria-label={`Copy ${c.name} invisible character`}
                  className="min-h-11 rounded-lg bg-accent-solid px-4 text-sm font-semibold whitespace-nowrap text-on-accent transition-opacity hover:opacity-90"
                >
                  Copy
                </button>
              </td>
              <td>{c.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
