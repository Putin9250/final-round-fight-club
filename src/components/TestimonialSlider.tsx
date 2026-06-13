import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar, FaQuoteRight } from "react-icons/fa6";

import { testimonials } from "@/lib/site-data";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(() => go(index + 1), 6000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const t = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <FaQuoteRight className="mx-auto mb-8 text-5xl text-primary/30" />
      <div className="relative min-h-[16rem] overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} className="text-primary" />
              ))}
            </div>
            <p className="font-heading text-xl font-light leading-relaxed text-foreground sm:text-2xl">
              “{t.quote}”
            </p>
            <p className="mt-7 font-display text-lg uppercase tracking-tight text-primary">{t.name}</p>
            <p className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous"
          className="grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground transition-all hover:border-primary hover:text-primary"
        >
          <FiChevronLeft />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-7 bg-primary" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next"
          className="grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground transition-all hover:border-primary hover:text-primary"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}