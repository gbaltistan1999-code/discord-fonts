/**
 * Discord timestamp helpers. Discord renders `<t:UNIX_SECONDS:STYLE>` in each
 * viewer's own time zone and language, so the only thing to get right here is
 * the instant: a wall-clock time in a chosen IANA zone → Unix seconds.
 *
 * Everything uses the built-in Date and Intl APIs, so it runs in the browser
 * with no date library.
 */

export type TimestampStyleCode = "t" | "T" | "d" | "D" | "f" | "F" | "s" | "S" | "R";

export interface TimestampStyle {
  code: TimestampStyleCode;
  name: string;
  /** Example output from Discord's developer docs (en-US, 24-hour clock in the docs). */
  docsExample: string;
  /** When the style is the right pick. */
  use: string;
}

/** The styles Discord documents, in the order of its docs table. `f` is the default. */
export const timestampStyles: readonly TimestampStyle[] = [
  { code: "t", name: "Short Time", docsExample: "16:20", use: "Daily reminders and times on the same day" },
  { code: "T", name: "Medium Time", docsExample: "16:20:30", use: "When the exact second matters" },
  { code: "d", name: "Short Date", docsExample: "20/04/2021", use: "Compact dates in lists and tables" },
  { code: "D", name: "Long Date", docsExample: "April 20, 2021", use: "Deadlines and dates without a time" },
  {
    code: "f",
    name: "Long Date, Short Time",
    docsExample: "April 20, 2021 at 16:20",
    use: "The default; good for most announcements",
  },
  {
    code: "F",
    name: "Full Date, Short Time",
    docsExample: "Tuesday, April 20, 2021 at 16:20",
    use: "Events, where the weekday helps",
  },
  {
    code: "s",
    name: "Short Date, Short Time",
    docsExample: "20/04/2021, 16:20",
    use: "Schedules and logs that need to stay short",
  },
  {
    code: "S",
    name: "Short Date, Medium Time",
    docsExample: "20/04/2021, 16:20:30",
    use: "Logs and records down to the second",
  },
  { code: "R", name: "Relative Time", docsExample: "4 years ago", use: "Countdowns and “how long ago”" },
];

/** The tag Discord turns into a timestamp. Without a style Discord uses `f`. */
export function discordTag(seconds: number, style?: TimestampStyleCode): string {
  return style ? `<t:${seconds}:${style}>` : `<t:${seconds}>`;
}

/** Common announcement pattern: full date plus a live countdown, e.g. `<t:X:F> (<t:X:R>)`. */
export function combinedTag(seconds: number): string {
  return `${discordTag(seconds, "F")} (${discordTag(seconds, "R")})`;
}

export function toUnixSeconds(ms: number): number {
  return Math.floor(ms / 1000);
}

// ---------------------------------------------------------------------------
// Wall-clock time in a time zone ⇄ UTC instant
// ---------------------------------------------------------------------------

export interface DateTimeFields {
  year: number;
  /** 1–12 */
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

/** Largest instant a JavaScript Date can hold (±100,000,000 days from 1970). */
const MAX_MS = 8.64e15;
const DAY_MS = 86_400_000;

const formatters = new Map<string, Intl.DateTimeFormat>();

function partsFormatter(timeZone: string): Intl.DateTimeFormat {
  let formatter = formatters.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      era: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    formatters.set(timeZone, formatter);
  }
  return formatter;
}

export function isValidTimeZone(timeZone: string): boolean {
  if (!timeZone) return false;
  try {
    partsFormatter(timeZone);
    return true;
  } catch {
    return false;
  }
}

/** UTC milliseconds for the fields read as if they were UTC. Handles years below 100 correctly. */
function fieldsAsUtc(f: DateTimeFields): number {
  const date = new Date(0);
  date.setUTCFullYear(f.year, f.month - 1, f.day);
  date.setUTCHours(f.hour, f.minute, f.second, 0);
  return date.getTime();
}

/** The wall-clock fields an instant shows in a time zone. */
export function zonedFields(ms: number, timeZone: string): DateTimeFields {
  const parts: Record<string, string> = {};
  for (const part of partsFormatter(timeZone).formatToParts(new Date(ms))) parts[part.type] = part.value;
  const year = Number(parts.year);
  return {
    // "BC" years count down from 1 BC = year 0.
    year: parts.era === "BC" || parts.era === "B" ? 1 - year : year,
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour) % 24,
    minute: Number(parts.minute),
    second: Number(parts.second),
  };
}

/** The zone's UTC offset in ms at an instant (positive east of Greenwich). */
export function zoneOffset(ms: number, timeZone: string): number {
  const whole = Math.floor(ms / 1000) * 1000;
  return fieldsAsUtc(zonedFields(whole, timeZone)) - whole;
}

