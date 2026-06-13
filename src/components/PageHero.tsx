import { motion } from "motion/react";

import { Particles, TextReveal } from "@/components/animated";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden pb-16 pt-40">
      <motion.img
        src={image}
        alt=""
        aria-hidden
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      <Particles count={18} />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.35em] text-primary"
        >
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </motion.span>
        <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <TextReveal text={title} delay={0.3} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}