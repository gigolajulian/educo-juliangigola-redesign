---
name: ĒDUCŌ Academy
description: The barber school built and run by /Paradox/, sold like a precision instrument.
colors:
  steel: "#d7d8d5"
  steel-2: "#c9cbc7"
  sheet: "#fafaf8"
  ink: "#1a1a1a"
  ink-2: "#3d3e3b"
  mute: "#545551"
  line: "rgba(26, 26, 26, 0.22)"
  prdx-blue: "#00a3c4"
  ink-hover: "#333431"
  rule-on-ink: "#3b3c39"
  mute-on-ink: "#8e8f8b"
  text-on-ink: "#c9cac6"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 6.2vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 1.9vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.01em"
    fontFeature: "'tnum'"
  spec-figure:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.9rem, 4.4vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum'"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 2.6vw, 36px)"
  panel: "clamp(20px, 3vw, 40px)"
  section: "clamp(72px, 10vw, 140px)"
  head-gap: "clamp(32px, 4vw, 56px)"
  row: "11px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 22px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 22px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  button-prdx:
    backgroundColor: "{colors.prdx-blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 22px"
  button-prdx-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.prdx-blue}"
  button-sm:
    height: "38px"
    padding: "0 14px"
  button-lg:
    height: "58px"
    padding: "0 30px"
  sheet-panel:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "{spacing.panel}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  strip:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.ink}"
    height: "60px"
---

# Design System: ĒDUCŌ Academy

## Overview

**Creative North Star: "The Kit"**

ĒDUCŌ is sold like a precision instrument out of a Japanese shear catalogue: one model (the ĒDUCŌ-1000 program), every spec on the table, every photograph a numbered plate. The ground is machined steel grey; information sits on spec-sheet white panels drawn with ink hairlines and dashed construction rules. Nothing is rounded, nothing floats, nothing glows. Authority comes from exactness: tabular figures, dotted leaders, figure numbers, part callouts.

It is the sister of /Paradox/ and says so through one shared material and one shared colour. Both sites set Archivo, but on opposite axes: /Paradox/ runs it condensed (wdth 62), ĒDUCŌ runs it expanded (wdth 112 to 125). The /Paradox/ Barbicide blue appears only where the lineage is being named, and the real /Paradox/ wordmark is the tie, never a typed imitation of it.

Density is catalogue-high but calm: generous section padding between tightly ruled tables. Photography is high-contrast black and white technique and room shots, framed with crop marks and captioned as figures. The page reads top to bottom as a spec sheet that ends in an order form.

**Key Characteristics:**
- Steel ground, sheet panels, ink hairlines; zero radius, zero shadow.
- Archivo expanded for display; Geist Mono only for spec values, figure labels and tags.
- Blue (#00a3c4) is lineage-only, always paired with ink.
- B&W plates with corner crop marks and "Fig. n" captions.
- Spec tables with dotted leaders; one price sheet; ordered enroll stations.
- No kickers: dates sit in time gutters, statuses sit as tags after titles.

## Colors

A cool, near-achromatic instrument palette with a single borrowed blue that belongs to the sister brand.

### Primary
- **Ink** (ink): Text, all structural rules (1px panel borders, 1.5px table tops), primary buttons, the closing and footer bands, the Gold pass and lead student report. Ink is the brand colour; the system has no chromatic primary of its own.

### Secondary
- **/Paradox/ Barbicide Blue** (prdx-blue): Lineage marker only. Used as a fill with ink text (the "Meet /Paradox/" button) or as text/underline on ink (button hover, the 3px underline on the "/Paradox/" nav link). Never on steel or sheet as text.

### Neutral
- **Machined Steel** (steel): Page ground, sticky strip ground (92% with backdrop blur), station-marker fill.
- **Shadow Steel** (steel-2): Image placeholder behind every plate, nav hover fill, the "Others" comparison column.
- **Spec Sheet** (sheet): Panels that carry data: spec plate, comparison, configurator, price sheet, passes, offers, report cards, mobile menu.
- **Graphite** (ink-2): Secondary copy, ledes, descriptions under list titles.
- **Mute** (mute): Mono labels, captions, spec-table keys, struck prices.
- **Hairline** (line): Row dividers inside tables and lists, 1px.
- **Ink Hover** (ink-hover): Primary button hover.
- **On-ink trio** (rule-on-ink, mute-on-ink, text-on-ink): rules, muted labels and body copy inside ink bands (footer, close, Gold pass).

### Named Rules
**The Lineage-Only Blue Rule.** #00a3c4 marks /Paradox/ and nothing else. It is either a fill under ink text or a colour on ink; it never colours ĒDUCŌ's own content, prices or statuses.

**The Real Mark Rule.** /Paradox/ is shown with its actual wordmark asset (img/prdx-ink.png on light, img/prdx-paper.png on ink) at the three tie points: the strip ("by" + mark), the lineage H2 (inline at 0.74em), and the footer lockup. Running-text mentions stay typed.

## Typography

**Display Font:** Archivo variable (with Helvetica Neue, Arial), expanded axis
**Body Font:** Archivo at wdth 100
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular, Menlo), weights 400 and 600

