import { motion } from "motion/react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

import type { FightingStyle } from "@/lib/site-data";
import { itemVariants } from "@/components/animated";

export function StyleCard({ style }: { style: FightingStyle }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={style.image}
          alt={style.name}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-sm bg-accent/90 px-3 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent-foreground">
          {style.level}
        </span>
        <div className="absolute bottom-4 left-5">
          <p className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary">
            {style.tagline}
          </p>
          <h3 className="font-display text-3xl uppercase leading-none tracking-tight text-foreground">
            {style.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{style.description}</p>

        <ul className="mt-5 grid grid-cols-2 gap-2.5">
          {style.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-xs text-foreground/85">
              <FiCheck className="shrink-0 text-primary" /> {b}
            </li>
          ))}
        </ul>

       
        
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-transparent transition-all duration-500 group-hover:ring-primary/40" />
    </motion.article>
  );
}