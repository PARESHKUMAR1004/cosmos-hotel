/**
 * HERO SECTION CONTENT
 * Toggle `background.type` between "image" and "video" to switch the hero
 * treatment — see mediaConfig.ts for the corresponding `heroImage` /
 * `heroVideo` assets. No component changes required either way.
 */
import type { HeroContent } from "@/types/content";
import { heroVideo } from "./mediaConfig";

export const heroContent: HeroContent = {
  background: { type: "video", video: heroVideo },
  eyebrow: "Bhubaneswar",
  title: "COSMOS",
  subtitle: "A quiet address in the heart of the city — considered design, attentive service.",
  primaryCta: { label: "Enquire Now", type: "enquire", href: "#contact" },
  secondaryCta: { label: "View Rooms", type: "view", href: "#rooms" },
};
