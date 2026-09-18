/**
 * DINING VENUES
 * Add/remove venues here — the Dining section renders one card/block per
 * entry. Opening hours are optional; omit the field rather than guessing.
 */
import type { DiningVenue } from "@/types/content";
import { diningImages } from "./mediaConfig";

export const diningVenues: DiningVenue[] = [
  {
    id: "all-day-dining",
    name: "The Courtyard",
    tagline: "All-day dining",
    description:
      "An all-day restaurant serving a considered spread of Indian and multi-cuisine dishes, from an early breakfast to a late dinner. Placeholder description — replace with the venue's actual story, chef notes or signature dishes.",
    cuisine: ["Indian", "Continental", "Multi-cuisine"],
    images: diningImages.allDay,
    openingHours: [
      { label: "Breakfast", hours: "7:00 AM – 10:30 AM" },
      { label: "Lunch", hours: "12:30 PM – 3:30 PM" },
      { label: "Dinner", hours: "7:30 PM – 11:00 PM" },
    ],
    cta: { label: "Enquire Now", type: "enquire", href: "#contact" },
    isPlaceholder: true,
  },
  {
    id: "lounge-bar",
    name: "The Alcove",
    tagline: "Lounge & bar",
    description:
      "A relaxed lounge for an evening drink or a quiet coffee. Placeholder description — replace with real venue details once confirmed.",
    cuisine: ["Beverages", "Light Bites"],
    images: diningImages.loungeBar,
    openingHours: [{ label: "Daily", hours: "4:00 PM – 12:00 AM" }],
    cta: { label: "Enquire Now", type: "enquire", href: "#contact" },
    isPlaceholder: true,
  },
];
