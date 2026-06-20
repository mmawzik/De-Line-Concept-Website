import { Container, SectionHeading, fontDisplay, fontSans, gold, textLight, textLight2 } from "./brand";
import { useT } from "../providers";

export function SocialProof() {
  const t = useT();
  return (
    <section className="dl-section">
      <Container>
        <div className="dl-stack" style={{ maxWidth: 720, marginBottom: 56, gap: 16 }}>
          <SectionHeading>{t.social.heading}</SectionHeading>
        </div>

        <div className="dl-grid-3">
          {t.social.testimonials.map((tm) => (
            <blockquote key={tm.author} className="deline-card" style={{ padding: 36, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: fontDisplay, fontSize: 48, color: gold, lineHeight: 0.6 }} aria-hidden="true">&ldquo;</div>
              <p style={{ fontFamily: fontDisplay, fontWeight: 400, fontSize: 19, lineHeight: 1.5, color: textLight, margin: 0 }}>
                {tm.quote}
              </p>
              <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--deline-divider)" }}>
                <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: textLight }}>
                  {tm.author}
                </div>
                <div style={{ fontFamily: fontSans, fontSize: 13, color: textLight2, marginTop: 6 }}>{tm.org}</div>
              </div>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
