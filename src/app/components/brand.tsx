import { type ReactNode, type ButtonHTMLAttributes } from "react";

/* ---- Semantic token references (theme-mapped in theme.css) ----
   Legacy names kept so existing component code reads unchanged. */
export const navy = "var(--deline-bg)";            // page / section background
export const bg2 = "var(--deline-bg-2)";           // sunken surfaces (form fields)
export const cardDark = "var(--deline-surface)";   // card surface
export const surface2 = "var(--deline-surface-2)"; // raised / hover surface
export const gold = "var(--deline-gold)";          // accent (contrast-safe)
export const goldBtn = "var(--deline-gold-button)";// gold button fill
export const onGold = "var(--deline-on-gold)";     // dark ink on a gold fill
export const textLight = "var(--deline-text)";     // primary text
export const textLight2 = "var(--deline-text-2)";  // secondary text
export const divider = "var(--deline-divider)";
export const rule = "var(--deline-rule)";
export const radius = "var(--deline-radius)";

export const fontDisplay = "var(--font-display)";
export const fontSans = "var(--font-sans)";

export function Container({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="dl-container" style={style}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: fontSans,
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: gold,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <span className="dl-heading-rule" aria-hidden="true" />
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: fontDisplay,
        fontWeight: 600,
        fontSize: "clamp(30px, 4.4vw, 46px)",
        lineHeight: 1.12,
        color: textLight,
        margin: 0,
        maxWidth: "20ch",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: fontSans,
        fontWeight: 400,
        fontSize: "clamp(16px, 1.4vw, 18px)",
        lineHeight: 1.6,
        color: textLight2,
        margin: 0,
        maxWidth: "62ch",
      }}
    >
      {children}
    </p>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: fontDisplay,
        fontWeight: 600,
        fontSize: 22,
        lineHeight: 1.25,
        color: textLight,
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: fontSans,
        fontSize: 16,
        lineHeight: 1.62,
        color: textLight2,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontFamily: fontSans, fontSize: 14, lineHeight: 1.55, color: textLight2, margin: 0 }}>
      {children}
    </p>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", children, style, ...rest }: BtnProps) {
  const base: React.CSSProperties = {
    fontFamily: fontSans,
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "0 28px",
    height: 52,
    borderRadius: radius,
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "transform 0.18s ease, opacity 0.15s, background 0.15s, border-color 0.15s",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    lineHeight: 1,
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: goldBtn, color: onGold, borderColor: goldBtn },
    secondary: { background: "transparent", color: textLight, borderColor: rule },
  };
  return (
    <button {...rest} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
}

export function ImagePlaceholder({ height = 280, label }: { height?: number | string; label?: string }) {
  return (
    <div
      style={{
        height,
        width: "100%",
        background: bg2,
        border: `1px solid ${rule}`,
        borderRadius: radius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: fontSans,
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: gold,
          padding: "0 12px",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}
