# De Line — Figma Make Change Instructions (v2 review)

v2 implemented almost everything from the last round. These are the remaining
professional fixes. Paste them into Figma Make one group at a time. Items marked
**[VERIFY]** need you to check a fact or check the live site first.

---

## 1. Credibility fix — remove the false "local dialect" claim

Pillar `03. Operation & Logistics Hub` still says "We speak the exact local factory
dialects." None of the team is local, so this contradicts the rest of the site. Replace
the pillar 03 body text with:

> Operating directly on the ground in Guangdong for over 15 years. We inspect each joint
> and coat of lacquer, manage consolidated shipments, and hold factories to their
> delivery deadlines.

Also scan the whole site for any other "native," "local dialect," or "we speak the
language" wording and remove it — the on-the-ground value comes from presence and
relationships, not from being local.

---

## 2. Apostrophes — verify and fix on the live site

On the rendered site, check these headings actually show apostrophes:
- "You won't get burned sending money to a factory you can't see."
- "Tell us what you're building."
- "We'll come back within two business days..."

If they render as "won t / can t / you re / We ll", it's a font or quote-character
issue. Tell Figma Make: "Use straight or curly apostrophes that render correctly in all
headings and body text; some apostrophes are currently displaying as blank spaces."

---

## 3. Reduce repetition across three sections

QA and consolidated shipping are currently described in the "On the ground" section, in
"How it works," and again in "Guarantees & QA." Give each section one job:

- **On the ground** = proximity and relationships.
- **How it works** = the step-by-step sequence (leave as is).
- **Guarantees & QA** = the written promises (leave as is — it's the right home for QA,
  shipping, spec lock, defect rejection).

In the **On the ground** section, replace the "Multi-point physical QA" and "Consolidated
shipping" cards (they duplicate the Guarantees section) with these two, so all four cards
are about presence rather than promises:

**Real-time oversight**
> Same city and timezone as the factories. Progress updates come from someone standing in
> the workshop, not a forwarded email three time zones away.

**One accountable contact**
> One team owns your project from first sketch to final delivery — no handoffs between
> agents, no finger-pointing.

(Keep the existing "Direct factory presence" and "Vetted relationships, not brokers"
cards.)

---

## 4. Contact form — add consent + working policy links

You target clients in Western Europe and the GCC, so the form needs basic data-consent
handling:

- Add a one-line note under the form: "By submitting, you agree to our Privacy Policy."
  with "Privacy Policy" linked.
- Make sure the footer "Privacy Policy" and "Terms" links go to real pages, not dead
  links. **[VERIFY]**

---

## 5. Address — add an English line

The address shows only as `广州市海珠区蟠龙新街3号` in the on-the-ground section, contact
section, and footer. Add a romanized/English line beneath the Chinese for your
international audience, e.g.:

> No. 3 Panlong New Street, Haizhu District, Guangzhou, Guangdong, China

**[VERIFY]** the English transliteration is correct before publishing.

---

## 6. Copy polish

- Hero subheading: change "From luxury small residences to massive hospitality projects"
  to "From intimate luxury residences to large-scale hospitality projects."
- Contact section: "+86 (on request)" is weak for a trust-first site. Either show a real
  WeChat/WhatsApp handle or change the label to "WeChat / WhatsApp on request."

---

## 7. Launch blockers — carry-over (not visible in the PDF, check the live site)

- **[VERIFY]** Remove the `noindex` setting so the site can appear in search results.
- **[VERIFY]** Change the page/browser-tab title from the Figma default
  "Professional Website for De Line" to:
  `De Line — Custom Furniture Design & Sourcing | Guangzhou`
- Confirm the live domain. The contact email is `hello@deline.studio` — if that's your
  real domain, the site should ultimately publish there, not on the `figma.site` URL.
  **[VERIFY]**

---

## 8. Trust signals — verify before publishing

- **[VERIFY]** The certifications shown (BSCI Audited Factories, FSC Certified Timber,
  EN 1021 Fire Compliance, ISO 9001 QA) must be accurate and substantiable — serious
  clients will ask for the certificates. Only display the ones you can back up.
- Testimonials are currently anonymous ("Architectural Director, Hospitality group,
  Western Europe"). Specific-but-anonymous is acceptable in this industry, but if any
  client will allow a name, company, and logo, attributed testimonials are far stronger.

---

## 9. Optional polish

- Add "Guarantees & QA" to the top navigation (currently it's not linked there).
- Consider a favicon using the De Line mark.
- Check the full layout on mobile — the team grid, portfolio cards, and stats row are the
  usual break points on Figma sites.

---

## Open confirmations

1. Working Privacy Policy and Terms pages (section 4).
2. Correct English transliteration of the address (section 5).
3. noindex removed, real page title, and final domain (section 7).
4. All four certifications are accurate and documented (section 8).