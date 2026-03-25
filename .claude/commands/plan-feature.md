# /plan-feature

Before implementing any new feature or section, follow this planning workflow:

## Step 1: Define Purpose
- What does this feature/section contribute to the ETH Ankara story?
- Who is the target user for this feature? (developer, sponsor, attendee, speaker)
- What action should the user take after seeing this section?

## Step 2: Design Review
- Review the design system tokens (colors, typography, spacing)
- Sketch the component hierarchy (which primitives compose the section?)
- Define responsive behavior at all breakpoints

## Step 3: Animation Plan
- What enters/exits and when? (scroll trigger points)
- Which GSAP pattern applies? (stagger, parallax, reveal, horizontal scroll)
- Does this section interact with the 3D canvas? If yes, what Zustand state changes?

## Step 4: Technical Architecture
- List new components needed and where they go in the folder structure
- Define TypeScript interfaces for all props
- Identify any new shared hooks or utilities
- Estimate performance impact (new draw calls, new DOM nodes, new animations)

## Step 5: Implementation Order
1. Types and interfaces
2. Data/content files
3. Static component structure (no animation)
4. Responsive layout
5. Animation integration
6. 3D canvas integration (if applicable)
7. Performance testing
8. Accessibility audit
