import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * GSAP ScrollTrigger-driven parallax. Returns a ref to attach to the moving
 * element; the trigger is its closest positioned ancestor (use a wrapper with
 * `overflow-hidden`). Runs client-side only via useGSAP.
 */
export function useGsapParallax<T extends HTMLElement>(intensity = 18) {
  const ref = useRef<T>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      el,
      { yPercent: -intensity },
      {
        yPercent: intensity,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [intensity]);

  return ref;
}