"use client";

import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  DISCORD_NAME_LIMIT,
  ZALGO_DEFAULT,
  ZALGO_MAX,
  ZALGO_MIN,
  fontCategories,
  fontStyles,
  getFontStyle,
  randomStyle,
  visibleLength,
  type FontCategory,
  type FontStyle,
} from "@/lib/fonts";
import { PlatformLinks } from "./PlatformLinks";
import { useCopy } from "./ToastProvider";

const SAMPLE_TEXT = "Your Text Here";
const PAGE_SIZE = 24;
const MAX_INPUT = 1000;
const RANDOM_PAGE = 12;

function makeRandomStyle(seed: number, index: number): FontStyle {
  return {
    id: `random-mix-${seed}`,
    name: `Random ${index + 1}`,
    categories: [],
    transform: (text) => randomStyle(text, seed),
  };
}

type Filter = "featured" | "all" | FontCategory;

export interface FeaturedStyles {
  label: string;
  ids: readonly string[];
}

interface FontGeneratorProps {
  /** Pre-filter the tool, e.g. on a style landing page. */
  featured?: FeaturedStyles;
  /** Example text shown before the visitor types anything. */
  sampleText?: string;
}

export function FontGenerator({ featured, sampleText = SAMPLE_TEXT }: FontGeneratorProps) {
  const inputId = useId();
  const hintId = useId();
  const randomHeadingId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const copy = useCopy();

  const [text, setText] = useState("");
  const [filter, setFilter] = useState<Filter>(featured ? "featured" : "all");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [zalgoIntensity, setZalgoIntensity] = useState(ZALGO_DEFAULT);
  const [selectedId, setSelectedId] = useState(featured?.ids[0] ?? fontStyles[0]!.id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  // Seeds start at a fixed value so server and client render the same first batch.
  const [randomStart, setRandomStart] = useState(1);
  const [randomCount, setRandomCount] = useState(RANDOM_PAGE);

  // Keep typing responsive: results re-render at lower priority than the input.
  const deferredText = useDeferredValue(text);
  const source = deferredText.trim() ? deferredText : sampleText;

  const featuredStyles = useMemo(
    () => (featured ? featured.ids.map(getFontStyle).filter((s): s is FontStyle => Boolean(s)) : []),
    [featured],
  );

  const filtered = useMemo(() => {
    if (filter === "featured") return featuredStyles;
    if (filter === "all") return fontStyles;
    return fontStyles.filter((style) => style.categories.includes(filter));
  }, [filter, featuredStyles]);

  const results = useMemo(() => {
    const visible = filter === "all" ? filtered.slice(0, limit) : filtered;
    return visible.map((style) => ({ style, value: style.transform(source, { zalgoIntensity }) }));
  }, [filter, filtered, limit, source, zalgoIntensity]);

  const randomStyles = useMemo(
    () => Array.from({ length: randomCount }, (_, i) => makeRandomStyle(randomStart + i, i)),
    [randomStart, randomCount],
  );

  const randomResults = useMemo(
    () => (filter === "all" ? randomStyles.map((style) => ({ style, value: style.transform(source) })) : []),
    [filter, randomStyles, source],
  );

  useEffect(() => {
    if (!copiedId) return;
    const timer = setTimeout(() => setCopiedId(null), 1500);
    return () => clearTimeout(timer);
  }, [copiedId]);

  async function handleCopy(style: FontStyle, value: string) {
    setSelectedId(style.id);
    if (await copy(value, style.name)) setCopiedId(style.id);
  }

  const filters: { id: Filter; label: string; count: number }[] = [
    ...(featured ? [{ id: "featured" as const, label: featured.label, count: featuredStyles.length }] : []),
    { id: "all", label: "All", count: fontStyles.length },
    ...fontCategories.map((c) => ({
      id: c.id,
      label: c.label,
      count: fontStyles.filter((s) => s.categories.includes(c.id)).length,
    })),
  ];

  return (
    <div className="relative">
      {/* Input: sticks to the top on small screens while scrolling results */}
      <div className="sticky top-[env(safe-area-inset-top)] z-20 -mx-4 border-b border-border bg-bg/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-bg/85 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
        <label htmlFor={inputId} className="sr-only">
          Type or paste your text
        </label>
        <div className="relative">
          <textarea
            ref={inputRef}
            id={inputId}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your text here…"
            rows={1}
            maxLength={MAX_INPUT}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-describedby={hintId}
            className="block max-h-40 min-h-14 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 pr-20 text-lg text-text shadow-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15 sm:min-h-16 sm:px-5 sm:py-4 sm:text-xl [field-sizing:content]"
          />
          {text && (
            <button
              type="button"
              onClick={() => {
                setText("");
                inputRef.current?.focus();
              }}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md px-2.5 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              Clear<span className="sr-only"> text</span>
            </button>
          )}
        </div>
        <p id={hintId} className="mt-2 flex justify-between gap-4 px-1 text-xs text-muted">
          <span>Updates as you type. Click any result to copy it.</span>
          <span className="shrink-0 tabular-nums">{visibleLength(text)} chars</span>
        </p>
      </div>

      <div
        role="group"
        aria-label="Filter font styles by category"
        className="-mx-4 mt-6 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setFilter(f.id);
                setLimit(PAGE_SIZE);
              }}
              className={`shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                active ? "bg-text text-bg" : "text-muted hover:bg-surface-2 hover:text-text"
              }`}
            >
              {f.label}
              <span className={`ml-1.5 tabular-nums ${active ? "opacity-70" : ""}`}>{f.count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <aside className="order-last lg:order-none lg:col-start-2 lg:row-start-1">
          <div className="lg:sticky lg:top-6">
            <PlatformLinks />
          </div>
        </aside>

        <div className="cv-list min-w-0 lg:col-start-1 lg:row-start-1">
          <ul
            aria-label="Converted text styles"
            className="divide-y divide-border rounded-xl border border-border bg-surface"
          >
            {results.map(({ style, value }) => (
              <StyleRow
                key={style.id}
                style={style}
                value={value}
                selected={style.id === selectedId}
                copied={style.id === copiedId}
                onCopy={() => handleCopy(style, value)}
                zalgoIntensity={zalgoIntensity}
                onZalgoChange={setZalgoIntensity}
              />
            ))}
          </ul>

          {filter === "all" && limit < filtered.length && (
            <button
              type="button"
              onClick={() => setLimit((n) => n + PAGE_SIZE)}
              className="mt-3 w-full rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-text"
            >
              Show {Math.min(PAGE_SIZE, filtered.length - limit)} more styles
            </button>
          )}

          {filter === "all" && (
            <section aria-labelledby={randomHeadingId} className="mt-8">
              <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 id={randomHeadingId} className="text-base font-semibold text-text">
                    Random styles
                  </h2>
                  <p className="mt-0.5 text-xs text-muted">
                    Every letter gets a different style. Generate as many as you like.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setRandomStart((n) => n + randomCount);
                    setRandomCount(RANDOM_PAGE);
                  }}
                  className="shrink-0 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-text transition-colors hover:border-text/30 hover:bg-surface"
                >
                  Shuffle
                </button>
              </div>
              <ul
                aria-label="Random text styles"
                className="divide-y divide-border rounded-xl border border-border bg-surface"
              >
                {randomResults.map(({ style, value }) => (
                  <StyleRow
                    key={style.id}
                    style={style}
                    value={value}
                    selected={style.id === selectedId}
                    copied={style.id === copiedId}
                    onCopy={() => handleCopy(style, value)}
                    zalgoIntensity={zalgoIntensity}
                    onZalgoChange={setZalgoIntensity}
                  />
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setRandomCount((n) => n + RANDOM_PAGE)}
                className="mt-3 w-full rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-text"
              >
                🎲 Generate {RANDOM_PAGE} more
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

interface StyleRowProps {
  style: FontStyle;
  value: string;
  selected: boolean;
  copied: boolean;
  onCopy: () => void;
  zalgoIntensity: number;
  onZalgoChange: (value: number) => void;
}

function StyleRow({ style, value, selected, copied, onCopy, zalgoIntensity, onZalgoChange }: StyleRowProps) {
  const sliderId = useId();
  const tooLong = visibleLength(value) > DISCORD_NAME_LIMIT;

  return (
    <li
      className={`px-4 py-3 transition-colors first:rounded-t-xl last:rounded-b-xl sm:px-5 ${
        selected ? "bg-surface-2 shadow-[inset_2px_0_0_var(--accent)]" : "hover:bg-surface-2/60"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted sm:w-36 sm:shrink-0">
            <span className="truncate">{style.name}</span>
            {tooLong && (
              <span title={`Over ${DISCORD_NAME_LIMIT} characters`} className="tabular-nums">
                · {DISCORD_NAME_LIMIT}+
              </span>
            )}
          </div>
          {/* Mouse/touch shortcut; keyboard users use the Copy button. */}
          <p
            onClick={onCopy}
            title="Click to copy"
            className="fancy-text mt-0.5 min-w-0 flex-1 cursor-pointer text-lg leading-snug text-text sm:mt-0"
          >
            {value}
          </p>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className={`shrink-0 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
            copied
              ? "border-transparent text-success"
              : "border-border text-text hover:border-text/30 hover:bg-surface"
          }`}
        >
          {copied ? "Copied" : "Copy"}
          <span className="sr-only"> {style.name} text</span>
        </button>
      </div>

      {style.id === "zalgo" && (
        <div className="mt-2 flex items-center gap-3 text-xs sm:pl-40">
          <label htmlFor={sliderId} className="shrink-0 text-muted">
            Intensity
          </label>
          <input
            id={sliderId}
            type="range"
            min={ZALGO_MIN}
            max={ZALGO_MAX}
            value={zalgoIntensity}
            onChange={(e) => onZalgoChange(Number(e.target.value))}
            className="w-full max-w-48 accent-[var(--accent-solid)]"
          />
          <span className="w-5 text-right text-muted tabular-nums">{zalgoIntensity}</span>
        </div>
      )}
    </li>
  );
}
