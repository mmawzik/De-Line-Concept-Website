import { Sun, Moon } from "lucide-react";
import { useI18n, useTheme, usePalette, type Palette } from "../providers";
import type { Lang } from "../i18n/translations";

/* Temporary palette evaluation switcher — cycles the accent/surface theme
   so the brand colors can be compared live on the real pages. */
const PALETTES: { id: Palette; label: string; dot: string }[] = [
  { id: "current", label: "Slate", dot: "#c6a875" },
  { id: "espresso", label: "Espresso", dot: "#cca877" },
  { id: "forest", label: "Forest", dot: "#c4a25f" },
  { id: "champagne", label: "Champagne", dot: "#cdb78f" },
];

export function PaletteSwitcher({ full = false }: { full?: boolean }) {
  const { palette, setPalette } = usePalette();
  const idx = Math.max(0, PALETTES.findIndex((p) => p.id === palette));
  const cur = PALETTES[idx];
  const next = () => setPalette(PALETTES[(idx + 1) % PALETTES.length].id);
  return (
    <button
      type="button"
      onClick={next}
      title={`Palette: ${cur.label} — click to cycle`}
      aria-label={`Color palette: ${cur.label}. Click to change.`}
      style={{
        height: 44,
        width: full ? "100%" : undefined,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: full ? "center" : "flex-start",
        gap: 8,
        padding: "0 14px",
        background: "transparent",
        border: "1px solid var(--deline-divider)",
        borderRadius: "var(--deline-radius)",
        color: "var(--deline-text)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: "0.06em",
        whiteSpace: "nowrap",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--deline-rule)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--deline-divider)")}
    >
      <span style={{ width: 12, height: 12, borderRadius: 999, background: cur.dot, flex: "none", boxShadow: "0 0 0 1px rgba(255,255,255,0.18)" }} />
      {cur.label}
    </button>
  );
}

/** Theme toggle — icon button, 44px hit area, animated icon swap. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
      title={isDark ? t.nav.themeToLight : t.nav.themeToDark}
      style={{
        width: 44,
        height: 44,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        border: "1px solid var(--deline-divider)",
        borderRadius: "var(--deline-radius)",
        color: "var(--deline-text)",
        cursor: "pointer",
        transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--deline-rule)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--deline-divider)")}
    >
      {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
    </button>
  );
}

/** Segmented EN / RU language switcher. */
export function LanguageSwitcher({ full = false }: { full?: boolean }) {
  const { lang, setLang, t } = useI18n();
  const options: Lang[] = ["en", "ru", "zh"];
  return (
    <div
      role="group"
      aria-label={t.nav.language}
      style={{
        display: "inline-flex",
        border: "1px solid var(--deline-divider)",
        borderRadius: "var(--deline-radius)",
        overflow: "hidden",
        height: 44,
        width: full ? "100%" : undefined,
      }}
    >
      {options.map((opt) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={active}
            style={{
              flex: full ? 1 : undefined,
              minWidth: 44,
              padding: "0 14px",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.1em",
              border: "none",
              cursor: "pointer",
              background: active ? "var(--deline-gold-button)" : "transparent",
              color: active ? "var(--deline-on-gold)" : "var(--deline-text-2)",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            {t.langName[opt]}
          </button>
        );
      })}
    </div>
  );
}
