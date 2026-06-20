import { useEffect, useRef } from "react";
import { Container, Lead, SectionHeading } from "./brand";
import { useT } from "../providers";

/* Line-art glyphs (viewBox 0 0 96 96), one per stage:
   Build · Inspect · Crate · Deliver */
const GLYPHS: string[][] = [
  // Build — side chair
  ["M41 26 L44 56", "M44 56 L68 56", "M66 56 L68 78", "M46 56 L43 78", "M44 44 L62 50"],
  // Inspect — magnifier with a check
  ["M58 46 A14 14 0 1 1 30 46 A14 14 0 1 1 58 46", "M54 56 L70 72", "M37 47 L42 52 L51 40"],
  // Crate — wooden shipping box
  ["M28 34 L68 34 L68 74 L28 74 Z", "M28 42 L68 42", "M38 42 L38 74", "M58 42 L58 74", "M38 74 L58 42"],
  // Deliver — shipping container
  ["M24 40 L72 40 L72 66 L24 66 Z", "M32 40 L32 66", "M40 40 L40 66", "M48 40 L48 66", "M56 40 L56 66", "M64 40 L64 66", "M30 70 L66 70"],
];

export function JourneyStrip({ compact = false }: { compact?: boolean }) {
  const t = useT();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`dl-journey${compact ? " compact" : ""}`}>
      <div className="dl-journey-rail" aria-hidden="true" />
      <div className="dl-journey-track">
        {t.journey.stages.map((s, i) => (
          <div className="dl-journey-stage" key={s.label} style={{ ["--i" as string]: i }}>
            <div className="dl-journey-glyph">
              <svg viewBox="0 0 96 96" role="img" aria-label={s.label}>
                {GLYPHS[i].map((d, j) => (
                  <path key={j} d={d} pathLength={1} />
                ))}
              </svg>
            </div>
            <div className="dl-journey-railslot">
              <span className="dl-journey-dot" />
            </div>
            <div className="dl-journey-text">
              <div className="dl-journey-num">{`0${i + 1}`}</div>
              <div className="dl-journey-label">{s.label}</div>
              {!compact && <div className="dl-journey-desc">{s.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Journey() {
  const t = useT();
  return (
    <section id="journey" className="dl-section">
      <Container>
        <div className="dl-stack" style={{ maxWidth: 720, marginBottom: 64, gap: 16 }}>
          <SectionHeading>{t.journey.heading}</SectionHeading>
          <Lead>{t.journey.lead}</Lead>
        </div>
        <JourneyStrip />
      </Container>
    </section>
  );
}
