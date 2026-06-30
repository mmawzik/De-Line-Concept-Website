import { useEffect, useRef } from "react";
import { CHINA_VIEWBOX, CHINA_TRANSFORM, CHINA_PATHS } from "./china-path";

/* Pins, in the SVG's top-level viewBox (0–1024) space.
   Tuned by eye against the rendered outline (not a true geographic projection). */
const FOSHAN = { x: 742, y: 812 };
const ZHONGSHAN = { x: 744, y: 837 };

export function ChinaMap({
  label,
  cityLabel,
  secondaryCityLabel,
}: {
  label: string;
  cityLabel: string;
  secondaryCityLabel: string;
}) {
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
    <div ref={ref} className="dl-china" role="img" aria-label={label}>
      <svg viewBox={CHINA_VIEWBOX} aria-hidden="true">
        <g className="dl-china-land" transform={CHINA_TRANSFORM}>
          {CHINA_PATHS.map((d, i) => (
            <path key={i} d={d} pathLength={1} />
          ))}
        </g>
        <g className="dl-china-pin" transform={`translate(${FOSHAN.x} ${FOSHAN.y})`}>
          <circle className="dot" r="8" />
          <text className="dl-china-label" x="16" y="5">{cityLabel}</text>
        </g>
        <g className="dl-china-pin" transform={`translate(${ZHONGSHAN.x} ${ZHONGSHAN.y})`}>
          <circle className="dot" r="8" />
          <text className="dl-china-label" x="-16" y="5" textAnchor="end">{secondaryCityLabel}</text>
        </g>
      </svg>
    </div>
  );
}
