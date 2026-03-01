# Website QA Task List (All Pages)

## Scope
- Audited pages: `index.html`, `shop.html`, `product.html`, `checkout.html`, `cart.html`, `your-story.html`, `our-story.html`, `contact.html`
- Strategy: shared/repeating sections are listed once under **Shared Tasks** and referenced from each page

## Superseding Layout Contract (Authoritative)
These directives supersede conflicting older notes in task/review docs:
- `references/sections/` is the authoritative `1920px` design baseline.
- Add and enforce a `1920px` wide desktop breakpoint.
- For viewports above `1920px`, use boxed centered layout.
- Layout structure is section rows.
- Section baseline width is `1920px` while still allowing `width: 100%`.
- Default container width is `1800px` (`60px` left/right space inside 1920 section).
- `.container-full` is `100%` width with no side margins.

## Shared Tasks (Define Once, Reuse Everywhere)

- [ ] **SHARED-010 (Critical): Implement the 1920 baseline + boxed-above-1920 layout contract**
  - Affects: all pages
  - Expected: section-row architecture with `1920` baseline, `1800` default container, `60px` side spacing, boxed behavior above 1920, and `.container-full` full-bleed behavior.
  - Actual: mixed/legacy sizing rules across docs and implementation cause inconsistent widths and gutters.
  - Fix: normalize layout tokens/utilities and section/container patterns to this contract before page-level polish.

- [ ] **SHARED-011 (High): Re-anchor responsive behavior from 1920 references**
  - Affects: all pages
  - Expected: 1440/1024/768/375 are responsive adaptations of 1920 reference sections.
  - Actual: several adaptations appear tuned independently, causing drift from the 1920 baseline.
  - Fix: recalibrate responsive rules from the 1920 source first, then re-validate each page.

- [ ] **SHARED-001 (High): Mobile menu overlay remains interactive/focusable while closed**
  - Affects: `index`, `shop`, `product`, `checkout`, `cart`, `your-story`, `our-story`, `contact`
  - Expected: closed off-canvas nav is inert and excluded from focus/AT tree
  - Actual: hidden mobile controls are still discoverable/focusable
  - Fix: add closed-state `inert` + `aria-hidden="true"` + `pointer-events:none`; enable only on open

- [ ] **SHARED-002 (High): Shared header visual system mismatches references**
  - Affects: `index`, `shop`, `product`, `checkout`, `cart`
  - Expected: header height/scale/nav spacing match target references
  - Actual: compressed logo/nav rhythm; inconsistent structure (including extra nav item drift)
  - Fix: normalize shared header tokens (height, gaps, type scale, icon spacing) and nav schema

- [ ] **SHARED-003 (Medium): Shared footer scale and spacing are off**
  - Affects: `index`, `shop`, `product`, `checkout`, `cart`, `your-story`, `our-story`, `contact`
  - Expected: footer hierarchy and spacing match reference rhythm
  - Actual: denser footer typography/spacing and icon sizing mismatch
  - Fix: retune shared footer type scale, vertical spacing, and icon dimensions

- [ ] **SHARED-004 (High): Account/Wishlist header actions point to `#`**
  - Affects: all pages using shared header controls
  - Expected: valid routes/flows or hidden placeholders
  - Actual: click results in hash-only navigation (`#`)
  - Fix: wire real destinations or remove until implemented

- [ ] **SHARED-005 (Medium): Shared surfaces use hardcoded pure white instead of tokens**
  - Affects: shared header/search/mega-menu surfaces
  - Expected: brand-tokenized neutral backgrounds
  - Actual: hardcoded `#fff/#ffffff`
  - Fix: replace raw hex with semantic tokens from design system

- [ ] **SHARED-006 (High): Mobile horizontal overflow on key shared layouts**
  - Affects: `index`, `cart`, story-family pages
  - Expected: no horizontal scrolling at mobile widths (`375px`, `390px`)
  - Actual: overflow present from header/hero/off-canvas and table layouts
  - Fix: tighten mobile breakpoints and width constraints; ensure off-canvas does not affect scroll width

- [ ] **SHARED-007 (Medium): External links with `target="_blank"` missing `rel` hardening**
  - Affects: footer social links across pages
  - Expected: `rel="noopener noreferrer"`
  - Actual: missing `rel`
  - Fix: add secure `rel` on all `_blank` links

- [ ] **SHARED-008 (High): Shared product-card visual baseline is inconsistent**
  - Affects: `index` best-sellers, `shop`, `product` related products
  - Expected: consistent card imagery treatment, text hierarchy, and pricing style
  - Actual: card styles and media treatment drift by page
  - Fix: define one shared product-card variant set and use it everywhere

- [ ] **SHARED-009 (Medium): Shared product CTA behavior is non-functional as cart flow**
  - Affects: `shop`, `index`, `product` related
  - Expected: CTA should navigate or persist cart state
  - Actual: temporary label change with no durable cart update in shared flows
  - Fix: wire CTAs into cart state/navigation contract

