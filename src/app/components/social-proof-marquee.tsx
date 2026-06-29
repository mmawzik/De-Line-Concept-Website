import { Container, Lead, SectionHeading } from "./brand";
import { LogoLockup } from "./client-logos";
import { useT } from "../providers";

/* Variant 2 — auto-scroll marquee. Two ribbons drifting in opposite
   directions, paused on hover, edge-faded. Comparison variant. */
export function SocialProofMarquee() {
  const t = useT();
  const logos = t.social.logos;
  const loop = [...logos, ...logos];

  return (
    <section id="social-marquee" className="dl-section">
      <Container>
        <style>{marqueeCss}</style>
        <div className="dl-stack" style={{ maxWidth: "none", marginBottom: "clamp(28px,4vw,44px)", gap: 16, alignItems: "center", textAlign: "center" }}>
          <SectionHeading style={{ maxWidth: "none", whiteSpace: "nowrap" }}>{t.social.heading}</SectionHeading>
          <Lead style={{ maxWidth: "60ch" }}>{t.social.lead}</Lead>
        </div>
      </Container>
      <div className="dl-marquee-viewport">
        <div className="dl-marquee" role="group" aria-label={t.social.clientsLabel}>
          <div className="dl-marquee-row">
            <div className="dl-marquee-track">
              {loop.map((name, i) => (
                <div className="dl-marquee-item" key={`a${i}`} aria-hidden={i >= logos.length ? true : undefined}>
                  <LogoLockup name={name} />
                </div>
              ))}
            </div>
          </div>
          <div className="dl-marquee-row">
            <div className="dl-marquee-track rev">
              {loop.map((name, i) => (
                <div className="dl-marquee-item" key={`b${i}`} aria-hidden={i >= logos.length ? true : undefined}>
                  <LogoLockup name={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeCss = `
.dl-marquee-viewport{
  max-width:1280px;margin:0 auto;padding-left:var(--gutter);padding-right:var(--gutter);
}
.dl-marquee{
  display:flex;flex-direction:column;gap:clamp(14px,2vw,26px);overflow:hidden;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);
}
.dl-marquee-row{overflow:hidden}
.dl-marquee-track{display:flex;gap:clamp(32px,4.5vw,64px);width:max-content;animation:dl-marq 40s linear infinite}
.dl-marquee-track.rev{animation-direction:reverse;animation-duration:50s}
.dl-marquee:hover .dl-marquee-track{animation-play-state:paused}
.dl-marquee-item{flex:none;padding:16px 0;opacity:.82;transition:opacity .3s ease}
.dl-marquee-item:hover{opacity:1}

@keyframes dl-marq{from{transform:translateX(0)}to{transform:translateX(-50%)}}

@media (prefers-reduced-motion: reduce){
  .dl-marquee-track{animation:none;flex-wrap:wrap;justify-content:center;width:100%}
  .dl-marquee-row:last-child{display:none}
}
`;
