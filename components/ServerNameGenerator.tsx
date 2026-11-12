"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  GENERATOR_FONTS,
  serverNameGeneratorStringsEn,
  styleName,
  type GeneratorFont,
  type ServerNameGeneratorStrings,
} from "@/content/server-names-data";
import {
  generateServerNames,
  isValidServerName,
  KEYWORD_MAX,
  seededRandom,
  SERVER_THEMES,
  type ServerTheme,
} from "@/lib/serverNames";
import { useCopy } from "./ToastProvider";

const BATCH = 24;

/** The first batch uses a fixed seed so the server and the browser render the same names. */
const INITIAL = generateServerNames({ random: seededRandom(2026), count: BATCH });

function Chip({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  /** Accessible name when the visible text is styled Unicode. */
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={label}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "border-accent-solid bg-accent-solid text-on-accent shadow-sm"
          : "border-border bg-surface text-text hover:border-accent/50 hover:bg-surface-2"
      }`}
    >
      {children}
    </button>
  );
}

function ResultCard({ name, t }: { name: string; t: ServerNameGeneratorStrings }) {
  const copy = useCopy();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const valid = isValidServerName(name);

  async function onCopy() {
    if (!(await copy(name, name))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <li className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-colors hover:border-accent/50">
      <span className="min-w-0">
        <span className="block truncate text-lg font-semibold text-text">{name}</span>
        {!valid && <span className="text-xs font-medium text-muted">{t.tooLong}</span>}
      </span>
      <button
        type="button"
        onClick={onCopy}
        className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
          copied
            ? "border-accent-solid bg-accent-solid text-on-accent"
            : "border-border text-text hover:border-accent hover:text-accent"
        }`}
      >
        {copied ? t.copied : t.copy}
        <span className="sr-only"> {name}</span>
      </button>
    </li>
  );
}

/** Discord server name generator: optional keyword, theme and font, 24 names per click. */
export function ServerNameGenerator({
  hero,
  strings: t = serverNameGeneratorStringsEn,
}: {
  hero: React.ReactNode;
  strings?: ServerNameGeneratorStrings;
}) {
  const keywordId = useId();
  const [keyword, setKeyword] = useState("");
  const [theme, setTheme] = useState<ServerTheme>("random");
  const [font, setFont] = useState<GeneratorFont>("plain");
  const [names, setNames] = useState<readonly string[]>(INITIAL);
  const [batch, setBatch] = useState(0);
  const resultsRef = useRef<HTMLHeadingElement>(null);

  function generate() {
    setNames(generateServerNames({ keyword, theme, count: BATCH }));
    setBatch((n) => n + 1);
  }

  function generateMore() {
    const seen = new Set(names);
    const more: string[] = [];
    for (let i = 0; i < 5 && more.length < BATCH; i++) {
      for (const name of generateServerNames({ keyword, theme, count: BATCH })) {
        if (!seen.has(name) && more.length < BATCH) {
          seen.add(name);
          more.push(name);
        }
      }
    }
    setNames([...names, ...more]);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generate();
          resultsRef.current?.focus({ preventScroll: true });
        }}
        className="-mx-4 border-y border-accent/20 bg-linear-to-br from-accent-soft via-surface to-accent-soft px-4 pt-6 pb-7 sm:mx-0 sm:rounded-3xl sm:border sm:px-10 sm:pt-8 sm:pb-9"
      >
        {hero}

        <label htmlFor={keywordId} className="sr-only">
          {t.keywordLabel}
        </label>
        <input
          id={keywordId}
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={t.placeholder}
          maxLength={KEYWORD_MAX}
          autoComplete="off"
          spellCheck={false}
          className="block min-h-14 w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-lg text-text shadow-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15 sm:min-h-16 sm:px-5 sm:text-xl"
        />

        <fieldset className="mt-5">
          <legend className="mb-2 text-sm font-semibold text-text">{t.theme}</legend>
          <div className="flex flex-wrap gap-2">
            {SERVER_THEMES.map((s) => (
              <Chip key={s} active={theme === s} onClick={() => setTheme(s)}>
                {t.themes[s]}
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="mb-2 text-sm font-semibold text-text">{t.font}</legend>
          <div className="flex flex-wrap gap-2">
            {GENERATOR_FONTS.map((f) => (
              <Chip key={f} active={font === f} onClick={() => setFont(f)} label={t.fonts[f]}>
                {styleName(t.fonts[f], f)}
              </Chip>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-linear-to-r from-teal-700 to-cyan-700 px-6 py-4 text-lg font-bold text-white shadow-sm transition-[opacity,transform] hover:opacity-95 active:scale-[0.99]"
        >
          {t.generate}
        </button>
      </form>

      <section aria-labelledby="server-name-results" className="mt-8">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <h2
            id="server-name-results"
            ref={resultsRef}
            tabIndex={-1}
            className="text-lg font-semibold outline-none"
          >
            {t.results}
          </h2>
          <p className="text-sm text-muted" aria-live="polite">
            {t.count.replace("{count}", String(names.length))}
          </p>
        </div>
        <ul key={batch} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {names.map((name) => (
            <ResultCard key={name} name={styleName(name, font)} t={t} />
          ))}
        </ul>
        <button
          type="button"
          onClick={generateMore}
          className="mt-4 w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
        >
          {t.generateMore}
        </button>
      </section>
    </div>
  );
}
