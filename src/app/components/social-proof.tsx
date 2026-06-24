import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow, Lead, SectionHeading } from "./brand";
import { useT } from "../providers";

/* Inline chevron — centers crisply in the round nav buttons, unlike the
   serif &lsaquo;/&rsaquo; glyphs which render low within their line box. */
function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"} />
    </svg>
  );
}

export function SocialProof() {
  const t = useT();
  const items = t.social.testimonials;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Auto-advance; timer keyed on idx so manual nav resets the dwell.
  useEffect(() => {
    if (paused || reduce.current || items.length <= 1) return;
    const id = window.setTimeout(() => setIdx((i) => (i + 1) % items.length), 7000);
    return () => window.clearTimeout(id);
  }, [idx, paused, items.length]);

  const go = (n: number) => setIdx((n + items.length) % items.length);
  const active = items[idx];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="dl-section">
      <Container>
        <style>{carouselCss}</style>
        <div
          className="dl-social-split"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="dl-social-left dl-stack" style={{ gap: 16 }}>
            <Eyebrow>{t.social.eyebrow}</Eyebrow>
            <SectionHeading>{t.social.heading}</SectionHeading>
            <Lead>{t.social.lead}</Lead>

            <div className="dl-social-controls">
              <button className="dl-quote-nav" aria-label={t.social.prev} onClick={() => go(idx - 1)}>
                <Chevron dir="left" />
              </button>
              <button className="dl-quote-nav" aria-label={t.social.next} onClick={() => go(idx + 1)}>
                <Chevron dir="right" />
              </button>
              <div className="dl-social-count">
                <span>{pad(idx + 1)}</span> / {pad(items.length)}
              </div>
            </div>

            <div className="dl-quote-dots">
              {items.map((tm, i) => (
                <button
                  key={tm.author}
                  className={`dl-dot${i === idx ? " on" : ""}`}
                  aria-label={tm.author}
                  aria-current={i === idx}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
          </div>

          <div className="dl-social-right" aria-live="polite">
            <blockquote key={idx} className="dl-quote">
              <div className="dl-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="dl-quote-text">{active.quote}</p>
              <div className="dl-quote-cite">
                <div className="dl-quote-author">{active.author}</div>
                <div className="dl-quote-org">{active.org}</div>
              </div>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}

const carouselCss = `
.dl-social-split{
  display:grid;grid-template-columns:0.9fr 1.1fr;gap:clamp(32px,5vw,76px);align-items:center;
}
.dl-social-left{max-width:460px}

.dl-social-controls{display:flex;align-items:center;gap:16px;margin-top:10px}
.dl-social-count{font-family:var(--font-display);font-size:16px;color:var(--deline-text-2);letter-spacing:.04em}
.dl-social-count span{color:var(--deline-text)}

.dl-quote-nav{
  flex:none;width:46px;height:46px;border-radius:999px;border:1px solid var(--deline-rule);
  background:transparent;color:var(--deline-text-2);font-family:var(--font-display);
  font-size:28px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;
  transition:color .25s ease,border-color .25s ease,transform .25s ease;
}
.dl-quote-nav:hover{border-color:var(--deline-gold);color:var(--deline-gold);transform:translateY(-1px)}

.dl-quote-dots{display:flex;gap:10px;margin-top:6px}
.dl-dot{
  width:8px;height:8px;border-radius:999px;border:none;padding:0;cursor:pointer;
  background:var(--deline-rule);transition:width .4s cubic-bezier(.19,.7,.2,1),background .4s ease;
}
.dl-dot.on{width:28px;background:var(--deline-gold)}
.dl-dot:hover{background:var(--deline-text-2)}
.dl-dot.on:hover{background:var(--deline-gold)}

.dl-social-right{min-height:clamp(240px,26vw,300px);display:flex;align-items:center}
.dl-quote{margin:0;display:flex;flex-direction:column;align-items:flex-start;gap:22px;text-align:left}
.dl-quote > *{animation:dl-q-in .9s cubic-bezier(.19,.7,.2,1) both}
.dl-quote .dl-quote-mark{animation-delay:0s}
.dl-quote .dl-quote-text{animation-delay:.12s}
.dl-quote .dl-quote-cite{animation-delay:.26s}
.dl-quote-mark{font-family:var(--font-display);font-size:64px;line-height:.5;color:var(--deline-gold)}
.dl-quote-text{
  font-family:var(--font-display);font-weight:400;font-size:clamp(22px,2.6vw,32px);
  line-height:1.45;color:var(--deline-text);margin:0;max-width:24ch;
}
.dl-quote-cite{margin-top:6px}
.dl-quote-author{
  font-family:var(--font-sans);font-weight:600;font-size:12px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--deline-text);
}
.dl-quote-org{font-family:var(--font-sans);font-size:13px;color:var(--deline-text-2);margin-top:8px}

@keyframes dl-q-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}

@media (max-width:760px){
  .dl-social-split{grid-template-columns:1fr;gap:36px}
  .dl-social-left{max-width:none}
  .dl-social-right{min-height:0}
}
@media (prefers-reduced-motion: reduce){
  .dl-quote > *{animation:none}
}
`;
