"use client";

import { useId, useState } from "react";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-text outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15";

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-text">
        {label}{" "}
        <span className="text-rose-500" aria-hidden="true">
          *
        </span>
      </label>
      {children}
    </div>
  );
}

/**
 * Sends through Web3Forms when siteConfig.web3formsKey is set. Without a key it opens the
 * visitor's email app with the message filled in, so the form never silently drops a message.
 */
export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    if (!siteConfig.web3formsKey) {
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          from_name: siteConfig.name,
          subject: `[${siteConfig.name}] ${subject}`,
          name,
          email,
          message,
          // Hidden field real visitors leave empty; Web3Forms rejects spam bots that fill it.
          botcheck: data.get("botcheck") ? true : "",
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!result.success) throw new Error("not sent");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-6 dark:bg-emerald-500/10"
      >
        <p className="text-lg font-semibold text-text">Thanks, your message is on its way.</p>
        <p className="mt-1 text-muted">We typically reply within 24 hours on business days.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-text transition-colors hover:bg-surface-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-name`} label="Full name">
          <input
            id={`${id}-name`}
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClass}
          />
        </Field>
        <Field id={`${id}-email`} label="Email address">
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClass}
          />
        </Field>
      </div>
      <Field id={`${id}-subject`} label="Subject">
        <input
          id={`${id}-subject`}
          name="subject"
          required
          maxLength={150}
          placeholder="e.g. A font style request"
          className={inputClass}
        />
      </Field>
      <Field id={`${id}-message`} label="Message">
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Tell us more about your question or feedback..."
          className={`${inputClass} resize-y`}
        />
      </Field>
      <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" />

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:bg-rose-500/15 dark:text-rose-200"
        >
          Your message couldn’t be sent. Please try again, or email us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-accent-solid px-6 font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-muted">We only use your email to reply to you.</p>
      </div>
    </form>
  );
}
