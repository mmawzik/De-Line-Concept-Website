import { useEffect, useRef } from "react";
import { CHINA_VIEWBOX, CHINA_TRANSFORM, CHINA_PATHS } from "./china-path";

/* Foshan pin, in the SVG's top-level viewBox (0–1024) space.
   Pearl River Delta, south-central coast. Tuned against the rendered outline. */
const FOSHAN = { x: 662, y: 819 };

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
          <circle className="ping" r="13" />
          <circle className="ping ping2" r="13" />
          <circle className="dot" r="10" />
          <text className="dl-china-label" x="26" y="13">{cityLabel}</text>
        </g>
      </svg>
    </div>
  );
}
