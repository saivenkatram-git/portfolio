# Portfolio — Sai Venkatram

Personal portfolio site: a single-page hero introducing who I am and what I'm
working on, plus a `/stack` page detailing the tools I build with.

## Tech stack

- **[SvelteKit](https://kit.svelte.dev)** (Svelte 5, runes) — app framework
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling (CSS-first config, no `tailwind.config`)
- **[mode-watcher](https://github.com/svecosystem/mode-watcher)** — light/dark theme
- **[@sveltejs/enhanced-img](https://kit.svelte.dev/docs/images)** — responsive image optimization
- **[Vercel](https://vercel.com)** — hosting (`@sveltejs/adapter-vercel`) + Speed Insights
- Self-hosted **General Sans** variable font

## Notable details

- Theme-adaptive brand marks via inline `?raw` SVGs colored with `currentColor`.
- Mobile browser chrome (`theme-color`) kept in sync with the active theme in JS.
- The `/stack` layout switches on **cursor presence** (`pointer: fine`), not viewport
  width — touch devices get a reason-per-item list, cursor devices get a compact grid
  with hover tooltips.

## Development

```sh
npm install
npm run dev      # start dev server on http://localhost:3000
```

## Other commands

```sh
npm run build    # production build
npm run preview  # preview the production build
npm run check    # type-check with svelte-check
npm run lint     # prettier + eslint
npm run format   # auto-format with prettier
```
