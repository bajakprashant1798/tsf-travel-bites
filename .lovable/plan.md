# TSF – Travel Special Food Website Plan

A vibrant, multi-page marketing/catalog site (no e-commerce checkout). Orders are placed via WhatsApp/phone.

## Brand & Design

- Palette (tokens in `src/styles.css`):
  - Brand green `#2E8B3D` (deep) + leaf green accent
  - Warm orange `#F08A1F` (primary CTA)
  - Golden yellow `#F5C518` (highlight chips)
  - Cream `#FFF8EC` background, white surfaces
- Typography pair: display **Fraunces** (warm serif, Gujarati hospitality feel) + body **Plus Jakarta Sans**
- Veg dot: small green-square-with-dot indicator used in nav and on every menu item
- Smooth page transitions via `framer-motion` (`AnimatePresence` per route)
- Subtle paper-texture / torn-edge accents echoing the printed menu

## Tech & Structure

- TanStack Start file routes under `src/routes/`
- Logo copied to `src/assets/tsf-logo.jpeg` (from the upload) and imported in `Header`
- Shared `Header` (sticky, blurred, with logo + nav + veg-dot badge) and `Footer` in `__root.tsx`
- Floating WhatsApp button + click-to-call rendered globally in root
- "Travel Box" state via lightweight React context (localStorage-persisted) so it's accessible from menu page and any planner
- All menu/travel-package data in `src/data/menu.ts` and `src/data/packages.ts`

## Routes

```
src/routes/__root.tsx        # shell: header, footer, WhatsApp FAB, motion transitions
src/routes/index.tsx         # Home
src/routes/about.tsx         # About Us
src/routes/menu.tsx          # Interactive Menu + Travel Box sidebar
src/routes/travel-hub.tsx    # Journey Planner
src/routes/contact.tsx       # Contact & Ordering
```

Each route sets unique `head()` meta (title, description, og:title, og:description). Home gets og:image of the hero.

## Page details

**Home (`/`)**

- Hero: headline "Your Perfect Travel Food Companion" + sub "Swaad Ghar Jaisa, Safar Ke Sath", animated orange CTA → `/menu`, decorative plane-arc echoing the logo
- 3-category grid (Breakfast / Ready To Eat / Dry Snacks) with hero food imagery → each links to `/menu?category=...`
- USP cards (4): 100% Vegetarian, Long Shelf-Life, Pure Homemade Taste, Hygienic Travel Packaging — Lucide icons, hover lift
- "How It Works" 3-step horizontal timeline with motion-on-scroll

**About (`/about`)**

- Story intro (warm narrative, Gujarati heritage)
- Quality Promise cards: minimal oil / no preservatives / travel-grade packing
- "Travel Food Tips" panel (train/flight/road trip storage tips)

**Menu (`/menu`)** — core feature

- Sticky search input (filters across all categories live)
- Filter chips: Spicy / Sweet / Long Shelf Life (tagged in data)
- Category tabs: Breakfast • Ready To Eat • Dry Snacks (URL-synced via `validateSearch`)
- Each item card: name, price, veg dot, tags, "Add to Travel Box" button (toggles)
- **My Travel Box** side panel (right on desktop, bottom-sheet on mobile):
  - List of selected items with qty +/− and remove
  - Live subtotal in ₹
  - "Share on WhatsApp" → opens `wa.me/919999999999?text=...` with formatted order
  - "Clear box" action

**Travel Hub (`/travel-hub`)**

- 4 large selectable cards: Train Journey • International Flight • Road Trip • Weekend Picnic
- On select, reveal a curated package combo (items + total) with "Add Package to Travel Box" and "Order on WhatsApp"

**Contact (`/contact`)**

- Prominent notice: "Place orders 24–48 hrs before travel"
- Form (zod-validated): Name, Phone, Travel Date, Message — on submit, opens WhatsApp prefilled (no backend)
- Click-to-call button (`tel:+919999999999`) and WhatsApp button
- Pickup address card: "Dennandan Desire" + Google Maps iframe embed (free, no API key) using a search query

## Global components

- `components/Header.tsx` — sticky, logo + nav links with active state, veg-dot pill, mobile sheet menu
- `components/Footer.tsx` — logo, tagline, nav, contact, social, copyright
- `components/WhatsAppFab.tsx` — fixed bottom-right, pulse animation
- `components/VegDot.tsx` — reusable square-with-green-dot indicator
- `components/MenuItemCard.tsx`, `components/TravelBoxPanel.tsx`
- `context/TravelBoxContext.tsx` — items, add/remove/qty, total, WhatsApp export

## Data

- `src/data/menu.ts` exports typed items with `{ id, name, price, unit, category, tags[] }` for all items listed in the brief (Nylon Pauva Chevdo = 250 per the menu image).
- `src/data/packages.ts` exports 4 travel-type packages with curated item id lists.

## Technical notes

- WhatsApp/phone number: `+91 99999 99999`
- Smooth route transitions: wrap `<Outlet />` in `<AnimatePresence mode="wait">` with a motion div keyed by pathname
- All colors via CSS tokens; no hardcoded hex in components
- Form & WhatsApp text use `encodeURIComponent`; zod schemas enforce length limits
- No backend / Cloud needed for this scope
