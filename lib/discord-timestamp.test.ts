import { describe, expect, it } from "vitest";
import {
  checkRange,
  combinedTag,
  discordTag,
  formatPreview,
  formatRelative,
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
  type DateTimeFields,
} from "./discord-timestamp";

/** Tuesday, November 3, 2026, 4:20 PM in New York (EST, after DST ended on November 1). */
const EXAMPLE = 1793740800;

const at = (year: number, month: number, day: number, hour = 0, minute = 0, second = 0): DateTimeFields => ({
  year,
  month,
  day,
  hour,
  minute,
  second,
});
const seconds = (fields: DateTimeFields, zone: string) => toUnixSeconds(zonedToUtc(fields, zone).ms);
// Newer ICU versions put a narrow no-break space before AM/PM.
const plain = (text: string) => text.replace(/[  ]/g, " ");

describe("tags", () => {
  it("builds every documented style", () => {
    expect(timestampStyles.map((s) => s.code)).toEqual(["t", "T", "d", "D", "f", "F", "s", "S", "R"]);
    expect(discordTag(EXAMPLE, "R")).toBe("<t:1793740800:R>");
    expect(discordTag(EXAMPLE)).toBe("<t:1793740800>");
    expect(combinedTag(EXAMPLE)).toBe("<t:1793740800:F> (<t:1793740800:R>)");
  });

  it("always outputs whole seconds", () => {
    expect(toUnixSeconds(1793740800999)).toBe(EXAMPLE);
    expect(toUnixSeconds(-1)).toBe(-1);
  });
});

describe("zonedToUtc", () => {
  it("converts the same instant from different zones", () => {
    expect(seconds(at(2026, 11, 3, 16, 20), "America/New_York")).toBe(EXAMPLE);
    expect(seconds(at(2026, 11, 3, 21, 20), "Europe/London")).toBe(EXAMPLE);
    expect(seconds(at(2026, 11, 4, 8, 20), "Australia/Sydney")).toBe(EXAMPLE);
    expect(seconds(at(2026, 11, 4, 2, 50), "Asia/Kolkata")).toBe(EXAMPLE);
    expect(seconds(at(2026, 11, 4, 3, 5), "Asia/Kathmandu")).toBe(EXAMPLE);
    expect(seconds(at(2026, 11, 3, 21, 20), "UTC")).toBe(EXAMPLE);
  });

  it("matches a summer date on the other side of a DST change", () => {
    // July: New York is on EDT (UTC−4).
    expect(zonedToUtc(at(2026, 7, 4, 12), "America/New_York")).toEqual({
      ms: Date.UTC(2026, 6, 4, 16),
      status: "ok",
    });
  });

  it("moves a skipped time forward (spring forward)", () => {
    // New York skips 2:00–2:59 on March 8, 2026; 2:30 becomes 3:30 EDT.
    expect(zonedToUtc(at(2026, 3, 8, 2, 30), "America/New_York")).toEqual({
      ms: Date.UTC(2026, 2, 8, 7, 30),
      status: "skipped",
    });
    // London skips 1:00–1:59 on March 29, 2026.
    expect(zonedToUtc(at(2026, 3, 29, 1, 15), "Europe/London")).toEqual({
      ms: Date.UTC(2026, 2, 29, 1, 15),
      status: "skipped",
    });
  });

  it("uses the first occurrence of a repeated time (fall back)", () => {
    // New York shows 1:00–1:59 twice on November 1, 2026; the first is EDT.
    expect(zonedToUtc(at(2026, 11, 1, 1, 30), "America/New_York")).toEqual({
      ms: Date.UTC(2026, 10, 1, 5, 30),
      status: "repeated",
    });
    // Sydney shows 2:00–2:59 twice on April 5, 2026; the first is AEDT (UTC+11).
    expect(zonedToUtc(at(2026, 4, 5, 2, 30), "Australia/Sydney")).toEqual({
      ms: Date.UTC(2026, 3, 4, 15, 30),
      status: "repeated",
    });
  });

  it("round-trips through zonedFields", () => {
    const ms = EXAMPLE * 1000;
    for (const zone of ["America/Los_Angeles", "Europe/Berlin", "Asia/Tokyo", "Pacific/Chatham"]) {
      expect(zonedToUtc(zonedFields(ms, zone), zone).ms).toBe(ms);
    }
  });

  it("handles years before 100 and far-future dates", () => {
    // Date.UTC would read year 50 as 1950.
    expect(zonedToUtc(at(50, 1, 1), "UTC").ms).toBe(fixedYear(50));
    expect(zonedFields(Date.UTC(9999, 11, 31, 23, 59, 59), "UTC")).toEqual(at(9999, 12, 31, 23, 59, 59));
  });
});

function fixedYear(year: number): number {
  const d = new Date(0);
  d.setUTCFullYear(year, 0, 1);
  return d.getTime();
}

