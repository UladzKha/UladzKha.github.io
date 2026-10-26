# Site refresh plan

## Current state

- Static `index.html`, `styles.css`, and `script.js`; `.nojekyll` makes GitHub Pages serve the files directly. No package manager, build step, or deployment workflow is present.
- Current content features Samuraizer and Pixelize. The narrative, project selection, and broad AI focus need updating to verifiable AI, oathgate, memgate, and Genkan.
- Current fonts come from Google Fonts, so they are not guaranteed offline. The mobile navigation disappears, Open Graph metadata and an image are absent, and there is no print stylesheet.

## Proposed structure

- `refresh-2026`: Hero, project cards, approach, short experience timeline, writing/talks placeholder, contact. A small hash seal types and closes into an entrance motif.
- `refresh-2026-notebook`: cover and typed rule, dated entries `#entry-001` through `#entry-003`, principles, short background, contact, page-number footer, and print styles. Each entry states hypothesis, method, result, and status.
- Keep the static stack. Generate a local PNG Open Graph image for each branch. Use system font stacks and no remote runtime assets.

## Design direction

- Clean dark: charcoal canvas, calm teal accent, sans text, monospace technical details, restrained borders.
- Lab notebook: warm paper, grid, ink and muted red stamps; optional dark night shift. Limit margin notes to one per section.
- Animate only the signature seal or typed notebook line, and turn it off for reduced motion.

## Tagline options

1. Building AI you can verify.
2. Evidence before capability.
3. Freeze the ruler. Trust the result.

## Open TODOs

- The supplied oathgate ruler hash is shown in both designs and labelled as oathgate's own CI-verified hash. No hash is shown for memgate or Genkan.
- Add the Genkan talk's date and public link if it is announced. The talk is only planned.
- Existing GitHub, LinkedIn, and email links are reused; X was supplied for this update.
- Confirm the dates for experience milestones if a dated timeline is wanted.
