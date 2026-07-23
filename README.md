# Vesti Landing Page

Marketing site for Vesti, a local-first AI conversation memory product available as a browser extension and desktop app, with CLI support in development.

This repository is the standalone landing-page codebase extracted from the main VESTI project:
[abraxas914/VESTI](https://github.com/abraxas914/VESTI)

## What This Repo Contains

- The public-facing landing page built with Next.js
- Hero, features, demo, install, and footer sections
- Brand assets used by the marketing site
- Browser extension, desktop app, and CLI status/download paths
- Chinese and English product copy
- GitHub Pages deployment workflow

This repo does not include the full browser extension, capture engine, local knowledge dashboard, or the rest of the main VESTI product code.

## Product Context

Vesti is a local-first memory layer for AI conversations. It helps users keep the threads they want back by turning scattered chatbot history into a searchable personal library.

The landing page keeps the original compact product presentation while explaining:

- Local-first AI memory
- Fast recall of past conversations
- Demo of the memory loop
- Browser extension install through the Chrome Web Store
- Windows and Linux desktop beta downloads, with the macOS build coming soon
- Upcoming CLI support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui primitives

## Getting Started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
pnpm build
```

The static site is generated in `out/`.

## Key Files

- `app/page.tsx`: page composition
- `components/hero.tsx`: main headline and CTA
- `components/features.tsx`: feature cards
- `components/demo-video.tsx`: demo section
- `components/download-section.tsx`: install/download block
- `lib/marketing-config.ts`: store link, demo URL, download URL, GitHub link
- `lib/i18n.ts`: Chinese and English page copy
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment

## Assets

To keep this repo lightweight and stable for GitHub sync, large downloadable/demo files are referenced through hosted URLs in `lib/marketing-config.ts` instead of being versioned here directly.

Current linked resources:

- Chrome Web Store:
  [Vesti on Chrome Web Store](https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo?utm_source=item-share-cb)
- Linux desktop app:
  [Download from NJU Box](https://box.nju.edu.cn/seafhttp/f/31fb1e4032fc4814a783/?op=view)
- Windows desktop app:
  [Download from NJU Box](https://box.nju.edu.cn/seafhttp/f/0fbfd50b8ee34f92b66f/?op=view)
- Browser extension manual package:
  [Download from NJU Box](https://box.nju.edu.cn/seafhttp/f/8103dc3087cf45c699aa/?op=view)
- Main product repository:
  [221250144/VESTI](https://github.com/221250144/VESTI)
- Desktop app:
  [221250144/VESTI-APP](https://github.com/221250144/VESTI-APP)
- CLI:
  [firefly-hefeng/VESTI-CLI](https://github.com/firefly-hefeng/VESTI-CLI)

## Relationship To The Main Repo

If you need the actual extension product, architecture, research context, or the full project history, use the main repository:

[https://github.com/abraxas914/VESTI](https://github.com/abraxas914/VESTI)

This repository is intentionally narrower: it is the landing page only.
