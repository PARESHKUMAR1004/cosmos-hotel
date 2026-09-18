/**
 * AMENITIES
 * Only list an amenity here if COSMOS genuinely offers it — components
 * render exactly this list and make no assumptions beyond it.
 */
import type { AmenityDefinition } from "@/types/content";
import { amenityImages } from "./mediaConfig";

export const amenities: AmenityDefinition[] = [
  {
    id: "wifi",
    label: "High-Speed Wi-Fi",
    description: "Complimentary high-speed internet throughout the property.",
    icon: "wifi",
    category: "comfort",
  },
  {
    id: "restaurant",
    label: "All-Day Restaurant",
    description: "An all-day dining restaurant serving Indian and multi-cuisine fare.",
    icon: "restaurant",
    category: "service",
  },
  {
    id: "parking",
    label: "On-Site Parking",
    description: "Complimentary parking for self-drive guests.",
    icon: "parking",
    category: "comfort",
  },
  {
    id: "roomService",
    label: "24-Hour Room Service",
    description: "In-room dining available around the clock.",
    icon: "roomService",
    category: "service",
  },
  {
    id: "housekeeping",
    label: "Daily Housekeeping",
    description: "Attentive daily housekeeping for every room.",
    icon: "housekeeping",
    category: "service",
  },
  {
    id: "ac",
    label: "Climate Control",
    description: "Individually controlled air conditioning in every room.",
    icon: "ac",
    category: "comfort",
  },
  {
    id: "conference",
    label: "Conference Room",
    description: "A dedicated space for meetings and small events.",
    icon: "conference",
    image: amenityImages.conference,
    category: "business",
  },
  {
    id: "gym",
    label: "Fitness Centre",
    description: "A well-equipped fitness centre, open to all guests.",
    icon: "gym",
    image: amenityImages.gym,
    category: "wellness",
  },
  {
    id: "pool",
    label: "Swimming Pool",
    description: "An outdoor pool for guests to unwind.",
    icon: "pool",
    image: amenityImages.pool,
    category: "wellness",
  },
  {
    id: "spa",
    label: "Spa & Wellness",
    description: "Massage and wellness treatments by appointment.",
    icon: "spa",
    image: amenityImages.spa,
    category: "wellness",
  },
  {
    id: "concierge",
    label: "Concierge Desk",
    description: "Local recommendations, travel assistance and errands.",
    icon: "concierge",
    category: "business",
  },
  {
    id: "bar",
    label: "Lounge & Bar",
    description: "An in-room minibar and access to the lounge & bar.",
    icon: "bar",
    category: "comfort",
  },
  {
    id: "laundry",
    label: "Laundry Service",
    description: "Same-day laundry and pressing on request.",
    icon: "laundry",
    category: "service",
  },
];

export const getAmenityById = (id: string) => amenities.find((a) => a.id === id);
