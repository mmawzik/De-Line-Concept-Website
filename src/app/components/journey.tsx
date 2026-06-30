import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  // The turn between the two rows is drawn as an SVG path between the last
  // dot of row 1 and the first dot of row 2 — a semicircle on the desktop
  // "U" layout, or a plain straight bridge on the stacked mobile timeline
  // (where the rail would otherwise stop dead at the row boundary). We
  // measure live positions so it stays correct at any width or text length.
  const dotTopRef = useRef<HTMLSpanElement | null>(null);
  const dotBottomRef = useRef<HTMLSpanElement | null>(null);
  const [arc, setArc] = useState<{ d: string; w: number; h: number } | null>(null);

  useLayoutEffect(() => {
    if (compact) return;
    const measure = () => {
      const c = ref.current;
      const a = dotTopRef.current;
      const b = dotBottomRef.current;
      if (!c || !a || !b) {
        setArc(null);
        return;
      }
      const cr = c.getBoundingClientRect();
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      const mobile = window.innerWidth <= 720;
      const x = ar.left + ar.width / 2 - cr.left;
      const yTop = ar.top + ar.height / 2 - cr.top;
      const yBottom = br.top + br.height / 2 - cr.top;
      const d = mobile
        ? `M ${x} ${yTop} L ${x} ${yBottom}`
        : `M ${x} ${yTop} A ${Math.abs(yBottom - yTop) / 2} ${Math.abs(yBottom - yTop) / 2} 0 0 1 ${x} ${yBottom}`;
      setArc({ d, w: cr.width, h: cr.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [compact, t]);

  if (compact) {
    return (
      <div ref={ref} className="dl-journey compact">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Two rows of three, the second running right-to-left so the path
  // snakes (a "U") instead of cramming six steps into one tiny row.
  const rows = [t.journey.stages.slice(0, 3), t.journey.stages.slice(3, 6)];

  return (
    <div ref={ref} className="dl-journey dl-journey-snake">
      {arc && (
        <svg
          className="dl-journey-arc"
          width={arc.w}
          height={arc.h}
          viewBox={`0 0 ${arc.w} ${arc.h}`}
          aria-hidden="true"
        >
          <path d={arc.d} pathLength={1} />
        </svg>
      )}
      {rows.map((row, rowIndex) => (
        <div className="dl-journey-row" data-dir={rowIndex === 0 ? "ltr" : "rtl"} key={rowIndex}>
          <div className="dl-journey-rail" aria-hidden="true" />
          <div className="dl-journey-track">
            {row.map((s, j) => {
              const i = rowIndex * 3 + j;
              return (
                <div className="dl-journey-stage" key={s.label} style={{ ["--i" as string]: i }}>
                  <div className="dl-journey-glyph">
                    <svg viewBox="0 0 96 96" role="img" aria-label={s.label}>
                      {GLYPHS[i].map((d, k) => (
                        <path key={k} d={d} pathLength={1} />
                      ))}
                    </svg>
                  </div>
                  <div className="dl-journey-railslot">
                    <span
                      className="dl-journey-dot"
                      ref={i === 2 ? dotTopRef : i === 3 ? dotBottomRef : undefined}
                    />
                  </div>
                  <div className="dl-journey-text">
                    <div className="dl-journey-num">{`0${i + 1}`}</div>
                    <div className="dl-journey-label">{s.label}</div>
                    <div className="dl-journey-desc">{s.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Journey() {
  const t = useT();
  return (
    <section id="journey" className="dl-section">
      <Container>
        <div className="dl-stack" style={{ maxWidth: 720, marginBottom: 64, gap: 16 }}>
          <SectionHeading style={{ maxWidth: "16ch" }}>{t.journey.heading}</SectionHeading>
          <Lead>{t.journey.lead}</Lead>
        </div>
        <JourneyStrip />
      </Container>
    </section>
  );
}
