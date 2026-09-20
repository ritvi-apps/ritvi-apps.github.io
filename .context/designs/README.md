# Ritvi Apps site redesign — designs

Pure HTML + Tailwind (Play CDN). The live `index.html` at the repo root is
untouched.

Open `index.html` — it is the gallery and links every screen.

```
tailwind.config.js   token scales, every value a var(--…)
shared.css           token definitions (light + dark), frames, bloom, gallery chrome
index.html           gallery · start here
web/                 home · app · app-beta · app-soon · get · press · support · 404
mobile/              home · app · get · nav-open   (390 wide)
```

Violet and the dark-scheme answer are carried over from the live page. What
changes is that this becomes a store front instead of a text document.

Rules the set is built on, in `shared.css`:

1. Every app has a page, and every page has a Get block — app site, App Store,
   Google Play, always in that order, disabled-with-reason rather than hidden.
2. Availability is never a euphemism. Live / Beta open / Closed testing /
   Coming — and "Coming" only when nothing is installable.
3. Show the app. Icons and screenshots everywhere, reusing the store assets.

`/go/<slug>` is the short link that belongs in a bio, a QR code or a poster: it
resolves to the right destination per platform and never dead-ends.
