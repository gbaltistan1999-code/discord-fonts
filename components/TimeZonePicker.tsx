"use client";

import { useId, useMemo, useRef, useState } from "react";
import { timestampStrings } from "@/content/i18n/strings/timestamp";
import type { TimestampStrings } from "@/content/i18n/types";
import { offsetLabel } from "@/lib/discord-timestamp";
import { fill } from "@/lib/i18n";

interface TimeZonePickerProps {
  id: string;
  /** Id of the hint text under the field. */
  describedBy?: string;
  value: string;
  onChange: (zone: string) => void;
  /** Every IANA zone to offer (empty until the page has loaded in the browser). */
  zones: readonly string[];
  /** Instant used for the UTC offsets shown next to each zone. */
  instant: number;
  localZone: string;
  className: string;
  /** Interface text in the page's language (English by default). */
  strings?: TimestampStrings["zonePicker"];
}

/** "America/New_York" → "America / New York" for display; the value keeps the IANA name. */
const pretty = (zone: string) => zone.replace(/_/g, " ").replace(/\//g, " / ");

/**
 * Searchable list of every time zone (ARIA combobox with a listbox popup).
 * Opening it shows all zones; typing filters by region, city or offset, so
 * "karachi", "new york" and "utc+5" all work.
 */
export function TimeZonePicker({
  id,
  describedBy,
  value,
  onChange,
  zones,
  instant,
  localZone,
  className,
  strings: t = timestampStrings.en.zonePicker,
}: TimeZonePickerProps) {
  const listId = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  // Offsets only change at DST boundaries, so recompute at most once an hour.
  const hour = Math.floor(instant / 3_600_000);
  const entries = useMemo(() => {
    const at = hour * 3_600_000;
    const pinned = [localZone, "UTC"].filter((z, i, all) => zones.includes(z) && all.indexOf(z) === i);
    return [...pinned, ...zones.filter((z) => !pinned.includes(z))].map((zone) => {
      const offset = offsetLabel(at, zone);
      // Also match "utc-5", "utc+5:30" and "gmt+5" style searches.
      const short = offset
        .replace("−", "-")
        .replace(/([+-])0?(\d+):00$/, "$1$2")
        .replace(/([+-])0?(\d+:\d+)$/, "$1$2");
      const haystack = `${zone} ${pretty(zone)} ${offset} ${offset.replace("−", "-")} ${short} ${short.replace("UTC", "GMT")}`;
      return { zone, offset, haystack: haystack.toLowerCase().replace(/_/g, " ") };
    });
  }, [zones, localZone, hour]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().replace(/_/g, " ").split(/\s+/).filter(Boolean);
    return terms.length ? entries.filter((e) => terms.every((t) => e.haystack.includes(t))) : entries;
  }, [entries, query]);

  const optionId = (index: number) => `${listId}-${index}`;

  function show(index: number) {
    setActive(index);
    document.getElementById(optionId(index))?.scrollIntoView({ block: "nearest" });
  }

  function openList() {
    setOpen(true);
    setQuery("");
    const current = entries.findIndex((e) => e.zone === value);
    // Wait for the list to render before scrolling to the current zone.
    requestAnimationFrame(() => show(Math.max(current, 0)));
  }

  function choose(zone: string) {
    onChange(zone);
    setOpen(false);
    setQuery("");
  }

  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
          setQuery("");
        }
      }}
    >
      <input
        id={id}
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && results.length ? optionId(active) : undefined}
        aria-describedby={describedBy}
        value={open ? query : pretty(value)}
        placeholder={open ? fill(t.search, { count: zones.length }) : ""}
        onFocus={openList}
        onClick={() => !open && openList()}
        onChange={(e) => {
          setOpen(true);
          setQuery(e.target.value);
          setActive(0);
          listRef.current?.scrollTo({ top: 0 });
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            if (!open) return openList();
            const step = e.key === "ArrowDown" ? 1 : -1;
            show(Math.min(Math.max(active + step, 0), results.length - 1));
          } else if (e.key === "Enter" && open) {
            e.preventDefault();
            const pick = results[active];
            if (pick) choose(pick.zone);
          } else if (e.key === "Escape" && open) {
            e.preventDefault();
            setOpen(false);
            setQuery("");
          }
        }}
        autoComplete="off"
        spellCheck={false}
        className={`${className} pr-10`}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`pointer-events-none absolute top-1/2 right-3.5 size-5 -translate-y-1/2 text-muted transition-transform ${
          open ? "rotate-180" : ""
        }`}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-label={t.listLabel}
        hidden={!open}
        className="absolute inset-x-0 top-full z-30 mt-1.5 max-h-72 overflow-y-auto rounded-xl border border-border bg-surface p-1 shadow-lg"
      >
        {results.length ? (
          results.map((entry, index) => (
            <li
              key={entry.zone}
              id={optionId(index)}
              role="option"
              aria-selected={entry.zone === value}
              // Keep focus in the input so the click isn't lost to a blur.
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(entry.zone)}
              onMouseMove={() => active !== index && setActive(index)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm ${
                index === active ? "bg-surface-2" : ""
              } ${entry.zone === value ? "font-semibold text-accent" : "text-text"}`}
            >
              <span className="min-w-0 truncate">
                {pretty(entry.zone)}
                {entry.zone === localZone && (
                  <span className="ml-1.5 text-xs font-normal text-muted">{t.yours}</span>
                )}
              </span>
              <span className="shrink-0 text-xs text-muted tabular-nums">{entry.offset}</span>
            </li>
          ))
        ) : (
          <li
            role="option"
            aria-selected={false}
            aria-disabled="true"
            className="px-3 py-2 text-sm text-muted"
          >
            {fill(t.noMatch, { query })}
          </li>
        )}
      </ul>
    </div>
  );
}
