import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./i18n/translations";

type Theme = "light" | "dark";
export type Palette = "current" | "espresso" | "forest" | "champagne";

const THEME_KEY = "deline-theme";
const LANG_KEY = "deline-lang";
const PALETTE_KEY = "deline-palette";

// Brand-locked: the site ships in a single dark theme (no user toggle).
function getInitialTheme(): Theme {
  return "dark";
}

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "ru" || stored === "zh" || stored === "en") return stored;
  } catch { /* ignore */ }
  if (typeof document !== "undefined") {
    const attr = document.documentElement.getAttribute("lang");
    if (attr === "ru" || attr === "zh") return attr;
  }
  return "en";
}

// Brand-locked: the site ships in the Forest palette (no user switcher).
function getInitialPalette(): Palette {
  return "forest";
}

type ThemeCtx = { theme: Theme; toggleTheme: () => void };
type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
type PaletteCtx = { palette: Palette; setPalette: (p: Palette) => void };

const ThemeContext = createContext<ThemeCtx | null>(null);
const LangContext = createContext<LangCtx | null>(null);
const PaletteContext = createContext<PaletteCtx | null>(null);

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const [palette, setPaletteState] = useState<Palette>(getInitialPalette);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-palette", palette);
    try { localStorage.setItem(PALETTE_KEY, palette); } catch { /* ignore */ }
  }, [palette]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const setPalette = useCallback((p: Palette) => setPaletteState(p), []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <PaletteContext.Provider value={{ palette, setPalette }}>
        <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
          {children}
        </LangContext.Provider>
      </PaletteContext.Provider>
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

export function usePalette(): PaletteCtx {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used within AppProviders");
  return ctx;
}

/** Convenience hook returning just the active dictionary. */
export function useT(): Dict {
  return useI18n().t;
}
