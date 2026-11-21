"use client";

import { useId, useState } from "react";
import { BIO_LIMIT, bioCategories, bioFonts, bioLength, bioTemplates } from "@/content/bio-ideas-data";
import { convert } from "@/lib/fonts";
import { useCopy } from "./ToastProvider";

const TEMPLATES = "templates";
const tabs = [
  { id: "all", label: "All" },
  ...bioCategories.map((c) => ({ id: c.id, label: c.label })),
  { id: TEMPLATES, label: "Templates" },
];

/** One bio: the text, a character counter and a Copy button. */
function BioRow({ text, label }: { text: string; label: string }) {
  const copy = useCopy();
  const length = bioLength(text);
  const tooLong = length > BIO_LIMIT;
  return (
    <li className="flex items-center gap-2 rounded-lg bg-surface-2 py-1.5 pr-1.5 pl-3">
      <span className="min-w-0 flex-1 py-1 text-[15px] break-words whitespace-pre-line text-text">
        {text}
      </span>
      <span
        className={`shrink-0 text-xs tabular-nums ${tooLong ? "font-semibold text-red-600 dark:text-red-400" : "text-muted"}`}
        title="Characters used out of Discord's 190 limit"
      >
        {length}/{BIO_LIMIT}
      </span>
      <button
        type="button"
        onClick={() => copy(text, label)}
        className="min-h-11 shrink-0 rounded-lg border border-border bg-surface px-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      >
        Copy<span className="sr-only"> bio: {label}</span>
      </button>
    </li>
  );
}

/** /discord-bio-ideas tool: category tabs, a font menu, and every bio with a counter and Copy button. */
export function BioIdeas() {
  const fontId = useId();
  const [tab, setTab] = useState("all");
  const [font, setFont] = useState("");
  const style = (text: string) =>
    font
      ? text
          .split("\n")
          .map((line) => convert(font, line))
          .join("\n")
      : text;
  const shows = (id: string) => tab === "all" || tab === id;

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-4 border-b border-border bg-bg/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-4">
        <div className="flex flex-wrap items-center gap-2">
          <ul className="flex w-full min-w-0 gap-1.5 overflow-x-auto pb-1 sm:w-auto sm:flex-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {tabs.map((t) => (
              <li key={t.id} className="shrink-0">
                <button
                  type="button"
                  aria-pressed={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`min-h-9 rounded-full border px-3.5 text-sm font-semibold transition-colors ${
                    tab === t.id
                      ? "border-accent-solid bg-accent-solid text-on-accent"
                      : "border-border bg-surface text-text hover:border-accent hover:text-accent"
                  }`}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <label htmlFor={fontId} className="text-sm font-semibold text-text">
              Apply font
            </label>
            <select
              id={fontId}
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="min-h-9 rounded-lg border border-border bg-surface px-2 text-sm text-text"
            >
              {bioFonts.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {bioCategories.map(
          (c) =>
            shows(c.id) && (
              <section
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-bios`}
                className="scroll-mt-24 rounded-2xl border border-border bg-surface p-4 sm:p-5"
              >
                <h2 id={`${c.id}-bios`} className="text-xl font-bold tracking-tight text-text">
                  {c.heading}
                </h2>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {c.bios.map((bio) => (
                    <BioRow key={bio} text={style(bio)} label={bio} />
                  ))}
                </ul>
              </section>
            ),
        )}

        {shows(TEMPLATES) && (
          <section
            id={TEMPLATES}
            aria-labelledby="bio-templates"
            className="scroll-mt-24 rounded-2xl border border-border bg-surface p-4 sm:p-5 md:col-span-2"
          >
            <h2 id="bio-templates" className="text-xl font-bold tracking-tight text-text">
              Discord Bio Templates
            </h2>
            <p className="mt-1 text-sm text-muted">
              Copy a template, then swap the text in [brackets] for your own details.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {bioTemplates.map((t) => (
                <li key={t.name}>
                  <h3 className="mb-1.5 text-sm font-semibold text-muted">{t.name}</h3>
                  <ul>
                    <BioRow text={style(t.text)} label={`${t.name} template`} />
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
