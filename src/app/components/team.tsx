import { Container, ImagePlaceholder, Lead, SectionHeading, fontDisplay, fontSans, gold, radius, rule, textLight, textLight2 } from "./brand";
import { useT } from "../providers";

// Portraits, keyed by the member's first name (works across EN/RU since
// translations.ts keeps first names consistent in both locales).
const PORTRAITS: Record<string, string> = {
  Zulyar: "/team/zulyar.png",
  Зульяр: "/team/zulyar.png",
  Saltanat: "/team/saltanat.png",
  Салтанат: "/team/saltanat.png",
  Dauren: "/team/dauren.png",
  Даурен: "/team/dauren.png",
  Daniyar: "/team/daniyar.png",
  Данияр: "/team/daniyar.png",
};

export function Team() {
  const t = useT();
  return (
    <section id="team" className="dl-section">
      <Container>
        <div className="dl-stack" style={{ maxWidth: "none", marginBottom: 56, gap: 16 }}>
          <SectionHeading style={{ maxWidth: "none", whiteSpace: "nowrap" }}>{t.team.heading}</SectionHeading>
          <Lead className="dl-team-lead" style={{ maxWidth: "none" }}>{t.team.lead}</Lead>
        </div>
        <div className="dl-grid-4">
          {t.team.members.map((m) => {
            const firstName = m.name.split(" ")[0];
            const photo = PORTRAITS[firstName];
            return (
            <article key={m.name} className="deline-card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
              {photo ? (
                <img
                  src={photo}
                  alt={m.name}
                  style={{
                    height: 280,
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 15%",
                    borderRadius: radius,
                    border: `1px solid ${rule}`,
                  }}
                />
              ) : (
                <ImagePlaceholder height={180} label={t.team.portraitLabel} />
              )}
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
            </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
