import { CardBody, CardTitle, Container, Lead, SectionHeading, fontSans, gold, radius, textLight2 } from "./brand";
import { OfficeMap } from "./office-map";
import { useT } from "../providers";

export function Foshan() {
  const t = useT();
  return (
    <section id="foshan" className="dl-section">
      <Container>
        <div className="dl-split" style={{ ["--split" as string]: "1fr 1.3fr" }}>
          <div className="dl-stack">
            <SectionHeading>{t.foshan.heading}</SectionHeading>
            <Lead>{t.foshan.lead}</Lead>
            <div style={{ marginTop: 16, height: 280, width: "100%" }}>
              <OfficeMap />
            </div>
            <div
              style={{
                marginTop: 4,
                paddingTop: 20,
                borderTop: "1px solid var(--deline-divider)",
                fontFamily: fontSans,
                fontSize: 14,
                lineHeight: 1.7,
                color: textLight2,
              }}
            >
              <div style={{ color: gold, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                {t.foshan.hqLabel}
              </div>
              {t.foshan.addressLocal}
              <br />
              {t.foshan.addressRoman}
            </div>
          </div>
          <div className="dl-grid-2">
            {t.foshan.cards.map((c) => (
              <article key={c.title} className="deline-card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                <CardTitle>{c.title}</CardTitle>
                <CardBody>{c.body}</CardBody>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
