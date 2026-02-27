# Pixel Analysis & Design Architecture Report

## 1. Global Viewport & Layout
- **Viewport Assumption:** Designed for 1920px (Desktop), 1440px (Editorial/Laptop), 1024px (Tablet), 768px (Mobile), 375px (Small Mobile).
- **Section Max Width:** 1920px (Edge-to-edge full width containers).
- **Inner Content Max Width:** 1720px (Content Area).
- **Left/Right Gutter:** 100px explicit spacing.
- **Vertical Rhythm:** Maintained via strict 8pt modular scale.

## 2. Header Dimensions
- **Announcement Bar:** 38px
- **Main Navigation:** 94px
- **Total Max Height:** 132px precisely.

## 3. Typography Scale & Fonts
- **Font Families:**
  - Serif (Headings/Display): `RL Limo`
  - Sans-Serif (Body/UI/Sub: `Suisse Int'l`
- **Typographic Hierarchy:**
  - Hero Text: 56px (max), line-height 1.1
  - H1 Text: 48px, line-height 1.2
  - H2 Text: 32px, line-height 1.3
  - Body Text: 16px & 18px (Editorial), line-height 1.6
  - UI Labels / Micro Text: 11px, letter-spacing 0.1em, Uppercase.

## 4. Brand Color Palette (Hex Values)
- **Primary Background (Sand):** `#F9F6F2`
- **Secondary Background (Stone):** `#E7E3DC`
- **Tertiary Border (Clay):** `#CEC5B8`
- **Muted Text (Taupe):** `#A39382`
- **Accent/Hover (Warm Mocha):** `#3F3229`
- **Primary Text (Slate):** `#2D2B27`

## 5. Component Restrictions & Styling
- **Border Radius:** Maximum 2px strictly enforced.
- **Buttons:** 
  - Primary (Solid): Background `#3F3229`, Text `#F9F6F2`, border 1px solid `#3F3229`. Hover state inverts to transparent with `#3F3229` text.
  - Text: `SHOP NOW`
- **Product Cards:**
  - No gray outer wrapper/border around image.
  - Image aspect ratio: ~4:5 (Tall crop). Full-width spanning.

## 6. Structural Implementation Plan
As requested, the CSS architecture will be modularized into the exact requested structure:
- `/v2/css/design-tokens.css` (Variables, Colors, Fonts, Roots)
- `/v2/css/layout.css` (Containers, Grids, Header/Footer wrappers)
- `/v2/css/components.css` (Hero, Cards, Buttons, Inputs, Sliders)
- `/v2/css/responsive.css` (Media Queries strictly at 1440, 1024, 768, 375)

*Assumptions:* The existing `assets/css` directory will be deprecated in favor of this new `/css/` root as mandated inside the `/v2/` directory to satisfy Phase 2 architectural constraints. We will refactor HTML files to respect these modular links.
