"use client";

import { useId, useState } from "react";
import { HANGUL_FILLER, invisibleChars } from "@/content/invisible-characters";
import { useCopy } from "./ToastProvider";

const MAX_COUNT = 100;

/** Quick-copy button plus a "type and amount" builder for invisible text. */
export function InvisibleTextGenerator({ hero }: { hero: React.ReactNode }) {
  const copy = useCopy();
  const typeId = useId();
  const countId = useId();
  const outputId = useId();
  const [typeIdx, setTypeIdx] = useState(0);
  const [count, setCount] = useState(1);

  const selected = invisibleChars[typeIdx]!;
  const text = selected.char.repeat(count);

  return (
    <div className="-mx-4 border-y border-accent/20 bg-linear-to-br from-accent-soft via-surface to-accent-soft px-4 pt-6 pb-7 sm:mx-0 sm:rounded-3xl sm:border sm:px-10 sm:pt-8 sm:pb-9">
      {hero}

      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => copy(HANGUL_FILLER.char, "Invisible character")}
          className="w-full rounded-2xl bg-linear-to-r from-teal-700 to-cyan-700 px-6 py-4 text-lg font-bold text-white shadow-sm transition-[opacity,transform] hover:opacity-95 active:scale-[0.99]"
        >
          Copy Invisible Character
        </button>
        <p className="mt-2 text-center text-sm text-muted">
          Copies one Hangul Filler (U+3164), the blank character that works in most apps and games.
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5">
          <div className="grid gap-3 sm:grid-cols-[1fr_8rem]">
            <div>
              <label htmlFor={typeId} className="text-sm font-semibold text-text">
                Character type
              </label>
              <select
                id={typeId}
                value={typeIdx}
                onChange={(e) => setTypeIdx(Number(e.target.value))}
                className="mt-1 block min-h-11 w-full rounded-lg border border-border bg-surface px-3 text-text focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
              >
                {invisibleChars.map((c, i) => (
                  <option key={c.id} value={i}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={countId} className="text-sm font-semibold text-text">
                How many
              </label>
              <input
                id={countId}
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX_COUNT}
                value={count}
                onChange={(e) => {
                  const n = Math.floor(Number(e.target.value));
                  setCount(Number.isFinite(n) ? Math.min(MAX_COUNT, Math.max(1, n)) : 1);
                }}
                className="mt-1 block min-h-11 w-full rounded-lg border border-border bg-surface px-3 text-text focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
              />
            </div>
          </div>

          <label htmlFor={outputId} className="mt-4 block text-sm font-semibold text-text">
            Your invisible text
          </label>
          <textarea
            id={outputId}
            readOnly
            value={text}
            rows={2}
            className="mt-1 block w-full resize-none rounded-lg border border-dashed border-accent/50 bg-surface-2 px-3 py-2 text-text"
          />
          <p className="mt-1 text-xs text-muted" aria-live="polite">
            {count} × {selected.name} ({selected.code}). It looks empty, but it&apos;s there.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => copy(text, count === 1 ? "Invisible text" : `${count} invisible characters`)}
              className="min-h-11 flex-1 rounded-lg bg-accent-solid px-5 font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              Copy Invisible Text
            </button>
            <button
              type="button"
              onClick={() => {
                setTypeIdx(0);
                setCount(1);
              }}
              className="min-h-11 rounded-lg border border-border px-5 font-semibold text-text transition-colors hover:bg-surface-2"
            >
              Reset
            </button>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          Everything runs in your browser. Nothing you copy is sent or saved.
        </p>
      </div>
    </div>
  );
}
