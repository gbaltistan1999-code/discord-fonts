"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { symbolCategories } from "@/content/discord-symbols-data";
import { useStoredState } from "@/lib/useStoredState";
import { useCopy } from "./ToastProvider";

const FAVORITES_KEY = "discord-symbols:favorites";
const MAX_FAVORITES = 60;
const NO_FAVORITES: readonly string[] = [];
const parseFavorites = (value: unknown): readonly string[] =>
  Array.isArray(value)
    ? value.filter((v): v is string => typeof v === "string" && v.length <= 8).slice(0, MAX_FAVORITES)
    : NO_FAVORITES;

const symbolButtonClass =
  "flex min-h-11 min-w-11 items-center justify-center rounded-lg border px-2 text-xl text-text transition-colors";

/**
 * Searchable symbol grid. Every category renders on the server with its own H3, so the full library is in
 * the HTML; search and filters only hide sections on the client.
 */
export function SymbolLibrary() {
  const id = useId();
  const copy = useCopy();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [editing, setEditing] = useState(false);
  const [favorites, setFavorites] = useStoredState(FAVORITES_KEY, NO_FAVORITES, parseFavorites);

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      symbolCategories
        .filter((c) => filter === "all" || c.id === filter)
        .map((c) => {
          if (!q || `${c.label} ${c.heading} ${c.keywords}`.toLowerCase().includes(q)) return c;
          return { ...c, symbols: c.symbols.filter((s) => s.includes(query.trim())) };
        })
        .filter((c) => c.symbols.length > 0),
    [filter, q, query],
  );

  // Latest list, so quick taps in a row build on each other instead of on a stale render.
  const latest = useRef(favorites);
  useEffect(() => {
    latest.current = favorites;
  }, [favorites]);

  function toggleFavorite(symbol: string) {
    const current = latest.current;
    const next = current.includes(symbol)
      ? current.filter((s) => s !== symbol)
      : [...current, symbol].slice(-MAX_FAVORITES);
    latest.current = next;
    setFavorites(next);
  }

  function handleSymbol(symbol: string) {
    if (editing) toggleFavorite(symbol);
    else copy(symbol, symbol);
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor={`${id}-search`} className="sr-only">
          Search symbols
        </label>
        <input
          id={`${id}-search`}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search symbols (star, heart, arrow, ︱)"
          autoComplete="off"
          className="block min-h-12 w-full flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-base text-text shadow-sm outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15"
        />
        <button
          type="button"
          aria-pressed={editing}
          onClick={() => setEditing(!editing)}
          className={`min-h-12 shrink-0 rounded-xl border px-4 text-sm font-semibold transition-colors ${
            editing
              ? "border-accent bg-accent-soft text-text"
              : "border-border bg-surface text-text hover:border-text/30"
          }`}
        >
          {editing ? "✓ Done editing" : "☆ Edit favorites"}
        </button>
      </div>

      <div role="group" aria-label="Symbol categories" className="mt-3 flex flex-wrap gap-1.5">
        {[{ id: "all", label: "All" }, ...symbolCategories].map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
            className={`min-h-11 rounded-full border px-3.5 text-sm font-medium transition-colors ${
              filter === c.id
                ? "border-transparent bg-accent-solid text-on-accent"
                : "border-border bg-surface text-muted hover:text-text"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <section aria-labelledby={`${id}-favorites`} className="mt-5 rounded-2xl border border-border bg-surface p-4">
        <h3 id={`${id}-favorites`} className="text-sm font-semibold text-text">
          ★ Your favorites
        </h3>
        <div className="mt-2 flex min-h-11 flex-wrap items-center gap-1.5">
          {favorites.length === 0 ? (
            <p className="text-sm text-muted">
              Tap <strong>☆ Edit favorites</strong>, then tap symbols to save them here on this device.
            </p>
          ) : (
            favorites.map((symbol) => (
              <button
                key={symbol}
                type="button"
                onClick={() => (editing ? toggleFavorite(symbol) : copy(symbol, symbol))}
                aria-label={editing ? `Remove ${symbol} from favorites` : `Copy ${symbol}`}
                className={`${symbolButtonClass} border-border bg-surface-2 hover:border-text/30`}
              >
                {symbol}
              </button>
            ))
          )}
        </div>
      </section>

      {editing && (
        <p className="mt-3 text-sm text-muted" role="status">
          Editing favorites: tap a symbol to add or remove it. Tap “Done editing” to go back to copying.
        </p>
      )}

      <div className="mt-6 space-y-8">
        {visible.length === 0 && <p className="text-muted">No symbols match “{query}”. Try another word.</p>}
        {visible.map((category) => (
          <section key={category.id} aria-labelledby={`${id}-${category.id}`}>
            <h3 id={`${id}-${category.id}`} className="text-lg font-bold tracking-tight text-text">
              {category.heading}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {category.symbols.map((symbol) => {
                const favorite = favorites.includes(symbol);
                return (
                  <button
                    key={symbol}
                    type="button"
                    onClick={() => handleSymbol(symbol)}
                    aria-label={editing ? `${favorite ? "Remove" : "Add"} ${symbol} favorite` : `Copy ${symbol}`}
                    aria-pressed={editing ? favorite : undefined}
                    className={`${symbolButtonClass} ${
                      editing && favorite
                        ? "border-accent bg-accent-soft ring-2 ring-accent/30"
                        : "border-border bg-surface hover:border-accent hover:bg-accent-soft"
                    }`}
                  >
                    {symbol}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
