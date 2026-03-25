# Design System Rules

## Color Usage
- Background must always be dark (#0A0A0F base) — never use white/light backgrounds
- ETH purple (#627EEA) is for primary CTAs and interactive elements only — don't overuse
- Ankara gold (#C5A55A) is the cultural accent — use sparingly for emphasis and hover states
- Gradients flow from purple → gold (left to right, or top to bottom)
- Glow effects use --accent-glow with 20-40% opacity blur
- Text on dark backgrounds: #F0F0F5 for primary, #8888A0 for secondary

## Typography Hierarchy
- Only Space Grotesk for display/headings, only Inter for body text
- Hero title: clamp(2.5rem, 5vw, 5rem), weight 800, letter-spacing -0.02em
- Section titles: clamp(1.5rem, 3vw, 3rem), weight 700, letter-spacing -0.01em
- Body text: 16px/1.6, weight 400
- Captions: 14px/1.5, weight 400, text-secondary color
- All text must be accessible (WCAG AA contrast ratios minimum)

## Component Patterns
- Cards: bg-elevated (#1A1A2E) with 1px border rgba(255,255,255,0.06), border-radius 12px
- Buttons: Primary uses gradient (purple→gold), secondary uses ghost style with border
- Hover states: subtle glow + 0.2s ease-out transition on transform scale(1.02)
- Focus states: 2px ring with --accent-glow color, 2px offset
- Badge/Tag: small rounded pill, bg-secondary, text-primary, 12px font

## Responsive Strategy
- Mobile-first: design for 375px, then scale up
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)
- Navigation: full horizontal on desktop, hamburger drawer on mobile
- 3D elements: simplified or replaced with static images on mobile if performance < 30fps
- Touch targets: minimum 44x44px on mobile
- No horizontal scroll ever — test at every breakpoint

## Grid System
- 12-column grid on desktop, 4-column on mobile
- Gutter: 24px (desktop), 16px (mobile)
- Max container width: 1280px centered
- Full-bleed sections allowed for immersive moments (3D scenes, hero)

## Image Standards
- All images served via next/image with explicit width/height
- Format priority: WebP → AVIF → PNG (use Next.js automatic optimization)
- Placeholder: blurDataURL for above-fold images
- Speaker photos: 1:1 aspect ratio, min 400x400px source
- Logo assets: SVG only, with dark mode variants
