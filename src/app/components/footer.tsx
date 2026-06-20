import { Container, fontDisplay, fontSans, gold, textLight, textLight2 } from "./brand";
import { useT } from "../providers";

export function Footer() {
  const t = useT();
  return (
    <footer className="dl-themed" style={{ color: textLight, padding: "72px 0 32px", borderTop: "1px solid var(--deline-divider)" }}>
      <Container>
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
            <div style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 22, letterSpacing: "0.08em", color: textLight }}>
              {t.footer.brand}
            </div>
            <div style={{ fontFamily: fontSans, fontSize: 14, color: textLight2, lineHeight: 1.6, marginTop: 16, maxWidth: 320 }}>
              {t.footer.blurb}
            </div>
          </div>
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
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
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            fontFamily: fontSans,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: textLight2,
          }}
        >
          <div>{t.footer.copyright}</div>
          <div>{t.footer.locations}</div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 860px){ .dl-footer-grid{ grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 520px){ .dl-footer-grid{ grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
