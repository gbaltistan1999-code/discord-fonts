"use client";

import { useId, useState } from "react";
import { ansiBackgroundColors, ansiBlock, ansiTextColors, markdownFormats } from "@/lib/formatting";
import { useCopy } from "./ToastProvider";

const SAMPLE_TEXT = "GG everyone";

/** How each format renders in a chat message, for the visual preview only. */
function renderPreview(id: string, text: string): React.ReactNode {
  switch (id) {
    case "bold":
      return <strong>{text}</strong>;
    case "italic":
      return <em>{text}</em>;
    case "bold-italic":
      return (
        <strong>
          <em>{text}</em>
        </strong>
      );
    case "underline":
      return <span className="underline underline-offset-2">{text}</span>;
    case "strikethrough":
      return <s>{text}</s>;
    case "spoiler":
      return (
        <span className="rounded bg-text px-1 text-transparent transition-colors hover:bg-surface-2 hover:text-text">
          {text}
        </span>
      );
    case "inline-code":
      return (
        <code className="rounded border border-border bg-surface-2 px-1 py-0.5 font-mono text-[0.85em]">
          {text}
        </code>
      );
    case "code-block":
      return (
        <code className="block rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[0.85em]">
          {text}
        </code>
      );
    case "quote":
      return <span className="block border-l-[3px] border-border pl-3">{text}</span>;
    case "h1":
      return <span className="block text-2xl font-bold">{text}</span>;
    case "h2":
      return <span className="block text-xl font-bold">{text}</span>;
    case "h3":
      return <span className="block text-lg font-bold">{text}</span>;
    case "subtext":
      return <span className="block text-xs text-muted">{text}</span>;
    default:
      return text;
  }
}

const copyButtonClass =
  "shrink-0 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-text transition-colors hover:border-text/30 hover:bg-surface";

export function FormattingTool({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const inputId = useId();
  const copy = useCopy();
  const [text, setText] = useState("");
  const [color, setColor] = useState(34);
  const [background, setBackground] = useState<number | null>(null);
  const [bold, setBold] = useState(false);
  const [underline, setUnderline] = useState(false);

  const source = text.trim() ? text : SAMPLE_TEXT;
  const ansi = ansiBlock(source, { color, background, bold, underline });
  const colorHex = ansiTextColors.find((c) => c.code === color)?.hex;
  const backgroundHex = ansiBackgroundColors.find((c) => c.code === background)?.hex;

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        Text to format
      </label>
      <textarea
        id={inputId}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Type a message, e.g. “${SAMPLE_TEXT}”`}
        rows={1}
        maxLength={2000}
        className="block min-h-14 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-lg text-text shadow-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15 [field-sizing:content]"
      />

      <ul
        aria-label="Discord markdown formats"
        className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface"
      >
        {markdownFormats.map((format) => {
          const output = format.apply(source);
          return (
            <li key={format.id} className="flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-4">
                <p className="flex items-baseline gap-2 text-xs sm:w-36 sm:shrink-0 sm:flex-col sm:gap-0.5">
                  <span className="text-muted">{format.name}</span>
                  <code className="font-mono text-[0.7rem] text-muted/90">{format.syntax}</code>
                </p>
                <div
                  aria-hidden="true"
                  className="mt-1 min-w-0 flex-1 break-words whitespace-pre-wrap sm:mt-0"
                >
                  {renderPreview(format.id, source)}
                </div>
              </div>
              <button type="button" onClick={() => copy(output, format.name)} className={copyButtonClass}>
                Copy<span className="sr-only"> {format.name} markdown</span>
              </button>
            </li>
          );
        })}
      </ul>

      <section
        aria-labelledby={`${inputId}-ansi`}
        className="mt-4 rounded-xl border border-border bg-surface px-4 py-4 sm:px-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Heading id={`${inputId}-ansi`} className="text-sm font-semibold">
              Colored text
            </Heading>
            <p className="mt-0.5 text-xs text-muted">
              Uses an <code className="font-mono">ansi</code> code block. Colors show on desktop and web, not
              in the mobile apps.
            </p>
          </div>
          <button type="button" onClick={() => copy(ansi, "colored text")} className={copyButtonClass}>
            Copy<span className="sr-only"> colored text</span>
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          <fieldset className="flex items-center gap-2">
            <legend className="sr-only">Text color</legend>
            {ansiTextColors.map((c) => (
              <label key={c.code} title={c.name} className="relative cursor-pointer">
                <input
                  type="radio"
                  name={`${inputId}-color`}
                  value={c.code}
                  checked={color === c.code}
                  onChange={() => setColor(c.code)}
                  className="peer sr-only"
                />
                <span className="sr-only">{c.name}</span>
                <span
                  aria-hidden="true"
                  className="block size-6 rounded-full border border-black/15 ring-offset-2 ring-offset-surface peer-checked:ring-2 peer-checked:ring-text peer-focus-visible:ring-2 peer-focus-visible:ring-accent"
                  style={{ background: c.hex }}
                />
              </label>
            ))}
          </fieldset>
          <label className="flex items-center gap-2 text-sm text-muted">
            Background
            <select
              value={background ?? ""}
              onChange={(e) => setBackground(e.target.value ? Number(e.target.value) : null)}
              className="rounded-md border border-border bg-surface px-2 py-1.5 text-sm text-text"
            >
              <option value="">None</option>
              {ansiBackgroundColors.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={bold}
              onChange={(e) => setBold(e.target.checked)}
              className="size-4 accent-[var(--accent-solid)]"
            />
            Bold
          </label>
          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={underline}
              onChange={(e) => setUnderline(e.target.checked)}
              className="size-4 accent-[var(--accent-solid)]"
            />
            Underline
          </label>
        </div>

        <div aria-hidden="true" className="mt-4 rounded-lg bg-[#101117] px-3 py-2.5 font-mono text-sm">
          <span
            className="whitespace-pre-wrap"
            style={{
              color: colorHex,
              background: backgroundHex,
              fontWeight: bold ? 700 : 400,
              textDecoration: underline ? "underline" : undefined,
            }}
          >
            {source}
          </span>
        </div>
      </section>
    </div>
  );
}