**Character:** A wide, heavy grotesk that reads as stamped steel, against a mono that reads as the measurement engraved beside it.

### Hierarchy
- **Display** (800, wdth 125, clamp 2.4 to 5.75rem, 0.94): H1s and the closing call. The cover H1 is held smaller (clamp 2.2 to 4.6rem).
- **Headline** (800, wdth 118, clamp 2 to 4rem, 0.98): Section H2s. Price-sheet row names use the same width at clamp 1.35 to 2.25rem.
- **Title** (700, wdth 112, clamp 1.35 to 1.75rem, 1.1): H3s in lists, people, stations, passes, offers.
- **Lede** (400, clamp 1.15 to 1.375rem, 1.45, max 52ch, graphite): one per section head.
- **Body** (400, 1.0625rem, 1.55): running copy; list descriptions drop to 0.9375rem.
- **Label** (Geist Mono 400, 0.75rem, tabular): spec keys, part numbers (C-01), figure captions, footer headings, tags (0.6875rem).
- **Spec figure** (Geist Mono 600, tabular, tight negative tracking): prices, the configurator's month count (clamp 3.4 to 6.5rem), pass prices, inline values in spec rows.

### Named Rules
**The Opposite Axis Rule.** ĒDUCŌ display type is Archivo at wdth 112 or wider; /Paradox/ owns the condensed end (wdth 62). Never set ĒDUCŌ headings condensed.

**The Mono Is Measurement Rule.** Geist Mono is for values, codes, captions and tags: things you would read off a spec plate. Never for headings, buttons or prose.

## Layout

Single column inside a 1520px max wrap with a fluid gutter. Sections are separated by a 1px ink top rule and large vertical padding. A section head is a two-column grid at 960px and up (H2 left at 1.2fr, lede right at 0.8fr, bottom-aligned); below that, it stacks. Content blocks split asymmetrically at 960px (0.8/1.2, 0.9/1.1, 1.15/0.85) rather than evenly. Panels that hold several columns (comparison, configurator, passes, offers) are one bordered sheet divided by internal ink rules, which move from top borders (stacked) to left borders (side by side). Student reports form a 1px ink-gap mosaic (2 columns at 700px, 4 at 1100px with a 2x2 lead). Breakpoints in use: 559, 640, 700, 760, 860, 900, 960, 1000, 1100px; 960 is the main desktop switch, 1000 shows the inline nav.

**The Time Gutter Rule.** Dates, times and part numbers sit in a fixed mono gutter column to the left of their title (6.5em for days and times, 4.2em for curriculum part numbers), never stacked above a heading.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth comes from material change (steel ground to sheet panel to ink band) and from line weight: 1px ink borders on panels, 1.5px ink rules on table tops, 22% ink hairlines between rows, dashed ink for construction and for things not yet filled (seats, station path, focus chips, compliance box, past offers). The sticky strip is the only translucent layer (steel at 92% with a 10px backdrop blur) and it is closed by a 1px ink rule, not a shadow.

**The Drawn Not Lifted Rule.** If something needs separation, draw a line or change the material. Never lift it with a shadow.

## Shapes

Every corner is square (0px): buttons, panels, toggles, tags, images. The only curves are geometric marks: the 9px callout dot and the circle station marker. Construction geometry from the stacked logo recurs as the enroll-path markers (square outline, circle outline, solid triangle, solid square). Plates carry 18px L-shaped crop marks offset 9px outside their top-left and bottom-right corners. Line style carries meaning: solid for what exists, dotted for leaders, dashed for construction or empty capacity.

## Components

### Buttons
- **Shape:** square (0px), 1.5px ink border, Archivo wdth 112 at 700.
- **Primary:** ink fill, sheet text, 48px tall with 22px sides; small 38px, large 58px. A 12px diagonal arrow glyph drawn as inline SVG marks outbound links and nudges 2px up-right on hover.
- **Hover / Focus:** primary lightens to ink-hover; press scales to 0.97 (160ms ease-out). Focus is a 2px ink outline offset 3px.
- **Line:** transparent with ink border; hover fills ink.
- **/Paradox/:** blue fill, ink text; hover inverts to ink fill with blue text. Lineage section only.
- **On ink bands:** primary turns sheet-filled with ink text; line turns sheet-outlined.

### Tags
- **Style:** Geist Mono 0.6875rem, 1px ink border, 2px 6px padding, set inline after a title ("Gold", "Sold out", "Past", "Day 1").
- **State:** a status is always a tag after the title, never a line above it.

### Cards / Containers
- **Corner Style:** square.
- **Background:** sheet on steel; ink for the single emphasised item in a set (lead report, Gold pass).
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px ink outer border; internal divisions in 1px ink.
- **Internal Padding:** clamp 20 to 40px.

### Navigation
- **Strip:** 60px sticky bar. ĒDUCŌ wordmark (92px) then, from 640px, a "by" + /Paradox/ wordmark (76px) behind a hairline divider, its own link to the /Paradox/ site. Nav links at Archivo wdth 112, 600, 0.875rem; hover fills steel-2; the current page gets a 2px underline offset 6px. Enroll and Book a tour sit right as small buttons.
- **Mobile:** below 1000px a 38px square menu button opens a full-screen sheet that wipes down via clip-path (520ms ease-in-out), with display-size links ruled by hairlines and stacked 54px CTAs.

