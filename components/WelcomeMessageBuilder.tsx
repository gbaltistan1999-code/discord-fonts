"use client";

import { useId, useState } from "react";
import { buildWelcome, WELCOME_LIMIT, welcomeVibes, type WelcomeOptions } from "@/lib/welcome-message";
import { useCopy } from "./ToastProvider";

/** Bold text inside a line, like Discord's **bold**. */
function inline(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
}

/** A simple look at how Discord shows the message: headers, subtext and bold. */
function Preview({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-[#313338] p-4 text-[15px] leading-relaxed text-[#dbdee1]">
      {text.split("\n").map((line, i) => {
        if (line.startsWith("# "))
          return (
            <p key={i} className="m-0 text-2xl leading-tight font-bold text-white">
              {inline(line.slice(2))}
            </p>
          );
        if (line.startsWith("-# "))
          return (
            <p key={i} className="m-0 text-xs text-[#949ba4]">
              {inline(line.slice(3))}
            </p>
          );
        if (!line.trim()) return <span key={i} aria-hidden="true" className="h-1" />;
        return (
          <p key={i} className="m-0 break-words text-[#dbdee1]">
            {inline(line)}
          </p>
        );
      })}
    </div>
  );
}

const field =
  "w-full rounded-lg border border-border bg-surface px-3 py-2 text-[15px] text-text outline-none focus:border-accent focus:ring-4 focus:ring-accent/15";

export function WelcomeMessageBuilder() {
  const id = useId();
  const copy = useCopy();
  const [vibe, setVibe] = useState("simple");
  const [o, setO] = useState<WelcomeOptions>({
    server: "",
    rules: "rules",
    roles: "roles",
    intro: "introductions",
    chat: "general",
    useRules: true,
    useRoles: true,
    useIntro: true,
    useChat: true,
  });
  const set = <K extends keyof WelcomeOptions>(key: K, value: WelcomeOptions[K]) =>
    setO((prev) => ({ ...prev, [key]: value }));
  const text = buildWelcome(vibe, o);

  const channels = [
    { use: "useRules", name: "rules", label: "Rules" },
    { use: "useRoles", name: "roles", label: "Roles" },
    { use: "useIntro", name: "intro", label: "Introductions" },
    { use: "useChat", name: "chat", label: "Chat" },
  ] as const;

  return (
    <div className="my-6 rounded-2xl border border-border bg-surface p-4 sm:p-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor={`${id}-server`} className="mb-1.5 block text-sm font-semibold text-text">
              Server name
            </label>
            <input
              id={`${id}-server`}
              className={field}
              value={o.server}
              maxLength={100}
              placeholder="e.g. Cozy Corner"
              onChange={(e) => set("server", e.target.value)}
            />
          </div>

          <fieldset>
            <legend className="mb-1.5 text-sm font-semibold text-text">Vibe</legend>
            <div className="flex flex-wrap gap-1.5">
              {welcomeVibes.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  aria-pressed={vibe === v.id}
                  onClick={() => setVibe(v.id)}
                  className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition-colors ${
                    vibe === v.id
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-text hover:border-accent"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-1.5 text-sm font-semibold text-text">Channels to point to</legend>
            <div className="flex flex-col gap-2">
              {channels.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <input
                    id={`${id}-${c.use}`}
                    type="checkbox"
                    className="size-5 shrink-0 accent-accent"
                    checked={o[c.use]}
                    onChange={(e) => set(c.use, e.target.checked)}
                  />
                  <label htmlFor={`${id}-${c.use}`} className="w-28 shrink-0 text-sm text-text">
                    {c.label}
                  </label>
                  <span aria-hidden="true" className="text-muted">
                    #
                  </span>
                  <input
                    aria-label={`${c.label} channel name`}
                    className={`${field} py-1.5`}
                    value={o[c.name]}
                    maxLength={100}
                    disabled={!o[c.use]}
                    onChange={(e) => set(c.name, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-text">Preview</span>
            <span
              className={`text-xs tabular-nums ${text.length > WELCOME_LIMIT ? "text-red-600" : "text-muted"}`}
            >
              {text.length}/{WELCOME_LIMIT}
            </span>
          </div>
          <Preview text={text} />
          <button
            type="button"
            onClick={() => copy(text, "Welcome message")}
            className="min-h-11 rounded-lg bg-accent-solid px-4 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
          >
            Copy welcome message
          </button>
        </div>
      </div>
    </div>
  );
}
