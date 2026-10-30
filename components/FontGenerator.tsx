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
import { useStoredState } from "@/lib/useStoredState";
import { PlatformLinks } from "./PlatformLinks";
import { useCopy } from "./ToastProvider";

const SAMPLE_TEXT = "Your Text Here";
const PAGE_SIZE = 24;
const MAX_INPUT = 1000;
const RANDOM_PAGE = 12;
const RECENT_LIMIT = 24;

function makeRandomStyle(seed: number, index: number): FontStyle {
  return {
    id: `random-mix-${seed}`,
    name: `Random ${index + 1}`,
    categories: [],
    transform: (text) => randomStyle(text, seed),
  };
}

type Filter = "featured" | "all" | FontCategory;
type Scope = "all" | "favorites" | "recent";
type View = "list" | "grid";

/** Each filter tab gets its own colour: a soft tint when idle, solid when selected (white text stays above 4.5:1). */
const FILTER_COLORS: Record<Filter, { idle: string; active: string }> = {
  featured: {
    idle: "bg-violet-50 text-violet-700 hover:bg-violet-100 dark:bg-violet-500/15 dark:text-violet-300 dark:hover:bg-violet-500/25",
    active: "bg-linear-to-r from-violet-600 to-fuchsia-600 text-white",
  },
  all: {
    idle: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25",
    active: "bg-indigo-600 text-white",
  },
  bold: {
    idle: "bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-500/15 dark:text-rose-300 dark:hover:bg-rose-500/25",
    active: "bg-rose-600 text-white",
  },
  cursive: {
    idle: "bg-pink-50 text-pink-700 hover:bg-pink-100 dark:bg-pink-500/15 dark:text-pink-300 dark:hover:bg-pink-500/25",
    active: "bg-pink-700 text-white",
  },
  gothic: {
    idle: "bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-500/15 dark:text-purple-300 dark:hover:bg-purple-500/25",
    active: "bg-purple-700 text-white",
  },
  decorative: {
    idle: "bg-amber-50 text-amber-800 hover:bg-amber-100 dark:bg-amber-500/15 dark:text-amber-300 dark:hover:bg-amber-500/25",
    active: "bg-amber-700 text-white",
  },
  aesthetic: {
    idle: "bg-teal-50 text-teal-700 hover:bg-teal-100 dark:bg-teal-500/15 dark:text-teal-300 dark:hover:bg-teal-500/25",
    active: "bg-teal-700 text-white",
  },
  glitch: {
    idle: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25",
    active: "bg-emerald-700 text-white",
  },
};

// Per-visitor conveniences only; the tool works the same when storage is unavailable.
const NO_IDS: string[] = [];

/** Keep only ids of styles that still exist, so removed styles drop out of saved lists. */
function parseStyleIds(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((id): id is string => typeof id === "string" && Boolean(getFontStyle(id)))
    : NO_IDS;
}

