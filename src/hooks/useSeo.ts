import { useEffect } from "react";
import { seoConfig } from "@/config/seoConfig";
import { contactInfo } from "@/config/contactConfig";
import { hotelInfo } from "@/config/hotelConfig";

interface SeoOptions {
  title?: string;
  description?: string;
  path?: string; // e.g. "/rooms/deluxe-room"
  image?: string;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight, dependency-free SEO writer: sets document title, meta
 * description, Open Graph/Twitter tags, canonical URL and injects the
 * hotel's LocalBusiness/Hotel JSON-LD structured data — all sourced from
 * config, never hard-coded per component.
 */
export function useSeo(options: SeoOptions = {}) {
  useEffect(() => {
    const title = options.title
      ? seoConfig.titleTemplate.replace("%s", options.title)
      : seoConfig.defaultTitle;
    const description = options.description ?? seoConfig.defaultDescription;
    const url = `${seoConfig.canonicalBaseUrl}${options.path ?? "/"}`;
    const image = options.image ?? seoConfig.ogImage.src;

    document.title = title;
    setMeta("name", "description", description);
    setLink("canonical", url);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", seoConfig.siteName);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    if (seoConfig.twitterHandle) setMeta("name", "twitter:site", seoConfig.twitterHandle);

    // Hotel structured data (schema.org). Left generic where fields are
    // placeholders — fill in contactConfig.ts for accurate business data.
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: hotelInfo.name,
      description: seoConfig.defaultDescription,
      image,
      telephone: contactInfo.phoneDisplay,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: [contactInfo.address.line1, contactInfo.address.line2].filter(Boolean).join(", "),
        addressLocality: contactInfo.address.city,
        addressRegion: contactInfo.address.state,
        postalCode: contactInfo.address.postalCode,
        addressCountry: contactInfo.address.country,
      },
      url: seoConfig.canonicalBaseUrl,
    };

    let script = document.getElementById("hotel-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "hotel-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [options.title, options.description, options.path, options.image]);
}
