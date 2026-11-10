"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import {
  generateUsernames,
  LENGTH_FILTERS,
  seededRandom,
  USERNAME_STYLES,
  type LengthFilter,
  type UsernameStyle,
} from "@/lib/usernameGenerator";
import {
  usernameGeneratorStringsEn,
  type UsernameGeneratorStrings,
} from "@/content/username-generator-strings";
import { useCopy } from "./ToastProvider";

const BATCH = 24;

const lengthLabel = (l: LengthFilter, any: string) => (l === "any" ? any : l.replace("-", "–"));

/** The first batch uses a fixed seed so the server and the browser render the same names. */
const INITIAL = generateUsernames({ random: seededRandom(2026), count: BATCH });

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
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

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5 rounded-full py-1 text-sm font-medium text-text"
    >
      <span
        aria-hidden="true"
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? "bg-accent-solid" : "bg-border"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </span>
      {label}
    </button>
  );
}

function ResultCard({ name, t }: { name: string; t: UsernameGeneratorStrings }) {
  const copy = useCopy();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function onCopy() {
    if (!(await copy(name, name))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <li className="username-card flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-colors hover:border-accent/50">
      <div className="flex items-center justify-between gap-3">
        <span className="min-w-0 truncate font-mono text-lg font-semibold text-text">{name}</span>
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
      </div>
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="flex items-center gap-1 font-medium text-success">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5" fill="currentColor">
            <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
          </svg>
          {t.followsRules}
        </span>
        <Link
          href={`${t.fontGeneratorPath}?text=${encodeURIComponent(name)}`}
          className="font-semibold text-accent hover:underline"
        >
          {t.makeFancy}<span className="sr-only"> ({name})</span> <span aria-hidden="true">→</span>
        </Link>
      </div>
    </li>
  );
}

/** Discord username generator: keyword, style, length and character options, 24 valid names per click. */
export function UsernameGenerator({
  hero,
  strings: t = usernameGeneratorStringsEn,
}: {
  hero: React.ReactNode;
  strings?: UsernameGeneratorStrings;
}) {
  const keywordId = useId();
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState<UsernameStyle>("random");
  const [length, setLength] = useState<LengthFilter>("any");
  const [allowNumbers, setAllowNumbers] = useState(true);
  const [allowSeparators, setAllowSeparators] = useState(true);
  const [names, setNames] = useState<readonly string[]>(INITIAL);
  const [batch, setBatch] = useState(0);
  const resultsRef = useRef<HTMLHeadingElement>(null);

  const options = { keyword, style, length, allowNumbers, allowSeparators };

  function generate() {
    setNames(generateUsernames({ ...options, count: BATCH }));
    setBatch((n) => n + 1);
  }

  function generateMore() {
    const seen = new Set(names);
    const more: string[] = [];
    for (let i = 0; i < 5 && more.length < BATCH; i++) {
      for (const name of generateUsernames({ ...options, count: BATCH })) {
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
          maxLength={40}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="block min-h-14 w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-lg text-text shadow-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15 sm:min-h-16 sm:px-5 sm:text-xl"
        />

        <fieldset className="mt-5">
          <legend className="mb-2 text-sm font-semibold text-text">{t.style}</legend>
          <div className="flex flex-wrap gap-2">
            {USERNAME_STYLES.map((s) => (
              <Chip key={s} active={style === s} onClick={() => setStyle(s)}>
                {t.styles[s]}
              </Chip>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-text">{t.length}</legend>
            <div className="flex flex-wrap gap-2">
              {LENGTH_FILTERS.map((l) => (
                <Chip key={l} active={length === l} onClick={() => setLength(l)}>
                  {lengthLabel(l, t.anyLength)}
                </Chip>
              ))}
            </div>
          </fieldset>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Toggle checked={allowNumbers} onChange={setAllowNumbers} label={t.allowNumbers} />
            <Toggle checked={allowSeparators} onChange={setAllowSeparators} label={t.allowSeparators} />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-linear-to-r from-teal-700 to-cyan-700 px-6 py-4 text-lg font-bold text-white shadow-sm transition-[opacity,transform] hover:opacity-95 active:scale-[0.99]"
        >
          {t.generate}
        </button>
      </form>

      <section aria-labelledby="username-results" className="mt-8">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <h2
            id="username-results"
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
        <ul key={batch} className="grid min-h-[30rem] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {names.map((name) => (
            <ResultCard key={name} name={name} t={t} />
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
