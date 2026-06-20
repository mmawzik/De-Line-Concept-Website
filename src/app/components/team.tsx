import { Container, ImagePlaceholder, Lead, SectionHeading, fontDisplay, fontSans, gold, radius, textLight, textLight2 } from "./brand";
import { useT } from "../providers";

export function Team() {
  const t = useT();
  return (
    <section id="team" className="dl-section">
      <Container>
        <div className="dl-stack" style={{ maxWidth: 720, marginBottom: 56, gap: 16 }}>
          <SectionHeading>{t.team.heading}</SectionHeading>
          <Lead>{t.team.lead}</Lead>
        </div>
        <div className="dl-grid-4">
          {t.team.members.map((m) => (
            <article key={m.name} className="deline-card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
              <ImagePlaceholder height={180} label={t.team.portraitLabel} />
              <div>
                <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: gold }}>
                  {m.role}
                </div>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: 22, color: textLight, margin: "8px 0 0", lineHeight: 1.2 }}>
                  {m.name}
                </h3>
              </div>

              <p style={{ fontFamily: fontSans, fontSize: 14, lineHeight: 1.55, color: textLight2, margin: 0 }}>
                {m.summary}
              </p>

              {m.previously && (
                <div style={{ fontFamily: fontSans, fontSize: 13, lineHeight: 1.5, color: textLight2, margin: 0 }}>
                  <span style={{ fontWeight: 600, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: gold }}>
                    {t.team.previousLabel}
                  </span>
                  <br />
                  {m.previously}
                </div>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {m.distinctions.map((d) => (
                  <span
                    key={d}
                    style={{
                      fontFamily: fontSans,
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: gold,
                      border: "1px solid color-mix(in srgb, var(--deline-gold) 35%, transparent)",
                      background: "color-mix(in srgb, var(--deline-gold) 8%, transparent)",
                      padding: "5px 9px",
                      borderRadius: radius,
                      lineHeight: 1.2,
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 18,
                  borderTop: "1px solid var(--deline-divider)",
                  fontFamily: fontSans,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: textLight2,
                  fontWeight: 500,
                }}
              >
                {m.location}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
