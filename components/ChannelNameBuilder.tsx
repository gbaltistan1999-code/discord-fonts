"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  builderDividers,
  builderEmojis,
  builderLeft,
  builderRight,
  builderStringsEn,
  type BuilderStrings,
} from "@/content/discord-symbols-data";
import { useCopy } from "./ToastProvider";

type ChannelType = "text" | "voice" | "category";

/** Discord's channel name limit. */
const LIMIT = 100;
const CHANNEL_TYPES: readonly ChannelType[] = ["text", "voice", "category"];

/** Text channels are lowercase with hyphens for spaces, like Discord does on save. */
export function buildChannelName(
  type: ChannelType,
  parts: { left: string; emoji: string; divider: string; name: string; right: string },
  sample: string,
): string {
  const raw = parts.name.trim() || sample;
  const name = type === "text" ? raw.toLowerCase().replace(/\s+/g, "-") : raw;
  return `${parts.left}${parts.emoji}${parts.divider}${name}${parts.right}`;
}

const pick = <T,>(items: readonly T[]): T => items[Math.floor(Math.random() * items.length)]!;

function OptionRow({
  legend,
  options,
  value,
  onChange,
  none,
  big = false,
}: {
  legend: string;
  options: readonly string[];
  value: string;
  onChange: (next: string) => void;
  none: string;
  /** Emoji row: larger glyphs. */
  big?: boolean;
}) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-semibold text-text">{legend}</legend>
      <div className="flex flex-wrap gap-1.5">
        {["", ...options].map((option) => {
          const selected = option === value;
          return (
            <button
              key={option || "none"}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option)}
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-lg border px-2 transition-colors ${
                option ? (big ? "text-xl" : "text-lg") : "text-xs font-medium text-muted"
              } ${
                selected
                  ? "border-accent bg-accent-soft ring-2 ring-accent/30"
                  : "border-border bg-surface hover:border-text/30"
              }`}
            >
              {option || none}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function HashIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true" fill="currentColor">
      <path d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z" />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true" fill="currentColor">
      <path d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z" />
      <path d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3 shrink-0" aria-hidden="true" fill="currentColor">
      <path d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z" />
    </svg>
  );
}

/** Live channel name builder with a Discord-sidebar style preview. */
export function ChannelNameBuilder({ strings: t = builderStringsEn }: { strings?: BuilderStrings }) {
  const id = useId();
  const copy = useCopy();
  const [type, setType] = useState<ChannelType>("text");
  const [emoji, setEmoji] = useState<string>("📢");
  const [left, setLeft] = useState("");
  const [divider, setDivider] = useState<string>("︱");
  const [name, setName] = useState("");
  const [right, setRight] = useState("");
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const output = buildChannelName(type, { left, emoji, divider, name, right }, t.sample);
  const length = Array.from(output).length;
  const over = length > LIMIT;

  async function handleCopy() {
    const ok = await copy(output, t.copyLabel);
    if (!ok) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  }

  function randomize() {
    setEmoji(pick(builderEmojis));
    setLeft(Math.random() < 0.5 ? "" : pick(builderLeft));
    setDivider(pick(builderDividers));
    setRight(Math.random() < 0.7 ? "" : pick(builderRight));
  }

  const Icon = type === "voice" ? SpeakerIcon : HashIcon;

  return (
    <div className="grid gap-6 text-left lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
      <div className="space-y-5">
        <fieldset>
          <legend className="sr-only">{t.typeLegend}</legend>
          <div className="grid w-full grid-cols-3 rounded-xl border border-border bg-surface p-1 sm:inline-grid sm:w-auto">
            {CHANNEL_TYPES.map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={type === id}
                onClick={() => setType(id)}
                className={`min-h-11 rounded-lg px-2 text-sm leading-tight font-semibold transition-colors sm:px-4 ${
                  type === id ? "bg-accent-solid text-on-accent" : "text-muted hover:text-text"
                }`}
              >
                {t.types[id]}
              </button>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={`${id}-name`} className="mb-1.5 block text-sm font-semibold text-text">
            {t.nameLabel}
          </label>
          <input
            id={`${id}-name`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.sample}
            maxLength={120}
            autoComplete="off"
            spellCheck={false}
            className="block min-h-12 w-full rounded-xl border border-border bg-surface px-4 py-3 text-lg text-text shadow-sm transition-[border-color,box-shadow] outline-none placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15"
          />
          {type === "text" && (
            <p className="mt-1.5 text-xs text-muted">
              {t.textNote}
            </p>
          )}
        </div>

        <OptionRow legend={t.emoji} none={t.none} options={builderEmojis} value={emoji} onChange={setEmoji} big />
        <OptionRow legend={t.left} none={t.none} options={builderLeft} value={left} onChange={setLeft} />
        <OptionRow legend={t.divider} none={t.none} options={builderDividers} value={divider} onChange={setDivider} />
        <OptionRow legend={t.right} none={t.none} options={builderRight} value={right} onChange={setRight} />
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start">
        <p className="mb-1.5 text-sm font-semibold text-text">{t.preview}</p>
        <div
          aria-hidden="true"
          className="rounded-xl bg-[#f2f3f5] p-3 text-[#5c5e66] dark:bg-[#2b2d31] dark:text-[#949ba4]"
        >
          {type === "category" ? (
            <>
              <div className="flex items-center gap-1 px-1 py-1.5 text-xs font-semibold tracking-wide break-all uppercase">
                <ChevronIcon />
                <span>{output}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[15px] font-medium">
                <HashIcon />
                <span>{t.textNeighbour}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1 px-1 py-1.5 text-xs font-semibold tracking-wide uppercase">
                <ChevronIcon />
                <span>{type === "voice" ? t.voiceChannels : t.textChannels}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md bg-[#d7d9dc] px-2 py-1.5 text-[15px] font-medium text-[#060607] dark:bg-[#404249] dark:text-white">
                <Icon />
                <span className="min-w-0 break-all">{output}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[15px] font-medium">
                <Icon />
                <span>{type === "voice" ? t.voiceNeighbour : t.textNeighbour}</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-3 rounded-xl border border-border bg-surface px-4 py-3">
          <p className="sr-only" aria-live="polite">
            {output}
          </p>
          <p aria-hidden="true" className="text-lg break-all text-text">
            {output}
          </p>
          <p className={`mt-1 text-xs ${over ? "font-semibold text-red-600 dark:text-red-400" : "text-muted"}`}>
            {t.characters.replace("{count}", String(length)).replace("{limit}", String(LIMIT))}
            {over ? t.tooLong : ""}
          </p>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="min-h-12 flex-1 rounded-xl bg-accent-solid px-5 text-base font-bold text-on-accent transition-opacity hover:opacity-90"
          >
            {copied ? t.copied : t.copy}
          </button>
          <button
            type="button"
            onClick={randomize}
            className="min-h-12 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text transition-colors hover:border-text/30"
          >
            {t.randomize}
          </button>
        </div>
      </div>
    </div>
  );
}
