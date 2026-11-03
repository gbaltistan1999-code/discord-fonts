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
import { en } from "@/content/i18n/strings/en";
import { simpleLast, stylishFirst } from "@/content/i18n/style-order";
import type { GeneratorStrings } from "@/content/i18n/types";
import { fill } from "@/lib/i18n";
import { useStoredState } from "@/lib/useStoredState";
import { PlatformLinks, type PlatformLinksProps } from "./PlatformLinks";
import { useCopy } from "./ToastProvider";

const PAGE_SIZE = 24;
const MAX_INPUT = 1000;
const RANDOM_PAGE = 12;
const RECENT_LIMIT = 24;

function makeRandomStyle(seed: number, index: number, nameTemplate: string): FontStyle {
  return {
    id: `random-mix-${seed}`,
    name: fill(nameTemplate, { n: index + 1 }),
    categories: [],
    transform: (text) => randomStyle(text, seed),
  };
}

/** Lowercase without accents, so "Gótica" matches "gotica". */
function normalizeSearch(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

type Filter = "featured" | "all" | FontCategory;
type Scope = "all" | "favorites" | "recent";

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

export interface FeaturedStyles {
  label: string;
  ids: readonly string[];
}

interface FontGeneratorProps {
  /** Pre-filter the tool, e.g. on a style landing page. */
  featured?: FeaturedStyles;
  /** Example text shown before the visitor types anything. */
  sampleText?: string;
  /** Style ids listed first, in this order; then the stylish defaults, the rest, and plain effects last. */
  order?: readonly string[];
  /** Show the random styles after this many results instead of below the whole list. */
  randomAfter?: number;
  /** Mark styles that often show as boxes on older devices. */
  showSupport?: boolean;
  /** "cards" is the homepage grid; "list" puts the input in a hero panel and shows one row per style. */
  variant?: Variant;
  /** Heading content shown above the input inside the hero panel (list variant only). */
  hero?: React.ReactNode;
  /** Show the selected style as a name in a mock chat message and member list. */
  namePreview?: boolean;
  /** Interface text in the page's language (English by default). */
  strings?: GeneratorStrings;
  /** Sidebar links in the page's language. */
  platformLinks?: PlatformLinksProps;
}

type Variant = "cards" | "list";

const toStyles = (ids: readonly string[]) => ids.map(getFontStyle).filter((s): s is FontStyle => Boolean(s));

/** The page's own ids, then the stylish defaults, then everything else, with plain effects at the end. */
function orderStyles(order: readonly string[] = []): readonly FontStyle[] {
  const firstIds = [...order, ...stylishFirst.filter((id) => !order.includes(id))];
  const lastIds = simpleLast.filter((id) => !firstIds.includes(id));
  const placed = new Set([...firstIds, ...lastIds]);
  return [
    ...toStyles(firstIds),
    ...fontStyles.filter((style) => !placed.has(style.id)),
    ...toStyles(lastIds),
  ];
}

export function FontGenerator({
  featured,
  strings: t = en.generator,
  sampleText = t.sampleText,
  order,
  randomAfter,
  showSupport = false,
  variant = "cards",
  hero,
  namePreview = false,
  platformLinks,
}: FontGeneratorProps) {
  const isList = variant === "list";
  const inputId = useId();
  const hintId = useId();
  const searchId = useId();
  const randomHeadingId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const copy = useCopy();

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(featured ? "featured" : "all");
  const [scope, setScope] = useState<Scope>("all");
  const [favorites, setFavorites] = useStoredState("df:favorites", NO_IDS, parseStyleIds);
  const [recent, setRecent] = useStoredState("df:recent", NO_IDS, parseStyleIds);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [zalgoIntensity, setZalgoIntensity] = useState(ZALGO_DEFAULT);
  const orderedStyles = useMemo(() => orderStyles(order), [order]);
  const [selectedId, setSelectedId] = useState(featured?.ids[0] ?? orderedStyles[0]!.id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  // Seeds start at a fixed value so server and client render the same first batch.
  const [randomStart, setRandomStart] = useState(1);
  const [randomCount, setRandomCount] = useState(RANDOM_PAGE);

  // Keep typing responsive: results re-render at lower priority than the input.
  const deferredText = useDeferredValue(text);
  const source = deferredText.trim() ? deferredText : sampleText;
  const deferredQuery = useDeferredValue(query).trim();
  const search = normalizeSearch(deferredQuery);

  const featuredStyles = useMemo(
    () => (featured ? featured.ids.map(getFontStyle).filter((s): s is FontStyle => Boolean(s)) : []),
    [featured],
  );

  const filtered = useMemo(() => {
    if (filter === "featured") return featuredStyles;
    if (filter === "all") return orderedStyles;
    return orderedStyles.filter((style) => style.categories.includes(filter));
  }, [filter, featuredStyles, orderedStyles]);

  const scoped = useMemo(() => {
    let list = filtered;
    if (scope === "favorites") list = list.filter((style) => favorites.includes(style.id));
    if (scope === "recent") {
      const inFilter = new Map(list.map((style) => [style.id, style]));
      list = recent.map((id) => inFilter.get(id)).filter((s): s is FontStyle => Boolean(s));
    }
    return list;
  }, [filtered, scope, favorites, recent]);

  const nameMatches = useMemo(
    () =>
      search
        ? scoped.filter(
            (style) =>
              // Match the English name too, so "bold" still finds "Negrita".
              normalizeSearch(style.name).includes(search) ||
              normalizeSearch(styleName(style, t)).includes(search) ||
              style.id.includes(search) ||
              // Category ids are English; the labels match in the page's language ("negrita", "太字").
              style.categories.some(
                (category) =>
                  category.includes(search) || normalizeSearch(t.categories[category]).includes(search),
              ),
          )
        : scoped,
    [scoped, search, t],
  );

  // Visitors often type the text they want converted into the search box. When it matches no
  // style name, show that text in every style instead of an empty list.
  const searchAsText = Boolean(search) && nameMatches.length === 0 && scoped.length > 0;
  const matched = searchAsText ? scoped : nameMatches;
  const shownText = searchAsText ? deferredQuery : source;

  // Paging and random styles only apply to the full list.
  const browsingAll = filter === "all" && scope === "all" && (!search || searchAsText);

  const results = useMemo(() => {
    const visible = browsingAll ? matched.slice(0, limit) : matched;
    return visible.map((style) => ({ style, value: style.transform(shownText, { zalgoIntensity }) }));
  }, [browsingAll, matched, limit, shownText, zalgoIntensity]);

  const randomStyles = useMemo(
    () => Array.from({ length: randomCount }, (_, i) => makeRandomStyle(randomStart + i, i, t.randomName)),
    [randomStart, randomCount, t.randomName],
  );

  const randomResults = useMemo(
    () => (browsingAll ? randomStyles.map((style) => ({ style, value: style.transform(shownText) })) : []),
    [browsingAll, randomStyles, shownText],
  );

  useEffect(() => {
    if (!copiedId) return;
    const timer = setTimeout(() => setCopiedId(null), 1500);
    return () => clearTimeout(timer);
  }, [copiedId]);

  async function handleCopy(style: FontStyle, value: string) {
    setSelectedId(style.id);
    if (!(await copy(value, styleName(style, t)))) return;
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
    { id: "all", label: t.all, count: fontStyles.length },
    ...fontCategories.map((c) => ({
      id: c.id,
      label: t.categories[c.id],
      count: fontStyles.filter((s) => s.categories.includes(c.id)).length,
    })),
  ];

  const scopes: { id: Scope; label: string; icon?: React.ReactNode; badge?: number }[] = [
    { id: "all", label: t.scopeAll, icon: <GridIcon /> },
    { id: "favorites", label: t.favorites, icon: <HeartIcon filled={false} />, badge: favorites.length },
    { id: "recent", label: t.recent, icon: <HistoryIcon /> },
  ];

  const listClass = isList
    ? "divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
    : "grid gap-3 sm:grid-cols-2";
  // Random styles can sit between the first few results and the rest, only while browsing the full list.
  const splitAt = browsingAll && randomAfter !== undefined ? randomAfter : undefined;

  // The selected style may be a random one, which only exists in the current random batch.
  const selectedResult =
    [...results, ...randomResults].find((r) => r.style.id === selectedId) ??
    (() => {
      const style = getFontStyle(selectedId) ?? orderedStyles[0]!;
      return { style, value: style.transform(shownText, { zalgoIntensity }) };
    })();

  const renderRow = ({ style, value }: { style: FontStyle; value: string }, canFavorite: boolean) => (
    <StyleRow
      key={style.id}
      variant={variant}
      style={style}
      value={value}
      selected={style.id === selectedId}
      copied={style.id === copiedId}
      onCopy={() => handleCopy(style, value)}
      favorite={canFavorite ? favorites.includes(style.id) : undefined}
      onToggleFavorite={canFavorite ? () => toggleFavorite(style.id) : undefined}
      limitedSupport={showSupport && Boolean(style.limitedSupport)}
      zalgoIntensity={zalgoIntensity}
      onZalgoChange={setZalgoIntensity}
      strings={t}
    />
  );

  const randomSection = browsingAll && (
    <section aria-labelledby={randomHeadingId} className={splitAt === undefined ? "mt-8" : "my-8"}>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id={randomHeadingId} className="text-base font-semibold text-text">
            {t.randomTitle}
          </h2>
          <p className="mt-0.5 text-xs text-muted">{t.randomDescription}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setRandomStart((n) => n + randomCount);
            setRandomCount(RANDOM_PAGE);
          }}
          className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-text transition-colors hover:border-text/30 hover:bg-surface"
        >
          {t.shuffle}
        </button>
      </div>
      <ul aria-label={t.randomLabel} className={listClass}>
        {randomResults.map((result) => renderRow(result, false))}
      </ul>
      <button
        type="button"
        onClick={() => setRandomCount((n) => n + RANDOM_PAGE)}
        className="mt-3 w-full rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-text"
      >
        🎲 {fill(t.generateMore, { count: RANDOM_PAGE })}
      </button>
    </section>
  );

  return (
    <div className="relative">
      {/* Cards: the input sticks to the top on small screens while scrolling results.
          List: the input sits inside a tinted hero panel under the page heading. */}
      <div
        className={
          isList
            ? "-mx-4 border-y border-accent/20 bg-linear-to-br from-accent-soft via-surface to-accent-soft px-4 pt-6 pb-7 sm:mx-0 sm:rounded-3xl sm:border sm:px-10 sm:pt-8 sm:pb-9"
            : "sticky top-[env(safe-area-inset-top)] z-20 -mx-4 border-b border-border bg-bg/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-bg/85 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none"
        }
      >
        {isList && hero}
        <label htmlFor={inputId} className="sr-only">
          {t.inputLabel}
        </label>
        <div className="relative">
          <textarea
            ref={inputRef}
            id={inputId}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.placeholder}
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
              {t.clear}
              <span className="sr-only">{t.clearSr}</span>
            </button>
          )}
        </div>
        <p id={hintId} className="mt-2 flex justify-between gap-4 px-1 text-xs text-muted">
          <span>{t.hint}</span>
          <span className="shrink-0 tabular-nums">{fill(t.chars, { count: visibleLength(text) })}</span>
        </p>
      </div>

      {/* Filters, search and saved styles */}
      <div
        className={isList ? "mt-8" : "mt-6 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5"}
      >
        <div
          role="group"
          aria-label={t.filterGroup}
          className={
            isList
              ? "-mx-4 flex gap-1 overflow-x-auto border-b border-border px-4 [scrollbar-width:none] sm:mx-0 sm:px-0"
              : "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
          }
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
                className={
                  isList
                    ? `-mb-px shrink-0 border-b-2 px-3 py-3 text-sm font-semibold transition-colors ${
                        active ? "border-accent text-accent" : "border-transparent text-muted hover:text-text"
                      }`
                    : // Two-column boxes on phones (an odd last one spans both), pills from sm up.
                      `flex min-w-0 items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-colors last:odd:col-span-2 sm:inline-block sm:shrink-0 sm:rounded-full sm:py-2 ${
                        active ? `${FILTER_COLORS[f.id].active} shadow-sm` : FILTER_COLORS[f.id].idle
                      }`
                }
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
              {t.searchLabel}
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
              placeholder={t.searchPlaceholder}
              autoComplete="off"
              className="h-12 w-full rounded-xl border border-border bg-bg pr-4 pl-11 text-base text-text outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {/* Three equal boxes on phones, pills from sm up. */}
            <div
              role="group"
              aria-label={t.scopeGroup}
              className="grid grid-cols-3 gap-2 sm:flex sm:shrink-0"
            >
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
                    className={`flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border px-1.5 py-2.5 text-center text-xs leading-tight font-semibold transition-colors sm:h-12 sm:shrink-0 sm:flex-row sm:gap-2 sm:rounded-full sm:px-4 sm:py-0 sm:text-sm ${
                      active
                        ? "border-accent/50 bg-accent-soft text-accent"
                        : "border-border text-text hover:border-text/30 hover:bg-surface-2"
                    }`}
                  >
                    {s.icon}
                    <span className="inline-flex items-center gap-1.5 sm:gap-2">
                      {s.label}
                      {s.badge !== undefined && (
                        <span className="grid min-w-5 place-items-center rounded-full bg-surface-2 px-1.5 text-xs tabular-nums text-text sm:min-w-6">
                          {s.badge}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
            <p aria-live="polite" className="pl-1 text-sm sm:shrink-0 font-medium text-muted tabular-nums">
              {fill(matched.length === 1 ? t.countOne : t.countMany, { count: matched.length })}
            </p>
          </div>
        </div>
      </div>

      {namePreview && (
        <NamePreview
          name={selectedResult.value}
          styleName={styleName(selectedResult.style, t)}
          initial={shownText.trim().charAt(0).toUpperCase() || "?"}
          copied={copiedId === selectedResult.style.id}
          onCopy={() => handleCopy(selectedResult.style, selectedResult.value)}
          strings={t}
        />
      )}

      <div className={isList ? "mt-6" : "mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]"}>
        {!isList && (
          <aside className="order-last lg:order-none lg:col-start-2 lg:row-start-1">
            <div className="lg:sticky lg:top-6">
              <PlatformLinks {...platformLinks} />
            </div>
          </aside>
        )}

        <div className="cv-list min-w-0 lg:col-start-1 lg:row-start-1">
          {searchAsText && (
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-text">
              <p>{fill(t.noMatch, { query: deferredQuery })}</p>
              <button
                type="button"
                onClick={() => {
                  setText(deferredQuery);
                  setQuery("");
                  inputRef.current?.focus();
                  inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="shrink-0 rounded-full bg-accent-solid px-4 py-1.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
              >
                {t.moveToTextBox}
              </button>
            </div>
          )}

          {results.length > 0 ? (
            <>
              <ul aria-label={t.resultsLabel} className={listClass}>
                {results.slice(0, splitAt).map((result) => renderRow(result, true))}
              </ul>
              {splitAt !== undefined && (
                <>
                  {randomSection}
                  <ul aria-label={t.moreResultsLabel} className={listClass}>
                    {results.slice(splitAt).map((result) => renderRow(result, true))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className="rounded-2xl border border-dashed border-border bg-surface px-5 py-10 text-center text-sm text-muted">
              {scope === "favorites" ? t.emptyFavorites : scope === "recent" ? t.emptyRecent : t.emptyGroup}
            </p>
          )}

          {browsingAll && limit < matched.length && (
            <button
              type="button"
              onClick={() => setLimit((n) => n + PAGE_SIZE)}
              className="mt-3 w-full rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-text"
            >
              {fill(t.showMore, { count: Math.min(PAGE_SIZE, matched.length - limit) })}
            </button>
          )}

          {splitAt === undefined && randomSection}
        </div>
      </div>
    </div>
  );
}

interface StyleRowProps {
  variant: Variant;
  style: FontStyle;
  value: string;
  selected: boolean;
  copied: boolean;
  onCopy: () => void;
  /** Undefined hides the heart (random styles can't be saved). */
  favorite?: boolean;
  onToggleFavorite?: () => void;
  limitedSupport: boolean;
  zalgoIntensity: number;
  onZalgoChange: (value: number) => void;
  strings: GeneratorStrings;
}

/** A style's name in the page's language. */
function styleName(style: FontStyle, t: GeneratorStrings): string {
  return t.styleNames?.[style.id] ?? style.name;
}

function StyleRow({
  strings: t,
  variant,
  style,
  value,
  selected,
  copied,
  onCopy,
  favorite,
  onToggleFavorite,
  limitedSupport,
  zalgoIntensity,
  onZalgoChange,
}: StyleRowProps) {
  const sliderId = useId();
  const tooLong = visibleLength(value) > DISCORD_NAME_LIMIT;
  const isList = variant === "list";

  const label = (
    <div className={`flex min-w-0 items-center gap-1.5 text-xs text-muted ${isList ? "flex-wrap" : ""}`}>
      <span className="truncate">{styleName(style, t)}</span>
      {limitedSupport && (
        <span
          title={t.limitedSupportTitle}
          className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 font-semibold text-amber-800 dark:bg-amber-500/15 dark:text-amber-300"
        >
          {t.limitedSupport}
        </span>
      )}
      {tooLong && (
        <span title={fill(t.overLimit, { limit: DISCORD_NAME_LIMIT })} className="shrink-0 tabular-nums">
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
          aria-label={fill(favorite ? t.removeFavorite : t.saveFavorite, { name: styleName(style, t) })}
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
        {copied ? t.copied : t.copy}
        <span className="sr-only"> {fill(t.copySr, { name: styleName(style, t) })}</span>
      </button>
    </div>
  );

  // Mouse/touch shortcut; keyboard users use the Copy button.
  const sample = (
    <p
      onClick={onCopy}
      title={t.clickToCopy}
      className={`fancy-text min-w-0 flex-1 cursor-pointer text-xl leading-snug break-words text-text ${
        isList ? "" : "mt-2"
      }`}
    >
      {value}
    </p>
  );

  const slider = style.id === "zalgo" && (
    <div className="mt-2 flex items-center gap-3 text-xs">
      <label htmlFor={sliderId} className="shrink-0 text-muted">
        {t.intensity}
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

  // List rows: name and actions on top with the text below on phones; name | text | actions from sm up.
  if (isList) {
    return (
      <li
        className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1.5 px-4 py-3 transition-colors sm:grid-cols-[11rem_minmax(0,1fr)_auto] sm:gap-x-5 sm:px-5 ${
          selected ? "bg-accent-soft" : "hover:bg-surface-2"
        }`}
      >
        <div className="min-w-0 sm:order-1">{label}</div>
        <div className="sm:order-3">{actions}</div>
        <div className="col-span-2 min-w-0 sm:order-2 sm:col-span-1">{sample}</div>
        {slider && <div className="col-span-full sm:order-4">{slider}</div>}
      </li>
    );
  }

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

/** The selected style shown the way a display name appears in chat and in a member list. */
function NamePreview({
  name,
  styleName,
  initial,
  copied,
  onCopy,
  strings: t,
}: {
  name: string;
  styleName: string;
  initial: string;
  copied: boolean;
  onCopy: () => void;
  strings: GeneratorStrings;
}) {
  const headingId = useId();
  const length = visibleLength(name);
  const tooLong = length > DISCORD_NAME_LIMIT;
  const p = t.namePreview;
  const [showingBefore, showingAfter = ""] = p.showing.split("{name}");

  const avatar = (size: string) => (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full bg-accent-solid font-semibold text-on-accent ${size}`}
    >
      {initial}
    </span>
  );

  return (
    <section
      aria-labelledby={headingId}
      className="mt-4 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 id={headingId} className="text-base font-semibold text-text">
            {p.title}
          </h2>
          <p className="mt-0.5 text-xs text-muted">
            {showingBefore}
            <span className="font-medium text-text">{styleName}</span>
            {showingAfter}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span
            className={`text-sm font-medium tabular-nums ${tooLong ? "text-rose-600 dark:text-rose-400" : "text-muted"}`}
          >
            {length}/{DISCORD_NAME_LIMIT}
          </span>
          <button
            type="button"
            onClick={onCopy}
            className="rounded-full bg-accent-solid px-4 py-1.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            {copied ? t.copied : p.copyName}
          </button>
        </div>
      </div>

      {tooLong && (
        <p className="mt-3 text-sm text-rose-600 dark:text-rose-400">
          {fill(p.tooLong, { limit: DISCORD_NAME_LIMIT })}
        </p>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="flex gap-3 rounded-xl bg-bg p-4">
          {avatar("size-10 text-base")}
          <div className="min-w-0">
            <p className="flex flex-wrap items-baseline gap-x-2">
              <span className="fancy-text font-semibold break-words text-accent">{name}</span>
              <span className="text-xs text-muted">{p.time}</span>
            </p>
            <p className="mt-0.5 text-sm text-text">{p.message}</p>
          </div>
        </div>
        <div className="rounded-xl bg-bg p-4">
          <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">{p.online}</p>
          <div className="mt-2.5 flex items-center gap-2.5">
            <span className="relative">
              {avatar("size-8 text-sm")}
              <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-bg bg-emerald-500" />
            </span>
            <span className="fancy-text truncate text-sm font-medium text-text">{name}</span>
          </div>
        </div>
      </div>
    </section>
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

function HistoryIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.5-6M3.5 4v4h4" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}
