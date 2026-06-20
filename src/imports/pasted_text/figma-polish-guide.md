# De Line — Figma Make Change Instructions (v3: high-end polish + readability)

v3 has the right content and structure. These changes are about visual refinement,
contrast/readability, and the last details that separate a competent site from a
high-end one. Paste into Figma Make one group at a time. **[VERIFY]** = check the live
site or confirm a fact first.

---

## 1. Fix dropped punctuation (highest priority)

Across the site, apostrophes, hyphens, and em-dashes appear to be dropping out:
"won t / can t / you re / We ll," and "highconcept / singlecontainer / fingerpointing,"
and missing em-dashes (e.g. "end to end commercial terms").

- **[VERIFY]** on the live rendered page whether these characters actually display.
- If they're missing: tell Figma Make "Use a font and character set that renders
  apostrophes ('), hyphens (-), and em-dashes (—) correctly everywhere. Several headings
  and body lines are currently dropping these characters."
- Specifically confirm the hero-area headline reads exactly: "You won't get burned
  sending money to a factory you can't see."
- Fix the spaced typo in the contact form: "l arge scale" should be "large scale."

---

## 2. Contrast & readability (dark theme)

Audit every text element for WCAG AA contrast (4.5:1 for body text, 3:1 for large
headings). The likely failures are small secondary text, the gold eyebrow labels, and the
team specialty tags. Apply this token set:

| Role | Hex | Notes |
|------|-----|-------|
| Background (dark) | `#161B22` | Warm near-black; or keep current navy `#182433` |
| Dark card surface | `#1F2630` | For cards/panels on the dark background |
| Light card surface | `#F4F0E9` | Portfolio + form cards (use dark ink on these) |
| Primary text on dark | `#ECE8E0` | High contrast (~13:1). Use for headings + body |
| Secondary text on dark | `#B5AEA3` | Captions only, never long paragraphs (~5.5:1) |
| Ink (text on light cards) | `#2A2A28` | For anything on the cream surfaces |
| Accent gold | `#C6A875` | Eyebrow labels + small accents (brighter, legible on dark) |
| Gold button fill | `#B8956A` | With dark `#161B22` text on top |
| Divider | `rgba(236,232,224,0.12)` | Hairline section/card separators |

Rules:
- No body or secondary text dimmer than `#B5AEA3` on the dark background.
- The small specialty tags in the team section (e.g. "Structural design & millwork /
  Foshan workshop") must use `#ECE8E0` or `#C6A875`, not a dim gray.
- On the cream cards, all text uses ink `#2A2A28` — never gold or light text.

---

## 3. Typography system

Set a single, confident type scale and apply it consistently:

- Display headings: 56-72px, line-height 1.05, the serif you're already using.
- Section headings (H2): 36-44px, line-height 1.1.
- Card titles (H3): 20-24px.
- Body: 17-18px, line-height 1.55.
- Captions/eyebrows: 13-14px.
- Body line length: cap at ~65-72 characters per line — long lines read cheap.
- Reduce the extreme letter-spacing on the lowercase eyebrow labels (e.g.
  "o n  t h e  g r o u n d"). Use small-caps or normal caps with light tracking
  (about 0.08em), not wide-spaced lowercase — it currently reads dated, not premium.
- Limit to two font weights for the sans (regular + medium/semibold). Avoid weight soup.

---

## 4. Whitespace & rhythm (biggest "high-end" lever)

- Increase vertical section padding to roughly 120-160px top/bottom on desktop
  (scale down proportionally on mobile). Generous negative space is the strongest
  premium signal.
- Card internal padding: 32-40px, consistent across all cards.
- Add consistent spacing between the stat blocks (15+ / 20+ / 150+) with a thin vertical
  divider between each.
- Keep one consistent column grid and gutter across all sections.

---

## 5. Components & consistency

- Use ONE corner radius site-wide (recommend 6-8px) on cards, buttons, inputs, image
  frames. Mixed radii read sloppy.
- Buttons: primary = solid gold `#B8956A` with dark text; secondary = 1px hairline
  outline in `rgba(236,232,224,0.4)`. Same height and padding everywhere.
- Add subtle hover states: cards lift slightly or their border brightens; links underline
  on hover. High-end sites feel responsive to the cursor.
- Style the "Image to be added" portfolio placeholders as elegant empty framed panels
  (thin border, centered subtle label), not flat filled boxes.
- Use the hairline divider token between major sections for quiet structure.

---

## 6. Brand details

- Refine the "De Line" wordmark in the header and footer: a clean, slightly tracked
  treatment (the serif, or a refined geometric sans). The wordmark is the first luxury
  cue a visitor reads.
- Add a favicon using the De Line mark.

---

## 7. Bugs & carry-over launch items

- Fix the broken consent line: "By submitting, you agree to our ." — add the linked
  text "Privacy Policy" so it reads "By submitting, you agree to our Privacy Policy."
- **[VERIFY]** Footer "Privacy Policy" and "Terms" link to real pages, not dead links.
- **[VERIFY]** noindex removed and the browser-tab title changed from the Figma default
  to "De Line — Custom Furniture Design & Sourcing | Guangzhou."
- **[VERIFY]** the site will publish on a real domain (the email is hello@deline.studio),
  not the figma.site URL.

---

## 8. Imagery (final stage, but plan for it)

When the real photos land, they will carry 80% of the high-end impression. Reserve the
hero for your single strongest bespoke piece (replacing the current placeholder sofa),
and use consistent aspect ratios and treatment across all portfolio images so the grid
reads as one curated set.

---

## 9. Optional rhythm

The site is now almost entirely dark, which can look luxurious if the spacing carries it.
If the long dark scroll starts to feel monotonous, give one section (e.g. Portfolio) a
cream `#F4F0E9` background as a "breath," then return to dark. Test both before deciding.

---

## Open confirmations

1. Whether the dropped punctuation is real on the live site (section 1).
2. Real Privacy Policy + Terms pages exist and are linked (sections 5, 7).
3. noindex removed, real page title, real domain (section 7).
4. The four certifications are accurate and documented (still outstanding from v2).