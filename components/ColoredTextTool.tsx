"use client";

import { useId, useState } from "react";
import { en } from "@/content/i18n/strings/en";
import type { FormattingStrings } from "@/content/i18n/types";
import { ansiBackgroundColors, ansiBlock, ansiTextColors } from "@/lib/formatting";
import { fill } from "@/lib/i18n";
import { useCopy } from "./ToastProvider";

export const copyButtonClass =
  "shrink-0 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-text transition-colors hover:border-text/30 hover:bg-surface";

/**
 * Colored text (ANSI code block) maker. Inside the formatting tool it styles the shared `source` text;
 * on its own (no `source`) it shows its own text box, e.g. in the colored-text blog post.
 */
export function ColoredTextTool({
  source: sharedSource,
  headingLevel = "h3",
  strings: t = en.formatting,
}: {
  source?: string;
  /** "p" keeps the title out of the page outline, e.g. under a section heading in an article. */
  headingLevel?: "h2" | "h3" | "p";
  strings?: FormattingStrings;
}) {
  const Heading = headingLevel;
  const colorName = (code: number, fallback: string) => t.colorNames[code] ?? fallback;
  const [ansiBefore, ansiAfter = ""] = t.coloredDescription.split("{ansi}");
  const id = useId();
  const copy = useCopy();
  const [ownText, setOwnText] = useState("");
  const [color, setColor] = useState(34);
  const [background, setBackground] = useState<number | null>(null);
  const [bold, setBold] = useState(false);
  const [underline, setUnderline] = useState(false);

  const standalone = sharedSource === undefined;
  const source = standalone ? (ownText.trim() ? ownText : t.sampleText) : sharedSource;
  const ansi = ansiBlock(source, { color, background, bold, underline });
  const colorHex = ansiTextColors.find((c) => c.code === color)?.hex;
  const backgroundHex = ansiBackgroundColors.find((c) => c.code === background)?.hex;

  return (
    <div>
      {standalone && (
        <>
          <label htmlFor={`${id}-input`} className="sr-only">
            {t.inputLabel}
          </label>
          <textarea
            id={`${id}-input`}
            value={ownText}
            onChange={(e) => setOwnText(e.target.value)}
            placeholder={fill(t.placeholder, { sample: t.sampleText })}
            rows={1}
            maxLength={2000}
            className="mb-3 block min-h-14 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-lg text-text shadow-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15 [field-sizing:content]"
          />
        </>
      )}

      <section
        aria-labelledby={`${id}-ansi`}
        className={`rounded-xl border border-border bg-surface px-4 py-4 sm:px-5 ${standalone ? "" : "mt-4"}`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Heading id={`${id}-ansi`} className="m-0 text-sm font-semibold text-text">
              {t.coloredTitle}
            </Heading>
            <p className="m-0 mt-0.5 text-xs text-muted">
              {ansiBefore}
              <code className="font-mono">ansi</code>
              {ansiAfter}
            </p>
          </div>
          <button type="button" onClick={() => copy(ansi, t.coloredLabel)} className={copyButtonClass}>
            {t.copy}
            <span className="sr-only"> {t.coloredLabel}</span>
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          <fieldset className="flex items-center gap-2">
            <legend className="sr-only">{t.textColor}</legend>
            {ansiTextColors.map((c) => (
              <label key={c.code} title={colorName(c.code, c.name)} className="relative cursor-pointer">
                <input
                  type="radio"
                  name={`${id}-color`}
                  value={c.code}
                  checked={color === c.code}
                  onChange={() => setColor(c.code)}
                  className="peer sr-only"
                />
                <span className="sr-only">{colorName(c.code, c.name)}</span>
                <span
                  aria-hidden="true"
                  className="block size-6 rounded-full border border-black/15 ring-offset-2 ring-offset-surface peer-checked:ring-2 peer-checked:ring-text peer-focus-visible:ring-2 peer-focus-visible:ring-accent"
                  style={{ background: c.hex }}
                />
              </label>
            ))}
          </fieldset>
          <label className="flex items-center gap-2 text-sm text-muted">
            {t.background}
            <select
              value={background ?? ""}
              onChange={(e) => setBackground(e.target.value ? Number(e.target.value) : null)}
              className="rounded-md border border-border bg-surface px-2 py-1.5 text-sm text-text"
            >
              <option value="">{t.none}</option>
              {ansiBackgroundColors.map((c) => (
                <option key={c.code} value={c.code}>
                  {colorName(c.code, c.name)}
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
            {t.bold}
          </label>
          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={underline}
              onChange={(e) => setUnderline(e.target.checked)}
              className="size-4 accent-[var(--accent-solid)]"
            />
            {t.underline}
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
