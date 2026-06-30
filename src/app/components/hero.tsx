import { Fragment, useEffect, useRef, useState } from "react";
import { Container, gold, goldBtn, onGold, textLight, textLight2 } from "./brand";
import { useT } from "../providers";

/* ---- Furniture pieces, all drawn in the same language:
   guides (dimension marks) → gold outline strokes → built fills. ---- */
type GuidePath = { cls: "g" | "gd"; d: string };
type BuiltPath = { cls: "uph" | "wood" | "woodline" | "seam" | "brass"; d: string };
type Piece = {
  guides: GuidePath[];
  texts: { x: number; y: number; label: string }[];
  built: BuiltPath[];
  lines: string[];
  scale?: number; // shrink an oversized piece toward the baseline so it sits in scale with the others
};

const PIECES: Piece[] = [
  // 01 — Lounge chair (side view)
  {
    guides: [
      { cls: "g", d: "M80 420 L410 420" },
      { cls: "gd", d: "M400 100 L400 420 M392 100 L408 100 M392 420 L408 420" },
      { cls: "gd", d: "M124 434 L334 434 M124 428 L124 440 M334 428 L334 440" },
    ],
    texts: [
      { x: 405, y: 265, label: "H" },
      { x: 224, y: 449, label: "W" },
    ],
    built: [
      { cls: "woodline", d: "M331 117 L306 254" },
      { cls: "uph", d: "M266 254 L290 113 Q298 100 314 100 Q332 102 328 120 L304 254 Z" },
      { cls: "seam", d: "M268 253 Q289 261 302 252" },
      { cls: "wood", d: "M292 314 L302 314 L334 420 L324 420 Z" },
      { cls: "wood", d: "M150 300 L300 300 Q307 300 307 307 L307 314 L150 314 Q146 314 146 307 Z" },
      { cls: "woodline", d: "M152 230 L154 300" },
      { cls: "woodline", d: "M310 223 Q221 217 152 230" },
      { cls: "uph", d: "M150 254 L296 254 Q308 254 308 266 L308 284 Q308 296 296 296 L150 296 Q138 296 138 284 L138 266 Q138 256 150 254 Z" },
      { cls: "seam", d: "M140 282 Q220 286 306 282" },
      { cls: "wood", d: "M150 314 L160 314 L132 420 L122 420 Z" },
    ],
    lines: [
      "M292 314 L302 314 L334 420 L324 420 Z",
      "M150 314 L160 314 L132 420 L122 420 Z",
      "M150 300 L300 300 Q307 300 307 307 L307 314 L150 314 Q146 314 146 307 Z",
      "M152 230 L154 300",
      "M310 223 Q221 217 152 230",
      "M150 254 L296 254 Q308 254 308 266 L308 284 Q308 296 296 296 L150 296 Q138 296 138 284 L138 266 Q138 256 150 254 Z",
      "M140 282 Q220 286 306 282",
      "M266 254 L290 113 Q298 100 314 100 Q332 102 328 120 L304 254 Z",
      "M331 117 L306 254",
      "M268 253 Q289 261 302 252",
    ],
  },

  // 02 — Sofa (front view, club style: rounded back behind plump arms)
  {
    scale: 0.8,
    guides: [
      { cls: "g", d: "M80 420 L410 420" },
      { cls: "gd", d: "M420 152 L420 420 M412 152 L428 152 M412 420 L428 420" },
      { cls: "gd", d: "M148 434 L380 434 M148 428 L148 440 M380 428 L380 440" },
    ],
    texts: [
      { x: 425, y: 290, label: "H" },
      { x: 261, y: 449, label: "W" },
    ],
    built: [
      { cls: "uph", d: "M197 319 L184 223 Q170 166 204 166 L334 166 Q368 166 354 223 L341 319 Z" },
      { cls: "uphBase", d: "M158 357 L380 357 L382 382 Q382 400 364 400 L174 400 Q156 400 156 382 Z" },
      { cls: "uphSeat", d: "M204 358 L197 320 Q204 315 220 313 Q269 306 318 313 Q334 315 341 320 L334 358 Z" },
      { cls: "seam", d: "M206 357 L332 357" },
      { cls: "uphArm", d: "M158 356 L153 279 Q119 229 160 226 Q187 222 189 265 L204 359 Z" },
      { cls: "uphArm", d: "M380 356 L385 279 Q419 229 378 226 Q351 222 349 265 L334 359 Z" },
      { cls: "wood", d: "M187 400 L209 400 L203 420 L189 420 Z" },
      { cls: "wood", d: "M329 400 L351 400 L349 420 L335 420 Z" },
    ],
    lines: [
      "M187 400 L209 400 L203 420 L189 420 Z",
      "M329 400 L351 400 L349 420 L335 420 Z",
      "M158 357 L380 357 L382 382 Q382 400 364 400 L174 400 Q156 400 156 382 Z",
      "M158 356 L153 279 Q119 229 160 226 Q187 222 189 265 L204 359 Z",
      "M380 356 L385 279 Q419 229 378 226 Q351 222 349 265 L334 359 Z",
      "M204 358 L197 320 Q204 315 220 313 Q269 306 318 313 Q334 315 341 320 L334 358 Z",
      "M197 319 L184 223 Q170 166 204 166 L334 166 Q368 166 354 223 L341 319 Z",
    ],
  },

  // 03 — Wardrobe (front view)
  {
    guides: [
      { cls: "g", d: "M80 420 L410 420" },
      { cls: "gd", d: "M400 100 L400 420 M392 100 L408 100 M392 420 L408 420" },
      { cls: "gd", d: "M170 434 L360 434 M170 428 L170 440 M360 428 L360 440" },
    ],
    texts: [
      { x: 405, y: 265, label: "H" },
      { x: 261, y: 449, label: "W" },
    ],
    built: [
      { cls: "wood", d: "M164 100 L366 100 L366 114 L164 114 Z" },
      { cls: "wood", d: "M170 114 L360 114 L360 400 L170 400 Z" },
      { cls: "drawer", d: "M184 128 L251 128 L251 338 L184 338 Z" },
      { cls: "drawer", d: "M279 128 L346 128 L346 338 L279 338 Z" },
      { cls: "drawer", d: "M184 360 L346 360 L346 392 L184 392 Z" },
      { cls: "seam", d: "M265 114 L265 352" },
      { cls: "seam", d: "M170 352 L360 352" },
      { cls: "seam", d: "M184 128 L251 128 L251 338 L184 338 Z" },
      { cls: "seam", d: "M279 128 L346 128 L346 338 L279 338 Z" },
      { cls: "seam", d: "M184 360 L346 360 L346 392 L184 392 Z" },
      { cls: "brass", d: "M256 246 L256 272 M274 246 L274 272" },
      { cls: "brass", d: "M251 376 L279 376" },
      { cls: "leg", d: "M180 400 L192 400 L190 420 L182 420 Z" },
      { cls: "leg", d: "M338 400 L350 400 L348 420 L340 420 Z" },
    ],
    lines: [
      "M180 400 L192 400 L190 420 L182 420 Z",
      "M338 400 L350 400 L348 420 L340 420 Z",
      "M170 114 L360 114 L360 400 L170 400 Z",
      "M164 100 L366 100 L366 114 L164 114 Z",
      "M265 114 L265 352",
      "M170 352 L360 352",
      "M184 128 L251 128 L251 338 L184 338 Z",
      "M279 128 L346 128 L346 338 L279 338 Z",
      "M184 360 L346 360 L346 392 L184 392 Z",
      "M256 246 L256 272 M274 246 L274 272",
      "M251 376 L279 376",
    ],
  },
];