const parseView = (value: unknown): View => (value === "grid" ? "grid" : "list");

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
  const searchId = useId();
  const resultsHeadingId = useId();
  const randomHeadingId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const copy = useCopy();

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(featured ? "featured" : "all");
  const [scope, setScope] = useState<Scope>("all");
  const [view, setView] = useStoredState<View>("df:view", "list", parseView);
  const [favorites, setFavorites] = useStoredState("df:favorites", NO_IDS, parseStyleIds);
  const [recent, setRecent] = useStoredState("df:recent", NO_IDS, parseStyleIds);
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
  const search = useDeferredValue(query).trim().toLowerCase();

  const featuredStyles = useMemo(
    () => (featured ? featured.ids.map(getFontStyle).filter((s): s is FontStyle => Boolean(s)) : []),
    [featured],
  );

  const filtered = useMemo(() => {
    if (filter === "featured") return featuredStyles;
    if (filter === "all") return fontStyles;
    return fontStyles.filter((style) => style.categories.includes(filter));
  }, [filter, featuredStyles]);

  const matched = useMemo(() => {
    let list = filtered;
    if (scope === "favorites") list = list.filter((style) => favorites.includes(style.id));
    if (scope === "recent") {
      const inFilter = new Map(list.map((style) => [style.id, style]));
      list = recent.map((id) => inFilter.get(id)).filter((s): s is FontStyle => Boolean(s));
    }
    if (search) {
      list = list.filter(
        (style) =>
          style.name.toLowerCase().includes(search) ||
          style.id.includes(search) ||
          style.categories.some((category) => category.includes(search)),
      );
    }
    return list;
  }, [filtered, scope, favorites, recent, search]);

  // Paging and random styles only apply to the full, unsearched list.
  const browsingAll = filter === "all" && scope === "all" && !search;

  const results = useMemo(() => {
    const visible = browsingAll ? matched.slice(0, limit) : matched;
    return visible.map((style) => ({ style, value: style.transform(source, { zalgoIntensity }) }));
  }, [browsingAll, matched, limit, source, zalgoIntensity]);

  const randomStyles = useMemo(
    () => Array.from({ length: randomCount }, (_, i) => makeRandomStyle(randomStart + i, i)),
    [randomStart, randomCount],
  );

  const randomResults = useMemo(
    () => (browsingAll ? randomStyles.map((style) => ({ style, value: style.transform(source) })) : []),
    [browsingAll, randomStyles, source],
  );

  useEffect(() => {
    if (!copiedId) return;
    const timer = setTimeout(() => setCopiedId(null), 1500);
    return () => clearTimeout(timer);
  }, [copiedId]);

  async function handleCopy(style: FontStyle, value: string) {
    setSelectedId(style.id);
    if (!(await copy(value, style.name))) return;
    setCopiedId(style.id);
    if (getFontStyle(style.id)) {
      setRecent([style.id, ...recent.filter((id) => id !== style.id)].slice(0, RECENT_LIMIT));
    }
  }

  function toggleFavorite(id: string) {
    setFavorites(favorites.includes(id) ? favorites.filter((f) => f !== id) : [id, ...favorites]);
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

  const scopes: { id: Scope; label: string; icon?: React.ReactNode; badge?: number }[] = [
    { id: "all", label: "All styles" },
    { id: "favorites", label: "Favorites", icon: <HeartIcon filled={false} />, badge: favorites.length },
    { id: "recent", label: "Recent", icon: <HistoryIcon /> },
  ];

  const listClass =
    view === "grid"
      ? "grid gap-3 sm:grid-cols-2"
      : "divide-y divide-border rounded-2xl border border-border bg-surface shadow-sm";

  const renderRow = ({ style, value }: { style: FontStyle; value: string }, canFavorite: boolean) => (
    <StyleRow
      key={style.id}
      style={style}
      value={value}
      view={view}
      selected={style.id === selectedId}
      copied={style.id === copiedId}
      onCopy={() => handleCopy(style, value)}
      favorite={canFavorite ? favorites.includes(style.id) : undefined}
      onToggleFavorite={canFavorite ? () => toggleFavorite(style.id) : undefined}
      zalgoIntensity={zalgoIntensity}
      onZalgoChange={setZalgoIntensity}
    />
  );

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

      {/* Results header */}
      <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-4 py-4 shadow-sm sm:px-5">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-[0.7rem] font-bold tracking-[0.2em] text-accent uppercase">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Results
          </span>
          <h2 id={resultsHeadingId} className="mt-2 text-xl font-bold tracking-tight text-text sm:text-2xl">
            Choose a style and copy it.
          </h2>
        </div>
        <div
          role="group"
          aria-label="Results layout"
          className="flex shrink-0 gap-1 rounded-full border border-border bg-surface-2/60 p-1"
        >
          {(["list", "grid"] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={view === option}
              aria-label={option === "list" ? "List view" : "Grid view"}
              onClick={() => setView(option)}
              className={`grid size-10 place-items-center rounded-full transition-colors ${
                view === option
                  ? "bg-accent-soft text-accent ring-1 ring-accent/50"
                  : "text-muted hover:bg-surface hover:text-text"
              }`}
            >
              {option === "list" ? <ListIcon /> : <GridIcon />}
            </button>
          ))}
        </div>
      </div>

      {/* Filters, search and saved styles */}
      <div className="mt-3 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5">
        <div
          role="group"
          aria-label="Filter font styles by category"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
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
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active ? `${FILTER_COLORS[f.id].active} shadow-sm` : FILTER_COLORS[f.id].idle
                }`}
              >
                {f.label}
                <span className={`ml-1.5 tabular-nums ${active ? "opacity-80" : "opacity-70"}`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <label htmlFor={searchId} className="sr-only">
              Find a style by name
            </label>
            <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-muted">
              <SearchIcon />
            </span>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(PAGE_SIZE);
              }}
              placeholder="Find a style by name, e.g. bold or script"
              autoComplete="off"
              className="h-12 w-full rounded-xl border border-border bg-bg pr-4 pl-11 text-base text-text outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15"
            />
          </div>

          <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
            <div role="group" aria-label="Show styles" className="flex shrink-0 gap-2">
              {scopes.map((s) => {
                const active = scope === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setScope(s.id);
                      setLimit(PAGE_SIZE);
                    }}
                    className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${
                      active
                        ? "border-accent/50 bg-accent-soft text-accent"
                        : "border-border text-text hover:border-text/30 hover:bg-surface-2"
                    }`}
                  >
                    {s.icon}
                    {s.label}
                    {s.badge !== undefined && (
                      <span className="grid min-w-6 place-items-center rounded-full bg-surface-2 px-1.5 text-xs tabular-nums text-text">
                        {s.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <p aria-live="polite" className="shrink-0 pl-1 text-sm font-medium text-muted tabular-nums">
              {matched.length} {matched.length === 1 ? "style" : "styles"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <aside className="order-last lg:order-none lg:col-start-2 lg:row-start-1">
          <div className="lg:sticky lg:top-6">
            <PlatformLinks />
          </div>
        </aside>

        <div className="cv-list min-w-0 lg:col-start-1 lg:row-start-1">
          {results.length > 0 ? (
            <ul aria-labelledby={resultsHeadingId} className={listClass}>
              {results.map((result) => renderRow(result, true))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-surface px-5 py-10 text-center text-sm text-muted">
              {search ? (
                <>
                  <p>
                    No style is called “{query.trim()}”. This box finds styles by name, such as bold, script
                    or bubble.
                  </p>
                  {/* Visitors often type the text they want converted here, so offer to move it. */}
                  <button
                    type="button"
                    onClick={() => {
                      setText(query.trim());
                      setQuery("");
                      setScope("all");
                      inputRef.current?.focus();
                      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className="mt-4 rounded-full bg-accent-solid px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition-opacity hover:opacity-90"
                  >
                    Convert “{query.trim()}” instead
                  </button>
                </>
              ) : (
                <p>
                  {scope === "favorites"
                    ? "No favorites yet. Tap the heart on any style to save it here."
                    : scope === "recent"
                      ? "Styles you copy will show up here."
                      : "No styles in this group."}
                </p>
              )}
            </div>
          )}

          {browsingAll && limit < matched.length && (
            <button
              type="button"
              onClick={() => setLimit((n) => n + PAGE_SIZE)}
              className="mt-3 w-full rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-text"
            >
              Show {Math.min(PAGE_SIZE, matched.length - limit)} more styles
            </button>
          )}

          {browsingAll && (
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
                  className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-text transition-colors hover:border-text/30 hover:bg-surface"
                >
                  Shuffle
                </button>
              </div>
              <ul aria-label="Random text styles" className={listClass}>
                {randomResults.map((result) => renderRow(result, false))}
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
  view: View;
  selected: boolean;
  copied: boolean;
  onCopy: () => void;
  /** Undefined hides the heart (random styles can't be saved). */
  favorite?: boolean;
  onToggleFavorite?: () => void;
  zalgoIntensity: number;
  onZalgoChange: (value: number) => void;
}

function StyleRow({
  style,
  value,
  view,
  selected,
  copied,
  onCopy,
  favorite,
  onToggleFavorite,
  zalgoIntensity,
  onZalgoChange,
}: StyleRowProps) {
  const sliderId = useId();
  const tooLong = visibleLength(value) > DISCORD_NAME_LIMIT;
  const grid = view === "grid";

  const label = (
    <div className="flex min-w-0 items-center gap-1.5 text-xs text-muted sm:w-36 sm:shrink-0">
      <span className="truncate">{style.name}</span>
      {tooLong && (
        <span title={`Over ${DISCORD_NAME_LIMIT} characters`} className="shrink-0 tabular-nums">
          · {DISCORD_NAME_LIMIT}+
        </span>
      )}
    </div>
  );

  const actions = (
    <div className="flex shrink-0 items-center gap-1.5">
      {onToggleFavorite && (
        <button
          type="button"
          aria-pressed={favorite}
          aria-label={`${favorite ? "Remove" : "Save"} ${style.name} ${favorite ? "from" : "to"} favorites`}
          onClick={onToggleFavorite}
          className={`grid size-9 place-items-center rounded-full transition-colors ${
            favorite ? "text-rose-600 dark:text-rose-400" : "text-muted hover:bg-surface-2 hover:text-text"
          }`}
        >
          <HeartIcon filled={Boolean(favorite)} />
        </button>
      )}
      <button
        type="button"
        onClick={onCopy}
        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
          copied
            ? "border-transparent text-success"
            : "border-border text-text hover:border-text/30 hover:bg-surface-2"
        }`}
      >
        {copied ? "Copied" : "Copy"}
        <span className="sr-only"> {style.name} text</span>
      </button>
    </div>
  );

  // Mouse/touch shortcut; keyboard users use the Copy button.
  const sample = (
    <p
      onClick={onCopy}
      title="Click to copy"
      className={`fancy-text min-w-0 flex-1 cursor-pointer leading-snug text-text ${
        grid ? "mt-2 text-xl break-words" : "mt-0.5 text-lg sm:mt-0"
      }`}
    >
      {value}
    </p>
  );

  const slider = style.id === "zalgo" && (
    <div className={`mt-2 flex items-center gap-3 text-xs ${grid ? "" : "sm:pl-40"}`}>
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
  );

  if (grid) {
    return (
      <li
        className={`flex flex-col rounded-2xl border bg-surface p-4 shadow-sm transition-colors ${
          selected ? "border-accent ring-1 ring-accent/40" : "border-border hover:border-text/25"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          {label}
          {actions}
        </div>
        {sample}
        {slider}
      </li>
    );
  }

  return (
    <li
      className={`px-4 py-3 transition-colors first:rounded-t-2xl last:rounded-b-2xl sm:px-5 ${
        selected ? "bg-surface-2 shadow-[inset_2px_0_0_var(--accent)]" : "hover:bg-surface-2/60"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-4">
          {label}
          {sample}
        </div>
        {actions}
      </div>
      {slider}
    </li>
  );
}

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "size-5",
} as const;

function ListIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg {...iconProps}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg {...iconProps} fill={filled ? "currentColor" : "none"}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.5-6M3.5 4v4h4" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}
