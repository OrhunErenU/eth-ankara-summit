# Animation Patterns & Standards

## GSAP Setup
- Register plugins ONCE in root layout: `gsap.registerPlugin(ScrollTrigger)`
- Always use `useGSAP()` from `@gsap/react` — auto-handles cleanup
- Never use `useEffect` for GSAP — it causes memory leaks and cleanup issues
- Import pattern: `import gsap from 'gsap'` and `import { ScrollTrigger } from 'gsap/ScrollTrigger'`

## Scroll Animation Patterns

### Pattern 1: Section Entrance (Fade + Slide)
```typescript
useGSAP(() => {
  gsap.from(sectionRef.current, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  })
}, { scope: containerRef })
```

### Pattern 2: Staggered List Items
```typescript
useGSAP(() => {
  gsap.from('.speaker-card', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: gridRef.current,
      start: 'top 80%',
    },
  })
}, { scope: gridRef })
```

### Pattern 3: Parallax Background
```typescript
useGSAP(() => {
  gsap.to(bgRef.current, {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
    },
  })
})
```

### Pattern 4: Text Reveal (Character Split)
```typescript
// Split text into spans first, then animate
useGSAP(() => {
  const chars = gsap.utils.toArray('.char')
  gsap.from(chars, {
    y: '100%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.02,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: textRef.current,
      start: 'top 85%',
    },
  })
})
```

### Pattern 5: Horizontal Scroll Section
```typescript
useGSAP(() => {
  const panels = gsap.utils.toArray('.panel')
  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: containerRef.current,
      pin: true,
      scrub: 1,
      snap: 1 / (panels.length - 1),
      end: () => '+=' + containerRef.current.offsetWidth,
    },
  })
})
```

## Lenis Smooth Scroll Setup
```typescript
// In root layout or provider
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
})

// Connect with GSAP
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)
```

## Duration Standards
- Micro interactions (hover, focus): 0.15-0.2s
- Small transitions (button state, tooltip): 0.3-0.4s
- Medium animations (card entrance, section reveal): 0.6-0.8s
- Large animations (page transition, hero sequence): 1.0-1.5s
- Scroll-scrubbed: duration is irrelevant — controlled by scroll position

## Easing Standards
- Entrances: `power3.out` or `power2.out`
- Exits: `power2.in`
- Scroll-linked: `none` (linear)
- Bouncy/playful: `back.out(1.7)`
- Snappy: `expo.out`
- NEVER use `linear` for non-scroll animations — it looks robotic

## Performance Rules
- Only animate `transform` and `opacity` — NEVER width, height, top, left, margin, padding
- Add `will-change: transform` via CSS to frequently animated elements
- Remove will-change after animation completes for static elements
- Batch animations in timelines — don't create separate tweens for same trigger
- Use `overwrite: 'auto'` on interactive animations to prevent conflicts
- Debounce scroll-triggered recalculations: `ScrollTrigger.config({ limitCallbacks: true })`
- Kill animations on component unmount (useGSAP handles this automatically)
