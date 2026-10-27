"use client";

import { useMemo, useState } from "react";
import { fontStyles } from "@/lib/styles";

const SAMPLE = "Your text here";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {}
    document.body.removeChild(ta);
    return ok;
  }
}

export default function Generator() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState<number | null>(null);

  const empty = text.trim() === "";
  const source = empty ? SAMPLE : text;

  const results = useMemo(
    () => fontStyles.map((s) => ({ name: s.name, value: s.convert(source) })),
    [source]
  );

  async function onCopy(i: number, value: string) {
    if (await copyText(value)) {
      setCopied(i);
      setTimeout(() => setCopied((c) => (c === i ? null : c)), 1400);
    }
  }

  return (
    <div>
      <label htmlFor="src" className="sr-only">
        Type your text here
      </label>
      <textarea
        id="src"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here"
        rows={2}
        spellCheck={false}
        className="w-full resize-y rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-lg outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 dark:border-neutral-700 dark:focus:border-neutral-200"
      />

      <ul className={`mt-6 divide-y divide-neutral-200 dark:divide-neutral-800 ${empty ? "opacity-60" : ""}`}>
        {results.map((r, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => onCopy(i, r.value)}
              className="group flex w-full items-center justify-between gap-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-200"
            >
              <span className="min-w-0">
                <span className="block text-xs text-neutral-500 dark:text-neutral-400">{r.name}</span>
                <output className="block break-words text-lg leading-snug">{r.value}</output>
              </span>
              <span
                className={`shrink-0 text-sm ${
                  copied === i
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
                }`}
                aria-live="polite"
              >
                {copied === i ? "Copied" : "Copy"}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
