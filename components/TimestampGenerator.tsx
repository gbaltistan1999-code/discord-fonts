"use client";

import { useEffect, useId, useMemo, useState, useSyncExternalStore } from "react";
import {
  checkRange,
  combinedTag,
  discordTag,
  formatPreview,
  isValidTimeZone,
  listTimeZones,
  modernZoneName,
  offsetLabel,
  parseDateTime,
  parseUnixInput,
  timestampStyles,
  toInputValues,
  toUnixSeconds,
  zonedFields,
  zonedToUtc,
  type TimestampIssue,
  type ZonedStatus,
} from "@/lib/discord-timestamp";
import { timestampStrings } from "@/content/i18n/strings/timestamp";
import type { TimestampStrings } from "@/content/i18n/types";
import { fill } from "@/lib/i18n";
import { useStoredState } from "@/lib/useStoredState";
import { TimeZonePicker } from "./TimeZonePicker";
import { useCopy } from "./ToastProvider";

// Client-only values. The server and the hydration render see the fallbacks,
// so the markup always matches; the real values arrive right after.
const noSubscribe = () => () => {};

let pageLoadedAt: number | undefined;
/** The minute the page opened, used as the starting date and time. */
const getLoadTime = () => (pageLoadedAt ??= Math.floor(Date.now() / 60_000) * 60_000);
const getLocalZone = () => modernZoneName(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC");

// One shared one-second clock, so the Relative preview counts live.
let clock = 0;
const clockListeners = new Set<() => void>();
let clockTimer: ReturnType<typeof setInterval> | undefined;
function subscribeClock(listener: () => void) {
  clockListeners.add(listener);
  if (clockListeners.size === 1) {
    clockTimer = setInterval(() => {
      clock = Date.now();
      clockListeners.forEach((notify) => notify());
    }, 1000);
  }
  return () => {
    clockListeners.delete(listener);
    if (clockListeners.size === 0) clearInterval(clockTimer);
  };
}
const getClock = () => (clock ||= Date.now());

const parseZone = (value: unknown) => (typeof value === "string" && isValidTimeZone(value) ? value : "");

const OFFSETS = [
  { key: "plus15Min", ms: 15 * 60_000 },
  { key: "plus1Hour", ms: 3_600_000 },
  { key: "plus1Day", ms: 86_400_000 },
  { key: "plus1Week", ms: 7 * 86_400_000 },
] as const;

interface InputValues {
  date: string;
  time: string;
}

type Result =
  | { ok: false; code: TimestampIssue }
  | { ok: true; ms: number; seconds: number; status: ZonedStatus; warning?: TimestampIssue; year?: number };

const fieldClass =
  "h-12 w-full rounded-xl border border-border bg-surface px-3.5 text-base text-text shadow-sm outline-none focus:border-accent focus:ring-4 focus:ring-accent/15";
const labelClass = "mb-1.5 block text-sm font-medium text-text";
const chipClass =
  "inline-flex h-11 items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-text transition-colors hover:border-text/30 hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-50";
const copyClass =
  "shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-text transition-colors hover:border-text/30 hover:bg-surface-2";

export function TimestampGenerator({
  hero,
  strings: t = timestampStrings.en,
}: {
  hero?: React.ReactNode;
  /** Interface text in the page's language (English by default). */
  strings?: TimestampStrings;
}) {
  const ids = {
    date: useId(),
    time: useId(),
    zone: useId(),
    zoneHint: useId(),
    seconds: useId(),
    unix: useId(),
    unixHint: useId(),
    message: useId(),
    results: useId(),
  };
  const copy = useCopy();

  const hydrated = useSyncExternalStore(
    noSubscribe,
    () => true,
    () => false,
  );
  const loadTime = useSyncExternalStore(noSubscribe, getLoadTime, () => null);
  const localZone = useSyncExternalStore(noSubscribe, getLocalZone, () => "UTC");
  const now = useSyncExternalStore(subscribeClock, getClock, () => 0);

  const [savedZone, setSavedZone] = useStoredState("df:timezone", "", parseZone);
  const zone = savedZone || localZone;

  const [withSeconds, setWithSeconds] = useState(false);
  // null = follow the page-load time; set once the visitor picks something.
  const [value, setValue] = useState<InputValues | null>(null);
  // What Reset returns to: the last value picked directly (not via the +offset buttons).
  const [base, setBase] = useState<InputValues | null>(null);
  const [unixText, setUnixText] = useState("");
  const [unixMessage, setUnixMessage] = useState<{ error: boolean; text: string } | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const inputs: InputValues =
    value ??
    (loadTime === null ? { date: "", time: "" } : toInputValues(zonedFields(loadTime, zone), withSeconds));

  const result = useMemo((): Result | null => {
    if (!inputs.date || !inputs.time) return null;
    const parsed = parseDateTime(inputs.date, inputs.time);
    if (!parsed.ok) return { ok: false, code: parsed.code };
    const { ms, status } = zonedToUtc(parsed.value, zone);
    const range = checkRange(ms);
    if (range.error) return { ok: false, code: range.code ?? "outOfRange" };
    return {
      ok: true,
      ms,
      seconds: toUnixSeconds(ms),
      status,
      warning: range.warning ? range.code : undefined,
      year: range.year,
    };
  }, [inputs.date, inputs.time, zone]);

  const ok = result?.ok ? result : null;
  const ms = ok ? ok.ms : null;
  const seconds = ok ? ok.seconds : null;

  const zones = useMemo(() => (hydrated ? listTimeZones() : []), [hydrated]);

  useEffect(() => {
    if (!copiedKey) return;
    const timer = setTimeout(() => setCopiedKey(null), 1500);
    return () => clearTimeout(timer);
  }, [copiedKey]);

  function pick(next: InputValues) {
    setValue(next);
    setBase(next);
  }

  function setFromInstant(instant: number, asBase: boolean, seconds = withSeconds) {
    const next = toInputValues(zonedFields(instant, zone), seconds);
    setValue(next);
    if (asBase) setBase(next);
  }

  async function handleCopy(key: string, text: string, label: string) {
    if (await copy(text, label)) setCopiedKey(key);
  }

  function loadUnix() {
    const parsed = parseUnixInput(unixText);
    if (!parsed.ok) {
      setUnixMessage({ error: true, text: t.issues[parsed.code] });
      return;
    }
    const { seconds: pasted, unit } = parsed.value;
    const needsSeconds = withSeconds || pasted % 60 !== 0;
    setWithSeconds(needsSeconds);
    setFromInstant(pasted * 1000, true, needsSeconds);
    setUnixMessage({
      error: false,
      text: fill(unit === "milliseconds" ? t.unixReadAsMs : t.unixLoaded, { seconds: pasted }),
    });
  }

  // Explain daylight-saving adjustments, so a moved time never surprises anyone.
  let notice: string | null = null;
  if (ok) {
    const shown = toInputValues(zonedFields(ok.ms, zone), withSeconds).time;
    if (ok.status === "skipped") {
      notice = fill(t.skipped, { time: inputs.time, zone, shown });
    } else if (ok.status === "repeated") {
      notice = fill(t.repeated, { time: inputs.time, zone, offset: offsetLabel(ok.ms, zone) });
    }
  }
  const error = result && !result.ok ? t.issues[result.code] : null;
  const warning = ok?.warning ? fill(t.issues[ok.warning], { year: ok.year ?? "" }) : undefined;

  const preview = (code: (typeof timestampStyles)[number]["code"]) =>
    ms === null || !hydrated ? "…" : formatPreview(ms, code, { now });

  return (
    <div>
      {/* Inputs sit in the hero panel under the page heading. */}
      <div className="-mx-4 border-y border-accent/20 bg-linear-to-br from-accent-soft via-surface to-accent-soft px-4 pt-6 pb-7 sm:mx-0 sm:rounded-3xl sm:border sm:px-10 sm:pt-8 sm:pb-9">
        {hero}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">
          <div>
            <label htmlFor={ids.date} className={labelClass}>
              {t.date}
            </label>
            <input
              id={ids.date}
              type="date"
              value={inputs.date}
              onChange={(e) => pick({ ...inputs, date: e.target.value })}
              aria-describedby={ids.message}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={ids.time} className={labelClass}>
              {t.time}
            </label>
            <input
              id={ids.time}
              type="time"
              step={withSeconds ? 1 : 60}
              value={inputs.time}
              onChange={(e) => pick({ ...inputs, time: e.target.value })}
              aria-describedby={ids.message}
              className={fieldClass}
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor={ids.zone} className={labelClass}>
              {t.timeZone}
            </label>
            <TimeZonePicker
              id={ids.zone}
              describedBy={ids.zoneHint}
              value={hydrated ? zone : ""}
              onChange={setSavedZone}
              zones={zones}
              instant={ms ?? loadTime ?? 0}
              localZone={localZone}
              className={fieldClass}
              strings={t.zonePicker}
            />
            <p id={ids.zoneHint} className="mt-1.5 flex flex-wrap gap-x-3 px-1 text-xs text-muted">
              <span>{hydrated && ms !== null ? `${zone} · ${offsetLabel(ms, zone)}` : t.zoneHint}</span>
              {hydrated && zone !== localZone && (
                <button
                  type="button"
                  onClick={() => setSavedZone("")}
                  className="font-medium text-accent underline underline-offset-2"
                >
                  {fill(t.useMyZone, { zone: localZone })}
                </button>
              )}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setFromInstant(withSeconds ? Date.now() : Math.floor(Date.now() / 60_000) * 60_000, true)
            }
            className="inline-flex h-11 items-center rounded-full bg-accent-solid px-5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            {t.now}
          </button>
          {OFFSETS.map((offset) => (
            <button
              key={offset.key}
              type="button"
              disabled={ms === null}
              onClick={() => ms !== null && setFromInstant(ms + offset.ms, false)}
              className={chipClass}
            >
              {t[offset.key]}
            </button>
          ))}
          <button
            type="button"
            disabled={value === base}
            onClick={() => setValue(base)}
            className={chipClass}
          >
            {t.reset}
          </button>
          <label
            htmlFor={ids.seconds}
            className="ml-1 inline-flex h-11 items-center gap-2 text-sm font-medium text-text"
          >
            <input
              id={ids.seconds}
              type="checkbox"
              checked={withSeconds}
              onChange={(e) => {
                setWithSeconds(e.target.checked);
                if (ms !== null && value) setFromInstant(ms, value === base, e.target.checked);
              }}
              className="size-4 accent-[var(--accent-solid)]"
            />
            {t.includeSeconds}
          </label>
        </div>

        <div id={ids.message} aria-live="polite" className="text-sm">
          {error && <p className="mt-3 font-medium text-rose-700 dark:text-rose-300">{error}</p>}
          {notice && <p className="mt-3 text-text">{notice}</p>}
          {warning && <p className="mt-3 text-warning">{warning}</p>}
        </div>

        <form
          className="mt-5 border-t border-border/70 pt-5"
          onSubmit={(e) => {
            e.preventDefault();
            loadUnix();
          }}
        >
          <label htmlFor={ids.unix} className={labelClass}>
            {t.unixLabel} <span className="font-normal text-muted">{t.unixUnits}</span>
          </label>
          <div className="flex gap-2">
            <input
              id={ids.unix}
              type="text"
              inputMode="numeric"
              value={unixText}
              onChange={(e) => {
                setUnixText(e.target.value);
                setUnixMessage(null);
              }}
              placeholder={t.unixPlaceholder}
              autoComplete="off"
              aria-describedby={ids.unixHint}
              aria-invalid={unixMessage?.error ?? false}
              className={`${fieldClass} font-mono`}
            />
            <button type="submit" className={`${chipClass} h-12 shrink-0`}>
              {t.load}
            </button>
          </div>
          <p id={ids.unixHint} aria-live="polite" className="mt-1.5 px-1 text-xs">
            {unixMessage ? (
              <span className={unixMessage.error ? "text-rose-700 dark:text-rose-300" : "text-muted"}>
                {unixMessage.text}
              </span>
            ) : (
              <span className="text-muted">{t.unixHint}</span>
            )}
          </p>
        </form>
      </div>

      {/* Results */}
      <section aria-labelledby={ids.results} className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id={ids.results} className="text-xl font-semibold tracking-tight">
              {t.resultsTitle}
            </h2>
            <p className="mt-1 text-sm text-muted">{t.resultsNote}</p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-sm">
            <span className="text-xs text-muted">{t.unixTime}</span>
            <code className="font-mono text-base font-semibold text-text tabular-nums">{seconds ?? "…"}</code>
            <button
              type="button"
              disabled={seconds === null}
              onClick={() => seconds !== null && handleCopy("unix", String(seconds), t.unixCopyLabel)}
              className={copyClass}
            >
              {copiedKey === "unix" ? t.copied : t.copy}
              <span className="sr-only"> {t.unixCopyLabel}</span>
            </button>
          </div>
        </div>

        <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          {timestampStyles.map((style) => {
            const code = seconds === null ? "…" : discordTag(seconds, style.code);
            const { name, use } = t.styles[style.code];
            const copyLabel = fill(t.codeCopyLabel, { name });
            return (
              <li
                key={style.code}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1.5 px-4 py-3 sm:grid-cols-[11rem_minmax(0,1fr)_minmax(0,13rem)_auto] sm:gap-x-5 sm:px-5"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-text">{name}</p>
                  <p className="text-xs text-muted">{use}</p>
                </div>
                <div className="sm:order-4">
                  <button
                    type="button"
                    disabled={seconds === null}
                    onClick={() => seconds !== null && handleCopy(style.code, code, copyLabel)}
                    className={copyClass}
                  >
                    {copiedKey === style.code ? t.copied : t.copy}
                    <span className="sr-only"> {copyLabel}</span>
                  </button>
                </div>
                <p className="col-span-2 min-w-0 text-lg break-words text-text sm:order-2 sm:col-span-1">
                  {preview(style.code)}
                </p>
                <code className="col-span-2 min-w-0 truncate font-mono text-sm text-muted sm:order-3 sm:col-span-1">
                  {code}
                </code>
              </li>
            );
          })}
        </ul>

        {/* Generic dark chat mockup (not Discord's interface) showing the combined pattern. */}
        <div className="mt-6 grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
          <div className="rounded-2xl bg-zinc-900 p-4 text-zinc-100 shadow-sm sm:p-5">
            <p className="text-[11px] font-semibold tracking-wide text-zinc-400 uppercase">
              {t.messagePreview}
            </p>
            <div className="mt-3 flex gap-3">
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-solid font-semibold text-on-accent"
              >
                {t.sampleAuthor.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-semibold text-zinc-50">{t.sampleAuthor}</span>
                  <span className="text-xs text-zinc-400">{t.today}</span>
                </p>
                <p className="mt-0.5 leading-relaxed">
                  {t.eventStarts}{" "}
                  <strong className="rounded bg-zinc-700/70 px-1 py-0.5">{preview("F")}</strong> (
                  <span className="rounded bg-zinc-700/70 px-1 py-0.5">{preview("R")}</span>)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5">
            <div>
              <p className="text-sm font-semibold text-text">{t.combinedTitle}</p>
              <p className="mt-0.5 text-xs text-muted">{t.combinedDescription}</p>
              <code className="mt-3 block font-mono text-sm break-all text-muted">
                {seconds === null ? "…" : combinedTag(seconds)}
              </code>
            </div>
            <button
              type="button"
              disabled={seconds === null}
              onClick={() =>
                seconds !== null && handleCopy("combined", combinedTag(seconds), t.combinedLabel)
              }
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent-solid px-5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {copiedKey === "combined" ? t.copied : t.copyCombined}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
