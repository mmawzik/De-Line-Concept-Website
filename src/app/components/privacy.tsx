import { useEffect, useState } from "react";
import { fontDisplay, fontSans, gold, textLight, textLight2 } from "./brand";

/* Standalone Privacy Policy, shown as a full-screen overlay when the URL hash
   is #privacy (linked from the contact form and footer). No router needed. */

const PRIVACY_EMAIL = "hello@deline.studio";
const LAST_UPDATED = "July 2026";

export function PrivacyOverlay() {
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
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

  return (
    <div
      className="dl-themed"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
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
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          style={{
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
          }}
        >
          ← Back to site
        </button>

        <h1 style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: "clamp(30px, 5vw, 44px)", color: textLight, letterSpacing: "-0.02em", margin: "8px 0 6px" }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: fontSans, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: gold, margin: "0 0 28px" }}>
          Last updated · {LAST_UPDATED}
        </p>

        <P>
          De Line Concept (“De Line”, “we”, “us”) coordinates custom furniture manufacturing and
          sourcing from Foshan, China, for clients worldwide. This policy explains what personal
          information we collect when you contact us or use de-line.co, how we use it, and the
          choices you have. We only ask for what a project actually requires.
        </P>

        <H>1. Information we collect</H>
        <P>
          <B>Information you give us.</B> When you submit the inquiry form or email us, we collect
          your name, email address, and the project details you choose to share (scope, type,
          timeline, references). If a project proceeds, we may also collect the billing, shipping,
          and contact details needed to deliver it.
        </P>
        <P>
          <B>Information collected automatically.</B> Our hosting provider and any analytics we use
          may record limited technical data such as IP address, browser type, and pages viewed, to
          keep the site secure and understand traffic. The site also stores your language and theme
          preferences locally in your browser — these never leave your device.
        </P>

        <H>2. How we use your information</H>
        <P>We use it to:</P>
        <UL
          items={[
            "Respond to your inquiry and prepare quotes or feasibility assessments.",
            "Plan, manufacture, inspect, and deliver your project.",
            "Communicate with you about your project and, where relevant, our services.",
            "Keep records and meet our legal, tax, and accounting obligations, and prevent fraud or abuse.",
          ]}
        />
        <P>
          We do not sell your personal information, and we do not use it for automated
          decision-making that produces legal effects on you.
        </P>

        <H>3. Who we share it with</H>
        <P>
          <B>Logistics and freight partners.</B> We do not operate our own logistics. To move and
          deliver your order, we share the details a carrier needs — such as delivery address,
          contact, and shipment specifications — with independent freight, customs, and installation
          partners.
        </P>
        <P>
          <B>Service providers.</B> We use third parties to run this website (hosting) and to process
          form submissions and email so your inquiry reaches us. They act on our instructions and
          only for these purposes.
        </P>
        <P>
          <B>Legal and safety.</B> We may disclose information where required by law, or to protect
          our rights, safety, or the integrity of a transaction.
        </P>

        <H>4. Our supply chain is confidential</H>
        <P>
          Protecting our manufacturing network is core to how we work. We do not disclose the
          identity of the factories, workshops, or suppliers in our network to clients or third
          parties — that information is our confidential business information, and your relationship
          and contract are with De Line. In turn, we treat your designs, drawings, and specifications
          as confidential and share them with a manufacturer only to the extent needed to build your
          project.
        </P>

        <H>5. International transfers</H>
        <P>
          De Line operates in China and serves clients globally, and our service providers may be
          located in other countries. Your information may therefore be processed or stored outside
          your country of residence, including in China. Where required, we take steps to keep your
          information protected when it is transferred.
        </P>

        <H>6. How long we keep it</H>
        <P>
          We keep inquiry information for as long as needed to respond and to pursue a potential
          project, and project information for as long as needed to fulfil the engagement and meet
          our legal, tax, and accounting obligations. When it is no longer needed, we delete or
          anonymise it.
        </P>

        <H>7. Security</H>
        <P>
          We use reasonable technical and organisational measures to protect your information. No
          method of transmission or storage is completely secure, so we cannot guarantee absolute
          security.
        </P>

        <H>8. Your rights</H>
        <P>
          Depending on where you live, you may have the right to access, correct, delete, or receive
          a copy of your personal information, to object to or restrict certain processing, and to
          withdraw consent. To exercise any of these, email us at{" "}
          <A href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</A>. EU/UK residents may also lodge a
          complaint with their local data-protection authority.
        </P>

        <H>9. Cookies and local storage</H>
        <P>
          We keep cookies to a minimum. The site uses essential local storage for your language and
          theme preferences. Any analytics we use is limited to understanding aggregate traffic and
          site performance.
        </P>

        <H>10. Children</H>
        <P>
          This site and our services are intended for businesses and professionals and are not
          directed to children under 16. We do not knowingly collect their information.
        </P>

        <H>11. Changes to this policy</H>
        <P>
          We may update this policy from time to time. The “last updated” date above reflects the
          latest version; material changes will be reflected on this page.
        </P>

        <H>12. Contact</H>
        <P>
          Questions about this policy or your information? Email us at{" "}
          <A href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</A>.
        </P>

        <div style={{ marginTop: 40 }}>
          <button
            type="button"
            onClick={close}
            style={{
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
            }}
          >
            ← Back to site
          </button>
        </div>
      </div>
    </div>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: fontDisplay, fontWeight: 600, fontSize: "clamp(18px, 2.4vw, 22px)", color: textLight, margin: "34px 0 10px" }}>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: fontSans, fontSize: 15, lineHeight: 1.7, color: textLight2, margin: "0 0 14px" }}>
      {children}
    </p>
  );
}

function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: textLight, fontWeight: 600 }}>{children}</strong>;
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{ color: gold, textDecoration: "underline", textUnderlineOffset: 3 }}>
      {children}
    </a>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 14px", padding: "0 0 0 20px" }}>
      {items.map((it) => (
        <li key={it} style={{ fontFamily: fontSans, fontSize: 15, lineHeight: 1.7, color: textLight2, marginBottom: 6 }}>
          {it}
        </li>
      ))}
    </ul>
  );
}
