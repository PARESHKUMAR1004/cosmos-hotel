/**
 * MEDIA CONFIGURATION
 * --------------------------------------------------------------------------
 * Every photo/video URL used anywhere on the site is declared in this file
 * (or in the other config files that import from it). No component ever
 * hard-codes a media URL.
 *
 * REPLACING PLACEHOLDER MEDIA
 * All entries below use royalty-free Unsplash stock photography as a
 * stand-in for real COSMOS photography, flagged with `isPlaceholder: true`.
 * To go live:
 *   1. Drop real photos/videos into `src/assets/` (or host them on your own
 *      CDN/S3 bucket).
 *   2. Update the `src` (and `thumbnail`, `poster`) fields below to point at
 *      the new files — a local import (e.g. `import heroImg from
 *      "@/assets/hero.jpg"`) or an absolute URL both work.
 *   3. Remove `isPlaceholder: true` once real media is in place.
 * No component code needs to change.
 */

import type { MediaImage, MediaVideo } from "@/types/content";

let uid = 0;
const nextId = (prefix: string) => `${prefix}-${++uid}`;

/** Helper for a consistent, reliable Unsplash placeholder photo. */
function unsplash(photoId: string, alt: string, prefix: string): MediaImage {
  return {
    id: nextId(prefix),
    src: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1800&q=80`,
    thumbnail: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=480&q=70`,
    alt,
    isPlaceholder: true,
  };
}

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const heroImage: MediaImage = unsplash(
  "photo-1571896349842-33c89424de2d",
  "Placeholder photograph of a grand hotel lobby at dusk — replace with COSMOS exterior/lobby photography",
  "hero"
);

/**
 * Example video hero, wired but not active by default (see heroConfig.ts,
 * which currently sets `background.type = "image"`). Switch that one field
 * to "video" to use this instead — no other change required.
 */
export const heroVideo: MediaVideo = {
  id: nextId("hero-video"),
  src: "https://assets.mixkit.co/videos/3176/3176-720.mp4",
  poster: heroImage.src,
  isPlaceholder: true,
};

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------
export const aboutImage: MediaImage = unsplash(
  "photo-1551882547-ff40c63fe5fa",
  "Placeholder photograph of a hotel facade at night — replace with the actual COSMOS building",
  "about"
);

// ---------------------------------------------------------------------------
// ROOMS
// ---------------------------------------------------------------------------
export const roomImages = {
  deluxe: [
    unsplash("photo-1611892440504-42a792e24d32", "Deluxe Room — placeholder: king bed with warm lighting", "room-deluxe"),
    unsplash("photo-1560185007-5f0bb1866cab", "Deluxe Room — placeholder: seating nook by the window", "room-deluxe"),
    unsplash("photo-1560185009-5bf9f2849488", "Deluxe Room — placeholder: bathroom detail", "room-deluxe"),
  ],
  premier: [
    unsplash("photo-1582719478250-c89cae4dc85b", "Premier Room — placeholder: spacious bedroom with city view", "room-premier"),
    unsplash("photo-1568495248636-6432b97bd949", "Premier Room — placeholder: work desk area", "room-premier"),
    unsplash("photo-1595576508898-0ad5c879a061", "Premier Room — placeholder: bathroom with soaking tub", "room-premier"),
  ],
  suite: [
    unsplash("photo-1600585154340-be6161a56a0c", "Executive Suite — placeholder: living area with sofa", "room-suite"),
    unsplash("photo-1600607687939-ce8a6c25118c", "Executive Suite — placeholder: bedroom suite view", "room-suite"),
    unsplash("photo-1584132967334-10e028bd69f7", "Executive Suite — placeholder: private balcony", "room-suite"),
  ],
  family: [
    unsplash("photo-1595526114035-0d45ed16cfbf", "Family Room — placeholder: twin beds with soft daylight", "room-family"),
    unsplash("photo-1618221195710-dd6b41faaea6", "Family Room — placeholder: lounge corner", "room-family"),
    unsplash("photo-1616486338812-3dadae4b4ace", "Family Room — placeholder: bathroom detail", "room-family"),
  ],
};

