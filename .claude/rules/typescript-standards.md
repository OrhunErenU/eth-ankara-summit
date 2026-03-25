# TypeScript Standards

## Strict Mode
- `strict: true` in tsconfig — no exceptions
- No `any` type ever — use `unknown` then narrow with type guards
- No `@ts-ignore` or `@ts-expect-error` — fix the actual type issue
- Explicit return types on all exported functions
- `noUncheckedIndexedAccess: true` — forces null checks on array/object access

## Naming Conventions
- Components: PascalCase (HeroSection.tsx, SpeakerCard.tsx)
- Hooks: camelCase with "use" prefix (useScrollProgress.ts, useCanvasState.ts)
- Utilities: camelCase (formatDate.ts, clampValue.ts)
- Constants: UPPER_SNAKE_CASE (MAX_PARTICLES, ANIMATION_DURATION)
- Types/Interfaces: PascalCase with descriptive names (SpeakerCardProps, AnimationConfig)
- Zustand stores: camelCase with "Store" suffix (useAnimationStore, useUIStore)
- CSS modules: camelCase class names

## Component Props Pattern
```typescript
// Use interface for component props — always explicitly type
interface SpeakerCardProps {
  name: string
  role: string
  avatarUrl: string
  talkTitle?: string
  variant?: 'compact' | 'featured'
}

// Named export (not default) except page components
export function SpeakerCard({ name, role, avatarUrl, talkTitle, variant = 'compact' }: SpeakerCardProps) {
  // ...
}
```

## Discriminated Unions for Variants
```typescript
// DO: Use discriminated unions
type ButtonProps =
  | { variant: 'primary'; gradientFrom?: string; gradientTo?: string }
  | { variant: 'secondary'; borderColor?: string }
  | { variant: 'ghost'; hoverBg?: string }

// DON'T: Use optional props for everything
// type ButtonProps = { variant: string; gradientFrom?: string; borderColor?: string; hoverBg?: string }
```

## Import Organization
```typescript
// 1. React/Next.js
import { useRef, useMemo } from 'react'
import Image from 'next/image'

// 2. Third-party libraries
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

// 3. Internal modules (absolute paths)
import { useAnimationStore } from '@/stores/animationStore'
import { SpeakerCard } from '@/components/ui/sections/SpeakerCard'

// 4. Types
import type { Speaker, AnimationConfig } from '@/types'

// 5. Styles
import styles from './Component.module.css'
```

## File Organization
- One component per file — no barrel exports with side effects
- Co-locate component + types + styles in same directory
- Index files only for re-exports, never for logic
- Hooks that are used by only one component live next to that component
- Shared hooks live in `src/hooks/`

## Error Handling
- Use Result pattern for async operations (not try/catch everywhere)
- Canvas errors caught by Error Boundary — never crash the whole page
- API calls: always handle loading, success, and error states
- Type narrow errors: `if (error instanceof Error)` before accessing .message
