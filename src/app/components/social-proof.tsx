import { useEffect, useRef, useState } from "react";
import { Container, SectionHeading } from "./brand";
import { useT } from "../providers";

export function SocialProof() {
  const t = useT();
  const items = t.social.testimonials;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Auto-advance. Timer is keyed on idx, so any manual nav resets the dwell.
  useEffect(() => {
    if (paused || reduce.current || items.length <= 1) return;
    const id = window.setTimeout(() => setIdx((i) => (i + 1) % items.length), 7000);
    return () => window.clearTimeout(id);
  }, [idx, paused, items.length]);

  const go = (n: number) => setIdx((n + items.length) % items.length);
  const active = items[idx];

  return (
    <section className="dl-section">
      <Container>
        <style>{carouselCss}</style>
        <div className="dl-stack" style={{ maxWidth: 720, marginBottom: 48, gap: 16 }}>
          <SectionHeading>{t.social.heading}</SectionHeading>
        </div>

        <div
          className="dl-quotes"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="dl-quote-nav" aria-label={t.social.prev} onClick={() => go(idx - 1)}>
            &lsaquo;
          </button>

          <div className="dl-quote-stage" aria-live="polite">
            <blockquote key={idx} className="dl-quote">
              <div className="dl-quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="dl-quote-text">{active.quote}</p>
              <div className="dl-quote-cite">
                <div className="dl-quote-author">{active.author}</div>
                <div className="dl-quote-org">{active.org}</div>
              </div>
            </blockquote>
          </div>

          <button className="dl-quote-nav" aria-label={t.social.next} onClick={() => go(idx + 1)}>
            &rsaquo;
          </button>
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
      </Container>
    </section>
  );
}

const carouselCss = `
.dl-quotes{display:flex;align-items:center;gap:clamp(8px,2.5vw,32px);justify-content:center}
.dl-quote-stage{
  flex:1;max-width:780px;min-height:clamp(260px,30vh,320px);
  display:flex;align-items:center;justify-content:center;
}
.dl-quote{
  margin:0;text-align:center;display:flex;flex-direction:column;align-items:center;gap:24px;
}
.dl-quote > *{animation:dl-q-in .9s cubic-bezier(.19,.7,.2,1) both}
.dl-quote .dl-quote-mark{animation-delay:0s}
.dl-quote .dl-quote-text{animation-delay:.12s}
.dl-quote .dl-quote-cite{animation-delay:.26s}
.dl-quote-mark{font-family:var(--font-display);font-size:60px;line-height:.5;color:var(--deline-gold)}
.dl-quote-text{
  font-family:var(--font-display);font-weight:400;font-size:clamp(21px,2.5vw,30px);
  line-height:1.5;color:var(--deline-text);margin:0;max-width:44ch;
}
.dl-quote-cite{margin-top:4px}
.dl-quote-author{
  font-family:var(--font-sans);font-weight:600;font-size:12px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--deline-text);
}
.dl-quote-org{font-family:var(--font-sans);font-size:13px;color:var(--deline-text-2);margin-top:8px}

.dl-quote-nav{
  flex:none;width:48px;height:48px;border-radius:999px;border:1px solid var(--deline-rule);
  background:transparent;color:var(--deline-text-2);font-family:var(--font-display);
  font-size:30px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;
  transition:color .25s ease,border-color .25s ease,transform .25s ease;
}
.dl-quote-nav:hover{border-color:var(--deline-gold);color:var(--deline-gold);transform:translateY(-1px)}

.dl-quote-dots{display:flex;gap:10px;justify-content:center;margin-top:40px}
.dl-dot{
  width:8px;height:8px;border-radius:999px;border:none;padding:0;cursor:pointer;
  background:var(--deline-rule);transition:width .4s ease,background .4s ease;
}
.dl-dot.on{width:30px;background:var(--deline-gold)}
.dl-dot:hover{background:var(--deline-text-2)}
.dl-dot.on:hover{background:var(--deline-gold)}

@keyframes dl-q-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}

@media (max-width:600px){
  .dl-quote-nav{display:none}
}
@media (prefers-reduced-motion: reduce){
  .dl-quote > *{animation:none}
}
`;
