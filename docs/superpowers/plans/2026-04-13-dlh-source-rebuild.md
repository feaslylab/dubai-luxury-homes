# Puerta del Sol Website — Source Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reverse-engineer the live Puerta del Sol website from its compiled bundle back into clean React/TypeScript source, apply David Azar's 23 content changes, and set up GitHub Actions CI/CD.

**Architecture:** The live site's compiled JS bundle (`index-CryeSRaq.js`, 630KB) contains all component logic and ~400 i18n translation keys in ES/EN. We extract these into proper `.tsx` source files and a structured `i18n.ts`, rebuild, verify pixel-match against the live site, then apply David's changes as separate commits. GitHub Actions deploys on push to `source` branch.

**Tech Stack:** React 18, TypeScript, Vite 4, Tailwind CSS 3, Framer Motion 9, react-i18next, React Router 6, Lucide React, GitHub Actions, Playwright (verification)

**Working directory:** `/tmp/dlh-work` (cloned from `source` branch of `feaslylab/dubai-luxury-homes`)

**Live site:** `https://feaslylab.github.io/dubai-luxury-homes/`

**Bundle location:** `/Users/nickpashayev/.openclaw/feasly-web/workspace/dubai-luxury-homes/assets/index-CryeSRaq.js`

**Extracted translations:** `/tmp/es-translations.txt` (ES) and `/tmp/en-translations.txt` (EN) — full i18n objects already extracted.

---

## File Structure

### Files to Create (new)
- `src/pages/Blog.tsx` — blog article listing with category filters
- `src/pages/BlogDetail.tsx` — individual blog post view with related articles
- `src/components/ContactPopup.tsx` — auto-appearing WhatsApp CTA (5s delay, sessionStorage gate)
- `.github/workflows/deploy.yml` — CI/CD pipeline

### Files to Rewrite (replace stale source with live-matching version)
- `src/i18n.ts` — full bilingual translations (~400 keys, ES default + EN)
- `src/App.tsx` — routing with Spanish paths, includes ContactPopup and ScrollToTop
- `src/main.tsx` — entry point with BrowserRouter basename
- `src/index.css` — Tailwind config + custom styles
- `src/pages/Home.tsx` — hero video, KPI count-up, about, categories, carousel, blog preview, CTA
- `src/pages/About.tsx` — hero, mission, 3 pillars (values), stats
- `src/pages/Services.tsx` — 11 service cards in 3 categories, process timeline
- `src/pages/Properties.tsx` — investment categories, filters, coming soon
- `src/pages/GoldenVisa.tsx` — benefits, eligibility, process, documents, family coverage, contacts, FAQ
- `src/pages/Contact.tsx` — form, WhatsApp, quick actions, info cards, map
- `src/components/Navbar.tsx` — logo, Spanish nav links, language toggle, mobile menu
- `src/components/Footer.tsx` — company info, links, social, copyright
- `src/components/ContactModal.tsx` — WhatsApp CTA modal
- `src/components/LoadingSpinner.tsx` — Suspense fallback

### Files to Modify
- `package.json` — verify scripts are correct
- `vite.config.ts` — verify base path config
- `tailwind.config.js` — verify custom theme (gold colors, fonts)
- `index.html` — update title, meta tags to match live site

---

## Task 1: Foundation — i18n, routing, entry point, styles

**Files:**
- Rewrite: `src/i18n.ts`
- Rewrite: `src/App.tsx`
- Rewrite: `src/main.tsx`
- Rewrite: `src/index.css`
- Modify: `index.html`

**Context:** The extracted translation objects are in `/tmp/es-translations.txt` and `/tmp/en-translations.txt`. These are minified JS objects using backtick strings. Convert them to a proper TypeScript i18n resource file with `es` as default language.

- [ ] **Step 1: Rewrite `src/i18n.ts`**

Read `/tmp/es-translations.txt` and `/tmp/en-translations.txt`. Convert the minified objects into a properly formatted TypeScript file with nested translation keys. The structure is already extracted — it uses nested objects like `nav.home`, `home.hero.title`, `about.mission.content`, etc.

Key details:
- Default language: `es` (Spanish)
- Fallback: `en` (English)
- The `goldenVisa.benefits.items` key is an array of 6 strings (both languages)
- All backtick strings become regular quoted strings
- Import from `i18next` and `react-i18next`

