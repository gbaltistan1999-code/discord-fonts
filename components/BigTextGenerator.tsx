"use client";

import { useId, useState } from "react";
import {
  asciiBanner,
  asciiBannerBlock,
  BANNER_MAX,
  emojiLetters,
  emojiShortcodes,
  oneLine,
  stripAccents,
} from "@/lib/big-text";
import { convert } from "@/lib/fonts";
import { useCopy } from "./ToastProvider";

const MESSAGE_LIMIT = 2000;
const SAMPLE = "Big Text";

interface BigStyle {
  id: string;
  name: string;
  note: string;
  /** The text that gets copied. */
  make: (text: string) => string;
  /** How it looks in Discord. Defaults to the copied text. */
  preview?: (text: string) => React.ReactNode;
  previewClass: string;
  /** Show the raw markdown under the preview. */
  showCode?: boolean;
}

const styles: readonly BigStyle[] = [
  {
    id: "h1",
    name: "Header 1 (biggest)",
    note: "Largest markdown text",
    make: (t) => `# ${oneLine(t)}`,
    preview: oneLine,
    previewClass: "text-3xl font-extrabold",
    showCode: true,
  },
  {
    id: "h2",
    name: "Header 2",
    note: "Medium header",
    make: (t) => `## ${oneLine(t)}`,
    preview: oneLine,
    previewClass: "text-2xl font-bold",
    showCode: true,
  },
  {
    id: "h3",
    name: "Header 3",
    note: "Small header",
    make: (t) => `### ${oneLine(t)}`,
    preview: oneLine,
    previewClass: "text-xl font-bold",
    showCode: true,
  },
  {
    id: "emoji",
    name: "Emoji letters",
    note: "Send on their own and Discord shows them extra large",
    make: emojiLetters,
    preview: (t) => <EmojiTiles text={t} />,
    previewClass: "",
  },
  {
    id: "shortcodes",
    name: "Emoji letters (shortcodes)",
    note: "Discord turns these codes into emoji letters",
    make: emojiShortcodes,
    previewClass: "font-mono text-sm",
  },
  {
    id: "wide",
    name: "Wide text",
    note: "Fullwidth letters; also works in names and bios",
    make: (t) => convert("fullwidth", t),
    previewClass: "text-xl",
  },
  {
    id: "bold",
    name: "Bold big",
    note: "Unicode bold that works anywhere",
    make: (t) => convert("bold-serif", t),
    previewClass: "text-xl",
  },
  {
    id: "bold-header",
    name: "Bold header combo",
    note: "Header plus bold markdown",
    make: (t) => `# **${oneLine(t)}**`,
    preview: oneLine,
    previewClass: "text-3xl font-black",
    showCode: true,
  },
  {
    id: "ascii",
    name: "ASCII banner",
    note: `Block letters in a code block (up to ${BANNER_MAX} characters: A–Z, 0–9, ! ? . -)`,
    make: asciiBannerBlock,
    preview: asciiBanner,
    previewClass: "overflow-x-auto font-mono text-[11px] leading-none whitespace-pre sm:text-xs",
  },
  {
    id: "subtext",
    name: "Subtext (small)",
    note: "Tiny gray text to go under a big header",
    make: (t) => `-# ${oneLine(t)}`,
    preview: oneLine,
    previewClass: "text-xs text-muted",
    showCode: true,
  },
];

const tile = "inline-flex size-8 items-center justify-center rounded-md text-lg font-bold";

/**
 * Emoji letters drawn as tiles like Discord's. Windows has no glyphs for regional indicator letters, so
 * rendering the real characters would show plain letters there.
 */
function EmojiTiles({ text }: { text: string }) {
  return (
    <span className="flex flex-col gap-1.5">
      {stripAccents(text)
        .split("\n")
        .map((line, i) => (
          <span key={i} className="flex flex-wrap gap-x-1 gap-y-1.5">
            {line
              .trim()
              .split(/\s+/)
              .filter(Boolean)
              .map((word, j) => (
                <span key={j} className="mr-4 flex gap-1 last:mr-0">
                  {[...word].map((ch, k) => {
                    if (/[a-z]/i.test(ch))
                      return (
                        <span key={k} className={`${tile} bg-[#55acee] text-white`}>
                          {ch.toUpperCase()}
                        </span>
                      );
                    if (/[0-9]/.test(ch))
                      return (
                        <span key={k} className={`${tile} bg-[#ccd6dd] text-[#31373d]`}>
                          {ch}
                        </span>
                      );
                    const emoji = ch === "!" ? "❗" : ch === "?" ? "❓" : ch;
                    return (
                      <span key={k} className="inline-flex h-8 items-center text-2xl">
                        {emoji}
                      </span>
                    );
                  })}
                </span>
              ))}
          </span>
        ))}
    </span>
  );
}

/** /discord-big-text tool: one input, every big-text style with a preview and a Copy button. */
export function BigTextGenerator() {
  const copy = useCopy();
  const inputId = useId();
  const [text, setText] = useState("");
  const source = text.trim() ? text : SAMPLE;

  return (
    <div>
      <div className="mx-auto max-w-3xl">
        <label htmlFor={inputId} className="sr-only">
          Your text
        </label>
        <textarea
          id={inputId}
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MESSAGE_LIMIT}
          rows={2}
          placeholder="Type your text here…"
          className="w-full resize-y rounded-2xl border border-border bg-surface px-4 py-3 text-lg text-text shadow-sm outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>{text.trim() ? "" : `Showing a sample: “${SAMPLE}”`}</span>
          <span className="tabular-nums">
            {text.length}/{MESSAGE_LIMIT}
          </span>
        </div>
      </div>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {styles.map((style) => {
          const output = style.make(source);
          const preview = style.preview ? style.preview(source) : output;
          return (
            <li key={style.id} className="flex flex-col rounded-2xl border border-border bg-surface p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-semibold text-text">{style.name}</h3>
                  <p className="text-xs text-muted">{style.note}</p>
                </div>
                <button
                  type="button"
                  disabled={!output}
                  onClick={() => copy(output, style.name)}
                  className="min-h-11 shrink-0 rounded-lg bg-accent-solid px-4 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  Copy<span className="sr-only"> {style.name}</span>
                </button>
              </div>
              <div className={`mt-3 min-w-0 break-words text-text ${style.previewClass}`}>
                {preview || (
                  <span className="text-sm text-muted">Type letters or numbers to draw a banner.</span>
                )}
              </div>
              {style.showCode && (
                <code className="mt-2 block truncate rounded-md bg-surface-2 px-2 py-1 text-xs text-muted">
                  {output}
                </code>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
