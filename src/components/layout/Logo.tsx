import { hotelInfo } from "@/config/hotelConfig";

/**
 * Text-based wordmark standing in for the client's future logo mark. Swap
 * this component's contents for an <img>/<svg> logo later — the header and
 * footer only ever render <Logo />, so no layout code changes.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-ivory" : "text-ink";
  return (
    <span className={`select-none font-display ${color}`}>
      <span className="block text-2xl font-semibold leading-none tracking-[0.14em]">{hotelInfo.name}</span>
      <span className="block text-[0.62rem] font-body font-medium uppercase tracking-widest2 opacity-70">Hotel</span>
    </span>
  );
}
