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
        <span className="rounded bg-[#2b2d38] px-1 text-transparent transition-colors hover:bg-[#2b2d38]/60 hover:text-inherit">
          {text}
        </span>
      );
    case "inline-code":
      return <code className="rounded bg-[#23252f] px-1 py-0.5 font-mono text-[0.85em]">{text}</code>;
    case "code-block":
      return (
        <code className="block rounded-md border border-[#2b2d3a] bg-[#1d1f28] p-2 font-mono text-[0.85em]">
          {text}
        </code>
      );
    case "quote":
      return <span className="block border-l-4 border-[#4a4d5e] pl-3">{text}</span>;
    case "h1":
      return <span className="block text-2xl font-bold">{text}</span>;
    case "h2":
      return <span className="block text-xl font-bold">{text}</span>;
    case "h3":
      return <span className="block text-lg font-bold">{text}</span>;
    case "subtext":
      return <span className="block text-xs text-[#9a9db0]">{text}</span>;
    default:
      return text;
  }
}

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
      <label htmlFor={inputId} className="mb-2 block text-sm font-semibold">
        Text to format
      </label>
      <textarea
        id={inputId}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Type a message, e.g. “${SAMPLE_TEXT}”`}
        rows={2}
        maxLength={2000}
        className="block w-full resize-y rounded-xl border-2 border-border bg-surface px-4 py-3 text-lg text-text outline-none placeholder:text-muted/80 focus:border-accent"
      />

      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {markdownFormats.map((format) => {
          const output = format.apply(source);
          return (
            <li key={format.id} className="flex flex-col rounded-xl border border-border bg-surface p-3.5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">
                  {format.name} <code className="ml-1 text-xs font-normal text-muted">{format.syntax}</code>
                </p>
                <button
                  type="button"
                  onClick={() => copy(output, format.name)}
                  className="shrink-0 rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-solid hover:text-on-accent"
                >
                  Copy<span className="sr-only"> {format.name} markdown</span>
                </button>
              </div>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-surface-2 px-3 py-2 font-mono text-sm whitespace-pre-wrap text-text">
                {output}
              </pre>
              <div
                aria-hidden="true"
                className="mt-2 flex-1 rounded-lg bg-[#16171f] px-3 py-2 break-words whitespace-pre-wrap text-[#e6e7ee]"
              >
                {renderPreview(format.id, source)}
              </div>
            </li>
          );
        })}
      </ul>

      <section
        aria-labelledby={`${inputId}-ansi`}
        className="mt-6 rounded-xl border border-border bg-surface p-4"
      >
        <Heading id={`${inputId}-ansi`} className="text-base font-semibold">
          Colored text (ANSI code block)
        </Heading>
        <p className="mt-1 text-sm text-muted">
          Colors show on Discord desktop and web. Mobile apps currently show the text without color.
        </p>

        <fieldset className="mt-4">
          <legend className="text-sm font-medium">Text color</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {ansiTextColors.map((c) => (
              <label
                key={c.code}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-2.5 py-1.5 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent"
              >
                <input
                  type="radio"
                  name={`${inputId}-color`}
                  value={c.code}
                  checked={color === c.code}
                  onChange={() => setColor(c.code)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className="size-3.5 rounded-full border border-black/20"
                  style={{ background: c.hex }}
                />
                {c.name}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-4 flex flex-wrap items-end gap-4">
          <label className="text-sm font-medium">
            Background
            <select
              value={background ?? ""}
              onChange={(e) => setBackground(e.target.value ? Number(e.target.value) : null)}
              className="mt-1 block rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-text"
            >
              <option value="">None</option>
              {ansiBackgroundColors.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={bold}
              onChange={(e) => setBold(e.target.checked)}
              className="size-4 accent-[var(--accent-solid)]"
            />
            Bold
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={underline}
              onChange={(e) => setUnderline(e.target.checked)}
              className="size-4 accent-[var(--accent-solid)]"
            />
            Underline
          </label>
          <button
            type="button"
            onClick={() => copy(ansi, "colored text")}
            className="ml-auto rounded-lg bg-accent-solid px-4 py-2 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            Copy colored text
          </button>
        </div>

        <div
          aria-hidden="true"
          className="mt-4 rounded-lg border border-[#2b2d3a] bg-[#101117] p-3 font-mono text-sm"
        >
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
