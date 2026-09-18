# COSMOS Hotel — Website

A production-quality, single-property hotel marketing website built with **React + TypeScript + Vite + Tailwind CSS**. No booking engine, payments, or backend — by design, at this stage. All hotel content (copy, images, videos, rooms, amenities, dining, gallery, contact details) lives in a typed configuration layer under `src/config/`, so the client's real content can be dropped in without touching any component code.

---

## 1. Setup

Requires Node.js 18+ and npm.

```bash
npm install
```

> **Note on this delivery:** this project was generated in a sandboxed environment whose network access is restricted by organisation policy, so `npm install` / `npm run build` could not be executed there to verify the build. The code has been written and reviewed carefully against the same dependency versions pinned in `package.json`, but **please run `npm install && npm run build` yourself once** (on a machine with normal internet access) before treating this as final, and let me know if anything needs adjusting.

## 2. Development

```bash
npm run dev
```

Starts the Vite dev server (default `http://localhost:5173`) with hot module reload.

## 3. Production build

```bash
npm run build
```

Type-checks the project (`tsc -b`) and builds an optimized, code-split bundle into `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## 4. Deployment

`dist/` is a static site — deploy it to any static host:

- **Vercel / Netlify:** connect the repo, build command `npm run build`, output directory `dist`.
- **Any static file host (S3 + CloudFront, Nginx, GitHub Pages, etc.):** upload the contents of `dist/` after building.
- Because routing uses `react-router-dom`'s `BrowserRouter` (for the `/rooms/:slug` pages), configure your host to rewrite unknown paths to `/index.html` (a "SPA fallback" — on Netlify a `_redirects` file with `/* /index.html 200`, on Vercel this is automatic, on Nginx a `try_files $uri /index.html;`).

---

## 5. Where to change things

Everything below lives in `src/config/` — **no component in `src/components/` or `src/pages/` needs to change** when hotel content changes.

| What to change | File |
|---|---|
| Hotel name, tagline, positioning copy | `src/config/hotelConfig.ts` |
| Address, phone, WhatsApp, email, map, social links, front desk hours | `src/config/contactConfig.ts` |
| Hero heading/subtitle/CTAs, hero image **or video** | `src/config/heroConfig.ts` (+ `mediaConfig.ts` for the actual media file) |
| About section story/philosophy/photo | `src/config/aboutConfig.ts` |
| Rooms (add/edit/remove) | `src/config/roomsConfig.ts` |
| Amenities (add/edit/remove — only list what's genuinely offered) | `src/config/amenitiesConfig.ts` |
| Dining venues | `src/config/diningConfig.ts` |
| Gallery images/categories | `src/config/galleryConfig.ts` (images themselves in `mediaConfig.ts`) |
| Navigation menu items | `src/config/navConfig.ts` |
| SEO defaults, social preview image, production domain | `src/config/seoConfig.ts` |
| **All media (photos/videos)** | `src/config/mediaConfig.ts` |

### Replacing placeholder images

Every image in the site currently points at royalty-free Unsplash stock photography and is flagged `isPlaceholder: true` in `src/config/mediaConfig.ts`. To replace:

1. Put the real photo in `src/assets/` (create the folder) or upload it to your own CDN/S3.
2. In `mediaConfig.ts`, either `import myPhoto from "@/assets/my-photo.jpg"` and use it as `src`, or paste the new absolute URL directly.
3. Delete the `isPlaceholder: true` line for that image once it's real.
4. Always keep `alt` text accurate — it's used for accessibility and as the fallback label if an image URL ever breaks.

No JSX/component changes are needed — every component reads images through this config.

### Adding hero/promotional video

`heroConfig.ts`'s `background` field is either:

```ts
{ type: "image", image: someMediaImage }
// or
{ type: "video", video: someMediaVideo } // { src, poster, isPlaceholder? }
```

Switch the `type` and supply a `MediaVideo` (see the commented-out example, `heroVideo`, in `mediaConfig.ts`) to switch the whole homepage hero to a video background. The `Hero` component already handles autoplay/muted/loop/playsInline, a poster fallback, graceful error-fallback to the poster image, and skips video entirely when the visitor has `prefers-reduced-motion` turned on.

### Adding/editing rooms

Open `src/config/roomsConfig.ts` and add an object to the `rooms` array:

```ts
{
  id: "penthouse",
  slug: "penthouse-suite",       // becomes the URL: /rooms/penthouse-suite
  name: "Penthouse Suite",
  shortDescription: "...",        // shown on the room card
  longDescription: ["...", "..."],// shown on the room details page (one paragraph per string)
  featuredImage: someImage,
  images: [img1, img2, img3],
  amenities: ["wifi", "ac", "bar"], // ids from amenitiesConfig.ts
  occupancy: { adults: 2, children: 1 },
  bedType: "King",
  size: { value: 600, unit: "sqft" },
  // priceFrom is OPTIONAL — omit entirely rather than inventing a price.
  cta: { label: "Enquire Now", type: "enquire", href: "#contact" },
}
```

A details page at `/rooms/penthouse-suite` is generated automatically — nothing else to wire up.

### Adding/editing gallery items

Add an entry to `galleryImages` in `mediaConfig.ts` with a `category` field matching one of the strings in `galleryConfig.ts`'s `categories` array (or add a new category string there too). The gallery's filter chips, grid, and lightbox all derive from this automatically.

---

## 6. Adding a booking engine later (this site intentionally has none yet)

The codebase was structured so a booking flow can be added without a redesign:

- Every "Enquire Now / View Rooms / Call Us" button renders through `CtaAction` (`src/types/content.ts`) and the shared `CtaButton` component (`src/components/ui/Button.tsx`). To introduce booking, add a `"book"` variant to `CtaActionType`, handle it in `CtaButton`, and swap the relevant `cta` fields in `roomsConfig.ts`/`heroConfig.ts` — every button that should become a "Book Now" updates from config alone.
- `RoomType` (`src/types/content.ts`) already has a natural place to add a `booking?: { ... }` slot (rate plans, availability, etc.) without touching `RoomCard` or `RoomDetailsPage`'s existing rendering.
- Routing already uses `react-router-dom`, so a `/booking` or `/checkout` flow is a new route in `src/App.tsx`, not a rewrite.
- No backend assumptions are baked into the UI layer, so a booking API can be introduced independently.

## 7. Project structure

```
src/
  types/content.ts       # All content/media TypeScript interfaces
  config/                 # Every piece of hotel content & media — edit here
  hooks/                  # useReveal (scroll animation), useSeo, usePrefersReducedMotion, useLockBodyScroll
  components/
    layout/               # Header, MobileNav, Footer, Logo
    ui/                   # Button, Container, Icon, Reveal, SectionHeading, SmartImage
    sections/             # Hero, About, Rooms, Amenities, Dining, Gallery, Contact, etc.
  pages/                  # HomePage, RoomDetailsPage, NotFoundPage
  App.tsx, main.tsx, index.css
```

## 8. Notes on scope (by design, for this stage)

- No booking engine, payment gateway, guest accounts, or reservation database — all CTAs route to Contact/Call/WhatsApp/Enquire.
- No backend, database, or admin dashboard — this is a static marketing site.
- No fabricated pricing, star-ratings, or amenities — anything not explicitly configured is simply not shown.
- Placeholder copy and photography are clearly marked (`isPlaceholder`) throughout the config layer and should be replaced with real COSMOS content before launch.
