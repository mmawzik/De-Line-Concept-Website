import { useState } from "react";
import { Button, Container, Eyebrow, Lead, SectionHeading, bg2, cardDark, fontDisplay, fontSans, gold, radius, textLight, textLight2 } from "./brand";
import { OfficeMap } from "./office-map";
import { useT } from "../providers";

type FieldDef = { name: string; label: string; type: string; autoComplete: string };

export function Contact() {
  const t = useT();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const fields: FieldDef[] = [
    { name: "name", label: t.contact.fields.name, type: "text", autoComplete: "name" },
    { name: "email", label: t.contact.fields.email, type: "email", autoComplete: "email" },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Front-end demo: simulate request, then confirm. Wire to a backend/email later.
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="dl-section">
      <Container>
        <style>{contactCss}</style>
        <div className="dl-split" style={{ ["--split" as string]: "0.85fr 1fr" }}>
          <div className="dl-stack" style={{ gap: 14 }}>
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <SectionHeading>{t.contact.heading}</SectionHeading>
            <Lead>{t.contact.lead}</Lead>
            <div className="dl-contact-rows" style={{ marginTop: 16 }}>
              {t.contact.rows.map((row) => (
                <div key={row.label}>
                  <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: gold }}>
                    {row.label}
                  </div>
                  <div style={{ fontFamily: fontDisplay, fontSize: 17, color: textLight, marginTop: 6 }}>{row.primary}</div>
                  {row.secondary && (
                    <div style={{ fontFamily: fontSans, fontSize: 13, color: textLight2, marginTop: 4 }}>{row.secondary}</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 6, height: 180, width: "100%" }}>
              <OfficeMap />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            style={{
              background: cardDark,
              border: "1px solid var(--deline-divider)",
              borderRadius: radius,
              padding: "clamp(20px, 3vw, 30px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignSelf: "center",
            }}
          >
            <div aria-live="polite">
              {status === "sent" && (
                <div style={{ padding: "40px 0", textAlign: "center" }}>
                  <div style={{ fontFamily: fontDisplay, fontSize: 28, color: textLight, marginBottom: 12 }}>{t.contact.successTitle}</div>
                  <div style={{ fontFamily: fontSans, fontSize: 14, color: textLight2 }}>{t.contact.successBody}</div>
                </div>
              )}
            </div>

            {status !== "sent" && (
              <>
                {fields.map((f) => (
                  <Field key={f.name} {...f} />
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label htmlFor="message" style={labelStyle}>
                    {t.contact.fields.message} <span style={{ color: gold }} aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    style={{ ...fieldStyle, resize: "vertical" }}
                  />
                </div>
                <div style={{ marginTop: 8 }}>
                  <Button variant="primary" type="submit" disabled={status === "sending"} style={status === "sending" ? { opacity: 0.6, cursor: "default" } : undefined}>
                    {status === "sending" ? t.contact.sending : t.contact.submit}
                  </Button>
                </div>
                <p style={{ fontFamily: fontSans, fontSize: 12, lineHeight: 1.5, color: textLight2, margin: 0 }}>
                  {t.contact.privacyPre}
                  <a href="#privacy" style={{ color: gold, textDecoration: "underline", textUnderlineOffset: 3 }}>
                    {t.contact.privacyLink}
                  </a>
                  .
                </p>
              </>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

const contactCss = `
.dl-contact-rows{display:grid;grid-template-columns:repeat(3,1fr);gap:18px 20px}
@media (max-width:560px){
  .dl-contact-rows{grid-template-columns:1fr 1fr}
}
@media (max-width:380px){
  .dl-contact-rows{grid-template-columns:1fr}
}
`;

const labelStyle: React.CSSProperties = {
  fontFamily: fontSans,
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: textLight2,
};

const fieldStyle: React.CSSProperties = {
  fontFamily: fontSans,
  fontSize: 15,
  padding: 12,
  minHeight: 44,
  border: "1px solid var(--deline-divider)",
  borderRadius: radius,
  background: bg2,
  color: textLight,
};

function Field({ name, label, type, autoComplete }: FieldDef) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label htmlFor={name} style={labelStyle}>
        {label} <span style={{ color: "var(--deline-gold)" }} aria-hidden="true">*</span>
      </label>
      <input id={name} name={name} type={type} autoComplete={autoComplete} required style={fieldStyle} />
    </div>
  );
}