### Booker (tours and student cuts)
Every Calendly tour link, and every Squire student-cut link (educo-academy-san-jose), opens a native `<dialog>` (built in edu.js, plain link without JS): a sheet panel sliding in from the right (min(620px, 100%), full screen on phones) over a 50% ink backdrop, with a steel header (H-M "Book a tour" or "Book a student cut", one line of context, square close), the booking flow in an iframe, and a mono footer naming the provider (Calendly or Squire) with "Open in a new tab". Enrollment stays a normal link: the Edlumina portal refuses framing.

### Figures (plates)
Every photograph is a figure: square-cornered frame on steel-2, image at grayscale(1) contrast(1.08), corner crop marks, and a mono caption below with a bold "Fig. n" then a short description. Figures are numbered in reading order across the page.

### Cover Mark
The stacked logo (paper version) sits inside the Fig. 1 photo, bottom-right at 5% insets, clamp(90px, 9vw, 150px) wide, drawing down on load. The spec plate overlaps the photo's bottom-left only from 1200px; below that it stacks under the photo.

### Part Callouts
On the cover plate, hairline callouts label parts of the photograph: a 9px open sheet-coloured circle, a 1px sheet leader (28 to 64px), and a mono label in an ink-on-sheet chip. They point right and are decorative (aria-hidden). The cover labels Comb and Shear only.

### Spec Table
A definition list under a 1.5px ink top rule. Each row: mono muted key followed by a dotted leader that fills to the value column; value in Archivo wdth 112 at 600, numeric parts in Geist Mono 600 tabular; an optional small graphite note below. Used on the cover plate, the configurator and offers.

### Price Sheet
Tuition is one sheet, not tier cards: each row is a wide headline name (with a small note) joined by a 1.5px dotted ink leader to a mono figure or a wide word. Below 560px the leader drops and the value wraps under the name.

### Schedule Configurator
A two-segment toggle (Full-time / Part-time) with a sliding ink thumb (380ms ease-out) drives a giant mono month count and the spec rows beside it. Changing values fade and drop 6px out, swap, and return (220ms). Requirements are a checklist with drawn tick SVGs.

### Enroll Stations
Four ordered stations joined by a dashed path (vertical on mobile, horizontal at 960px), each marked with a 30px construction shape: square outline, circle outline, solid triangle, solid square. The final segment's path turns solid. Each station has a title, a sentence and, where relevant, a button.

### Pass Cards and Seat Slots
Residency passes share one bordered sheet split by ink rules; the top tier is the ink-filled one. Each pass: title with a tag, a name line, a mono price with the regular price struck through and a mono note, a ruled inclusions list, a button pinned to the bottom. Capped capacity is drawn as 10 dashed square slots in a row (max 320px) with a mono caption.

### Scroll Reveals
Motion follows the Drawn Not Lifted rule: things are exposed, drawn or stamped, never floated in or bounced. edu.js tags elements once, an IntersectionObserver (threshold 0.12, bottom margin -8%) adds `is-in` once, and nothing is tagged under reduced motion or without JS, so content is never hidden by default.
- **Plates** (every `.fig` except the cover): the frame is exposed top to bottom via clip-path (1100ms ease-in-out), the crop marks snap on at 700ms, and the caption fades in at 600ms.
- **Leaders** (every `.spec` and the price sheet): the dotted leaders draw left to right with scaleX, 80ms per row after 250ms.
- **Enroll stations:** markers stamp in at scale 0 to 1, 120ms apart.
- **Everything else** (section heads, parts, chips, people, reports, passes, days, FAQ, close): a 14px rise plus a fade over 700ms ease-out, staggered 70ms per sibling and capped at the sixth.

## Do's and Don'ts

### Do:
- **Do** keep every corner square and every separation a line (1px ink panels, 1.5px ink table tops, 22% ink row hairlines).
- **Do** set display type in Archivo at wdth 112 to 125, weights 700 to 800, with negative tracking.
- **Do** put numbers, codes and captions in Geist Mono with tabular figures.
- **Do** frame photographs as numbered B&W figures with crop marks and a "Fig. n" caption.
- **Do** join keys to values with dotted leaders, and show the whole cost as one price sheet.
- **Do** use the real /Paradox/ wordmark asset for the lineage tie, and use blue only with ink.
- **Do** put dates and times in a left time gutter and statuses as tags after the title.

### Don't:
- **Don't** add a kicker or eyebrow line above a heading; the H2 opens the section.
- **Don't** use #00a3c4 for anything that is not /Paradox/, including ĒDUCŌ statuses, prices or highlights.
- **Don't** set ĒDUCŌ type condensed; that axis belongs to /Paradox/.
- **Don't** add shadows, radius or gradients to surfaces.
- **Don't** set headings, buttons or prose in Geist Mono.
- **Don't** split tuition into tier cards or show colour photography as a technique plate.
