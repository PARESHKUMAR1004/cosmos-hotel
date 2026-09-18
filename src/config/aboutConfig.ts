import type { AboutContent } from "@/types/content";
import { aboutImage } from "./mediaConfig";

export const aboutContent: AboutContent = {
  eyebrow: "About Cosmos",
  heading: "Hospitality, considered carefully",
  story: [
    "COSMOS was created around a simple idea: that a hotel should feel like a well-kept home, not a waiting room. Every room, corridor and corner is arranged with the same quiet attention.",
    "Placeholder copy — replace with the hotel's real story once available. Use this space to describe the property's history, the people behind it, and what a stay here is meant to feel like.",
  ],
  locationNote:
    "Set in a well-connected part of the city, COSMOS keeps guests close to business districts, transit and the sights worth seeing — without the noise that usually comes with it.",
  philosophy:
    "Our approach to hospitality is unhurried and personal: fewer scripted gestures, more genuine attention to what each guest actually needs.",
  image: aboutImage,
  stats: [
    { label: "Rooms & Suites", value: "48" },
    { label: "City Location", value: "Central" },
    { label: "Front Desk", value: "24 Hrs" },
  ],
};