- [ ] **Step 2: Rewrite `src/App.tsx`**

Routes must use Spanish paths matching the live site:

```tsx
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import LoadingSpinner from './components/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Properties = React.lazy(() => import('./pages/Properties'));
const GoldenVisa = React.lazy(() => import('./pages/GoldenVisa'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
};

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App bg-background min-h-screen">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/propiedades" element={<Properties />} />
            <Route path="/golden-visa" element={<GoldenVisa />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ContactPopup />
      <ScrollToTop />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Rewrite `src/main.tsx`**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/dubai-luxury-homes">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- [ ] **Step 4: Verify `index.html` meta tags match live site**

The live site has:
- Title: `Dubai Luxury Homes - Inversiones Inmobiliarias de Lujo en Dubai`
- Description and OG tags in Spanish
- Favicon: `/dubai-luxury-homes/favicon.svg`

Update `index.html` to match exactly.

- [ ] **Step 5: Verify `tailwind.config.js` has correct theme**

Check the live site's CSS for the gold color values, font families, and custom classes. The config must define:
- `gold`: `#C9A96E` (or `#c4a265` — verify from live CSS)
- `background`: `#0a0a0a`
- `card`: `#111111`
- Font families: Cormorant Garamond (headings), Inter (body)

- [ ] **Step 6: Build test**

```bash
cd /tmp/dlh-work && npm install && npx tsc --noEmit && npm run build
```

Expected: Build succeeds (may have warnings about missing page components — that's fine, they come in later tasks).

- [ ] **Step 7: Commit**

```bash
git add src/i18n.ts src/App.tsx src/main.tsx src/index.css index.html tailwind.config.js
git commit -m "feat: rebuild foundation — i18n (400+ keys ES/EN), routing, entry point"
```

---

## Task 2: Shared Components — Navbar, Footer, ContactModal, ContactPopup, LoadingSpinner

**Files:**
- Rewrite: `src/components/Navbar.tsx`
- Rewrite: `src/components/Footer.tsx`
- Rewrite: `src/components/ContactModal.tsx`
- Create: `src/components/ContactPopup.tsx`
- Rewrite: `src/components/LoadingSpinner.tsx`

**Context:** Read the corresponding sections of the bundle to reconstruct each component. Use the Playwright DOM snapshot from the live site (already captured) as the structural reference.

- [ ] **Step 1: Read bundle sections for all 5 components**

Search the bundle for each component's JSX output. Key identifiers:
- Navbar: `navigation` role, logo image, nav links, language toggle button
- Footer: `contentinfo` role, company name, social links, copyright
- ContactModal: WhatsApp link `wa.me/971585821144`
- ContactPopup: `sessionStorage.getItem("popup_shown")`, gold diamond `◆`
- LoadingSpinner: simple spinner component

- [ ] **Step 2: Rebuild `Navbar.tsx`**

Must include:
- Logo image (`/dubai-luxury-homes/images/logo-full.png`) + "Puerta del Sol Real Estate" text
- 7 nav links using `t('nav.home')` etc., linking to Spanish routes
- Language toggle button (ES flag emoji default, switches to EN)
- "Contáctanos" CTA button linking to `/contacto`
- Mobile hamburger menu (responsive)
- `useTranslation()` hook, `i18n.changeLanguage()` for toggle

- [ ] **Step 3: Rebuild `Footer.tsx`**

Must include:
- Logo + company name + description from `t('footer.description')`
- Phone: `+971 58 582 1144`, Email: `info@dubailuxuryhomes.net`, Location: Business Bay
- Quick Links: Inicio, Sobre Nosotros, Propiedades, Golden Visa
- Services list: 4 service names
- Social: Facebook, Instagram, WhatsApp links
- Copyright: `© 2026 Puerta del Sol Real Estate`

- [ ] **Step 4: Rebuild `ContactModal.tsx`**

Overlay modal with WhatsApp CTA. Accepts `isOpen` and `onClose` props.

- [ ] **Step 5: Create `ContactPopup.tsx`**

```tsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ContactPopup = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (sessionStorage.getItem('popup_shown')) return;
    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem('popup_shown', '1');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={() => setShow(false)}
    >
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: 'rgba(15,15,15,0.95)', backdropFilter: 'blur(20px)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', padding: '2.5rem', maxWidth: '420px', width: '90vw', textAlign: 'center', color: '#fff', position: 'relative' }}>
        <button onClick={() => setShow(false)} style={{ position: 'absolute', top: '12px', right: '16px', background: 'none', border: 'none', color: '#999', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
        <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#C9A96E' }}>◆</div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>{t('whatsapp.hc.popupTitle')}</h2>
        <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '1.5rem', lineHeight: 1.6 }}>{t('whatsapp.hc.popupDesc')}</p>
        <a href={`https://wa.me/971585821144?text=${encodeURIComponent(t('whatsapp.message'))}`} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#fff', padding: '0.75rem 2rem', borderRadius: '50px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
          {t('whatsapp.hc.popupCta')}
        </a>
        <button onClick={() => setShow(false)} style={{ display: 'block', margin: '1rem auto 0', background: 'none', border: 'none', color: '#666', fontSize: '0.85rem', cursor: 'pointer' }}>{t('whatsapp.hc.popupClose')}</button>
      </div>
    </div>
  );
};