// ---------------------------------------------------------------------------
// DINING
// ---------------------------------------------------------------------------
export const diningImages = {
  allDay: [
    unsplash("photo-1517248135467-4c7edcad34c4", "All-day dining restaurant — placeholder: table setting", "dining-allday"),
    unsplash("photo-1414235077428-338989a2e8c0", "All-day dining — placeholder: signature dish", "dining-allday"),
    unsplash("photo-1590846406792-0adc7f938f1f", "All-day dining — placeholder: dining hall ambience", "dining-allday"),
  ],
  loungeBar: [
    unsplash("photo-1470337458703-46ad1756a187", "Lounge & Bar — placeholder: crafted drinks on the counter", "dining-bar"),
    unsplash("photo-1516997121675-4c2d1684aa3e", "Lounge & Bar — placeholder: evening ambience", "dining-bar"),
  ],
};

// ---------------------------------------------------------------------------
// AMENITIES (a subset carry a supporting photo; icon covers the rest)
// ---------------------------------------------------------------------------
export const amenityImages = {
  pool: unsplash("photo-1445019980597-93fa8acb246c", "Swimming pool — placeholder", "amenity-pool"),
  spa: unsplash("photo-1560347876-aeef00ee58a1", "Spa treatment room — placeholder", "amenity-spa"),
  conference: unsplash("photo-1505409859467-3a796fd5798e", "Conference room — placeholder", "amenity-conference"),
  gym: unsplash("photo-1571902943202-507ec2618e8f", "Fitness center — placeholder", "amenity-gym"),
};

// ---------------------------------------------------------------------------
// GALLERY
// ---------------------------------------------------------------------------
export const galleryImages = [
  { ...unsplash("photo-1571896349842-33c89424de2d", "Hotel lobby — placeholder", "gal-ext"), category: "Exterior" },
  { ...unsplash("photo-1571003123894-1f0594d2b5d9", "Hotel building facade — placeholder", "gal-ext"), category: "Exterior" },
  { ...unsplash("photo-1551882547-ff40c63fe5fa", "Hotel entrance at night — placeholder", "gal-ext"), category: "Exterior" },

  { ...unsplash("photo-1611892440504-42a792e24d32", "Guest room — placeholder", "gal-room"), category: "Rooms" },
  { ...unsplash("photo-1582719478250-c89cae4dc85b", "Guest room with city view — placeholder", "gal-room"), category: "Rooms" },
  { ...unsplash("photo-1600585154340-be6161a56a0c", "Suite living area — placeholder", "gal-room"), category: "Rooms" },
  { ...unsplash("photo-1595576508898-0ad5c879a061", "Bathroom detail — placeholder", "gal-room"), category: "Rooms" },

  { ...unsplash("photo-1517248135467-4c7edcad34c4", "Restaurant table setting — placeholder", "gal-dine"), category: "Dining" },
  { ...unsplash("photo-1414235077428-338989a2e8c0", "Signature dish — placeholder", "gal-dine"), category: "Dining" },
  { ...unsplash("photo-1470337458703-46ad1756a187", "Bar counter — placeholder", "gal-dine"), category: "Dining" },

  { ...unsplash("photo-1505409859467-3a796fd5798e", "Banquet & events space — placeholder", "gal-events"), category: "Events" },
  { ...unsplash("photo-1519167758481-83f550bb49b3", "Event setup — placeholder", "gal-events"), category: "Events" },

  { ...unsplash("photo-1445019980597-93fa8acb246c", "Swimming pool — placeholder", "gal-amenity"), category: "Amenities" },
  { ...unsplash("photo-1560347876-aeef00ee58a1", "Spa — placeholder", "gal-amenity"), category: "Amenities" },
  { ...unsplash("photo-1571902943202-507ec2618e8f", "Fitness center — placeholder", "gal-amenity"), category: "Amenities" },
];

// ---------------------------------------------------------------------------
// SEO / SOCIAL SHARE IMAGE
// ---------------------------------------------------------------------------
export const ogImage: MediaImage = unsplash(
  "photo-1571896349842-33c89424de2d",
  "COSMOS hotel — social share preview image (placeholder)",
  "og"
);
