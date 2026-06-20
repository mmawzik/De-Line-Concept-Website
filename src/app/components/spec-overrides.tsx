import { useEffect } from "react";

const TEXT_REPLACEMENTS: Array<[string | RegExp, string]> = [
  // 1. Brand name
  ["De Line Concept", "De Line"],
  ["De line", "De Line"],
  [/\bDeline\b/g, "De Line"],
  ["Every design starts with de line", "Every project starts with De Line"],

  // 4. Section label rename
  ["01. Marketing", "01. Client Bridge"],

  // 5. Team bios
  ["Former senior architectural furniture draftsman", "Twenty years translating"],
  ["who has spent 20 years translating high-concept", "high-concept hospitality sketches into"],
  ["hospitality sketches into parametric, millwork-", "parametric, millwork-ready shop drawings."],
  ["ready shop drawings. Thorne oversees structural", "Oversees structural integrity and timber-"],
  ["integrity and timber selection parameters.", "selection parameters from the Foshan workshop."],

  // Daniyar bio rewrite
  ["A native of Guangzhou with 15 years on factory", "Fifteen years on factory floors across"],
  ["floors across Guangdong. Daniyar speaks the local", "Guangdong. Negotiates volume pricing directly,"],
  ["manufacturing dialects, negotiates complex", "coordinates container consolidation, and runs"],
  ["volume prices directly, coordinates container", "strict multi-point physical QA before anything"],
  ["consolidation, and executes strict multi-point", "ships."],
  ["physical QA checks.", " "],

  // Zulyar CEO bio + title (the original card mislabels CEO as Supply Chain Chief)
  ["floors across Guangdong. Linus speaks the local", "Leads De Line's largest and most complex"],

  // Section 6: portfolio
  [/COMPLETED 2026/gi, "IN PRODUCTION"],

  // Section 7: footer
  ["Privacy Principles", "Privacy Policy"],
  ["Import Terms", "Terms"],
  ["GUANG HOU HU L OCATION", "Guangzhou HQ location"],
  ["GUANG HOU HU LOCATION", "Guangzhou HQ location"],

  // Section 8: copy fixes
  [
    "running a project with foreign culture and country is not for everyone",
    "running a project across a foreign language, culture, and supply chain isn't for everyone",
  ],

  // Section 9: CTA swap
  ["start your project", "see our work"],
  ["Launch Concept Planner", "See Our Work"],
  ["Learn More", "Start Your Project"],
];