export default ContactPopup;
```

- [ ] **Step 6: Rebuild `LoadingSpinner.tsx`**

Simple centered spinner component.

- [ ] **Step 7: Build test**

```bash
cd /tmp/dlh-work && npx tsc --noEmit && npm run build
```

- [ ] **Step 8: Commit**

```bash
git add src/components/
git commit -m "feat: rebuild shared components — Navbar, Footer, ContactModal, ContactPopup, LoadingSpinner"
```

---

## Task 3: Home Page

**Files:**
- Rewrite: `src/pages/Home.tsx`

**Context:** The Home page is the most complex page. Read the bundle section for the Home component. It contains:
- Hero section with video background and crossfade
- Animated KPI count-up strip (12+, 500+, 250+, USD 2B+)
- About preview with dual images
- 4-tier investment categories (Under 250K / 250K-2M / 2M-6M / 6M+) with areas and yield percentages
- Services grid (6 cards with images)
- Cinematic Dubai carousel (6 slides with stat badges, prev/next buttons, dot indicators)
- Blog preview (3 article cards)
- CTA section with Palm Jumeirah image

- [ ] **Step 1: Read the Home component from the bundle**

Search for the Home component's JSX. Key identifiers: `hero`, KPI values `12+`, `500+`, `250+`, `USD 2B+`, carousel slides.

- [ ] **Step 2: Rebuild `Home.tsx`**

Use `useTranslation()` for all text. Use `framer-motion` for animations. All translation keys are under `home.*`, `whatsapp.hc.*`, and category keys `catEntry`, `catPremium`, `catLuxury`, `catUltra`, carousel keys `carSlide1H` through `carSlide6H`.

The KPI count-up animation: numbers tick from 0 to final value when scrolled into view. Use `useInView` from framer-motion and a custom counter hook.

The carousel: 6 slides with auto-play, dot indicators, prev/next arrows. Each slide has a stat badge (e.g. "0%" for income tax, "10yr" for residency).

- [ ] **Step 3: Build test**

```bash
npx tsc --noEmit && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: rebuild Home page — hero, KPI strip, categories, carousel, blog preview"
```

---

## Task 4: About, Services, Properties Pages

**Files:**
- Rewrite: `src/pages/About.tsx`
- Rewrite: `src/pages/Services.tsx`
- Rewrite: `src/pages/Properties.tsx`

- [ ] **Step 1: Read bundle sections for all 3 pages**

Key identifiers:
- About: `ourValues`, `valExperience`, `valService`, `valTrust`, about stats
- Services: 11 service items in 3 categories, process timeline
- Properties: investment categories, filters, coming soon section

- [ ] **Step 2: Rebuild `About.tsx`**

The live About page has:
- Hero with logo image and luxury interior image
- "Maestros de la Inversión de Alto Valor" section
- Mission text from `t('about.mission.content')`
- "Our Values" section with 3 pillars: International Experience, Personalised Service, Total Transparency
- Stats: Languages (ES/EN/AR), Availability, Client Satisfaction, First Response
- All text via translation keys under `about.*`, `whatsapp.hc.*`, `ourValues`, `valExperience`, etc.

- [ ] **Step 3: Rebuild `Services.tsx`**

The live Services page has:
- Hero
- 11 services organized in 3 categories (Sales & Investment, Leasing & Management, Lifestyle Services)
- Each service from `t('services.list.residentialSales.title')` etc.
- 4-step process timeline
- All text via `services.*` translation keys

- [ ] **Step 4: Rebuild `Properties.tsx`**

The live Properties page has:
- Hero
- Filter bar with type/location/price filters
- 4 investment category cards (same as homepage categories)
- Coming soon messaging
- All text via `properties.*` translation keys

- [ ] **Step 5: Build test**

```bash
npx tsc --noEmit && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/About.tsx src/pages/Services.tsx src/pages/Properties.tsx
git commit -m "feat: rebuild About, Services, Properties pages"
```

---

## Task 5: Golden Visa Page

**Files:**
- Rewrite: `src/pages/GoldenVisa.tsx`

- [ ] **Step 1: Read bundle section for GoldenVisa**

The live Golden Visa page is extensive. Key sections from translation keys:
- Hero with Award icon
- Investment thresholds (3 routes: property, fund, entrepreneur)
- Benefits (6 items from `goldenVisa.benefits.items` array)
- Family coverage section (children no age limit, spouse, parents, domestic staff, protection, no salary req)
- 4-step process timeline
- Required documents (personal + financial, 8 items)
- Official contacts (GDRFA, ICP, official portal)
- CTA

- [ ] **Step 2: Rebuild `GoldenVisa.tsx`**

Use all `goldenVisa.*` and `whatsapp.hc.gv*` translation keys. This page has the most translation keys of any page.

- [ ] **Step 3: Build test**

```bash
npx tsc --noEmit && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/GoldenVisa.tsx
git commit -m "feat: rebuild Golden Visa page — benefits, eligibility, family, process, docs, contacts"
```

---

## Task 6: Blog and BlogDetail Pages

**Files:**
- Create: `src/pages/Blog.tsx`
- Create: `src/pages/BlogDetail.tsx`

- [ ] **Step 1: Read bundle sections for Blog components**

Key identifiers: 6 blog posts with slugs, category filters, blog excerpts from `whatsapp.hc.nbTitle1` through `nbTitle6`, excerpts from `nbExcerpt1` through `nbExcerpt6`, categories from `nbCat1` through `nbCat6`, dates from `nbDate1` through `nbDate6`.

Blog post slugs (from live site routes):
1. `por-que-invertir-dubai-2026`
2. `golden-visa-dubai-guia-completa`
3. `mejores-zonas-inversion-dubai`
4. `ventajas-fiscales-dubai`
5. `rendimientos-alquiler-dubai-vs-mundo`
6. `como-comprar-propiedad-dubai-extranjero`

- [ ] **Step 2: Create `Blog.tsx`**

Article grid with:
- Category filter buttons (All, Investment, Market, Locations, etc.)
- 6 article cards with image, category badge, title, excerpt, date, read time
- Language-aware rendering via `useTranslation()`

- [ ] **Step 3: Create `BlogDetail.tsx`**

Individual article view with:
- Full article content (extract from bundle — each article has ~300 words)
- Related articles sidebar
- Back to blog link
- Share article button
- Uses `useParams()` to get slug from route

- [ ] **Step 4: Build test**

```bash
npx tsc --noEmit && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/Blog.tsx src/pages/BlogDetail.tsx
git commit -m "feat: create Blog and BlogDetail pages — 6 bilingual articles"
```

---

## Task 7: Contact Page

**Files:**
- Rewrite: `src/pages/Contact.tsx`

- [ ] **Step 1: Read bundle section for Contact**

- [ ] **Step 2: Rebuild `Contact.tsx`**

The live Contact page has:
- Hero
- 3 quick action cards (WhatsApp Chat, Book Consultation, Golden Visa Guide)
- Contact form with name, email, phone, subject dropdown, message
- 4 contact info cards (Office Location, Phone, Email, Office Hours)
- Map section with "Visit Our Office" and Google Maps link
- WhatsApp immediate assistance section
- All text via `contact.*` and `whatsapp.hc.*` keys

- [ ] **Step 3: Build test and commit**

```bash
npx tsc --noEmit && npm run build
git add src/pages/Contact.tsx
git commit -m "feat: rebuild Contact page — form, WhatsApp, quick actions, info cards"
```

---

## Task 8: Verification — Rebuild matches live site

**Files:** No file changes — verification only.

**Skill:** Use `verification-before-completion` methodology.

- [ ] **Step 1: Start local dev server**

```bash
cd /tmp/dlh-work && npm run build && npm run preview
```

This serves the rebuilt site locally (usually at `http://localhost:4173/dubai-luxury-homes/`).

