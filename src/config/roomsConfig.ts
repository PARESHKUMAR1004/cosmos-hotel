/**
 * ROOM TYPES
 * Add, remove or edit rooms by editing this array — RoomCard, the rooms
 * grid, and the room details view all render purely from this data.
 * No price is shown unless `priceFrom` is set — do not invent pricing.
 */
import type { RoomType } from "@/types/content";
import { roomImages } from "./mediaConfig";

export const rooms: RoomType[] = [
  {
    id: "deluxe",
    slug: "deluxe-room",
    name: "Deluxe Room",
    shortDescription: "Warm, well-lit rooms designed for a comfortable short or long stay.",
    longDescription: [
      "The Deluxe Room is COSMOS's entry category — generously sized for a single business trip or a relaxed weekend, with a considered layout that keeps everything within reach.",
      "Placeholder description — replace with the actual room copy once finalised.",
    ],
    featuredImage: roomImages.deluxe[0],
    images: roomImages.deluxe,
    amenities: ["wifi", "ac", "roomService", "housekeeping"],
    occupancy: { adults: 2, children: 1 },
    bedType: "King or Twin",
    size: { value: 280, unit: "sqft" },
    cta: { label: "Enquire Now", type: "enquire", href: "#contact" },
    isPlaceholder: true,
  },
  {
    id: "premier",
    slug: "premier-room",
    name: "Premier Room",
    shortDescription: "A little more space, a little more light — ideal for longer stays.",
    longDescription: [
      "Premier Rooms sit on higher floors with better views and a dedicated work corner, tailored for guests who need a quiet base for a few days.",
      "Placeholder description — replace with the actual room copy once finalised.",
    ],
    featuredImage: roomImages.premier[0],
    images: roomImages.premier,
    amenities: ["wifi", "ac", "roomService", "housekeeping", "concierge"],
    occupancy: { adults: 2, children: 1 },
    bedType: "King",
    size: { value: 340, unit: "sqft" },
    cta: { label: "Enquire Now", type: "enquire", href: "#contact" },
    isPlaceholder: true,
  },
  {
    id: "suite",
    slug: "executive-suite",
    name: "Executive Suite",
    shortDescription: "A separate living area and extra room to breathe, for guests who want more.",
    longDescription: [
      "The Executive Suite pairs a private bedroom with a distinct living area — well suited to longer stays, quiet meetings, or simply more room to unwind.",
      "Placeholder description — replace with the actual room copy once finalised.",
    ],
    featuredImage: roomImages.suite[0],
    images: roomImages.suite,
    amenities: ["wifi", "ac", "roomService", "housekeeping", "concierge", "bar"],
    occupancy: { adults: 3, children: 1 },
    bedType: "King",
    size: { value: 520, unit: "sqft" },
    cta: { label: "Enquire Now", type: "enquire", href: "#contact" },
    isPlaceholder: true,
  },
  {
    id: "family",
    slug: "family-room",
    name: "Family Room",
    shortDescription: "Extra beds and space, built around families travelling together.",
    longDescription: [
      "Family Rooms are laid out for groups travelling together, with additional bedding and enough room for everyone to settle in comfortably.",
      "Placeholder description — replace with the actual room copy once finalised.",
    ],
    featuredImage: roomImages.family[0],
    images: roomImages.family,
    amenities: ["wifi", "ac", "roomService", "housekeeping"],
    occupancy: { adults: 3, children: 2 },
    bedType: "Twin + Extra Bed",
    size: { value: 400, unit: "sqft" },
    cta: { label: "Enquire Now", type: "enquire", href: "#contact" },
    isPlaceholder: true,
  },
];

export const getRoomBySlug = (slug: string) => rooms.find((r) => r.slug === slug);
