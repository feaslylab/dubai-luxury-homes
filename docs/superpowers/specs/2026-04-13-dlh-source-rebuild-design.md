# Puerta del Sol Website — Source Rebuild + David's Changes

## Problem

The live site at `https://feaslylab.github.io/dubai-luxury-homes/` was built from React/TypeScript source, but 65+ commits of changes were applied directly to the compiled JS bundle — never back-ported to source. The source code on Mac Mini (`/Users/nick/.openclaw/workspace/dubai-luxury-homes/site/`) is stale: English-only, missing Blog pages, missing ContactPopup, missing bilingual i18n, missing carousel, missing KPI strip, and missing all of David Azar's 16 original feedback changes.

This means:
- We cannot make clean changes to the site
- Building from source would destroy the live site
- Every future change requires editing minified JS
- No CI/CD is possible

David Azar sent a new voice note (April 11, 2026) with 23 additional changes. We need a working source to implement them.

## Goal

1. Reverse-engineer the live compiled bundle back into clean React/TypeScript source that produces a pixel-identical site
2. Apply David's 23 content changes from his April 11 voice note
3. Set up GitHub Actions CI/CD so pushing to `source` branch auto-builds and deploys — no one ever touches the bundle directly again

## Decisions (confirmed with Nick)

- **Verification:** Full — visual (Playwright screenshots), functional (nav, links, interactions), and code-level (TypeScript, build)
- **Languages:** Both Spanish and English in one pass
- **Bug reproduction:** Reproduce broken Services/Properties pages first (match live), verify, then fix as separate commit
- **Deploy workflow:** GitHub Actions CI/CD on `source` branch push
- **Skills:** Use `verification-before-completion`, `test-driven-development`, `dispatching-parallel-agents`, `writing-plans`

## Tech Stack

- React 18 + TypeScript
- Vite 4 (build tool)
- Tailwind CSS 3 (styling)
- Framer Motion 9 (animations)
- react-i18next (bilingual ES/EN)
- React Router 6 (SPA routing)
- Lucide React (icons)
- GitHub Actions (CI/CD)
- Playwright (verification)

## Architecture

### Repository Structure

```
feaslylab/dubai-luxury-homes (GitHub)
├── source branch (DEFAULT for development)
│   ├── src/
│   │   ├── App.tsx              — routing (Spanish paths)
│   │   ├── main.tsx             — entry point
│   │   ├── i18n.ts              — full ES/EN translations (~200+ keys)
│   │   ├── index.css            — Tailwind + custom styles
│   │   ├── vite-env.d.ts
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ContactModal.tsx
│   │   │   ├── ContactPopup.tsx  — NEW (auto-show after 5s)
│   │   │   └── LoadingSpinner.tsx
│   │   └── pages/
│   │       ├── Home.tsx          — hero, KPI strip, about, categories, carousel, blog preview
│   │       ├── About.tsx         — mission, 3 pillars, stats
│   │       ├── Services.tsx      — service cards, process
│   │       ├── Properties.tsx    — investment grid, coming soon
│   │       ├── GoldenVisa.tsx    — benefits, eligibility, process, FAQ
│   │       ├── Blog.tsx          — NEW (article grid, bilingual)
│   │       ├── BlogDetail.tsx    — NEW (individual article)
│   │       └── Contact.tsx       — form, WhatsApp, info cards
│   ├── public/
│   ├── images/
│   ├── videos/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── .github/workflows/deploy.yml  — CI/CD
├── gh-pages branch (auto-deployed built output)
└── main branch (legacy built output, frozen)
```

