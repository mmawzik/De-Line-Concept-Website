import { Container, ImagePlaceholder, Lead, SectionHeading, fontDisplay, fontSans, gold, textLight, textLight2 } from "./brand";
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
          <SectionHeading style={{ maxWidth: "16ch" }}>{t.team.heading}</SectionHeading>
          <Lead className="dl-team-lead" style={{ maxWidth: "none" }}>{t.team.lead}</Lead>
        </div>
        <div className="dl-grid-4">
          {t.team.members.map((m) => {
            const firstName = m.name.split(" ")[0];
            const photo = PORTRAITS[firstName];
            return (
            <article key={m.name} className="deline-card" style={{ padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {photo ? (
                <img
                  src={photo}
                  alt={m.name}
                  style={{
                    height: 320,
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 15%",
                    borderRadius: 0,
                  }}
                />
              ) : (
                <ImagePlaceholder height={320} label={t.team.portraitLabel} />
              )}
              <div>
                <h3 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: 22, color: textLight, margin: 0, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  {firstName} {m.name.slice(firstName.length).trim()}
                </h3>
                <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: textLight2, marginTop: 8 }}>
                  {m.role}
                </div>
              </div>

              <p style={{ fontFamily: fontSans, fontSize: 14, lineHeight: 1.55, color: textLight2, margin: 0 }}>
                {m.summary}
              </p>

              {m.previously && (
                <div style={{ fontFamily: fontSans, fontSize: 13, lineHeight: 1.5, color: textLight2, margin: 0, marginTop: "auto" }}>
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
                      color: textLight2,
                      border: "1px solid var(--deline-rule)",
                      background: "transparent",
                      padding: "5px 11px",
                      borderRadius: 999,
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
