# Vaishnavi Kosuru — Portfolio V5

A Vite-powered, editable portfolio built with HTML, CSS, and JavaScript. No framework required. Features an animated DNA helix, interactive illustrative gene regulatory network, scroll reveals, FLL story, research, campus work, hackathons, judging, awards, and hobbies.

## Run in VS Code

1. Install Node.js LTS from https://nodejs.org
2. Extract this ZIP and open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install` once, then `npm run dev`.
5. Open the localhost URL shown in the terminal.

## Edit

- `index.html` — all written content and section markup.
- `src/style.css` — colors, layout, hover effects, mobile styles.
- `src/main.js` — DNA animation, interactive gene network, scroll animations.

## Deploy

Run `npm run build` and deploy the generated `dist/` folder to Netlify or Vercel. For GitHub Pages, configure Vite's `base` for your repository path if not deploying at the domain root.

## Before publishing

- Replace the placeholder GitHub link (`https://github.com/`) with your own profile URL.
- Add verified details for the Provost Award.
- Add a resume PDF and email address if you want public contact options.
- Update the Berkeley event from Upcoming to Attended only after you attend.
- Update Purdue Expo judging from Upcoming after the event.
- The gene network is an illustrative visualization, not experimental data.
- The site supports reduced-motion preferences.

V6 changes: Larger body text; CS/ML/GRN DNA labels; new About heading; code symbol replaces graduation-cap emoji; FLL heading softened; condensed Off the Clock section with a scroll-triggered CSS badminton rally and interest-chip reveals.

V7 changes: widened desktop container (1680px), balanced hero columns and reduced unnecessary hero whitespace. Restored the original full-width three-point FLL timeline with connecting line and circular icons, renamed its headline.
