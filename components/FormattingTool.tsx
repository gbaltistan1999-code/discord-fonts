"use client";

import { useId, useState } from "react";
import { en } from "@/content/i18n/strings/en";
import type { FormattingStrings } from "@/content/i18n/types";
import { markdownFormats } from "@/lib/formatting";
import { fill } from "@/lib/i18n";
import { ColoredTextTool, copyButtonClass } from "./ColoredTextTool";
import { useCopy } from "./ToastProvider";

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

export function FormattingTool({
  headingLevel = "h3",
  strings: t = en.formatting,
}: {
  headingLevel?: "h2" | "h3";
  /** Interface text in the page's language (English by default). */
  strings?: FormattingStrings;
}) {
  const name = (id: string, fallback: string) => t.formatNames[id] ?? fallback;
  const inputId = useId();
  const copy = useCopy();
  const [text, setText] = useState("");

  const source = text.trim() ? text : t.sampleText;

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        {t.inputLabel}
      </label>
      <textarea
        id={inputId}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={fill(t.placeholder, { sample: t.sampleText })}
        rows={1}
        maxLength={2000}
        className="block min-h-14 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-lg text-text shadow-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15 [field-sizing:content]"
      />

      <ul
        aria-label={t.formatsLabel}
        className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface"
      >
        {markdownFormats.map((format) => {
          const output = format.apply(source);
          const label = name(format.id, format.name);
          return (
            <li key={format.id} className="flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-4">
                <p className="flex items-baseline gap-2 text-xs sm:w-36 sm:shrink-0 sm:flex-col sm:gap-0.5">
                  <span className="text-muted">{label}</span>
                  <code className="font-mono text-[0.7rem] text-muted/90">{format.syntax}</code>
                </p>
                <div
                  aria-hidden="true"
                  className="mt-1 min-w-0 flex-1 break-words whitespace-pre-wrap sm:mt-0"
                >
                  {renderPreview(format.id, source)}
                </div>
              </div>
              <button type="button" onClick={() => copy(output, label)} className={copyButtonClass}>
                {t.copy}
                <span className="sr-only"> {fill(t.copySr, { name: label })}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <ColoredTextTool source={source} headingLevel={headingLevel} strings={t} />
    </div>
  );
}
