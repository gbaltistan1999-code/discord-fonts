"use client";

import { useCopy } from "./ToastProvider";

const ESC = "\u001b";

/**
 * A Discord code block example with a copy button. Lines contain the real escape character
 * (U+001B), shown on screen as an [ESC] tag, so the copied message works when pasted into Discord.
 */
export function AnsiCodeBlock({
  lines,
  language = "ansi",
  label,
}: {
  lines: readonly string[];
  language?: string;
  label: string;
}) {
  const copy = useCopy();
  const message = `\`\`\`${language}\n${lines.join("\n")}\n\`\`\``;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
        <span className="text-sm font-semibold text-text">{label}</span>
        <button
          type="button"
          onClick={() => copy(message, label)}
          className="rounded-full bg-accent-solid px-3.5 py-1.5 text-xs font-semibold text-on-accent transition-opacity hover:opacity-90"
        >
          Copy
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 font-mono text-sm leading-relaxed text-text">
        <span className="text-muted">```{language}</span>
        {"\n"}
        {lines.map((line, i) => (
          <span key={i}>
            {line.split(ESC).map((part, j) => (
              <span key={j}>
                {j > 0 && (
                  <span className="rounded bg-surface-2 px-1 text-xs font-semibold text-accent">ESC</span>
                )}
                {part}
              </span>
            ))}
            {"\n"}
          </span>
        ))}
        <span className="text-muted">```</span>
      </pre>
    </div>
  );
}
