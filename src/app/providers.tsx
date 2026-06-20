import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./i18n/translations";

type Theme = "light" | "dark";

const THEME_KEY = "deline-theme";
const LANG_KEY = "deline-lang";

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

function getInitialLang(): Lang {
  if (typeof document !== "undefined") {
    const stored = document.documentElement.getAttribute("lang");
    if (stored === "ru") return "ru";
  }
  return "en";
}

type ThemeCtx = { theme: Theme; toggleTheme: () => void };
type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const ThemeContext = createContext<ThemeCtx | null>(null);
const LangContext = createContext<LangCtx | null>(null);

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within AppProviders");
  return ctx;
}

export function useI18n(): LangCtx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used within AppProviders");
  return ctx;
}

/** Convenience hook returning just the active dictionary. */
export function useT(): Dict {
  return useI18n().t;
}
