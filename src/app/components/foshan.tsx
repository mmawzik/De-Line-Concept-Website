import { useEffect, useRef } from "react";
import { Container } from "./brand";
import { ChinaMap } from "./china-map";
import { useT } from "../providers";

export function Foshan() {
  const t = useT();
  const ref = useRef<HTMLDivElement | null>(null);

  // Reveal the cells in a gentle stagger as the section scrolls into view.
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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="foshan" className="dl-section">
      <Container>
        <style>{corridorCss}</style>

        <div className="dl-corridor-hero">
          <div className="dl-corridor-text">
            <h2 className="dl-corridor-h">{t.foshan.heading}</h2>
            <p className="dl-corridor-lead">{t.foshan.lead}</p>
          </div>
          <ChinaMap label={t.foshan.locatorLabel} cityLabel={t.foshan.cityLabel} secondaryCityLabel={t.foshan.secondaryCityLabel} />
        </div>

        <div ref={ref} className="dl-corridor-grid">
          {t.foshan.cards.map((c, i) => (
            <article className="dl-corridor-cell" key={c.title} style={{ ["--i" as string]: i }}>
              <div className="dl-corridor-num">{`0${i + 1}`}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

const corridorCss = `
.dl-corridor-hero{
  display:grid;grid-template-columns:1fr 1fr;align-items:center;
  gap:clamp(24px,4vw,56px);max-width:1080px;margin:0 auto clamp(16px,2vw,28px);
}
.dl-corridor-text{text-align:left}
.dl-corridor-h{
  font-family:var(--font-display);font-weight:600;font-size:clamp(28px,3.8vw,42px);
  line-height:1.12;letter-spacing:-0.01em;color:var(--deline-text);margin:0;
}
.dl-corridor-lead{
  font-family:var(--font-sans);font-size:clamp(15px,1.4vw,17px);line-height:1.6;
  color:var(--deline-text-2);margin:14px 0 0;max-width:42ch;
}

/* China map locator (line-art, draws in on scroll) */
.dl-china{display:flex;justify-content:center}
.dl-china svg{width:clamp(240px,27vw,380px);height:auto;overflow:visible}
.dl-china-land path{
  fill:none;stroke:var(--deline-gold);stroke-width:1.1;vector-effect:non-scaling-stroke;
  stroke-linejoin:round;stroke-linecap:round;opacity:.45;
  stroke-dasharray:1;stroke-dashoffset:1;
}
.dl-china.in .dl-china-land path{animation:dl-china-draw 1.3s cubic-bezier(.4,0,.2,1) forwards}
.dl-china-pin{opacity:0}
.dl-china.in .dl-china-pin{animation:dl-fade .45s ease .9s forwards}
.dl-china-pin .dot{fill:var(--deline-gold)}
.dl-china-label{
  font-family:var(--font-sans);font-size:32px;font-weight:600;letter-spacing:2px;
  text-transform:uppercase;fill:var(--deline-gold);dominant-baseline:middle;
}

@keyframes dl-china-draw{to{stroke-dashoffset:0}}
@keyframes dl-fade{to{opacity:1}}

.dl-corridor-grid{
  display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(12px,1.6vw,20px);
  max-width:1080px;margin:0 auto;
}
.dl-corridor-cell{
  position:relative;background:var(--deline-surface);
  border:1px solid var(--deline-divider);border-radius:var(--deline-radius);
  padding:clamp(20px,2.2vw,28px);
  display:flex;flex-direction:column;gap:10px;
  opacity:0;transform:translateY(22px);
  transition:border-color .3s ease,box-shadow .3s ease,background-color .3s ease;
}
.dl-corridor-grid.in .dl-corridor-cell{
  animation:dl-cell-in .7s cubic-bezier(.19,.7,.2,1) forwards;
  animation-delay:calc(var(--i,0) * .1s);
}
.dl-corridor-cell:hover{
  border-color:color-mix(in srgb, var(--deline-gold) 45%, transparent);
  background:var(--deline-surface-2);
  box-shadow:var(--deline-shadow);
}
.dl-corridor-num{
  font-family:var(--font-display);font-weight:500;font-size:clamp(22px,2.2vw,28px);
  line-height:1;color:var(--deline-gold);font-variant-numeric:tabular-nums;
}
.dl-corridor-cell h3{
  font-family:var(--font-display);font-weight:600;font-size:clamp(17px,1.7vw,20px);
  line-height:1.2;color:var(--deline-text);margin:0;
}
.dl-corridor-cell p{
  font-family:var(--font-sans);font-size:clamp(13px,1.2vw,14px);line-height:1.5;
  color:var(--deline-text-2);margin:0;
}

@keyframes dl-cell-in{to{opacity:1;transform:none}}

@media (max-width:900px){
  .dl-corridor-hero{grid-template-columns:1fr;text-align:center;gap:28px}
  .dl-corridor-text{text-align:center}
  .dl-corridor-lead{margin:14px auto 0}
  .dl-corridor-grid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:640px){
  .dl-corridor-grid{grid-template-columns:1fr}
}
@media (prefers-reduced-motion: reduce){
  .dl-corridor-cell{opacity:1;transform:none;animation:none}
  .dl-china-land path{stroke-dashoffset:0;animation:none}
  .dl-china-pin{opacity:1;animation:none}
  .dl-china-pin .ping{animation:none;opacity:0}
}
`;
