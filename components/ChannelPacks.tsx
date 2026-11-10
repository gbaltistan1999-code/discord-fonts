"use client";

import { packStringsEn, type ChannelPack, type PackStrings } from "@/content/discord-symbols-data";
import { useCopy } from "./ToastProvider";

/** Ready-made channel name sets: copy one name, or the whole pack on separate lines. */
export function ChannelPacks({
  packs,
  strings: t = packStringsEn,
}: {
  packs: readonly ChannelPack[];
  strings?: PackStrings;
}) {
  const copy = useCopy();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {packs.map((pack) => (
        <section key={pack.title} className="rounded-2xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-text">{pack.title}</h3>
            <button
              type="button"
              onClick={() => copy(pack.names.join("\n"), t.packLabel.replace("{title}", pack.title))}
              className="min-h-11 shrink-0 rounded-lg border border-border px-3 text-sm font-medium text-text transition-colors hover:border-text/30 hover:bg-surface-2"
            >
              {t.copyAll}
              <span className="sr-only"> {t.copyAllSr.replace("{title}", pack.title)}</span>
            </button>
          </div>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {pack.names.map((name) => (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => copy(name, name)}
                  className="min-h-11 rounded-lg bg-surface-2 px-3 text-left text-[15px] text-text transition-colors hover:bg-accent-soft"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
