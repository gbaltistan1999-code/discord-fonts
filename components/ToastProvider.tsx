"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";

type CopyFn = (text: string, label?: string) => Promise<boolean>;

const CopyContext = createContext<CopyFn | null>(null);

/** Shared copy action with a single visual toast and a polite aria-live announcement. */
export function useCopy(): CopyFn {
  const copy = useContext(CopyContext);
  if (!copy) throw new Error("useCopy must be used inside <ToastProvider>");
  return copy;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback<CopyFn>(async (text, label) => {
    const ok = await copyToClipboard(text);
    clearTimeout(timer.current);
    // Clear first so screen readers re-announce identical consecutive messages.
    setMessage("");
    requestAnimationFrame(() => {
      setMessage(
        ok ? `Copied${label ? ` ${label}` : ""}!` : "Copy failed – select the text and copy it manually.",
      );
      setVisible(true);
    });
    timer.current = setTimeout(() => setVisible(false), 1800);
    return ok;
  }, []);

  return (
    <CopyContext.Provider value={copy}>
      {children}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`pointer-events-none fixed inset-x-0 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4 transition-all duration-200 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <p className="rounded-full bg-accent-solid px-4 py-2 text-sm font-semibold text-on-accent shadow-lg shadow-black/30">
          {message || " "}
        </p>
      </div>
    </CopyContext.Provider>
  );
}