export type ZonedStatus =
  /** The time exists once. */
  | "ok"
  /** The clock skipped this time (DST starts); moved forward by the gap. */
  | "skipped"
  /** The clock showed this time twice (DST ends); the earlier one is used. */
  | "repeated";

/**
 * The UTC instant for a wall-clock time in an IANA time zone. Daylight saving
 * gaps and overlaps follow the usual "compatible" rule: a skipped time moves
 * forward by the length of the gap, and a repeated time uses the first occurrence.
 */
export function zonedToUtc(fields: DateTimeFields, timeZone: string): { ms: number; status: ZonedStatus } {
  const local = fieldsAsUtc(fields);
  const before = zoneOffset(local - DAY_MS, timeZone);
  const after = zoneOffset(local + DAY_MS, timeZone);

  const valid = [...new Set([before, after])]
    .map((offset) => local - offset)
    .filter((ms) => fieldsAsUtc(zonedFields(ms, timeZone)) === local)
    .sort((a, b) => a - b);

  if (valid.length === 1) return { ms: valid[0]!, status: "ok" };
  if (valid.length > 1) return { ms: valid[0]!, status: "repeated" };
  // In a gap the offset from before the change still applies, which lands after the gap.
  return { ms: local - before, status: "skipped" };
}

// ---------------------------------------------------------------------------
// Input parsing
// ---------------------------------------------------------------------------

export type Parsed<T> = { ok: true; value: T } | { ok: false; error: string };

/** Reads the value of an `<input type="date">` and `<input type="time">`. */
export function parseDateTime(date: string, time: string): Parsed<DateTimeFields> {
  const d = /^(-?\d{4,6})-(\d{2})-(\d{2})$/.exec(date.trim());
  if (!d) return { ok: false, error: "Enter a valid date." };
  const t = /^(\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?$/.exec(time.trim());
  if (!t) return { ok: false, error: "Enter a valid time." };

  const fields: DateTimeFields = {
    year: Number(d[1]),
    month: Number(d[2]),
    day: Number(d[3]),
    hour: Number(t[1]),
    minute: Number(t[2]),
    second: Number(t[3] ?? 0),
  };
  if (fields.hour > 23 || fields.minute > 59 || fields.second > 59) {
    return { ok: false, error: "Enter a valid time." };
  }
  // Rejects dates such as February 30 by checking they survive a round trip.
  const check = new Date(fieldsAsUtc(fields));
  if (
    check.getUTCFullYear() !== fields.year ||
    check.getUTCMonth() !== fields.month - 1 ||
    check.getUTCDate() !== fields.day
  ) {
    return { ok: false, error: "That date doesn’t exist." };
  }
  return { ok: true, value: fields };
}

export interface UnixInput {
  seconds: number;
  /** Which unit the pasted number was read as. */
  unit: "seconds" | "milliseconds";
}

/**
 * Reads a pasted Unix timestamp in seconds or milliseconds. Numbers with 12 or
 * more digits are treated as milliseconds: in seconds they would be over 3,000
 * years away, while in milliseconds anything after March 1973 has 12+ digits.
 */
export function parseUnixInput(input: string): Parsed<UnixInput> {
  const cleaned = input.trim().replace(/[\s,_]/g, "");
  if (!cleaned) return { ok: false, error: "Paste a Unix timestamp first." };
  if (!/^-?\d+$/.test(cleaned)) {
    return { ok: false, error: "A Unix timestamp is a whole number, like 1793740800." };
  }
  const digits = cleaned.replace("-", "").length;
  const unit = digits >= 12 ? "milliseconds" : "seconds";
  const ms = unit === "milliseconds" ? Number(cleaned) : Number(cleaned) * 1000;
  if (!Number.isSafeInteger(ms) || Math.abs(ms) > MAX_MS) {
    return { ok: false, error: "That number is too large to be a date." };
  }
  return { ok: true, value: { seconds: toUnixSeconds(ms), unit } };
}

/** Error for instants JavaScript can't represent, or a warning for unusual ones. */
export function checkRange(ms: number): { error?: string; warning?: string } {
  if (!Number.isFinite(ms) || Math.abs(ms) > MAX_MS) return { error: "That date is out of range." };
  const year = new Date(ms).getUTCFullYear();
  if (ms < 0) {
    return {
      warning:
        "This is before January 1, 1970, so the Unix timestamp is negative. It may not display as expected in Discord.",
    };
  }
  if (year > 2100)
    return { warning: `This is in the year ${year}. Double-check the date before you post it.` };
  return {};
}

// ---------------------------------------------------------------------------
// Previews
// ---------------------------------------------------------------------------

const shortDate = { day: "2-digit", month: "2-digit", year: "numeric" } as const;

const previewOptions: Record<Exclude<TimestampStyleCode, "R">, Intl.DateTimeFormatOptions> = {
  t: { timeStyle: "short" },
  T: { timeStyle: "medium" },
  d: shortDate,
  D: { dateStyle: "long" },
  f: { dateStyle: "long", timeStyle: "short" },
  F: { dateStyle: "full", timeStyle: "short" },
  s: { ...shortDate, hour: "numeric", minute: "2-digit" },
  S: { ...shortDate, hour: "numeric", minute: "2-digit", second: "2-digit" },
};

const relativeUnits: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365 * DAY_MS],
  ["month", 30 * DAY_MS],
  ["day", DAY_MS],
  ["hour", 3_600_000],
  ["minute", 60_000],
  ["second", 1000],
];