- [ ] **Step 2: Take Playwright screenshots of LIVE site**

Navigate to each of these 8 routes on the live site and take full-page screenshots:
1. `https://feaslylab.github.io/dubai-luxury-homes/`
2. `https://feaslylab.github.io/dubai-luxury-homes/sobre-nosotros`
3. `https://feaslylab.github.io/dubai-luxury-homes/servicios`
4. `https://feaslylab.github.io/dubai-luxury-homes/propiedades`
5. `https://feaslylab.github.io/dubai-luxury-homes/golden-visa`
6. `https://feaslylab.github.io/dubai-luxury-homes/blog`
7. `https://feaslylab.github.io/dubai-luxury-homes/contacto`
8. Switch to English and screenshot homepage

Save as `live-*.png`.

- [ ] **Step 3: Take Playwright screenshots of REBUILT site**

Navigate to the same 8 routes on the local preview server and take full-page screenshots. Save as `rebuilt-*.png`.

- [ ] **Step 4: Compare screenshots**

For each pair, visually compare. Document any differences. Minor rendering differences (font smoothing, exact spacing) are acceptable. Structural differences (missing sections, wrong content, broken layout) are NOT.

- [ ] **Step 5: Functional verification**

Test each of these interactions on the rebuilt site:
- Click every nav link — verify correct page loads
- Click language toggle — verify all visible text switches to English
- Click WhatsApp links — verify `wa.me/971585821144` opens
- Wait 5 seconds on fresh session — verify ContactPopup appears
- Navigate blog list → blog detail → back
- Verify social links (Facebook, Instagram) point to correct URLs
- Verify contact form renders with all fields
- Verify mobile hamburger menu opens/closes (resize viewport to 375px)

