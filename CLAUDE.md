# ETH Ankara Event Website

## Project Overview
ETH Ankara is a premier Ethereum event in Ankara, Turkey. This website must feel like an immersive digital experience — not a generic conference landing page. Every pixel, animation, and interaction should reinforce the identity: **Ankara's cultural depth meets Ethereum's decentralized future.**

## Tech Stack
- **Framework:** Next.js 15+ (App Router, React 19, TypeScript strict)
- **3D Engine:** React Three Fiber (@react-three/fiber) + Drei helpers
- **Animation:** GSAP 3.12+ with ScrollTrigger + useGSAP hook
- **Smooth Scroll:** Lenis (NOT @studio-freight/lenis — use `lenis` package)
- **Styling:** Tailwind CSS 4+ with custom design tokens
- **State:** Zustand for global animation/UI state
- **Fonts:** Variable fonts via next/font (Inter Variable + Space Grotesk)
- **Shaders:** Custom GLSL via glslify for unique visual effects
- **Package Manager:** pnpm

## Architecture Rules

### Folder Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home — full immersive experience
│   └── (routes)/           # Sub-pages (speakers, schedule, etc.)
├── components/
│   ├── canvas/             # All R3F/Three.js components
│   │   ├── scenes/         # Full scene compositions
│   │   ├── objects/        # Individual 3D objects/meshes
│   │   ├── materials/      # Custom shader materials
│   │   ├── effects/        # Post-processing effects
│   │   └── helpers/        # Camera rigs, controls, lights
│   ├── ui/                 # DOM-based UI components
│   │   ├── navigation/     # Nav, menu, mobile drawer
│   │   ├── sections/       # Page sections (Hero, Speakers, Schedule)
│   │   ├── primitives/     # Button, Badge, Card, Text
│   │   └── layout/         # Grid, Container, Spacer
│   └── animations/         # GSAP timeline wrappers
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, constants, helpers
├── shaders/                # .vert and .frag GLSL files
├── stores/                 # Zustand stores
├── styles/                 # Global CSS, Tailwind config
└── types/                  # TypeScript type definitions
```

### Component Patterns
- **Canvas components** live in `components/canvas/` — NEVER mix DOM and R3F in same file
- **UI components** are pure DOM — they never import Three.js directly
- **Section components** compose UI primitives + GSAP animations
- **Scene components** compose 3D objects + effects + camera rigs
- Every component has explicit TypeScript props interface (no `any`)
- Use `forwardRef` for animated elements that GSAP needs to target
- Prefer composition over prop drilling — use Zustand for cross-layer state

### Animation Architecture
- **GSAP owns all timeline/scroll animations** — never use CSS transitions for complex sequences
- **Framer Motion is NOT used** — GSAP handles everything for consistency
- Use `useGSAP()` hook from `@gsap/react` — NEVER raw useEffect for GSAP
- Register plugins once in root layout: `gsap.registerPlugin(ScrollTrigger)`
- All scroll animations use ScrollTrigger with `scrub: true` (0.5-1s smoothness)
- Stagger pattern: 0.6s duration per item, 0.08-0.12s stagger delay
- Use `will-change: transform` on animated elements for GPU acceleration
- GSAP timelines must have descriptive labels for debugging

### Three.js / R3F Standards
- **Single canvas** in root layout — sections control what's visible via Zustand state
- Use `useFrame` for continuous animations — NEVER update 3D state via React setState
- Memoize geometries and materials with `useMemo` — never create per frame
- Pre-bake lighting into textures when possible — minimize real-time lights (max 3)
- Use LOD (Drei's `<Detailed />`) for complex models
- Target: 50k-100k triangles total for hero scene
- Implement `Suspense` boundaries around all 3D components with skeleton fallbacks
- Dispose of geometries/materials/textures in cleanup functions

### Performance Targets
- First Contentful Paint: < 2.5s
- Canvas interactive: < 1.5s after FCP
- Animation frame rate: 60fps minimum
- Total JS bundle: < 300KB gzipped (excluding Three.js)
- 3D model files: < 2MB total compressed

## Design System

### Color Palette
```
--eth-purple: #627EEA        /* Ethereum brand */
--ankara-gold: #C5A55A       /* Ankara cultural accent */
--bg-primary: #0A0A0F        /* Deep dark background */
--bg-secondary: #12121A      /* Slightly lighter surfaces */
--bg-elevated: #1A1A2E       /* Cards, elevated surfaces */
--text-primary: #F0F0F5      /* Primary text */
--text-secondary: #8888A0    /* Muted text */
--accent-glow: #7B61FF       /* Interactive glow effects */
--gradient-start: #627EEA    /* Gradient from ETH purple */
--gradient-end: #C5A55A      /* Gradient to Ankara gold */
--success: #4ADE80
--warning: #FBBF24
--error: #F87171
```

### Typography
- **Display:** Space Grotesk Variable, 700-900 weight, clamp(2.5rem, 5vw, 5rem)
- **Headings:** Space Grotesk Variable, 600-700 weight
- **Body:** Inter Variable, 400 weight, 16px/1.6
- **Mono:** JetBrains Mono (code blocks, technical content)
- **Sizing scale:** 12, 14, 16, 18, 20, 24, 32, 40, 48, 64, 80, 96px
- NEVER use more than 2 font families on a single page section

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px
- Section padding: 96-128px vertical on desktop, 48-64px on mobile
- Container max-width: 1280px with 24px horizontal padding

### Motion Principles
- Entrance animations: ease-out (elements arriving)
- Exit animations: ease-in (elements leaving)
- Scroll-linked: linear or custom bezier
- Duration hierarchy: micro (0.2s) → small (0.4s) → medium (0.6s) → large (1.0s)
- NEVER animate `width`, `height`, or `top/left` — use `transform` and `opacity` only

## Critical Rules

### DO
- Write TypeScript strict mode — no `any`, no `@ts-ignore`
- Use discriminated unions for component variant props
- Implement proper error boundaries around canvas components
- Add `aria-label` to all interactive elements
- Server-render all text content — canvas is progressive enhancement
- Use `next/image` for all raster images with proper sizing
- Test on actual mobile devices — not just Chrome DevTools
- Use semantic HTML (section, article, nav, header, footer, main)

### DO NOT
- Do NOT use `useEffect` for GSAP animations — use `useGSAP()` hook
- Do NOT create materials/geometries inside render functions
- Do NOT use inline styles — use Tailwind utilities or CSS modules
- Do NOT import Three.js in UI components
- Do NOT use `index` as React key for dynamic lists
- Do NOT add console.log in production code
- Do NOT use default exports except for page components
- Do NOT skip loading states — every async operation needs a skeleton/spinner
- Do NOT use absolute pixel values for responsive layouts — use clamp(), min(), max()
- Do NOT add unnecessary dependencies — check if existing tools can do the job

## Workflows

### Development
```bash
pnpm dev          # Start dev server
pnpm lint         # ESLint + Prettier check
pnpm type-check   # TypeScript compilation check
pnpm build        # Production build
pnpm analyze      # Bundle analyzer
```

### Before Every Commit
1. Run `pnpm type-check` — zero errors
2. Run `pnpm lint` — zero warnings
3. Test 3D performance with r3f-perf in dev mode
4. Verify mobile responsiveness at 375px, 768px, 1024px, 1440px widths
5. Check Lighthouse score — target 90+ performance

## Brand Voice
ETH Ankara is not just another hackathon — it's where Ankara's 3000-year history meets the decentralized future. The site should feel like stepping into a portal between ancient Anatolian civilization and the Ethereum ecosystem. Design language: dark, atmospheric, confident, with moments of warm gold breaking through deep purple-blue darkness.
