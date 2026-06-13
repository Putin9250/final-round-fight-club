import { Link } from "@tanstack/react-router";
import { FiArrowRight } from "react-icons/fi";

import ctaBanner from "@/assets/cta-banner.jpg";
import { Reveal } from "@/components/animated";
import { btnPrimary, btnOutline } from "@/components/ui-button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBanner} alt="" aria-hidden className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
        <Reveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Your Moment Starts Now
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-5xl uppercase leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Step Into The <span className="text-gradient-gold">Arena</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Your first class is on us. No experience needed — just the will to start. Book your free trial and begin the transformation today.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className={btnPrimary}>
              Join Now <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className={btnOutline}>
              Book Free Trial
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}