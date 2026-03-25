# /code-review

Review the latest changes against ETH Ankara project standards:

## 1. TypeScript Quality
- No `any` types
- Explicit return types on exports
- Discriminated unions for variants
- Proper null/undefined narrowing

## 2. Architecture Compliance
- Canvas components in `components/canvas/`
- UI components in `components/ui/`
- No Three.js imports in UI components
- No DOM manipulation in canvas components
- State crosses layers via Zustand only

## 3. Animation Standards
- Uses `useGSAP()` not `useEffect`
- Only animates transform/opacity
- Has appropriate easing (not linear)
- Duration matches the hierarchy (micro/small/medium/large)
- ScrollTrigger has proper start/end points

## 4. Performance
- Geometries/materials memoized
- No state updates inside useFrame
- Images use next/image with dimensions
- No unnecessary re-renders (check with React DevTools)

## 5. Design System
- Colors match design tokens
- Typography follows scale
- Spacing uses 4px base grid
- Responsive at all breakpoints

## 6. Accessibility
- Semantic HTML elements
- aria-labels on interactive elements
- Color contrast meets WCAG AA
- Keyboard navigation works
- Focus states visible

## 7. Code Hygiene
- No console.log
- No commented-out code
- No unused imports
- No magic numbers
- Named exports (not default, except pages)
