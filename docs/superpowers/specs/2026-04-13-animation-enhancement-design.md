# Animation Enhancement — Puerta del Sol Website

## Goal

Restore animation parity with the old site and add premium motion polish. Create a shared animation config so all pages use consistent, professional motion.

## Decisions

- **Level:** B — Parity + enhance (stagger, spring, parallax, page transitions, floating accents)
- **Skill used:** UI/UX Pro Max design intelligence for motion guidelines
- **Accessibility:** All animations respect `prefers-reduced-motion`
- **Performance:** Only `transform` and `opacity` — GPU-accelerated, no layout thrashing

## Shared Motion Config — `src/utils/animations.ts`

Reusable Framer Motion variants used across all pages:

| Variant | initial | animate/whileInView | transition | Use for |
|---------|---------|-------------------|------------|---------|
| `fadeUp` | `opacity:0, y:30` | `opacity:1, y:0` | `duration:0.5, ease:[0.25,0.4,0.25,1]` | Default section content |
| `fadeIn` | `opacity:0` | `opacity:1` | `duration:0.4` | Overlays, backgrounds |
| `slideLeft` | `opacity:0, x:-50` | `opacity:1, x:0` | `duration:0.5, ease:[0.25,0.4,0.25,1]` | Left column |
| `slideRight` | `opacity:0, x:50` | `opacity:1, x:0` | `duration:0.5, ease:[0.25,0.4,0.25,1]` | Right column |
| `scaleIn` | `opacity:0, scale:0.8` | `opacity:1, scale:1` | `type:'spring', stiffness:100, damping:15` | Icons, badges, stats |
| `staggerContainer` | — | — | `staggerChildren:0.08` | Parent of card grids |
| `staggerContainerSlow` | — | — | `staggerChildren:0.15` | Hero elements |
| `springUp` | `opacity:0, y:50` | `opacity:1, y:0` | `type:'spring', damping:20, stiffness:90` | Hero text, CTAs |
| `hoverLift` | — | `y:-8, borderColor:'rgba(196,162,101,0.5)'` | `duration:0.2` | Card hover |
| `breathing` | — | `scale:[1,1.08,1]` | `duration:3, repeat:Infinity, ease:'easeInOut'` | Stat badges |
| `bounce` | — | `y:[0,-5,0]` | `duration:2, repeat:Infinity, ease:'easeInOut'` | WhatsApp button |

All variants include `viewport: { once: true, margin: '-50px' }` for scroll triggers.

## Per-Page Animation Spec

### Home Page
- **Hero title:** `springUp` with stagger 0.15s per word (split title into `<span>` per word)
- **Hero subtitle:** `fadeUp` delay 0.4s after title
- **Hero CTA buttons:** `fadeUp` delay 0.6s, stagger 0.1s between buttons
- **KPI strip:** `scaleIn` staggered 0.1s per stat, spring bounce
- **About section:** Left image `slideLeft`, right text `slideRight`; image also has scale `1.1→1.0` settle
- **Category cards:** `staggerContainer` parent, `fadeUp` children (0.08s stagger)
- **Card hover:** `hoverLift` — `y:-8` + gold border + increased shadow
- **Services grid:** `staggerContainer` + `fadeUp` (0.1s stagger)
- **Carousel:** Active slide `scale:1, opacity:1`, others `scale:0.95, opacity:0`. Stat badge uses `breathing` variant.
- **Blog cards:** `staggerContainer` + `fadeUp` (0.1s stagger)
- **Section headings:** `fadeUp` + scale `0.95→1`. Gold underline animates `width: 0→100%` via CSS keyframe.
- **CTA section:** `fadeUp` for text, `springUp` for button

### About Page
- **Hero:** `fadeIn` for background, `springUp` for title
- **Mission section:** `slideLeft` for image, `slideRight` for text
- **Values cards:** `staggerContainer` + `scaleIn` children (0.1s stagger)
- **Stats:** `scaleIn` staggered

### Services Page
- **Service cards:** `staggerContainer` + `fadeUp` (0.08s stagger)
- **Process timeline:** Each step `fadeUp` with delay `index * 0.15s`

### Properties Page
- **Category cards:** `staggerContainer` + `fadeUp` (0.1s stagger)
- **Filter bar:** `fadeIn`

### Golden Visa Page
- **Benefits grid:** `staggerContainer` + `scaleIn` (0.1s stagger)
- **Family cards:** `staggerContainer` + `fadeUp` (0.08s stagger)
- **Process steps:** `slideLeft`/`slideRight` alternating

### Blog Page
- **Article cards:** `staggerContainer` + `fadeUp` (0.1s stagger)
- **Featured card:** `springUp`

### Contact Page
- **Quick action cards:** `staggerContainer` + `scaleIn` (0.1s stagger)
- **Form:** `slideLeft`, info cards `slideRight`

### Page Transitions (App.tsx)
- Wrap `<Routes>` in `<AnimatePresence mode="wait">`
- Each page wrapped in `<motion.div>` with:
  - Enter: `opacity:0, y:20` → `opacity:1, y:0` (duration 0.3s)
  - Exit: `opacity:1, y:0` → `opacity:0, y:-20` (duration 0.2s — exit faster than enter per UX Pro Max rule)

### Floating Elements
- **WhatsApp button:** `bounce` variant (subtle `y:[0,-5,0]` every 2s)
- **Gold decorative elements:** `breathing` variant (subtle `scale:[1,1.05,1]` every 4s)

## Accessibility

```tsx
// In animations.ts
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// All variants return empty/instant if reduced motion
export const fadeUp = prefersReducedMotion
  ? { initial: {}, animate: {}, transition: { duration: 0 } }
  : { initial: { opacity: 0, y: 30 }, ... };
```

## Files to Create/Modify

- **Create:** `src/utils/animations.ts` — shared variants + reduced motion check
- **Modify:** `src/pages/Home.tsx` — apply all animation variants
- **Modify:** `src/pages/About.tsx` — apply variants
- **Modify:** `src/pages/Services.tsx` — apply variants
- **Modify:** `src/pages/Properties.tsx` — apply variants
- **Modify:** `src/pages/GoldenVisa.tsx` — apply variants
- **Modify:** `src/pages/Blog.tsx` — apply variants
- **Modify:** `src/pages/BlogDetail.tsx` — apply variants
- **Modify:** `src/pages/Contact.tsx` — apply variants
- **Modify:** `src/App.tsx` — add AnimatePresence page transitions
- **Modify:** `src/components/WhatsAppButton.tsx` — add bounce
- **Modify:** `src/index.css` — add gold underline keyframe animation