### Routes (Spanish paths, matching live site)

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/sobre-nosotros` | About | About page |
| `/servicios` | Services | Services page |
| `/propiedades` | Properties | Properties page |
| `/golden-visa` | GoldenVisa | Golden Visa guide |
| `/blog` | Blog | Blog listing |
| `/blog/:slug` | BlogDetail | Individual blog post |
| `/contacto` | Contact | Contact page |

### i18n Structure

The `i18n.ts` file will contain the full translation object with ES as default language and EN as secondary. All strings currently hardcoded in the bundle will be extracted into translation keys organized by page/section.

## Components to Rebuild

### From Live Bundle (reverse-engineer)

Each component will be reconstructed by:
1. Reading the corresponding section of `index-CryeSRaq.js`
2. Extracting JSX structure, CSS classes, translation strings
3. Writing clean TSX with proper typing
4. Verifying output matches live DOM via Playwright snapshot

**Pages:**
- `Home.tsx` — hero video with crossfade, animated KPI count-up strip (12+, 500+, 250+, USD 2B+), about preview with dual images, 4-tier investment categories (Under 250K / 250K-2M / 2M-6M / 6M+), services grid (6 cards), cinematic Dubai carousel (6 slides with stat badges), blog preview (3 cards), CTA section with Palm Jumeirah image
- `About.tsx` — hero, "Maestros de la Inversión de Alto Valor" section with dual images, mission text, "Conocer Más" link
- `Services.tsx` — hero, 4 core service cards with features list, 4-step process timeline, 4 additional service cards, CTA
- `Properties.tsx` — hero, search + filter bar, "Coming Soon" placeholder, 4 property category preview cards
- `GoldenVisa.tsx` — hero with Award icon, 6 benefit cards, 3 eligibility pathways (Real Estate highlighted), 6-step process timeline, required documents checklist, FAQ accordion, CTA
- `Blog.tsx` — article grid with 6 bilingual posts, language-aware rendering
- `BlogDetail.tsx` — full article view, related posts sidebar
- `Contact.tsx` — hero, 3 quick action cards (WhatsApp/Book/Golden Visa), contact form with validation, 4 contact info cards, map section

**Components:**
- `Navbar.tsx` — logo image + text, 7 nav links (Spanish labels), language toggle (ES flag default, EN), "Contáctanos" CTA button, mobile hamburger menu
- `Footer.tsx` — logo + description, phone/email/location, quick links, services list, social icons (Facebook/Instagram/WhatsApp), copyright
- `ContactModal.tsx` — overlay modal with WhatsApp CTA
- `ContactPopup.tsx` — auto-appears after 5 seconds on first visit (sessionStorage gate), gold diamond icon, WhatsApp link, dismiss button
- `LoadingSpinner.tsx` — Suspense fallback spinner

## David's 23 Changes (Voice Note — April 11, 2026)

Applied AFTER rebuild is verified. All changes in both ES and EN.

### Homepage
1. Change headline: "Inversión Inmobiliaria Premium en Dubái" → "Inversión Inmobiliaria con Alta Rentabilidad en Dubái"
2. Simplify subtitle text — remove "grado institucional" language, make more approachable
3. Shift messaging from "luxury" to "investments" focus
4. Remove estimated yield percentages from property cards (7-9%, 5-7%, etc.)

### About Page (Sobre Nosotros)
5. Rewrite "Our Mission" text (David dictated specific Spanish copy about acquisitions, portfolio optimization, 12 years experience)
6. Change "con sede en Business Bay" → "con sede en Dubái"
7. Remove "12+ years" badge from corner of picture

### Services Page
8. Fix: page goes BLANK when clicking nav link (routing bug)
9. Update service descriptions per David's dictation
10. Change "Atención en Español" → "Atención en diferentes idiomas" (English, Arabic, French)
11. Response time: "less than 24 hours"

### Properties Page
12. Fix: page goes BLANK when clicking nav link (routing bug)

### Golden Visa Page
13. Simplify to ONLY show property investment route (remove entrepreneur/talents routes)
14. Rewrite benefits text per David's dictation (10-year visa, family, no sponsor, mobility, lifestyle)
15. Remove "Official Contacts" section
16. Remove "Required Documents" section
17. Keep the Process section

### Blog
18. Stagger blog dates — one per month going back (Sept, Oct, Nov, Dec) for SEO

### Contact Page
19. Remove "Office" section (no physical office)
20. Remove working hours (they work 24/7)
21. Remove location/Google Maps section
22. Keep WhatsApp section

### General
23. All Spanish changes must also be applied to English translations

## Verification Strategy

Three-layer verification at two checkpoints:

### Checkpoint 1: After rebuild (before David's changes)

1. **Code-level:**
   - `npx tsc --noEmit` passes with zero errors
   - `npm run build` succeeds
   - All 8 routes resolve (no 404s on direct navigation)
   - Bundle size within 20% of original

2. **Visual:**
   - Playwright full-page screenshots of every route on LIVE site
   - Playwright full-page screenshots of every route on REBUILT site (served locally via `npm run preview`)
   - Side-by-side comparison — must be visually identical
   - Both Spanish and English versions checked (16 screenshots total)

3. **Functional:**
   - Every nav link navigates correctly
   - Language toggle switches all visible text
   - WhatsApp links open correct `wa.me` URL
   - Contact popup appears after 5 seconds on fresh session
   - Blog navigation works (list → detail → back)
   - Social media links point to correct URLs
   - Contact form renders and validates
   - Mobile hamburger menu opens/closes

### Checkpoint 2: After David's changes

1. **Code-level:** Same as above
2. **Visual:** Screenshots of changed pages, verify changes match David's requests
3. **Functional:** Same functional tests, plus verify removed sections are actually gone

## CI/CD Pipeline

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

Trigger: push to `source` branch

Steps:
1. Checkout `source` branch
2. Setup Node.js 18
3. `npm ci`
4. `npm run build` (which runs `tsc && vite build --base=/dubai-luxury-homes/`)
5. Deploy `dist/` to `gh-pages` branch using `peaceiris/actions-gh-pages`

This ensures:
- Every change goes through source
- TypeScript compilation catches errors before deploy
- No manual deploy step
- `gh-pages` branch is always a clean build output
- `main` branch is frozen (legacy)

## Execution Phases

### Phase 1: Extract (sequential)
Read the live bundle, extract all translations, component structure, routes, and interaction logic. Produce a reference document mapping bundle sections to components.

### Phase 2: Rebuild (parallel agents)
Dispatch parallel agents to rebuild components simultaneously:
- Agent 1: `i18n.ts` (all translations) + `App.tsx` + `main.tsx` + `index.css`
- Agent 2: `Home.tsx` + `ContactPopup.tsx`
- Agent 3: `About.tsx` + `Services.tsx` + `Properties.tsx`
- Agent 4: `GoldenVisa.tsx` + `Blog.tsx` + `BlogDetail.tsx`
- Agent 5: `Contact.tsx` + `Navbar.tsx` + `Footer.tsx` + `ContactModal.tsx`

### Phase 3: Verify rebuild (verification-before-completion)
Run all three verification layers. Fix any discrepancies. Re-verify.

### Phase 4: Bug fixes (sequential)
Fix Services and Properties blank page bug as separate commits.

### Phase 5: David's changes (sequential)
Apply 23 changes from voice note. Each logical group as its own commit.

### Phase 6: CI/CD setup
Create GitHub Actions workflow. Test deploy. Verify live.

### Phase 7: Final verification (verification-before-completion)
Full three-layer verification of final state.

## Risks and Mitigations

| Risk | Mitigation |
|------|-----------|
| Rebuild doesn't match live site | Three-layer verification before touching anything. Live site stays untouched until verified. |
| Bundle is too minified to read | Component names are preserved in bundle. We have the full Playwright DOM snapshot. We have the stale source for structure reference. |
| CI/CD deploy breaks live site | Test with a dry-run first. Keep `main` branch as rollback. |
| David's Spanish text is misinterpreted from voice note | Transcription is saved. Nick reviews before final deploy. |
| Images/videos missing or wrong paths | All assets already in the repo. Paths are known from live site inspection. |