- [ ] **Step 6: Code-level verification**

```bash
npx tsc --noEmit  # Zero TypeScript errors
npm run build     # Successful build
```

Check bundle size: `ls -la dist/assets/` — should be within 20% of original (630KB).

- [ ] **Step 7: Document results**

If all checks pass, proceed to Task 9. If any fail, fix and re-verify before continuing.

---

## Task 9: Bug Fixes — Services and Properties blank pages

**Files:**
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/Properties.tsx`
- Possibly modify: `src/App.tsx` or `src/components/Navbar.tsx`

**Context:** David reported that clicking "Services" and "Properties" nav links results in blank pages. This is likely a routing issue — the nav links may point to English paths (`/services`, `/properties`) while routes use Spanish paths (`/servicios`, `/propiedades`).

- [ ] **Step 1: Diagnose the bug**

Check Navbar link hrefs vs App.tsx route paths. If Navbar links to `/services` but the route is `/servicios`, that's the bug.

Also check if the components crash on render (missing translation keys, undefined variables, etc.).

- [ ] **Step 2: Fix the routing mismatch**

Ensure all nav links use Spanish paths matching the routes in App.tsx.

- [ ] **Step 3: Verify fix**

Navigate to Services and Properties pages — they should render correctly.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "fix: Services and Properties pages — routing mismatch causing blank pages"
```

---

## Task 10: David's Changes — Homepage

**Files:**
- Modify: `src/i18n.ts` (ES + EN translation keys)

- [ ] **Step 1: Change homepage headline**

ES: `home.hero.title`: "Inversión Inmobiliaria Premium en Dubái" → "Inversión Inmobiliaria con Alta Rentabilidad en Dubái"
EN: "Premium Dubai Real Estate Investment" → "High-Return Real Estate Investment in Dubai"

- [ ] **Step 2: Simplify subtitle**

ES: `home.hero.subtitle`: Remove "grado institucional" language. New text: "Descubre propiedades estratégicas con cero impuestos y oportunidades de alto valor para inversores globales exigentes."
EN: "Discover strategic properties with zero tax and high-value opportunities for discerning global investors."

- [ ] **Step 3: Remove yield percentages from property cards**

In `Home.tsx`, remove the yield percentage display (7-9%, 5-7%, 4-6%, 3-5%) from the investment category cards. Keep the category names and descriptions.

- [ ] **Step 4: Commit**

```bash
git add src/i18n.ts src/pages/Home.tsx
git commit -m "content: David feedback — homepage headline, subtitle, remove yields"
```

---

