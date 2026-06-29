import { useEffect, useRef } from "react";
import { CHINA_VIEWBOX, CHINA_TRANSFORM, CHINA_PATHS } from "./china-path";

/* City pins, in the SVG's top-level viewBox (0–1024) space.
   Tuned by eye against the rendered outline (not a true geographic projection). */
const FOSHAN = { x: 760, y: 797 };
const OTHER_CITIES = [
  { x: 744, y: 772, label: "Guangzhou", side: "left" as const },
  { x: 780, y: 833, label: "Hong Kong", side: "right" as const },
  { x: 730, y: 810, label: "Zhongshan", side: "left" as const },
];

export function ChinaMap({ label, cityLabel }: { label: string; cityLabel: string }) {
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
          <circle className="dot" r="6" />
          <text className="dl-china-label" x="14" y="4">{cityLabel}</text>
        </g>
        {OTHER_CITIES.map((c) => (
          <g key={c.label} className="dl-china-pin" transform={`translate(${c.x} ${c.y})`}>
            <circle className="dot" r="6" />
            <text
              className="dl-china-label"
              x={c.side === "left" ? -14 : 14}
              y="4"
              textAnchor={c.side === "left" ? "end" : "start"}
            >
              {c.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