/* Per-piece timing: outline strokes draw sequentially, then the build wipe. */
function pieceTiming(piece: Piece) {
  const builtDelay = 0.45 + piece.lines.length * 0.18 + 0.55;
  return { builtDelay, holdEnd: (builtDelay + 1.05 + 3.0) * 1000 };
}

export function Hero() {
  const t = useT();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const targetsRef = useRef<number[]>(t.hero.stats.map((s) => s.target));
  const [vals, setVals] = useState<number[]>(() => targetsRef.current.map(() => 0));
  const [idx, setIdx] = useState(0);
  const [run, setRun] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.remove("play");
    void el.offsetWidth;
    el.classList.add("play");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVals(targetsRef.current);
      return;
    }

    const t0 = window.setTimeout(() => {
      const start = performance.now();
      const dur = 1300;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setVals(targetsRef.current.map((target) => Math.round(e * target)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 1500);

    return () => window.clearTimeout(t0);
  }, []);

  // Rotate through the furniture pieces: draw → build → hold → fade → next.
  // Paused while the tab is hidden (CSS animation clocks stop there);
  // on return the current piece remounts and replays from the start.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (document.hidden) {
      const onVis = () => {
        if (!document.hidden) setRun((r) => r + 1);
      };
      document.addEventListener("visibilitychange", onVis);
      return () => document.removeEventListener("visibilitychange", onVis);
    }

    const { holdEnd } = pieceTiming(PIECES[idx]);
    const t1 = window.setTimeout(() => setLeaving(true), holdEnd);
    const t2 = window.setTimeout(() => {
      setLeaving(false);
      setIdx((i) => (i + 1) % PIECES.length);
    }, holdEnd + 500);
    const onVis = () => {
      if (document.hidden) {
        setLeaving(false);
        setRun((r) => r + 1);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [idx, run]);

  const piece = PIECES[idx];
  const { builtDelay } = pieceTiming(piece);

  return (
    <section id="top" style={{ padding: "clamp(64px, 9vw, 120px) 0 clamp(72px, 10vw, 140px)" }}>
      <Container>
        <style>{heroCss}</style>
        <div ref={heroRef} className="deline-hero">
          <div className="content">
            <h1>
              {t.hero.title.map((ln, i) => (
                <span className={`line l${i + 1}`} key={i}>
                  <span>
                    {ln.a}
                    {ln.em && <em>{ln.em}</em>}
                    {ln.b}
                  </span>
                </span>
              ))}
            </h1>
            <p className="sub">{t.hero.sub}</p>
            <div className="stats">
              {t.hero.stats.map((s, i) => (
                <Fragment key={s.label}>
                  {i > 0 && <div className="stat-divider" />}
                  <div className="stat">
                    <div className="num">
                      {vals[i] ?? 0}
                      <span>+</span>
                    </div>
                    <div className="lab">{s.label}</div>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="cta">
              <a className="btn btn-primary" href="#contact">{t.hero.ctaSecondary}</a>
              <a className="btn-text" href="#portfolio">
                {t.hero.ctaPrimary}
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="stage">
            <div
              key={`${idx}-${run}`}
              className={`piece-wrap${leaving ? " leaving" : ""}`}
              style={{
                ["--built-delay" as string]: `${builtDelay}s`,
                ["--dim-delay" as string]: `${builtDelay + 0.45}s`,
                ["--float-delay" as string]: `${builtDelay + 1.6}s`,
              }}
            >
              <svg viewBox="104 80 316 384" aria-label={t.hero.pieces[idx]}>
                <defs>
                  <linearGradient id="uph" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#3a3026" />
                    <stop offset="1" stopColor="#201a14" />
                  </linearGradient>
                  <linearGradient id="uphSeat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#4c4032" />
                    <stop offset="1" stopColor="#2d2419" />
                  </linearGradient>
                  <linearGradient id="uphArm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#433829" />
                    <stop offset="1" stopColor="#261e15" />
                  </linearGradient>
                  <linearGradient id="uphBase" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2a2218" />
                    <stop offset="1" stopColor="#140f09" />
                  </linearGradient>
                  <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#6a5639" />
                    <stop offset="1" stopColor="#43361f" />
                  </linearGradient>
                  <linearGradient id="drawer" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#8c7149" />
                    <stop offset="1" stopColor="#5e4a2c" />
                  </linearGradient>
                  <linearGradient id="leg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#473722" />
                    <stop offset="1" stopColor="#271d0e" />
                  </linearGradient>
                </defs>

                <g transform={piece.scale ? `translate(262 420) scale(${piece.scale}) translate(-262 -420)` : undefined}>
                  <g id="guides">
                    {piece.guides.map((g, i) => (
                      <path key={i} className={g.cls} pathLength={g.cls === "gd" ? 1 : undefined} d={g.d} />
                    ))}
                    {piece.texts.map((tx, i) => (
                      <text key={i} x={tx.x} y={tx.y}>{tx.label}</text>
                    ))}
                  </g>

                  <g id="built">
                    {piece.built.map((b, i) => (
                      <path key={i} className={b.cls} d={b.d} />
                    ))}
                  </g>

                  <g id="lines">
                    {piece.lines.map((d, i) => (
                      <path key={i} pathLength={1} d={d} style={{ ["--i" as string]: i }} />
                    ))}
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const heroCss = `
.deline-hero{display:grid;grid-template-columns:1.05fr 0.95fr;gap:clamp(32px,5vw,56px);align-items:center}
.deline-hero .eyebrow{
  font-family:var(--font-sans);font-size:11px;letter-spacing:0.24em;text-transform:uppercase;
  color:${gold};display:flex;align-items:center;gap:14px;opacity:0;font-weight:600;
}
.deline-hero .eyebrow-rule{display:inline-block;width:28px;height:1px;background:${gold};opacity:.7}
.deline-hero h1{
  font-family:var(--font-display);font-weight:800;
  font-size:clamp(40px,6.2vw,74px);line-height:1.04;letter-spacing:-0.03em;
  margin:8px 0 28px;color:${textLight};
}
/* Russian words run longer — shrink the headline a notch so each line
   (esp. "Спроектирована вами,") stays on a single row like the English. */
html[lang="ru"] .deline-hero h1{font-size:clamp(32px,4.2vw,52px)}
.deline-hero h1 .line{display:block;overflow:hidden;padding-bottom:.14em;white-space:nowrap}
.deline-hero h1 .line > span{display:block;transform:translateY(116%)}
.deline-hero h1 em{font-style:normal;color:${textLight};font-weight:900}
/* Italics on Cyrillic display serifs read as a faux-slant rather than a true
   italic cut — keep the gold emphasis but drop the slant for Russian. The same
   holds for CJK, where a synthetic slant on Chinese glyphs looks broken. */
html[lang="ru"] .deline-hero h1 em,
html[lang="zh"] .deline-hero h1 em{font-style:normal}
.deline-hero .sub{
  font-family:var(--font-sans);color:${textLight2};font-size:clamp(16px,1.5vw,17px);line-height:1.6;
  max-width:52ch;opacity:0;margin:0 0 32px;
}
.deline-hero .stats{display:flex;margin:0 0 32px;opacity:0;align-items:flex-start;flex-wrap:wrap;gap:0}
.deline-hero .stat{padding-right:0}
.deline-hero .stat-divider{width:1px;background:var(--deline-divider);margin:0 clamp(16px,2.4vw,28px);align-self:stretch}
.deline-hero .stat .num{font-family:var(--font-display);font-size:clamp(30px,3.6vw,38px);line-height:1;color:${textLight};font-weight:800;letter-spacing:-0.02em}
.deline-hero .stat .num span{color:${gold}}
.deline-hero .stat .lab{
  font-family:var(--font-sans);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;
  color:${textLight2};margin-top:10px;max-width:14ch;line-height:1.45;
}
.deline-hero .cta{display:flex;gap:clamp(18px,2.4vw,30px);opacity:0;flex-wrap:wrap;align-items:center}
.deline-hero .btn{
  font-family:var(--font-sans);font-size:13px;letter-spacing:0.1em;text-transform:uppercase;font-weight:600;
  padding:16px 30px;border-radius:999px;text-decoration:none;display:inline-block;
  border:1px solid transparent;transition:transform .25s ease,background .25s ease,border-color .25s ease;
}
.deline-hero .btn-primary{background:${goldBtn};color:${onGold};border-color:${goldBtn}}
.deline-hero .btn-primary:hover{transform:translateY(-2px);filter:brightness(1.06)}
.deline-hero .btn-text{
  font-family:var(--font-sans);font-size:13px;letter-spacing:0.1em;text-transform:uppercase;font-weight:600;
  color:${textLight2};text-decoration:none;display:inline-flex;align-items:center;gap:9px;
  transition:color .25s ease;
}
.deline-hero .btn-text:hover{color:${textLight}}
.deline-hero .btn-text .arrow{color:${gold};transition:transform .25s ease}
.deline-hero .btn-text:hover .arrow{transform:translateX(4px)}

.deline-hero .stage{position:relative;aspect-ratio:1/1;width:100%}
.deline-hero .piece-wrap{width:100%;height:100%}
.deline-hero .piece-wrap.leaving{animation:dl-out .5s ease forwards}
.deline-hero .stage svg{width:100%;height:100%;display:block;overflow:visible;filter:grayscale(1) contrast(1.05) brightness(1.08);animation:dl-float 7s ease-in-out var(--float-delay,4.4s) infinite alternate}
.deline-hero #guides{opacity:0;animation:dl-fade .7s ease .2s forwards}
.deline-hero #guides .g{stroke:var(--deline-divider);stroke-width:1;fill:none}
.deline-hero #guides .gd{
  stroke:${gold};stroke-width:1;fill:none;opacity:.5;
  stroke-dasharray:1;stroke-dashoffset:1;animation:dl-draw 1.2s ease .3s forwards;
}
.deline-hero #guides text{fill:${gold};opacity:.6;font-family:var(--font-sans);font-size:9px;letter-spacing:0.12em}
.deline-hero #lines{animation:dl-dim .8s ease var(--dim-delay,3.3s) forwards}
.deline-hero #lines path{
  fill:none;stroke:${gold};stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;
  stroke-dasharray:1;stroke-dashoffset:1;
  animation:dl-draw .9s ease forwards;animation-delay:calc(.45s + var(--i,0) * .18s);
}
.deline-hero #built{clip-path:inset(100% 0 0 0);animation:dl-wipe 1.05s cubic-bezier(.4,0,.2,1) var(--built-delay,2.8s) forwards}
.deline-hero #built .uph{fill:url(#uph);stroke:rgba(198,168,117,.40);stroke-width:1;stroke-linejoin:round}
.deline-hero #built .uphSeat{fill:url(#uphSeat);stroke:rgba(198,168,117,.45);stroke-width:1;stroke-linejoin:round}
.deline-hero #built .uphArm{fill:url(#uphArm);stroke:rgba(198,168,117,.40);stroke-width:1;stroke-linejoin:round}
.deline-hero #built .uphBase{fill:url(#uphBase);stroke:rgba(198,168,117,.32);stroke-width:1;stroke-linejoin:round}
.deline-hero #built .wood{fill:url(#wood);stroke:rgba(198,168,117,.35);stroke-width:.8;stroke-linejoin:round}
.deline-hero #built .drawer{fill:url(#drawer);stroke:rgba(201,162,94,.45);stroke-width:1;stroke-linejoin:round}
.deline-hero #built .leg{fill:url(#leg);stroke:rgba(18,14,10,.5);stroke-width:.8;stroke-linejoin:round}
.deline-hero #built .woodline{fill:none;stroke:#6a5639;stroke-width:4;stroke-linecap:round}
.deline-hero #built .seam{fill:none;stroke:rgba(18,14,10,.55);stroke-width:1.3}
.deline-hero #built .brass{fill:none;stroke:${gold};stroke-width:2.5;stroke-linecap:round;opacity:.9}

.deline-hero.play .eyebrow{animation:dl-fade .7s ease .15s forwards}
.deline-hero.play h1 .line > span{animation:dl-rise .9s cubic-bezier(.19,.7,.2,1) forwards}
.deline-hero.play h1 .l1 > span{animation-delay:.28s}
.deline-hero.play h1 .l2 > span{animation-delay:.46s}
.deline-hero.play h1 .l3 > span{animation-delay:.64s}
.deline-hero.play .sub{animation:dl-fadeUp .8s ease 1.05s forwards}
.deline-hero.play .stats{animation:dl-fadeUp .8s ease 1.5s forwards}
.deline-hero.play .cta{animation:dl-fadeUp .8s ease 1.95s forwards}

@keyframes dl-fade{to{opacity:1}}
@keyframes dl-fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes dl-rise{to{transform:translateY(0)}}
@keyframes dl-draw{to{stroke-dashoffset:0}}
@keyframes dl-wipe{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes dl-dim{from{opacity:1}to{opacity:.3}}
@keyframes dl-float{from{transform:translateY(0)}to{transform:translateY(-9px)}}
@keyframes dl-out{to{opacity:0}}

@media (max-width: 860px){
  .deline-hero{grid-template-columns:1fr;gap:8px}
  .deline-hero .stage{max-width:420px;margin-top:8px;order:-1;aspect-ratio:4/3}
}

@media (prefers-reduced-motion: reduce){
  .deline-hero .eyebrow,.deline-hero .sub,.deline-hero .stats,.deline-hero .cta{opacity:1!important;animation:none!important;transform:none!important}
  .deline-hero h1 .line > span{transform:none!important;animation:none!important}
  .deline-hero #guides{opacity:1!important;animation:none!important}
  .deline-hero #guides .gd,.deline-hero #lines path{stroke-dashoffset:0!important;animation:none!important}
  .deline-hero #lines{opacity:.3!important;animation:none!important}
  .deline-hero #built{clip-path:inset(0 0 0 0)!important;animation:none!important}
  .deline-hero .stage svg{animation:none!important}
  .deline-hero .piece-wrap.leaving{animation:none!important}
}
`;
