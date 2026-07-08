# Savino's Pizza — Coming Soon Page

A polished "coming soon" landing page built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

## Features

- Live countdown timer (6 weeks from first run)
- Email signup with validation and success state
- Animated SVG pizza icon with floating effect
- Warm Italian restaurant color palette
- Fully responsive (mobile + desktop)
- Subtle background orbs, texture overlay, and staggered fade-in animations
- SEO-ready metadata via Next.js `Metadata` API

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind base + custom utility classes
│   ├── layout.tsx        # Root layout with Google Fonts + metadata
│   └── page.tsx          # Main landing page
└── components/
    ├── CountdownTimer.tsx # Live countdown with Days/Hours/Minutes/Seconds
    ├── EmailSignup.tsx    # Email form with validation + loading/success states
    └── PizzaIcon.tsx      # SVG pizza illustration
```

## Setup

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

| What | Where |
|------|-------|
| Countdown target date | `src/components/CountdownTimer.tsx` → `getTargetDate()` |
| Brand colors | `tailwind.config.ts` → `theme.extend.colors.pizza` |
| Copy / messaging | `src/app/page.tsx` |
| Fonts | `src/app/layout.tsx` (Google Fonts link) + `globals.css` |
| Email handler | Replace the `setTimeout` mock in `src/components/EmailSignup.tsx` with your API call |
