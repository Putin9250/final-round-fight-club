import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  animate as animateValue,
  type Variants,
} from "motion/react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, y = 32, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Staggered group                                                     */
/* ------------------------------------------------------------------ */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Stagger({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Animated word-by-word headline reveal                               */
/* ------------------------------------------------------------------ */
export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden py-[0.05em] pr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic button                                                     */
/* ------------------------------------------------------------------ */
export function MagneticButton({
  children,
  className,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animateValue(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax wrapper                                                    */
/* ------------------------------------------------------------------ */
export function Parallax({
  children,
  className,
  distance = 80,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Floating particles background                                       */
/* ------------------------------------------------------------------ */
export function Particles({ count = 26, className }: { count?: number; className?: string }) {
  const [particles, setParticles] = useState<
    { left: number; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 10,
      })),
    );
  }, [count]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-primary/60"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}