const COLOR_REPLACEMENTS: Array<[RegExp, string]> = [
  // Cream canvas
  [/#f7f5f0/gi, "#F4F0E9"],
  // Navy
  [/#1a2436/gi, "#182433"],
  // Gold (accent) — tone down from #c5a880/#b89870 to #B8956A
  [/#c5a880/gi, "#B8956A"],
  [/#b89870/gi, "#B8956A"],
  // Body ink
  [/#767676/gi, "#2A2A28"],
];

function walkText(root: Node, fn: (t: Text) => void) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  nodes.forEach(fn);
}

function applyTextReplacements() {
  walkText(document.body, (textNode) => {
    let v = textNode.nodeValue ?? "";
    let changed = false;
    for (const [from, to] of TEXT_REPLACEMENTS) {
      const next = typeof from === "string" ? v.split(from).join(to) : v.replace(from, to);
      if (next !== v) {
        v = next;
        changed = true;
      }
    }
    if (changed) textNode.nodeValue = v;
  });
}

function applyColorOverrides() {
  // Override inline styles & class-attached colors via injected stylesheet.
  // Tailwind arbitrary classes like bg-[#1a2436] compile to literal hex in CSS.
  const css = `
    /* Cream canvas */
    .bg-\\[\\#f7f5f0\\] { background-color: #F4F0E9 !important; }
    /* Navy anchors */
    .bg-\\[\\#1a2436\\] { background-color: #182433 !important; }
    .text-\\[\\#1a2436\\] { color: #182433 !important; }
    .border-\\[\\#1a2436\\] { border-color: #182433 !important; }
    /* Gold accent */
    .bg-\\[\\#c5a880\\], .bg-\\[\\#b89870\\] { background-color: #B8956A !important; }
    .text-\\[\\#c5a880\\], .text-\\[\\#b89870\\] { color: #B8956A !important; }
    .border-\\[\\#c5a880\\], .border-\\[\\#b89870\\] { border-color: #B8956A !important; }
    [style*="#C5A880"], [style*="#c5a880"] { --stroke-0: #B8956A !important; --fill-0: #B8956A !important; }
    /* Body ink (warm) */
    .text-\\[\\#767676\\] { color: #2A2A28 !important; }
    /* SVG stroke/fill vars used inline */
    svg [stroke="var(--stroke-0, #C5A880)"] { stroke: #B8956A !important; }
    svg [fill="var(--fill-0, #C5A880)"] { fill: #B8956A !important; }

    /* Card surface lift (team + portfolio cards rendered on white) */
    [data-name^="Member"], [data-name^="Pillar"], [data-name="Overlay+Border"] {
      background-color: rgba(251, 249, 245, 0.04);
    }

    /* Thin gold rule between sections */
    [data-name^="Section"] + [data-name^="Section"] {
      border-top: 1px solid rgba(184, 149, 106, 0.25);
    }
  `;
  const style = document.createElement("style");
  style.setAttribute("data-spec", "color-overrides");
  style.textContent = css;
  document.head.appendChild(style);
  return () => style.remove();
}

function reorderSections() {
  // Move Guangzhou Hub section up to position 2 (right after Hero), and Portfolio above Team.
  const orderMap: Array<[string, number]> = [
    ['[data-name="App"]', 1],
    ['[data-name="Section - HERO SECTION"]', 2],
    ['[data-name="Section - GUANGZHOU HUB & LOGISTICS INTENSITY"]', 3],
    ['[data-name="Section - TRIPLE FORCE SECTION (The Core Identity)"]', 4],
    ['[data-name="Section - ELITE PORTFOLIO & CASE STUDIES"]', 5],
    ['[data-name="Section - PROMINENT TEAM SECTION"]', 6],
    // social-proof injected at 7
    ['[data-name="Footer - FOOTER SECTION"]', 99],
  ];
  for (const [sel, order] of orderMap) {
    const el = document.querySelector<HTMLElement>(sel);
    if (el) el.style.order = String(order);
  }
}

function injectSocialProof() {
  if (document.getElementById("deline-social-proof")) return;
  const footer = document.querySelector<HTMLElement>('[data-name="Footer - FOOTER SECTION"]');
  if (!footer || !footer.parentElement) return;

  const section = document.createElement("div");
  section.id = "deline-social-proof";
  section.style.cssText =
    "background:#F4F0E9;width:1920px;padding:96px 320px;order:7;display:flex;flex-direction:column;align-items:center;position:relative;flex-shrink:0;border-top:1px solid rgba(184,149,106,0.25);";

  section.innerHTML = `
    <div style="max-width:1280px;width:100%;padding:0 24px;display:flex;flex-direction:column;gap:64px;">
      <div style="max-width:672px;display:flex;flex-direction:column;gap:16px;">
        <p style="font-family:Inter,sans-serif;font-weight:600;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:#B8956A;margin:0;line-height:16px;">What clients say</p>
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:48px;line-height:1.05;color:#182433;margin:0;">Trusted by architects, hoteliers, and developers.</h2>
        <p style="font-family:Inter,sans-serif;font-weight:400;font-size:16px;line-height:1.6;color:#2A2A28;margin:0;">A sample of recent client feedback and the certifications behind our supply chain.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;">
        ${[
          {
            q: "De Line is the only China-side partner we've worked with where the piece that arrives matches the piece we drew. The QA reports are why.",
            a: "Architectural Director",
            o: "Hospitality group, Western Europe",
          },
          {
            q: "Across three buildouts they've never missed a milestone. The consolidation alone saved us a month per shipment.",
            a: "Procurement Lead",
            o: "Boutique hotel collection, GCC",
          },
          {
            q: "They translated a stack of mood boards into shop drawings the factory could actually build. That's the whole job.",
            a: "Interior Designer",
            o: "Private residential studio",
          },
        ]
          .map(
            (t) => `
          <blockquote style="background:#FBF9F5;border:1px solid rgba(24,36,51,0.06);padding:32px;margin:0;display:flex;flex-direction:column;gap:24px;">
            <div style="font-family:'Playfair Display',serif;font-size:36px;color:#B8956A;line-height:0.6;">"</div>
            <p style="font-family:'Playfair Display',serif;font-weight:400;font-size:18px;line-height:1.5;color:#182433;margin:0;">${t.q}</p>
            <div style="margin-top:auto;padding-top:16px;border-top:1px solid #B8956A;">
              <div style="font-family:Inter,sans-serif;font-weight:600;font-size:13px;color:#182433;">${t.a}</div>
              <div style="font-family:Inter,sans-serif;font-size:11px;color:#2A2A28;margin-top:4px;">${t.o}</div>
            </div>
          </blockquote>`,
          )
          .join("")}
      </div>

      <div style="border-top:1px solid rgba(24,36,51,0.1);padding-top:32px;">
        <p style="font-family:Inter,sans-serif;font-weight:600;font-size:11px;letter-spacing:1.1px;text-transform:uppercase;color:#2A2A28;margin:0 0 24px;">Selected clients & certifications</p>
        <div style="display:flex;gap:48px;flex-wrap:wrap;align-items:center;">
          ${["Hospitality Group", "Architectural Studio", "Boutique Collection", "Design Practice", "Developer Group"]
            .map(
              (l) =>
                `<span style="font-family:'Playfair Display',serif;font-weight:500;font-size:16px;color:#2A2A28;opacity:0.55;">${l}</span>`,
            )
            .join("")}
        </div>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:32px;">
          ${["BSCI Audited Factories", "FSC-Certified Timber", "EN 1021 Fire Compliance", "ISO 9001 QA"]
            .map(
              (c) =>
                `<span style="font-family:Inter,sans-serif;font-weight:600;font-size:11px;letter-spacing:0.9px;text-transform:uppercase;color:#B8956A;border:1px solid #B8956A;padding:8px 12px;">${c}</span>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
  footer.parentElement.insertBefore(section, footer);
}

function hideCeoOriginalSupplyChainBadge() {
  // The CEO card incorrectly shows "15 Years Sourcing" + "SUPPLY CHAIN CHIEF".
  // Find the third Member card and rewrite those small labels.
  const ceoNameCandidates = Array.from(document.querySelectorAll("p")).filter((p) =>
    /Zulyar/.test(p.textContent ?? ""),
  );
  for (const nameEl of ceoNameCandidates) {
    const card = nameEl.closest('[data-name^="Member"]');
    if (!card) continue;
    walkText(card, (t) => {
      const v = t.nodeValue ?? "";
      if (v.trim() === "15 Years Sourcing") t.nodeValue = "Large-Scale Projects";
      if (v.trim() === "SUPPLY CHAIN CHIEF") t.nodeValue = "CEO";
      if (v.trim().toLowerCase() === "specialty: local sourcing & qa")
        t.nodeValue = "specialty: large-scale contracting";
      if (v.trim().toLowerCase() === "guangzhou hq") t.nodeValue = "international";
    });
  }
}

export function SpecOverrides() {
  useEffect(() => {
    const cleanupCss = applyColorOverrides();
    const run = () => {
      applyTextReplacements();
      hideCeoOriginalSupplyChainBadge();
      injectSocialProof();
      reorderSections();
    };
    run();
    const id1 = window.setTimeout(run, 100);
    const id2 = window.setTimeout(run, 500);
    return () => {
      cleanupCss();
      window.clearTimeout(id1);
      window.clearTimeout(id2);
    };
  }, []);
  return null;
}