describe("parseDateTime", () => {
  it("reads date and time inputs, with or without seconds", () => {
    expect(parseDateTime("2026-11-03", "16:20")).toEqual({ ok: true, value: at(2026, 11, 3, 16, 20) });
    expect(parseDateTime("2026-11-03", "16:20:30")).toEqual({ ok: true, value: at(2026, 11, 3, 16, 20, 30) });
  });

  it("rejects missing or impossible values", () => {
    expect(parseDateTime("", "16:20").ok).toBe(false);
    expect(parseDateTime("2026-11-03", "").ok).toBe(false);
    expect(parseDateTime("2026-02-30", "10:00")).toEqual({ ok: false, error: "That date doesn’t exist." });
    expect(parseDateTime("2026-11-03", "25:00").ok).toBe(false);
  });

  it("writes values back in input format", () => {
    expect(toInputValues(at(2026, 3, 8, 7, 5, 9), false)).toEqual({ date: "2026-03-08", time: "07:05" });
    expect(toInputValues(at(2026, 3, 8, 7, 5, 9), true)).toEqual({ date: "2026-03-08", time: "07:05:09" });
  });
});

describe("parseUnixInput", () => {
  it("reads seconds and milliseconds by length", () => {
    expect(parseUnixInput("1793740800")).toEqual({ ok: true, value: { seconds: EXAMPLE, unit: "seconds" } });
    expect(parseUnixInput("1793740800123")).toEqual({
      ok: true,
      value: { seconds: EXAMPLE, unit: "milliseconds" },
    });
    expect(parseUnixInput(" 1,793,740,800 ")).toEqual({
      ok: true,
      value: { seconds: EXAMPLE, unit: "seconds" },
    });
    expect(parseUnixInput("-86400")).toEqual({ ok: true, value: { seconds: -86400, unit: "seconds" } });
  });

  it("rejects text, decimals and out-of-range numbers", () => {
    expect(parseUnixInput("").ok).toBe(false);
    expect(parseUnixInput("tomorrow").ok).toBe(false);
    expect(parseUnixInput("1793740800.5").ok).toBe(false);
    expect(parseUnixInput("99999999999999999999").ok).toBe(false);
  });
});

describe("checkRange", () => {
  it("warns about unusual dates and rejects impossible ones", () => {
    expect(checkRange(EXAMPLE * 1000)).toEqual({});
    expect(checkRange(-1000).warning).toMatch(/before January 1, 1970/);
    expect(checkRange(Date.UTC(2200, 0, 1)).warning).toMatch(/2200/);
    expect(checkRange(Number.NaN).error).toBeDefined();
  });
});

describe("previews", () => {
  const options = { now: (EXAMPLE - 2 * 3600) * 1000, locale: "en-US", timeZone: "America/New_York" };
  const preview = (style: Parameters<typeof formatPreview>[1]) =>
    plain(formatPreview(EXAMPLE * 1000, style, options));

  it("formats each style like Discord (en-US)", () => {
    expect(preview("t")).toBe("4:20 PM");
    expect(preview("T")).toBe("4:20:00 PM");
    expect(preview("d")).toBe("11/03/2026");
    expect(preview("D")).toBe("November 3, 2026");
    expect(preview("f")).toBe("November 3, 2026 at 4:20 PM");
    expect(preview("F")).toBe("Tuesday, November 3, 2026 at 4:20 PM");
    expect(preview("s")).toBe("11/03/2026, 4:20 PM");
    expect(preview("S")).toBe("11/03/2026, 4:20:00 PM");
    expect(preview("R")).toBe("in 2 hours");
  });

  it("shows the same instant in each viewer's zone", () => {
    const full = (timeZone: string) =>
      plain(formatPreview(EXAMPLE * 1000, "F", { now: 0, locale: "en-US", timeZone }));
    expect(full("Europe/London")).toBe("Tuesday, November 3, 2026 at 9:20 PM");
    expect(full("Australia/Sydney")).toBe("Wednesday, November 4, 2026 at 8:20 AM");
  });

  it("picks the largest relative unit", () => {
    const now = EXAMPLE * 1000;
    expect(formatRelative(now - 3 * 86_400_000, now, "en-US")).toBe("3 days ago");
    expect(formatRelative(now + 45_000, now, "en-US")).toBe("in 45 seconds");
    expect(formatRelative(now - 90 * 60_000, now, "en-US")).toBe("2 hours ago");
    expect(formatRelative(now + 400 * 86_400_000, now, "en-US")).toBe("in 1 year");
  });
});

describe("time zones", () => {
  it("validates IANA names", () => {
    expect(isValidTimeZone("America/New_York")).toBe(true);
    expect(isValidTimeZone("UTC")).toBe(true);
    expect(isValidTimeZone("Mars/Olympus_Mons")).toBe(false);
    expect(isValidTimeZone("")).toBe(false);
  });

  it("labels offsets, including half and quarter hours", () => {
    expect(offsetLabel(EXAMPLE * 1000, "America/New_York")).toBe("UTC−05:00");
    expect(offsetLabel(EXAMPLE * 1000, "Asia/Kathmandu")).toBe("UTC+05:45");
    expect(offsetLabel(EXAMPLE * 1000, "UTC")).toBe("UTC+00:00");
  });

  it("lists every zone under its current name", () => {
    const zones = listTimeZones();
    expect(zones.length).toBeGreaterThan(400);
    expect(zones).toEqual(
      expect.arrayContaining(["UTC", "Asia/Kolkata", "Asia/Karachi", "America/New_York", "Europe/Kyiv"]),
    );
    expect(zones).not.toContain("Asia/Calcutta");
    expect(new Set(zones).size).toBe(zones.length);
    expect(modernZoneName("Asia/Calcutta")).toBe("Asia/Kolkata");
    expect(modernZoneName("Europe/London")).toBe("Europe/London");
  });
});
