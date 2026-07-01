import { useEffect, useState } from "react";
import { fontDisplay, fontSans, gold, textLight, textLight2 } from "./brand";
import { useT } from "../providers";

/* Standalone Privacy Policy, shown as a full-screen overlay when the URL hash
   is #privacy (linked from the contact form). Content is localised via the
   active dictionary; paragraphs support **bold** lead-ins and the contact
   email is turned into a mailto link. No router needed. */

export function PrivacyOverlay() {
  const t = useT();
  const p = t.privacy;
  const [open, setOpen] = useState(
    () => typeof window !== "undefined" && window.location.hash === "#privacy",
  );

  useEffect(() => {
    const onHash = () => setOpen(window.location.hash === "#privacy");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    if (typeof history !== "undefined" && history.replaceState) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } else {
      window.location.hash = "";
    }
    setOpen(false);
  };

  if (!open) return null;

  const BackButton = ({ solid }: { solid?: boolean }) => (
    <button
      type="button"
      onClick={close}
      aria-label={p.back}
      style={
        solid
          ? {
              background: "var(--deline-gold-button, #c4a25f)",
              color: "var(--deline-on-gold, #12130f)",
              border: "none",
              borderRadius: 999,
              fontFamily: fontSans,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 26px",
              cursor: "pointer",
            }
          : {
              position: "sticky",
              top: 0,
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "var(--deline-bg)",
              border: "1px solid var(--deline-divider)",
              borderRadius: 999,
              color: textLight,
              fontFamily: fontSans,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "10px 16px",
              cursor: "pointer",
            }
      }
    >
      {p.back}
    </button>
  );

  return (
    <div
      className="dl-themed"
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "var(--deline-bg)",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(24px, 6vw, 72px) var(--gutter, 24px) 96px" }}>
        <BackButton />

        <h1 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: "clamp(30px, 5vw, 44px)", color: textLight, letterSpacing: "-0.02em", margin: "8px 0 6px" }}>
          {p.title}
        </h1>
        <p style={{ fontFamily: fontSans, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: gold, margin: "0 0 28px" }}>
          {p.updated}
        </p>

        <Para email={p.email}>{p.intro}</Para>

        {p.sections.map((s, i) => (
          <div key={i}>
            <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: "clamp(18px, 2.4vw, 22px)", color: textLight, margin: "34px 0 10px" }}>
              {s.h}
            </h2>
            {s.p.map((para, j) => (
              <Para key={j} email={p.email}>{para}</Para>
            ))}
            {s.list.length > 0 && (
              <ul style={{ margin: "0 0 14px", padding: "0 0 0 20px" }}>
                {s.list.map((it, k) => (
                  <li key={k} style={{ fontFamily: fontSans, fontSize: 15, lineHeight: 1.7, color: textLight2, marginBottom: 6 }}>
                    {it}
                  </li>
                ))}
              </ul>
            )}
            {s.pAfter.map((para, j) => (
              <Para key={`a${j}`} email={p.email}>{para}</Para>
            ))}
          </div>
        ))}

        <div style={{ marginTop: 40 }}>
          <BackButton solid />
        </div>
      </div>
    </div>
  );
}

/* Render a paragraph string: split **bold** runs and turn the contact email
   into a mailto link. */
function Para({ children, email }: { children: string; email: string }) {
  return (
    <p style={{ fontFamily: fontSans, fontSize: 15, lineHeight: 1.7, color: textLight2, margin: "0 0 14px" }}>
      {renderInline(children, email)}
    </p>
  );
}

function renderInline(text: string, email: string): React.ReactNode[] {
  return text.split("**").map((part, i) => {
    const bold = i % 2 === 1;
    const content = linkifyEmail(part, email, i);
    return bold ? (
      <strong key={i} style={{ color: textLight, fontWeight: 600 }}>
        {content}
      </strong>
    ) : (
      <span key={i}>{content}</span>
    );
  });
}

function linkifyEmail(text: string, email: string, keyPrefix: number): React.ReactNode[] {
  if (!email || !text.includes(email)) return [text];
  const out: React.ReactNode[] = [];
  text.split(email).forEach((seg, i) => {
    if (i > 0) {
      out.push(
        <a
          key={`${keyPrefix}-mail-${i}`}
          href={`mailto:${email}`}
          style={{ color: gold, textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          {email}
        </a>,
      );
    }
    out.push(seg);
  });
  return out;
}
