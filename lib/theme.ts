export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

/**
 * Inline <head> script that sets the theme class before first paint (no flash).
 * A stored choice wins; otherwise the OS preference, falling back to dark.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s?s==="dark":!matchMedia("(prefers-color-scheme: light)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}})()`;