/** "in 2 hours" or "3 days ago", using the largest unit that fits. */
export function formatRelative(ms: number, now: number, locale?: string): string {
  const diff = ms - now;
  const format = new Intl.RelativeTimeFormat(locale, { numeric: "always" });
  for (const [unit, size] of relativeUnits) {
    // Round away from zero the same way in both directions (Math.round(-1.5) is -1).
    if (Math.abs(diff) >= size || unit === "second") {
      return format.format(Math.sign(diff) * Math.round(Math.abs(diff) / size), unit);
    }
  }
  return format.format(0, "second");
}

/**
 * Roughly how Discord will show the timestamp: Discord formats it with the
 * viewer's own language and clock settings, so this uses the browser's.
 */
export function formatPreview(
  ms: number,
  style: TimestampStyleCode,
  { now, locale, timeZone }: { now: number; locale?: string; timeZone?: string },
): string {
  if (style === "R") return formatRelative(ms, now, locale);
  return new Intl.DateTimeFormat(locale, { ...previewOptions[style], timeZone }).format(new Date(ms));
}

// ---------------------------------------------------------------------------
// Time zone list
// ---------------------------------------------------------------------------

const FALLBACK_ZONES = [
  "UTC",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Toronto",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Kolkata",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Pacific/Auckland",
];

/**
 * Browsers still report some zones by their old IANA names (Chrome lists
 * India as "Asia/Calcutta"), which nobody searches for. These are the
 * current names; both forms are valid time zones.
 */
const MODERN_ZONE_NAMES: Readonly<Record<string, string>> = {
  "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  "America/Catamarca": "America/Argentina/Catamarca",
  "America/Cordoba": "America/Argentina/Cordoba",
  "America/Godthab": "America/Nuuk",
  "America/Indianapolis": "America/Indiana/Indianapolis",
  "America/Jujuy": "America/Argentina/Jujuy",
  "America/Louisville": "America/Kentucky/Louisville",
  "America/Mendoza": "America/Argentina/Mendoza",
  "Asia/Calcutta": "Asia/Kolkata",
  "Asia/Katmandu": "Asia/Kathmandu",
  "Asia/Rangoon": "Asia/Yangon",
  "Asia/Saigon": "Asia/Ho_Chi_Minh",
  "Atlantic/Faeroe": "Atlantic/Faroe",
  "Europe/Kiev": "Europe/Kyiv",
  "Pacific/Enderbury": "Pacific/Kanton",
  "Pacific/Ponape": "Pacific/Pohnpei",
  "Pacific/Truk": "Pacific/Chuuk",
};

/** The current IANA name for a zone the browser reports under an old one. */
export function modernZoneName(zone: string): string {
  const modern = MODERN_ZONE_NAMES[zone];
  return modern && isValidTimeZone(modern) ? modern : zone;
}

/** Every IANA zone the browser knows, under current names, sorted, plus UTC. */
export function listTimeZones(): string[] {
  const supported = (Intl as { supportedValuesOf?: (key: string) => string[] }).supportedValuesOf;
  const zones = new Set((supported ? supported("timeZone") : FALLBACK_ZONES).map(modernZoneName));
  zones.add("UTC");
  return [...zones].sort();
}

/** "UTC−05:00" style label for a zone's offset at an instant. */
export function offsetLabel(ms: number, timeZone: string): string {
  const minutes = Math.round(zoneOffset(ms, timeZone) / 60_000);
  const sign = minutes < 0 ? "−" : "+";
  const abs = Math.abs(minutes);
  return `UTC${sign}${String(Math.floor(abs / 60)).padStart(2, "0")}:${String(abs % 60).padStart(2, "0")}`;
}

/** Fields as the strings `<input type="date">` and `<input type="time">` expect. */
export function toInputValues(f: DateTimeFields, withSeconds: boolean): { date: string; time: string } {
  const pad = (n: number, size = 2) => String(n).padStart(size, "0");
  return {
    date: `${f.year < 0 ? f.year : pad(f.year, 4)}-${pad(f.month)}-${pad(f.day)}`,
    time: `${pad(f.hour)}:${pad(f.minute)}${withSeconds ? `:${pad(f.second)}` : ""}`,
  };
}
