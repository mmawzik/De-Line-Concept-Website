import { useState } from "react";
import { Container, Eyebrow, Lead, SectionHeading } from "./brand";
import { useT } from "../providers";

/* "The Index" — an editorial roster. The left column is a numbered masthead
   list of names; hovering / clicking one drives the detail panel on the right.
   Breaks the uniform card grid used elsewhere on the page. */
export function Team() {
  const t = useT();
  const members = t.team.members;
  const [active, setActive] = useState(0);
  const m = members[active];

  return (
    <section id="team" className="dl-section">
      <Container>
        <style>{indexCss}</style>

        <div className="dl-stack" style={{ maxWidth: 720, marginBottom: "clamp(36px,4vw,56px)", gap: 16 }}>
          <Eyebrow>{t.team.eyebrow}</Eyebrow>
          <SectionHeading>{t.team.heading}</SectionHeading>
          <Lead>{t.team.lead}</Lead>
        </div>

        <div className="dl-roster">
          <ol className="dl-roster-list">
            {members.map((mem, i) => (
              <li key={mem.name}>
                <button
                  type="button"
                  className={`dl-roster-item${i === active ? " on" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="dl-roster-num">{`0${i + 1}`}</span>
                  <span className="dl-roster-name-wrap">
                    <span className="dl-roster-name">{mem.name}</span>
                    <span className="dl-roster-role">{mem.role}</span>
                  </span>
                  <span className="dl-roster-line" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ol>

          <div className="dl-roster-detail" key={active}>
            <div className="dl-roster-portrait">
              <span>{t.team.portraitLabel}</span>
            </div>
            <div className="dl-roster-info">
              <div className="dl-roster-detail-role">{m.role}</div>
              <h3 className="dl-roster-detail-name">{m.name}</h3>
              <p className="dl-roster-summary">{m.summary}</p>
              {m.previously && (
                <div className="dl-roster-prev">
                  <span className="dl-roster-prev-label">{t.team.previousLabel}</span>
                  {m.previously}
                </div>
              )}
              <div className="dl-roster-tags">
                {m.distinctions.map((d) => (
                  <span key={d} className="dl-roster-tag">{d}</span>
                ))}
              </div>
              <div className="dl-roster-loc">{m.location}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const indexCss = `
.dl-roster{
  display:grid;grid-template-columns:0.92fr 1.08fr;gap:clamp(28px,4.5vw,72px);
  align-items:start;
}

/* numbered masthead list */
.dl-roster-list{list-style:none;margin:0;padding:0;border-top:1px solid var(--deline-divider)}
.dl-roster-list li{margin:0}
.dl-roster-item{
  width:100%;display:flex;align-items:center;gap:18px;text-align:left;
  background:none;border:none;border-bottom:1px solid var(--deline-divider);
  padding:clamp(15px,1.8vw,21px) 2px;cursor:pointer;color:inherit;
  transition:padding-left .45s cubic-bezier(.19,.7,.2,1);
}
.dl-roster-item:focus-visible{outline:none;padding-left:14px}
.dl-roster-item.on{padding-left:14px}
.dl-roster-num{
  font-family:var(--font-display);font-size:14px;color:var(--deline-text-2);
  font-variant-numeric:tabular-nums;width:22px;flex:none;transition:color .3s ease;
}
.dl-roster-item.on .dl-roster-num{color:var(--deline-gold)}
.dl-roster-name-wrap{display:flex;flex-direction:column;gap:4px;flex:1;min-width:0}
.dl-roster-name{
  font-family:var(--font-display);font-weight:600;font-size:clamp(21px,2.3vw,28px);
  line-height:1.12;color:var(--deline-text-2);transition:color .3s ease;
}
.dl-roster-item:hover .dl-roster-name{color:var(--deline-text)}
.dl-roster-item.on .dl-roster-name{color:var(--deline-text)}
.dl-roster-role{
  font-family:var(--font-sans);font-weight:600;font-size:11px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--deline-text-2);opacity:.65;transition:color .3s ease,opacity .3s ease;
}
.dl-roster-item.on .dl-roster-role{color:var(--deline-gold);opacity:1}
.dl-roster-line{
  flex:none;height:1px;width:0;background:var(--deline-gold);align-self:center;
  transition:width .5s cubic-bezier(.19,.7,.2,1);
}
.dl-roster-item.on .dl-roster-line{width:36px}

/* detail panel */
.dl-roster-detail{
  display:grid;grid-template-columns:minmax(0,210px) 1fr;gap:clamp(20px,2.6vw,34px);
  animation:dl-roster-in .5s cubic-bezier(.19,.7,.2,1);
}
.dl-roster-portrait{
  align-self:start;aspect-ratio:3/4;background:var(--deline-bg-2);
  border:1px solid var(--deline-rule);border-radius:var(--deline-radius);
  display:flex;align-items:center;justify-content:center;
}
.dl-roster-portrait span{
  font-family:var(--font-sans);font-weight:600;font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--deline-gold);
}
.dl-roster-info{display:flex;flex-direction:column}
.dl-roster-detail-role{
  font-family:var(--font-sans);font-weight:600;font-size:12px;letter-spacing:.08em;
  text-transform:uppercase;color:var(--deline-gold);
}
.dl-roster-detail-name{
  font-family:var(--font-display);font-weight:600;font-size:clamp(24px,2.8vw,32px);
  line-height:1.14;color:var(--deline-text);margin:8px 0 0;
}
.dl-roster-summary{
  font-family:var(--font-sans);font-size:15px;line-height:1.6;color:var(--deline-text-2);margin:16px 0 0;
}
.dl-roster-prev{
  font-family:var(--font-sans);font-size:13px;line-height:1.5;color:var(--deline-text-2);margin:18px 0 0;
}
.dl-roster-prev-label{
  display:block;font-weight:600;font-size:10px;letter-spacing:.12em;text-transform:uppercase;
  color:var(--deline-gold);margin-bottom:4px;
}
.dl-roster-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:18px}
.dl-roster-tag{
  font-family:var(--font-sans);font-weight:600;font-size:10px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--deline-gold);border:1px solid color-mix(in srgb, var(--deline-gold) 35%, transparent);
  background:color-mix(in srgb, var(--deline-gold) 8%, transparent);padding:5px 9px;
  border-radius:var(--deline-radius);line-height:1.2;
}
.dl-roster-loc{
  margin-top:auto;padding-top:20px;
  font-family:var(--font-sans);font-size:12px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--deline-text-2);font-weight:500;
}

@keyframes dl-roster-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}

@media (max-width:860px){
  .dl-roster{grid-template-columns:1fr;gap:36px}
}
@media (max-width:520px){
  .dl-roster-detail{grid-template-columns:1fr}
  .dl-roster-portrait{aspect-ratio:4/3;max-height:280px}
}
@media (prefers-reduced-motion: reduce){
  .dl-roster-detail{animation:none}
  .dl-roster-item,.dl-roster-line{transition:none}
}
`;