## Page-Specific Tasks

### `index.html`
- Uses shared tasks: `SHARED-001`, `SHARED-002`, `SHARED-003`, `SHARED-006`, `SHARED-007`, `SHARED-008`
- [ ] **IDX-001 (Critical): Remove QA overlay tooling from production**
  - Actual: `assets/js/qa-overlay.js` is loaded and renders a visible debug button
- [ ] **IDX-002 (High): Match section heights to homepage section references**
  - Current vs reference at 1920: announcement `38/73`, header `94/207`, hero `700/958`, best-sellers `935/1074`, collections `1431/1742`, story split `700/1260`, testimonials `557/686`, footer `669/849`
- [ ] **IDX-003 (High): Announcement bar misses right-side currency icon and correct typography rhythm**
- [ ] **IDX-004 (High): Header treatment does not match dark reference composition**
- [ ] **IDX-005 (High): Best-sellers section theme/content differs strongly from `4-best-seller.png`**
- [ ] **IDX-006 (High): Collections section theme/title taxonomy differs from `6-collections.png`**

### `shop.html`
- Uses shared tasks: `SHARED-001`, `SHARED-002`, `SHARED-003`, `SHARED-008`, `SHARED-009`
- [ ] **SHOP-001 (High): Missing framed composition/right rail from `shop-page.png`**
- [ ] **SHOP-002 (Medium): Filter and sort controls are non-semantic clickable `div`s**
- [ ] **SHOP-003 (Low): Sort label/copy density differs from reference**

### `product.html`
- Uses shared tasks: `SHARED-001`, `SHARED-002`, `SHARED-003`, `SHARED-008`
- [ ] **PDP-001 (High): Product hero/gallery composition diverges from `product-page.png`**
- [ ] **PDP-002 (High): Right-side vertical ribbons are missing**
- [ ] **PDP-003 (Medium): `SCENTS` cards art direction/spacing differ from reference**
- [ ] **PDP-004 (High): Selected variant state does not carry into cart line item**
- [ ] **PDP-005 (Medium): Colour label does not update when swatches change**
- [ ] **PDP-006 (Medium): Testimonial dots are inert on PDP testimonial block**

### `checkout.html`
- Uses shared tasks: `SHARED-001`, `SHARED-002`, `SHARED-003`
- [ ] **CKO-001 (High): Checkout column proportions differ from `checkout-page.png`**
- [ ] **CKO-002 (Medium): Order summary line-item mapping/presentation drift**
- [ ] **CKO-003 (High): Marketing opt-in checkbox is pre-checked**
- [ ] **CKO-004 (High): Submit provides no visible validation feedback on empty/invalid form**
- [ ] **CKO-005 (High): Payment fields accept invalid formats without enforcement**
- [ ] **CKO-006 (Medium): Checkout flow includes heavy global footer/newsletter instead of focused checkout layout**

### `cart.html`
- Uses shared tasks: `SHARED-002`, `SHARED-003`, `SHARED-004`, `SHARED-005`, `SHARED-006`
- [ ] **CART-001 (Critical): Quantity controls do not update line totals/subtotal**
- [ ] **CART-002 (High): Remove action does not remove items or recompute totals**
- [ ] **CART-003 (High): Cart table breaks on mobile; requires stacked responsive cart layout**

### `your-story.html`
- Uses shared tasks: `SHARED-001`, `SHARED-003`, `SHARED-006`
- [ ] **YS-001 (Medium): Story form lacks robust submission flow/validation (shared with cloned pages)**

### `our-story.html`
- Uses shared tasks: `SHARED-001`, `SHARED-003`, `SHARED-006`
- [ ] **OUR-001 (Critical): Page content is cloned from `your-story` instead of dedicated Our Story content**
- [ ] **OUR-002 (High): Metadata/styling are not Our Story specific (title and stylesheet mismatch)**

### `contact.html`
- Uses shared tasks: `SHARED-001`, `SHARED-003`, `SHARED-006`
- [ ] **CONTACT-001 (Critical): Page content is cloned from `your-story` instead of contact experience**
- [ ] **CONTACT-002 (High): Metadata/styling are not Contact specific (title and stylesheet mismatch)**

### Cross-Page Critical
- [ ] **TPL-001 (Critical): `your-story.html`, `our-story.html`, and `contact.html` are byte-identical templates**
  - Expected: distinct templates and content per route
  - Actual: identical HTML and identical rendered screenshots across all three routes
  - Fix: split into dedicated page templates and route-specific content modules

## Evidence Paths
- Index: `docs/qa/index/`
- Shop: `docs/qa/shop/`
- Product: `docs/qa/product/`
- Checkout: `docs/qa/checkout/`
- Cart: `docs/qa/cart/`
- Your Story: `docs/qa/your-story/`
- Our Story: `docs/qa/our-story/`
- Contact: `docs/qa/contact/`