## Task 11: David's Changes — About Page

**Files:**
- Modify: `src/i18n.ts`
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Rewrite mission text**

ES: `about.mission.content`: "Desde la adquisición hasta la optimización de carteras, ofrecemos gestión integral de inversiones inmobiliarias en Dubái. Nuestro enfoque estratégico, combinado con análisis de mercado, nos permite identificar proyectos de alto potencial y acompañamiento experto que permite a nuestros clientes tomar decisiones seguras con buenos fundamentos."

Add second paragraph: "Con más de 12 años de experiencia en el mercado inmobiliario de Dubái, ofrecemos un servicio personalizado para inversores internacionales que buscan oportunidades sólidas de alto valor, revalorización y proyección de futuro."

EN equivalents:
"From acquisition to portfolio optimisation, we deliver comprehensive real estate investment management in Dubai. Our strategic focus, combined with market analysis, allows us to identify high-potential projects with expert guidance that enables our clients to make sound, well-founded decisions."

"With over 12 years of experience in the Dubai real estate market, we offer a personalised service for international investors seeking solid high-value opportunities with strong appreciation and future growth potential."

- [ ] **Step 2: Change "Business Bay" to "Dubái"**

ES: `home.about.content`: Change "Con sede en Business Bay" → "Con sede en Dubái"
EN: "Based in Business Bay" → "Based in Dubai"

- [ ] **Step 3: Remove 12+ years badge**

In `About.tsx`, remove the "12+ Years Experience" badge overlay on the hero image.

- [ ] **Step 4: Commit**

```bash
git add src/i18n.ts src/pages/About.tsx
git commit -m "content: David feedback — About page mission rewrite, remove badge"
```

---

## Task 12: David's Changes — Services Page

**Files:**
- Modify: `src/i18n.ts`

- [ ] **Step 1: Update service descriptions**

Change "Atención en Español" → "Atención en diferentes idiomas" (English, Arabic, French):
ES: `about.whyUs.spanish.title`: "Atención en Español" → "Atención en Diferentes Idiomas"
ES: `about.whyUs.spanish.description`: "Enfoque en Inversores Globales" → "Inglés, Árabe, Francés y Español"
EN: "Spanish Service" → "Multilingual Service"
EN description: "Global Investor Focus" → "English, Arabic, French and Spanish"

- [ ] **Step 2: Update service 360 description**

Update the 360° service description to mention profitability focus per David's dictation.

- [ ] **Step 3: Add response time**

Add "less than 24 hours" response time where relevant.

- [ ] **Step 4: Commit**

```bash
git add src/i18n.ts
git commit -m "content: David feedback — Services page text updates"
```

---

## Task 13: David's Changes — Golden Visa Page

**Files:**
- Modify: `src/pages/GoldenVisa.tsx`
- Modify: `src/i18n.ts`

- [ ] **Step 1: Remove non-property eligibility routes**

In `GoldenVisa.tsx`, remove the "Business Investment" (Entrepreneur) and "Exceptional Talents" eligibility cards. Keep ONLY "Real Estate Investment" as the single route.

- [ ] **Step 2: Rewrite benefits per David's dictation**

Update the 6 benefits to match David's specific text:
1. Renewable residency — 10-year long-duration residency in Dubai with renewable visa while maintaining investment
2. Automatic renewal — easy to maintain, keep investment in active property
3. Family sponsorship — first-grade family members, settle with family
4. No local sponsor — total independence to live, manage, and operate your assets in Dubai
5. International mobility — no restrictions on entry/exit
6. Lifestyle — first-level education, health, quality of life in one of the most innovative cities

- [ ] **Step 3: Remove Official Contacts section**

Remove the GDRFA/ICP contacts section from the page.

- [ ] **Step 4: Remove Required Documents section**

Remove the documents checklist section.

- [ ] **Step 5: Keep Process section**

Verify the 4-step process section remains intact.

- [ ] **Step 6: Commit**

```bash
git add src/pages/GoldenVisa.tsx src/i18n.ts
git commit -m "content: David feedback — Golden Visa simplified to property route only"
```

---

## Task 14: David's Changes — Blog, Contact

**Files:**
- Modify: `src/i18n.ts` (blog dates)
- Modify: `src/pages/Contact.tsx`

- [ ] **Step 1: Stagger blog dates**

