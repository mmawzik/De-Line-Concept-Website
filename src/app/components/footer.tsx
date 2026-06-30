import { Container, fontDisplay, fontSans, textLight, textLight2 } from "./brand";
import { useT } from "../providers";

export function Footer() {
  const t = useT();
  return (
    <footer className="dl-themed" style={{ color: textLight, padding: "clamp(56px, 8vw, 96px) 0 28px", borderTop: "1px solid var(--deline-divider)" }}>
      <Container>
        {/* Link columns + blurb */}
        <div
          className="dl-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid var(--deline-divider)",
          }}
        >
          <div>
            <div style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 20, letterSpacing: "0.02em", color: textLight }}>
              {t.footer.brand}
            </div>
            <div style={{ fontFamily: fontSans, fontSize: 14, color: textLight2, lineHeight: 1.6, marginTop: 16, maxWidth: 320 }}>
              {t.footer.blurb}
            </div>
          </div>
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: textLight2, marginBottom: 18 }}>
                {col.title}
              </div>
              {col.links.map((l) => (
                <div key={l} style={{ fontFamily: fontSans, fontSize: 14, color: textLight2, lineHeight: 2 }}>
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Monumental wordmark */}
        <h2 className="dl-wordmark" aria-hidden="true" style={{ margin: "clamp(28px, 5vw, 64px) 0 clamp(20px, 3vw, 36px)" }}>
          {t.footer.brand.replace(/\s+CONCEPT$/i, "")}
          <sup>©</sup>
        </h2>

        {/* Bottom bar — socials + meta */}
        <div
          className="dl-footer-bottom"
          style={{
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              fontFamily: fontSans,
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: textLight2,
            }}
          >
            <span>{t.footer.copyright}</span>
            <span>{t.footer.locations}</span>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 860px){ .dl-footer-grid{ grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 520px){ .dl-footer-grid{ grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
