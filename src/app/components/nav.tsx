import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container, fontDisplay, fontSans, gold, goldBtn, onGold, radius, textLight } from "./brand";
import { LanguageSwitcher } from "./controls";
import { useT } from "../providers";

export function Nav() {
  const t = useT();
  const [open, setOpen] = useState(false);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    // Close (and release scroll lock) if the viewport grows past the mobile breakpoint.
    const mq = window.matchMedia("(min-width: 981px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <nav
      className="dl-themed"
      style={{
        background: "color-mix(in srgb, var(--deline-bg) 88%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--deline-divider)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container>
        <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="#top" style={{ textDecoration: "none", display: "block", flexShrink: 0 }} aria-label="De Line — home">
            <div style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: "clamp(16px, 5vw, 22px)", color: textLight, lineHeight: 1, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
              {t.nav.brand}
            </div>
            <div
              className="dl-nav-tagline"
              style={{
                fontFamily: fontSans,
                fontWeight: 500,
                fontSize: 10,
                color: gold,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              {t.nav.tagline}
            </div>
          </a>

          {/* Desktop nav */}
          <div className="dl-nav-links" style={{ display: "flex", gap: 22, alignItems: "center" }}>
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ fontFamily: fontSans, fontWeight: 500, fontSize: 14, color: textLight, textDecoration: "none", letterSpacing: "0.01em" }}
              >
                {l.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="#contact"
              style={{
                fontFamily: fontSans,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: goldBtn,
                color: onGold,
                padding: "0 20px",
                height: 44,
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                borderRadius: radius,
              }}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="dl-nav-toggle" style={{ alignItems: "center", gap: 10 }}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="dl-mobile-menu"
              style={{
                width: 44,
                height: 44,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid var(--deline-divider)",
                borderRadius: radius,
                color: textLight,
                cursor: "pointer",
              }}
            >
              {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="dl-mobile-menu"
          className="dl-themed"
          style={{
            borderTop: "1px solid var(--deline-divider)",
            background: "var(--deline-bg)",
            padding: "8px var(--gutter) 28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: fontDisplay,
                  fontSize: 20,
                  color: textLight,
                  textDecoration: "none",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--deline-divider)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <LanguageSwitcher full />
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 16,
              fontFamily: fontSans,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: goldBtn,
              color: onGold,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: radius,
            }}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
