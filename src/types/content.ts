/**
 * Central content/type model for the COSMOS website.
 *
 * Every piece of hotel-specific data (copy, images, videos, contact details,
 * room/amenity/dining/gallery data) is described here and supplied by the
 * files in `src/config/*`. UI components accept this data as props/imports
 * from config — they never hard-code hotel content, media URLs, or copy.
 *
 * To add a booking engine later: add a `booking?: BookingConfig` slot to
 * `RoomType` / `SiteConfig`, and swap the `CtaAction` of type "enquire" for
 * one of type "book" where relevant. No other component needs to change.
 */

/** A single image reference. Always include descriptive alt text. */
export interface MediaImage {
  id: string;
  /** Absolute URL or an imported local asset path. */
  src: string;
  alt: string;
  /** Optional smaller variant for thumbnails/lightbox transitions. */
  thumbnail?: string;
  width?: number;
  height?: number;
  /** Marks obviously-placeholder media so it's easy to find & swap later. */
  isPlaceholder?: boolean;
}

/** A single video reference, used for hero/promo backgrounds. */
export interface MediaVideo {
  id: string;
  src: string;
  /** Shown while the video loads / if it fails / on reduced-motion. */
  poster: string;
  isPlaceholder?: boolean;
}

export type HeroBackground =
  | { type: "image"; image: MediaImage }
  | { type: "video"; video: MediaVideo };

export type CtaActionType = "enquire" | "call" | "whatsapp" | "link" | "view";

export interface CtaAction {
  label: string;
  type: CtaActionType;
  /** Route path, anchor (#id), tel:, mailto:, wa.me link, etc. */
  href: string;
}

export interface HeroContent {
  background: HeroBackground;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: CtaAction;
  secondaryCta?: CtaAction;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  story: string[]; // paragraphs
  locationNote: string;
  philosophy: string;
  image: MediaImage;
  stats?: { label: string; value: string }[];
}

export interface RoomType {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string[];
  featuredImage: MediaImage;
  images: MediaImage[];
  amenities: string[]; // ids referencing AmenityDefinition, or free-form labels
  occupancy: { adults: number; children?: number };
  bedType: string;
  size: { value: number; unit: "sqft" | "sqm" };
  /** Omit entirely to hide price — do not fabricate pricing. */
  priceFrom?: { amount: number; currency: string; perNight: boolean };
  cta: CtaAction;
  isPlaceholder?: boolean;
}

export interface AmenityDefinition {
  id: string;
  label: string;
  description: string;
  icon: IconName;
  image?: MediaImage;
  category?: "comfort" | "wellness" | "business" | "service";
}

export interface DiningVenue {
  id: string;
  name: string;
  tagline: string;
  description: string;
  cuisine: string[];
  images: MediaImage[];
  openingHours?: { label: string; hours: string }[];
  cta: CtaAction;
  isPlaceholder?: boolean;
}

export interface GalleryImage extends MediaImage {
  category: string;
}

export interface GalleryContent {
  categories: string[];
  images: GalleryImage[];
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "twitter" | "youtube" | "linkedin";
  href: string;
  label: string;
}

export interface OpeningHoursEntry {
  label: string;
  hours: string;
}

export interface ContactInfo {
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  mapEmbedUrl: string;
  mapLinkUrl: string;
  reception: OpeningHoursEntry[];
  social: SocialLink[];
}

export interface HotelInfo {
  name: string;
  legalName?: string;
  tagline: string;
  positioningStatement: string;
  foundedYear?: number;
  isPlaceholderInfo?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SeoConfig {
  siteName: string;
  titleTemplate: string; // e.g. "%s | COSMOS Hotel"
  defaultTitle: string;
  defaultDescription: string;
  canonicalBaseUrl: string;
  ogImage: MediaImage;
  twitterHandle?: string;
}

export type IconName =
  | "wifi"
  | "parking"
  | "pool"
  | "restaurant"
  | "roomService"
  | "housekeeping"
  | "ac"
  | "conference"
  | "gym"
  | "spa"
  | "laundry"
  | "bar"
  | "concierge"
  | "petFriendly"
  | "map"
  | "phone"
  | "mail"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "twitter"
  | "youtube"
  | "linkedin"
  | "menu"
  | "close"
  | "chevronLeft"
  | "chevronRight"
  | "bed"
  | "users"
  | "expand"
  | "clock";