Update blog dates to be monthly intervals for SEO:
- Blog 1: March 2026
- Blog 2: February 2026
- Blog 3: January 2026
- Blog 4: December 2025
- Blog 5: November 2025
- Blog 6: October 2025

Update both ES and EN date keys (`nbDate1` through `nbDate6`, `blogDate1` through `blogDate5`).

- [ ] **Step 2: Remove Office section from Contact**

Remove the "Office Location" contact info card (MapPin icon, Business Bay address, Get Directions link).

- [ ] **Step 3: Remove Office Hours from Contact**

Remove the "Office Hours" contact info card (Clock icon, Sunday-Thursday hours).

- [ ] **Step 4: Remove Map section from Contact**

Remove the entire "Visit Our Office" section with the Google Maps placeholder.

- [ ] **Step 5: Keep WhatsApp section**

Verify the "Need Immediate Assistance?" WhatsApp section remains.

- [ ] **Step 6: Commit**

```bash
git add src/i18n.ts src/pages/Contact.tsx
git commit -m "content: David feedback — stagger blog dates, remove office/hours/map from Contact"
```

---

## Task 15: CI/CD — GitHub Actions

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create workflow file**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [source]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - uses: actions/deploy-pages@v4
```

Note: This uses the newer GitHub Pages deployment via Actions artifacts. The repo's GitHub Pages settings must be configured to deploy from "GitHub Actions" (not from a branch). Verify this in the repo settings.

Alternative if the repo uses `gh-pages` branch deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [source]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Check current repo Pages config to decide which approach.

- [ ] **Step 2: Update `package.json` build script**

Ensure `build` script includes the base path:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build --base=/dubai-luxury-homes/",
    "preview": "vite preview"
  }
}
```

Remove the `deploy` and `build:github` scripts — CI/CD handles deployment now.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml package.json
git commit -m "ci: GitHub Actions auto-deploy on source branch push"
```

---

## Task 16: Final Verification

**Files:** No changes — verification only.

**Skill:** Use `verification-before-completion` methodology.

- [ ] **Step 1: Full build verification**

```bash
cd /tmp/dlh-work && npm ci && npx tsc --noEmit && npm run build
```

All must pass with zero errors.

- [ ] **Step 2: Visual verification of David's changes**

Start local preview, take screenshots of changed pages:
- Homepage: verify new headline, no yields
- About: verify new mission text, no badge
- Services: verify it loads (bug fixed), multilingual text
- Properties: verify it loads (bug fixed)
- Golden Visa: verify only property route, no docs/contacts sections
- Blog: verify staggered dates
- Contact: verify no office, no hours, no map

- [ ] **Step 3: Functional verification**

Re-run all functional tests from Task 8 Step 5 on the updated site.

- [ ] **Step 4: Push to GitHub**

```bash
cd /tmp/dlh-work && git push origin source
```

This triggers the GitHub Actions workflow. Monitor the Actions tab to verify successful deployment.

- [ ] **Step 5: Verify live deployment**

After GitHub Actions completes (~2-3 minutes), verify the live site at `https://feaslylab.github.io/dubai-luxury-homes/` reflects all changes.

Take final screenshots and compare.

---

## Summary

| Task | Description | Parallel? |
|------|-------------|-----------|
| 1 | Foundation: i18n, routing, entry, styles | No (first) |
| 2 | Shared components: Navbar, Footer, Popup | Yes with 3,4,5,6,7 |
| 3 | Home page | Yes with 2,4,5,6,7 |
| 4 | About, Services, Properties pages | Yes with 2,3,5,6,7 |
| 5 | Golden Visa page | Yes with 2,3,4,6,7 |
| 6 | Blog + BlogDetail pages | Yes with 2,3,4,5,7 |
| 7 | Contact page | Yes with 2,3,4,5,6 |
| 8 | Verification: rebuild matches live | No (gate) |
| 9 | Bug fix: blank Services/Properties | No (after gate) |
| 10 | David: Homepage changes | No (sequential) |
| 11 | David: About changes | No (sequential) |
| 12 | David: Services changes | No (sequential) |
| 13 | David: Golden Visa changes | No (sequential) |
| 14 | David: Blog + Contact changes | No (sequential) |
| 15 | CI/CD: GitHub Actions | No (after content) |
| 16 | Final verification | No (last) |

Tasks 2-7 can be dispatched as parallel agents after Task 1 completes. All other tasks are sequential.
