import { useState } from "react";
import { heroContent } from "@/config/heroConfig";
import { hotelInfo } from "@/config/hotelConfig";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Full-width hero. Background is entirely config-driven: switch
 * `heroConfig.ts`'s `background.type` between "image" and "video" to
 * change treatment — this component branches on that value only.
 */
export function Hero() {
  const { background, eyebrow, title, subtitle, primaryCta, secondaryCta } = heroContent;
  const reducedMotion = usePrefersReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  const showVideo = background.type === "video" && !reducedMotion && !videoFailed;

  return (
    <section id="home" className="relative flex h-[92vh] min-h-[560px] w-full items-end overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0">
        {background.type === "image" && (
          <img
            src={background.image.src}
            alt={background.image.alt}
            className={`h-full w-full object-cover ${reducedMotion ? "" : "animate-kenburns"}`}
            loading="eager"
          />
        )}

        {background.type === "video" && (
          <>
            {showVideo ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={background.video.poster}
                onError={() => setVideoFailed(true)}
              >
                <source src={background.video.src} type="video/mp4" />
              </video>
            ) : (
              <img src={background.video.poster} alt="" className="h-full w-full object-cover" loading="eager" />
            )}
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
      </div>

      <Container className="relative z-10 pb-20 pt-40 sm:pb-24">
        {eyebrow && (
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-brass-200">
            <Icon name="map" className="h-3.5 w-3.5" /> {eyebrow}
          </p>
        )}
        <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory-200/90 sm:text-lg">{subtitle}</p>

        <div className="mt-9 flex flex-wrap gap-4">
          <CtaButton action={primaryCta} variant="primary" className="bg-brass-400 border-brass-400 hover:bg-brass-500 text-ink" />
          {secondaryCta && <CtaButton action={secondaryCta} variant="ghost" />}
        </div>
      </Container>

      <a
        href="#about"
        aria-label={`Scroll to learn more about ${hotelInfo.name}`}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ivory/70 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 sm:bottom-9"
      >
        <span className="block h-9 w-5 rounded-full border border-ivory/50 p-1">
          <span className="mx-auto block h-1.5 w-1.5 animate-bounce rounded-full bg-ivory" />
        </span>
      </a>
    </section>
  );
}
