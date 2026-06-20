import { CardBody, CardTitle, Container, ImagePlaceholder, Lead, SectionHeading, fontSans, gold, textLight2 } from "./brand";
import { useT } from "../providers";

export function Portfolio() {
  const t = useT();
  return (
    <section id="portfolio" className="dl-section">
      <Container>
        <div className="dl-stack" style={{ maxWidth: 720, marginBottom: 56, gap: 16 }}>
          <SectionHeading>{t.portfolio.heading}</SectionHeading>
          <Lead>{t.portfolio.lead}</Lead>
          <div style={{ fontFamily: fontSans, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: gold, fontWeight: 600 }}>
            {t.portfolio.placeholderNote}
          </div>
        </div>
        <div className="dl-grid-2">
          {t.portfolio.projects.map((p) => (
            <article key={p.title} className="deline-card" style={{ padding: 36, display: "flex", flexDirection: "column", gap: 20 }}>
              <ImagePlaceholder height={260} label={t.common.imagePlaceholder} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: textLight2 }}>
                  {p.category}
                </div>
                <span
                  style={{
                    fontFamily: fontSans,
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: gold,
                    border: "1px solid var(--deline-rule)",
                    borderRadius: 999,
                    padding: "4px 10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.status}
                </span>
              </div>
              <CardTitle>{p.title}</CardTitle>
              <CardBody>{p.body}</CardBody>
              <div
                style={{
                  marginTop: "auto",
                  borderTop: "1px solid var(--deline-divider)",
                  paddingTop: 14,
                  fontFamily: fontSans,
                  fontSize: 13,
                  color: textLight2,
                  lineHeight: 1.55,
                }}
              >
                {p.materials}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
