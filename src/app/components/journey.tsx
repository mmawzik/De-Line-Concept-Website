import { useEffect, useRef } from "react";
import { Container, Lead, SectionHeading } from "./brand";
import { useT } from "../providers";

/* Line-art glyphs (viewBox 0 0 96 96), one per stage:
   Brief & quote · Design tour · Build · Inspect · Export · Deliver */
const GLYPHS: string[][] = [
  // Brief & quote — clipboard with lines
  ["M36 30 L60 30 L60 70 L36 70 Z", "M44 26 L52 26 L52 33 L44 33 Z", "M42 44 L54 44", "M42 52 L54 52", "M42 60 L50 60"],
  // Design tour — overlapping material swatches
  ["M30 36 L54 36 L54 60 L30 60 Z", "M42 46 L66 46 L66 70 L42 70 Z"],
  // Build — side-view plank chair (tall back board doubling as the back leg, seat board, front leg)
  ["M34 20 L42 20 L42 80 L34 80 Z", "M34 52 L66 52 L66 60 L34 60 Z", "M58 60 L66 60 L66 80 L58 80 Z"],
  // Inspect — magnifier with a check
  ["M58 46 A14 14 0 1 1 30 46 A14 14 0 1 1 58 46", "M54 56 L70 72", "M37 47 L42 52 L51 40"],
  // Export — wooden shipping crate
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
