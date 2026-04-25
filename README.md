# Vesti Landing Page

Marketing site for Vesti, a local-first AI conversation memory product.

This repository is the standalone landing-page codebase extracted from the main VESTI project:
[abraxas914/VESTI](https://github.com/abraxas914/VESTI)

## What This Repo Contains

- The public-facing landing page built with Next.js
- Hero, features, demo, install, and footer sections
- Brand assets used by the marketing site
- Chrome Web Store install link and marketing config

This repo does not include the full browser extension, capture engine, local knowledge dashboard, or the rest of the main VESTI product code.

## Product Context

Vesti is a local-first memory layer for AI conversations. It helps users keep the threads they want back by turning scattered chatbot history into a searchable personal library.

The landing page in this repo is focused on explaining that value clearly:

- Local-first AI memory
- Fast recall of past conversations
- Demo of the memory loop
- Install path through the Chrome Web Store

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
pnpm start
```

## Key Files

- `app/page.tsx`: page composition
- `components/hero.tsx`: main headline and CTA
- `components/features.tsx`: feature cards
- `components/demo-video.tsx`: demo section
- `components/download-section.tsx`: install/download block
- `lib/marketing-config.ts`: store link, demo URL, download URL, GitHub link

## Assets

To keep this repo lightweight and stable for GitHub sync, large downloadable/demo files are referenced through hosted URLs in `lib/marketing-config.ts` instead of being versioned here directly.

Current linked resources:

- Chrome Web Store:
  [Vesti on Chrome Web Store](https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo?utm_source=item-share-cb)
- Main product repository:
  [abraxas914/VESTI](https://github.com/abraxas914/VESTI)

## Relationship To The Main Repo

If you need the actual extension product, architecture, research context, or the full project history, use the main repository:

[https://github.com/abraxas914/VESTI](https://github.com/abraxas914/VESTI)

This repository is intentionally narrower: it is the landing page only.
