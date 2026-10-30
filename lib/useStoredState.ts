"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Per-visitor preferences kept in localStorage. The server (and the first
 * client render) always see the fallback, so hydration never mismatches.
 * When storage is blocked, values live in memory for the current visit.
 */

const listeners = new Set<() => void>();
const memory = new Map<string, string>();
const parsed = new Map<string, { raw: string | undefined; value: unknown }>();

function readRaw(key: string): string | undefined {
  try {
    return localStorage.getItem(key) ?? memory.get(key);
  } catch {
    return memory.get(key);
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function useStoredState<T>(
  key: string,
  fallback: T,
  parse: (value: unknown) => T,
): [T, (next: T) => void] {
  const getSnapshot = useCallback((): T => {
    const raw = readRaw(key);
    const cached = parsed.get(key);
    // Return the same object while the stored text is unchanged, as useSyncExternalStore requires.
    if (cached && cached.raw === raw) return cached.value as T;
    let value = fallback;
    if (raw !== undefined) {
      try {
        value = parse(JSON.parse(raw));
      } catch {
        value = fallback;
      }
    }
    parsed.set(key, { raw, value });
    return value;
  }, [key, fallback, parse]);

  const value = useSyncExternalStore(subscribe, getSnapshot, () => fallback);

  const setValue = useCallback(
    (next: T) => {
      const raw = JSON.stringify(next);
      memory.set(key, raw);
      try {
        localStorage.setItem(key, raw);
      } catch {
        // Private mode or blocked storage: the in-memory copy is used instead.
      }
      listeners.forEach((listener) => listener());
    },
    [key],
  );

  return [value, setValue];
}
