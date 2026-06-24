import { useEffect, useState } from "react";
import { Container, SectionHeading, Lead, CardTitle, CardBody, fontSans, gold, textLight, textLight2, radius, cardDark } from "./brand";
import { useT } from "../providers";

/* Inline chevron — centers crisply in the round carousel arrows. */
function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"} />
    </svg>
  );
}

/* Stock interior photos — placeholders until real project photography is ready. */
const PROJECT_IMAGES: string[][] = [
  [
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  ],
];

function Carousel({ images, alt, height }: { images: string[]; alt: string; height: number | string }) {
  const [i, setI] = useState(0);
  const go = (e: React.MouseEvent, dir: 1 | -1) => {
    e.stopPropagation();
    setI((v) => (v + dir + images.length) % images.length);
  };
  return (
    <div className="dl-carousel" style={{ height }}>
      <img key={i} src={images[i]} alt={alt} className="dl-carousel-img" />
      {images.length > 1 && (
        <>
          <button className="dl-carousel-arrow left" aria-label="Previous image" onClick={(e) => go(e, -1)}>
            <Chevron dir="left" />
          </button>
          <button className="dl-carousel-arrow right" aria-label="Next image" onClick={(e) => go(e, 1)}>
            <Chevron dir="right" />
          </button>
          <div className="dl-carousel-dots">
            {images.map((_, d) => (
              <span key={d} className={`dl-carousel-dot${d === i ? " on" : ""}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Portfolio() {
  const t = useT();
  const [filter, setFilter] = useState("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const projects = t.portfolio.projects;
  const filtered = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => filter === "all" || p.tag === filter);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenIdx(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx]);

  const active = openIdx !== null ? projects[openIdx] : null;

  return (
    <section id="portfolio" className="dl-section">
      <Container>
        <style>{portfolioCss}</style>

        <div className="dl-portfolio-head">
          <div className="dl-stack" style={{ maxWidth: 560, gap: 16 }}>
            <SectionHeading>{t.portfolio.heading}</SectionHeading>
            <Lead>{t.portfolio.lead}</Lead>
          </div>
          <div className="dl-filters">
            {t.portfolio.filters.map((f) => (
              <button
                key={f.key}
                className={`dl-filter-pill${filter === f.key ? " on" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="dl-grid-2">
          {filtered.map(({ p, i }) => (
            <article
              key={p.title}
              className="deline-card dl-portfolio-card"
              style={{ padding: 36, display: "flex", flexDirection: "column", gap: 20, cursor: "pointer" }}
              onClick={() => setOpenIdx(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpenIdx(i)}
            >
              <Carousel images={PROJECT_IMAGES[i]} alt={p.title} height={260} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: textLight2 }}>
                  {p.category}
                </div>
                <span className="dl-status-pill">{p.status}</span>
              </div>
              <div className="dl-card-title"><CardTitle>{p.title}</CardTitle></div>
              <CardBody>{p.body}</CardBody>
            </article>
          ))}
        </div>
      </Container>

      {active && (
        <div className="dl-modal-overlay" onClick={() => setOpenIdx(null)}>
          <div className="dl-modal" onClick={(e) => e.stopPropagation()}>
            <button className="dl-modal-close" aria-label={t.portfolio.close} onClick={() => setOpenIdx(null)}>
              &times;
            </button>
            <Carousel images={PROJECT_IMAGES[openIdx!]} alt={active.title} height={"clamp(260px, 42vw, 420px)"} />
            <div className="dl-modal-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div style={{ fontFamily: fontSans, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: textLight2 }}>
                  {active.category}
                </div>
                <span className="dl-status-pill">{active.status}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(24px,3vw,32px)", color: textLight, margin: "14px 0 0" }}>
                {active.title}
              </h3>
              <p style={{ fontFamily: fontSans, fontSize: 16, lineHeight: 1.65, color: textLight2, margin: "16px 0 0" }}>
                {active.body}
              </p>
              <div className="dl-modal-materials">
                <span style={{ color: gold, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Materials
                </span>
                <p style={{ margin: "8px 0 0", fontFamily: fontSans, fontSize: 14, lineHeight: 1.6, color: textLight2 }}>
                  {active.materials}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const portfolioCss = `
.dl-portfolio-head{
  display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;
  margin-bottom:40px;
}
.dl-filters{display:flex;gap:8px;flex-wrap:wrap}
.dl-filter-pill{
  font-family:var(--font-sans);font-weight:600;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;
  padding:9px 16px;border-radius:999px;border:1px solid var(--deline-rule);background:transparent;
  color:var(--deline-text-2);cursor:pointer;transition:border-color .2s ease,color .2s ease,background .2s ease;
}
.dl-filter-pill:hover{border-color:var(--deline-gold);color:var(--deline-text)}
.dl-filter-pill.on{background:var(--deline-gold-button);color:var(--deline-on-gold);border-color:var(--deline-gold-button)}

.dl-portfolio-card{
  outline:none;
  transition:transform .5s cubic-bezier(.19,.7,.2,1),border-color .4s ease,box-shadow .4s ease,background-color .4s ease;
}
.dl-portfolio-card:focus-visible{box-shadow:0 0 0 2px var(--deline-gold)}
.dl-portfolio-card:hover{transform:translateY(-5px)}
.dl-portfolio-card .dl-card-title h3{transition:color .35s ease}
.dl-portfolio-card:hover .dl-card-title h3{color:var(--deline-gold) !important}

.dl-carousel{position:relative;width:100%;border-radius:${radius};overflow:hidden;background:var(--deline-bg-2)}
.dl-carousel-img{
  width:100%;height:100%;object-fit:cover;display:block;
  transform:scale(1.001);transition:transform .8s cubic-bezier(.19,.7,.2,1);
  animation:dl-carousel-fade .55s cubic-bezier(.19,.7,.2,1);
}
.dl-portfolio-card:hover .dl-carousel-img{transform:scale(1.05)}
.dl-carousel-arrow{
  position:absolute;top:50%;transform:translateY(-50%) scale(.82);width:38px;height:38px;border-radius:999px;
  border:1px solid rgba(255,255,255,0.35);background:rgba(10,12,16,0.45);color:#fff;backdrop-filter:blur(2px);
  font-family:var(--font-display);font-size:22px;line-height:1;cursor:pointer;
  display:flex;align-items:center;justify-content:center;opacity:0;
  transition:opacity .35s cubic-bezier(.19,.7,.2,1),transform .35s cubic-bezier(.19,.7,.2,1),background .25s ease,border-color .25s ease;
}
.dl-carousel:hover .dl-carousel-arrow{opacity:1;transform:translateY(-50%) scale(1)}
.dl-carousel-arrow:hover{background:rgba(10,12,16,0.75);border-color:var(--deline-gold);transform:translateY(-50%) scale(1.08)}
.dl-carousel-arrow:active{transform:translateY(-50%) scale(.96)}
.dl-carousel-arrow.left{left:10px}
.dl-carousel-arrow.right{right:10px}
.dl-carousel-dots{position:absolute;bottom:12px;left:0;right:0;display:flex;gap:6px;justify-content:center;z-index:2}
.dl-carousel-dot{
  width:6px;height:6px;border-radius:999px;background:rgba(255,255,255,0.45);
  transition:width .4s cubic-bezier(.19,.7,.2,1),background .3s ease;
}
.dl-carousel-dot.on{width:18px;background:#fff}

.dl-status-pill{
  font-family:var(--font-sans);font-weight:600;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;
  color:var(--deline-gold);border:1px solid var(--deline-rule);border-radius:999px;padding:4px 10px;white-space:nowrap;
  transition:border-color .3s ease,background-color .3s ease;
}
.dl-portfolio-card:hover .dl-status-pill{border-color:var(--deline-gold);background:color-mix(in srgb, var(--deline-gold) 8%, transparent)}

@keyframes dl-carousel-fade{from{opacity:0;transform:scale(1.03)}to{opacity:1;transform:scale(1.001)}}

.dl-modal-overlay{
  position:fixed;inset:0;background:rgba(8,10,14,0.72);z-index:1000;
  display:flex;align-items:center;justify-content:center;padding:24px;
  animation:dl-modal-fade .2s ease both;
}
.dl-modal{
  position:relative;width:100%;max-width:880px;max-height:88vh;overflow:auto;
  background:${cardDark};border:1px solid var(--deline-divider);border-radius:${radius};
  animation:dl-modal-in .25s cubic-bezier(.19,.7,.2,1) both;
}
.dl-modal-body{padding:clamp(24px,3.4vw,40px)}
.dl-modal-materials{margin-top:20px;padding-top:18px;border-top:1px solid var(--deline-divider)}
.dl-modal-close{
  position:absolute;top:14px;right:14px;z-index:5;width:36px;height:36px;border-radius:999px;
  border:1px solid rgba(255,255,255,0.35);background:rgba(10,12,16,0.55);color:#fff;
  font-size:22px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;
}
.dl-modal-close:hover{background:rgba(10,12,16,0.8)}

@keyframes dl-modal-fade{from{opacity:0}to{opacity:1}}
@keyframes dl-modal-in{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}

@media (prefers-reduced-motion: reduce){
  .dl-modal-overlay,.dl-modal,.dl-carousel-img{animation:none}
  .dl-portfolio-card,.dl-portfolio-card:hover,.dl-portfolio-card:hover .dl-carousel-img{transform:none}
}
`;
