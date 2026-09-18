import type { SeoConfig } from "@/types/content";
import { ogImage } from "./mediaConfig";
import { hotelInfo } from "./hotelConfig";

export const seoConfig: SeoConfig = {
  siteName: hotelInfo.name,
  titleTemplate: `%s — ${hotelInfo.name}`,
  defaultTitle: `${hotelInfo.name} — ${hotelInfo.tagline}`,
  defaultDescription: hotelInfo.positioningStatement,
  // Replace with the real production domain before launch/deploy.
  canonicalBaseUrl: "https://www.cosmoshotel.example",
  ogImage,
  twitterHandle: undefined,
};
