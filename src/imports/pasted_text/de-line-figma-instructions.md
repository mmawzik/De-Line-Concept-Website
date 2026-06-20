# De Line — Figma Make Change Instructions (visual review, based on rendered site)

These are based on the actual rendered screenshot, so they supersede earlier rounds.
The aesthetic direction (warm near-black background, editorial serif display, restrained
palette) is high-end and working — keep it. The punctuation issue from earlier was a PDF
artifact and is resolved; ignore it. Paste these into Figma Make one group at a time.
**[VERIFY]** = check the live site or confirm a fact first.

---

## 1. Readability — text is too dim and too small (top priority)

The headings look great, but body and card text sit at a low-contrast gray and are small
relative to the headings. Fix size and brightness together.

Apply this token set across the dark sections:

| Role | Hex | Notes |
|------|-----|-------|
| Background (dark) | keep current warm near-black | The base tone is right |
| Primary text on dark | `#ECE8E0` | Headings + body. High contrast |
| Secondary text on dark | `#B5AEA3` | Short captions only, never paragraphs |
| Accent / eyebrow gold | `#C6A875` | Brighter gold so small labels stay legible |
| Hairline divider | `rgba(236,232,224,0.12)` | Section/card separators |

Rules:
- Raise body text to 17-18px and set its color to `#ECE8E0`.
- Raise the small card text in the Pillars, How It Works, and Guarantees blocks to at
  least 15-16px and `#ECE8E0` — it's currently the hardest to read.
- Increase the tiny letter-spaced eyebrow labels (e.g. "ON THE GROUND · GUANGZHOU &
  FOSHAN") in size and brightness — use `#C6A875` and slightly larger text.
- Audit all text for WCAG AA contrast (4.5:1 body, 3:1 large). Nothing dimmer than
  `#B5AEA3` for any text the visitor needs to read.

---

## 2. Unify the dark theme — fix the white blocks

The Portfolio section currently renders as a large empty white block with thin frames in
the middle of an otherwise dark site. It looks unfinished and breaks the mood.

- Make the Portfolio section match the dark theme: dark panels (`#1F2630` or similar) with
  a thin hairline gold border and a small centered "Image to be added" label. The empty
  state should look deliberate and on-brand until photos arrive.
- Do the same for the white contact-form block near the bottom — either commit it to the
  dark theme (dark form fields with light text) or make the light treatment a clearly
  intentional design choice. Right now the two white blocks fight the rest of the page.

---

## 3. Consistent placeholder treatment

Image placeholders are inconsistent — Portfolio frames are white, Team frames are dark,
Testimonial frames are white. Unify them into one system: same surface, same hairline
border, same centered label, same corner radius. The unfinished state should read as one
consistent design.

---

## 4. Hero balance

- When the real hero image is ready, make it larger and bolder (consider full-height on
  the right, or full-bleed) — the current placeholder sofa is small and isolated.
- Give the 15+ / 20+ / 150+ stats more breathing room and a thin vertical divider between
  each. They're your proof points and currently look cramped in the corner.

---

## 5. Typography scale

Set one confident scale and apply it consistently:
- Display headings: 56-72px, line-height 1.05 (the serif you're using).
- Section headings: 36-44px, line-height 1.1.
- Card titles: 20-24px.
- Body: 17-18px, line-height 1.55.
- Eyebrows/captions: 13-14px.
- Cap body line length at ~65-72 characters.
- Ease the extreme letter-spacing on lowercase eyebrow labels — use light tracking
  (~0.08em), not wide-spaced lowercase.

---

## 6. Whitespace & rhythm

- Vertical section padding around 120-160px top/bottom on desktop (scale down on mobile).
- Card internal padding 32-40px, consistent everywhere.
- Once body text is larger and brighter (section 1), the existing negative space will read
  as intentional luxury rather than emptiness.

---

## 7. Components & consistency

- One corner radius site-wide (6-8px) on cards, buttons, inputs, and image frames.
- Buttons: primary = solid gold `#B8956A` with dark text; secondary = 1px hairline outline
  in `rgba(236,232,224,0.4)`. Same height and padding everywhere.
- Add subtle hover states: cards lift slightly or their border brightens; links underline.
- Use the hairline divider token between major sections.

---

## 8. Brand details

- Refine the "De Line" wordmark in header and footer — clean, lightly tracked. It's the
  first luxury cue a visitor reads.
- Add a favicon using the De Line mark.

---

## 9. Bugs & carry-over launch items

- Fix the consent line so it reads "By submitting, you agree to our Privacy Policy." with
  "Privacy Policy" linked (the link text was missing).
- **[VERIFY]** Footer "Privacy Policy" and "Terms" link to real pages.
- **[VERIFY]** noindex removed and the browser-tab title changed from the Figma default to
  "De Line — Custom Furniture Design & Sourcing | Guangzhou."
- **[VERIFY]** the site will publish on a real domain (email is hello@deline.studio), not
  the figma.site URL.
- **[VERIFY]** the four certifications (BSCI, FSC, EN 1021, ISO 9001) are accurate and
  documented.

---

## Priority order

1. Section 1 — text size + contrast (biggest single improvement).
2. Section 2 — fix the white portfolio/form blocks.
3. Sections 3-6 — placeholders, hero, type, spacing.
4. Sections 7-9 — components, brand, and launch verifications.