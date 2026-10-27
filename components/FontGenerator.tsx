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
  visibleLength,
  type FontCategory,
  type FontStyle,
} from "@/lib/fonts";
import { DiscordPreview } from "./DiscordPreview";
import { useCopy } from "./ToastProvider";

const SAMPLE_TEXT = "Your Text Here";
const PAGE_SIZE = 24;
const MAX_INPUT = 1000;

const USERNAME_NOTE =
  "Discord's unique @username only allows lowercase a–z, 0–9, _ and . (2–32 characters), so fancy fonts go in your display name, server nickname (32 max) or About Me instead.";

type Filter = "featured" | "all" | FontCategory;

export interface FeaturedStyles {
  label: string;
  ids: readonly string[];
}

interface FontGeneratorProps {
  /** Pre-filter the tool, e.g. on a style landing page. */
  featured?: FeaturedStyles;
  /** Server-rendered extra content for the sidebar (e.g. an ad slot). */
  sidebar?: React.ReactNode;
}

export function FontGenerator({ featured, sidebar }: FontGeneratorProps) {
  const inputId = useId();
  const hintId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const copy = useCopy();

  const [text, setText] = useState("");
  const [filter, setFilter] = useState<Filter>(featured ? "featured" : "all");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [zalgoIntensity, setZalgoIntensity] = useState(ZALGO_DEFAULT);
  const [selectedId, setSelectedId] = useState(featured?.ids[0] ?? fontStyles[0]!.id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Keep typing responsive: results re-render at lower priority than the input.
  const deferredText = useDeferredValue(text);
  const source = deferredText.trim() ? deferredText : SAMPLE_TEXT;

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

  const selected = getFontStyle(selectedId) ?? fontStyles[0]!;
  const previewText = selected.transform(source, { zalgoIntensity });

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
      <div className="sticky top-[env(safe-area-inset-top)] z-20 -mx-4 border-b border-border bg-bg/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-bg/80 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
        <label htmlFor={inputId} className="mb-2 block text-sm font-semibold">
          Type or paste your text
        </label>
        <div className="relative">
          <textarea
            ref={inputRef}
            id={inputId}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your name or message to see it in every Discord font…"
            rows={2}
            maxLength={MAX_INPUT}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-describedby={hintId}
            className="block max-h-40 min-h-[3.25rem] w-full resize-y rounded-xl border-2 border-border bg-surface px-4 py-3 pr-24 text-lg text-text shadow-sm transition-colors outline-none placeholder:text-muted/80 focus:border-accent sm:min-h-[4.5rem] sm:text-xl"
          />
          {text && (
            <button
              type="button"
              onClick={() => {
                setText("");
                inputRef.current?.focus();
              }}
              className="absolute top-2.5 right-2.5 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm font-medium text-text hover:border-accent"
            >
              Clear<span className="sr-only"> text</span>
            </button>
          )}
        </div>
        <p id={hintId} className="mt-1.5 flex justify-between gap-4 text-xs text-muted">
          <span>Results update as you type. Click any style to copy it.</span>
          <span className="shrink-0 tabular-nums">{visibleLength(text)} chars</span>
        </p>
      </div>

      <div
        role="group"
        aria-label="Filter font styles by category"
        className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => {
              setFilter(f.id);
              setLimit(PAGE_SIZE);
            }}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              filter === f.id
                ? "border-accent-solid bg-accent-solid text-on-accent"
                : "border-border bg-surface text-text hover:border-accent"
            }`}
          >
            {f.label} <span className="opacity-75">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <aside aria-label="Preview" className="order-first lg:order-none lg:col-start-2 lg:row-start-1">
          <div className="space-y-6 lg:sticky lg:top-6">
            <DiscordPreview styleName={selected.name} text={previewText} />
            {sidebar}
          </div>
        </aside>

        <div className="cv-list min-w-0 lg:col-start-1 lg:row-start-1">
          <ul aria-label="Converted text styles" className="space-y-2.5">
            {results.map(({ style, value }, index) => (
              <StyleRow
                key={style.id}
                tooltipUp={index >= 2}
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
              className="mt-4 w-full rounded-xl border border-border bg-surface px-4 py-3 font-semibold text-text transition-colors hover:border-accent"
            >
              Load more fonts ({filtered.length - limit} more)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface StyleRowProps {
  style: FontStyle;
  /** Open the warning tooltip upwards so it stays inside the contained list. */
  tooltipUp: boolean;
  value: string;
  selected: boolean;
  copied: boolean;
  onCopy: () => void;
  zalgoIntensity: number;
  onZalgoChange: (value: number) => void;
}

function StyleRow({
  style,
  tooltipUp,
  value,
  selected,
  copied,
  onCopy,
  zalgoIntensity,
  onZalgoChange,
}: StyleRowProps) {
  const sliderId = useId();
  const tooLong = visibleLength(value) > DISCORD_NAME_LIMIT;

  return (
    <li
      className={`rounded-xl border bg-surface p-3 transition-colors sm:p-4 ${
        selected ? "border-accent" : "border-border hover:border-accent/60"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-muted">{style.name}</span>
        {style.warning && <WarningBadge text={style.warning} up={tooltipUp} />}
        {tooLong && (
          <span className="rounded-full bg-surface-2 px-2 py-0.5 font-medium text-muted">
            Over {DISCORD_NAME_LIMIT} chars
          </span>
        )}
      </div>

      <div className="mt-1.5 flex items-center gap-3">
        {/* Mouse/touch shortcut; keyboard users use the Copy button. */}
        <p
          onClick={onCopy}
          title="Click to copy"
          className="fancy-text min-w-0 flex-1 cursor-pointer text-lg leading-snug text-text sm:text-xl"
        >
          {value}
        </p>
        <button
          type="button"
          onClick={onCopy}
          className={`shrink-0 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
            copied
              ? "bg-success/15 text-success"
              : "bg-accent-soft text-accent hover:bg-accent-solid hover:text-on-accent"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
          <span className="sr-only"> {style.name} text</span>
        </button>
      </div>

      {style.id === "zalgo" && (
        <div className="mt-3 flex items-center gap-3 text-sm">
          <label htmlFor={sliderId} className="shrink-0 font-medium text-muted">
            Intensity
          </label>
          <input
            id={sliderId}
            type="range"
            min={ZALGO_MIN}
            max={ZALGO_MAX}
            value={zalgoIntensity}
            onChange={(e) => onZalgoChange(Number(e.target.value))}
            className="w-full max-w-xs accent-[var(--accent-solid)]"
          />
          <span className="w-6 text-right tabular-nums text-muted">{zalgoIntensity}</span>
        </div>
      )}
    </li>
  );
}

function WarningBadge({ text, up }: { text: string; up: boolean }) {
  const tipId = useId();
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-describedby={tipId}
        onKeyDown={(e) => e.key === "Escape" && e.currentTarget.blur()}
        className="inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 font-medium text-warning"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5" fill="currentColor">
          <path d="M10 2 1 18h18L10 2Zm0 5 .1 0c.5 0 .9.4.9.9l-.3 4.3a.7.7 0 0 1-1.4 0L9 7.9c0-.5.4-.9 1-.9Zm0 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>
        Limited support
      </button>
      <span
        role="tooltip"
        id={tipId}
        className={`invisible absolute left-0 z-30 ${up ? "bottom-full mb-2" : "top-full mt-2"} w-72 max-w-[80vw] rounded-lg border border-border bg-surface-2 p-3 text-xs leading-relaxed font-normal text-text opacity-0 shadow-xl transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`}
      >
        {text} {USERNAME_NOTE}
      </span>
    </span>
  );
}
