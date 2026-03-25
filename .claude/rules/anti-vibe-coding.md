# Anti-Vibe-Coding Rules

## Philosophy
This project is NOT vibe coded. Every line of code must be intentional, every design decision must have a rationale, and every component must serve the ETH Ankara brand identity.

## What "Vibe Coded" Looks Like (AVOID)
- Generic dark theme with random neon gradients
- Copy-pasted Three.js examples without customization
- Lorem ipsum or placeholder content left in production
- Shadcn/UI components used without any customization
- Stock particle effects with default settings
- "Cool looking" animations that don't serve the narrative
- Overengineered features nobody asked for
- 15 npm packages to do what 2 could do

## What Intentional Code Looks Like (DO THIS)
- Every color choice maps to either ETH brand or Ankara cultural identity
- 3D scenes tell a story: ancient → modern → decentralized future
- Animations guide the user's eye and reveal content with purpose
- Component APIs are minimal — only the props that are actually needed
- Performance is measured, not assumed
- Accessibility is built in from day one, not bolted on later

## Before Writing Any Code, Ask:
1. Does this serve the ETH Ankara brand story?
2. Is this the simplest implementation that achieves the goal?
3. Will this perform well on a mid-range phone?
4. Can I explain why every animation/effect exists?
5. Does this duplicate something that already exists in the codebase?

## Code Review Checklist
- [ ] No TODO comments left unaddressed
- [ ] No commented-out code
- [ ] No unused imports or variables
- [ ] No hardcoded strings (use constants or content files)
- [ ] No magic numbers (define as named constants)
- [ ] TypeScript: zero errors, zero `any`
- [ ] Responsive: tested at 375px, 768px, 1024px, 1440px
- [ ] Animation: every animation has a clear purpose and appropriate duration
- [ ] Performance: canvas maintains 60fps in dev mode
- [ ] Accessibility: all interactive elements have labels, all images have alt text

## Content Strategy
- All event content (speakers, schedule, sponsors) lives in typed data files
- Content changes should NEVER require code changes
- Dates and times include timezone information
- Multi-language support planned from start (Turkish + English minimum)

## Dependency Policy
- Before adding ANY new package, check if existing tools can do the job
- Max 1 package per problem domain (1 animation lib, 1 scroll lib, etc.)
- Prefer packages with: active maintenance, <50KB gzipped, tree-shakeable
- Document WHY each dependency was chosen in package.json comments or README
