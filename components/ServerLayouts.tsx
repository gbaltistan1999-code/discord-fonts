"use client";

import { useCopy } from "./ToastProvider";

export interface ServerLayout {
  id: string;
  name: string;
  intro: string;
  categories: readonly { name: string; channels: readonly string[] }[];
  roles: readonly string[];
  colors: readonly { hex: string; name: string }[];
}

const chip =
  "min-h-10 rounded-lg bg-surface-2 px-3 text-left text-[15px] text-text transition-colors hover:bg-accent-soft";

/** The whole layout as indented text, for planning or sharing. */
function layoutText(layout: ServerLayout): string {
  return layout.categories.map((c) => [c.name, ...c.channels.map((ch) => `  ${ch}`)].join("\n")).join("\n\n");
}

/** A wrapping row of tap-to-copy chips. Plain divs, so article list styles don't apply. */
export function CopyChipRow({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const copy = useCopy();
  return (
    <div role="list" className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <div role="listitem" key={item}>
          <button type="button" onClick={() => copy(item, item)} className={chip}>
            {item}
          </button>
        </div>
      ))}
    </div>
  );
}

/** Multi-line text with a Copy button, e.g. a welcome message template. */
export function CopyBlock({ text, label }: { text: string; label: string }) {
  const copy = useCopy();
  return (
    <div className="rounded-xl border border-border bg-surface-2">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
        <span className="text-sm font-semibold text-text">{label}</span>
        <button
          type="button"
          onClick={() => copy(text, label)}
          className="min-h-9 rounded-lg bg-accent-solid px-3.5 text-sm font-semibold text-on-accent hover:opacity-90"
        >
          Copy
        </button>
      </div>
      <div className="overflow-x-auto px-4 py-3 text-[15px] leading-relaxed whitespace-pre text-text">
        {text}
      </div>
    </div>
  );
}

/** One server layout: tap any category, channel or role to copy it; tap a color to copy its hex code. */
export function ServerLayoutCard({ layout }: { layout: ServerLayout }) {
  const copy = useCopy();
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm text-muted">Tap any name to copy it</span>
        <button
          type="button"
          onClick={() => copy(layoutText(layout), `${layout.name} layout`)}
          className="min-h-9 rounded-lg border border-border px-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
        >
          Copy whole layout
        </button>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {layout.categories.map((category) => (
          <div key={category.name} className="rounded-xl border border-border p-2.5">
            <button
              type="button"
              onClick={() => copy(category.name, category.name)}
              className="w-full rounded-lg px-2 py-1.5 text-left text-sm font-bold tracking-wide text-text uppercase transition-colors hover:bg-accent-soft"
              title="Category name"
            >
              {category.name}
            </button>
            <div className="mt-1 flex flex-col gap-1">
              {category.channels.map((channel) => (
                <button
                  key={channel}
                  type="button"
                  onClick={() => copy(channel, channel)}
                  className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-left text-[15px] break-words text-text transition-colors hover:bg-accent-soft"
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 mb-0 text-sm font-semibold text-text">Role ideas</p>
      <CopyChipRow items={layout.roles} className="mt-2" />

      <p className="mt-4 mb-0 text-sm font-semibold text-text">Role colors</p>
      <div role="list" className="mt-2 flex flex-wrap gap-2">
        {layout.colors.map((c) => (
          <div role="listitem" key={c.hex}>
            <button
              type="button"
              onClick={() => copy(c.hex, `${c.hex} (${c.name})`)}
              className="flex min-h-10 items-center gap-2 rounded-lg border border-border bg-surface px-2.5 text-sm text-text transition-colors hover:border-accent"
            >
              <span
                aria-hidden="true"
                className="size-5 rounded-md border border-black/15"
                style={{ background: c.hex }}
              />
              <span className="font-mono">{c.hex}</span>
              <span className="text-muted">{c.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
