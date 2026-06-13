import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, useInView, animate } from "motion/react";
import { l as cn } from "./router-_vwHl8xn.js";
function Reveal({ children, className, delay = 0, y = 32, once = true }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once, margin: "-80px" },
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
      children
    }
  );
}
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
function Stagger({
  children,
  className,
  amount = 0.2
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      variants: containerVariants,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, amount },
      children
    }
  );
}
function StaggerItem({ children, className }) {
  return /* @__PURE__ */ jsx(motion.div, { className, variants: itemVariants, children });
}
function TextReveal({
  text,
  className,
  delay = 0
}) {
  const words = text.split(" ");
  return /* @__PURE__ */ jsx("span", { className: cn("inline-flex flex-wrap", className), children: words.map((word, i) => /* @__PURE__ */ jsx("span", { className: "overflow-hidden py-[0.05em] pr-[0.28em]", children: /* @__PURE__ */ jsx(
    motion.span,
    {
      className: "inline-block",
      initial: { y: "110%" },
      animate: { y: 0 },
      transition: { duration: 0.9, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] },
      children: word
    }
  ) }, i)) });
}
function MagneticButton({
  children,
  className,
  onClick,
  type = "button"
}) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  function handleMove(e) {
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
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      ref,
      type,
      onClick,
      onMouseMove: handleMove,
      onMouseLeave: reset,
      style: { x, y },
      whileTap: { scale: 0.95 },
      className,
      children
    }
  );
}
function Counter({
  value,
  suffix = "",
  className
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [inView, value]);
  return /* @__PURE__ */ jsxs("span", { ref, className, children: [
    display.toLocaleString(),
    suffix
  ] });
}
function Particles({ count = 26, className }) {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 10
      }))
    );
  }, [count]);
  return /* @__PURE__ */ jsx("div", { className: cn("pointer-events-none absolute inset-0 overflow-hidden", className), "aria-hidden": true, children: particles.map((p, i) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "absolute bottom-0 rounded-full bg-primary/60",
      style: {
        left: `${p.left}%`,
        width: p.size,
        height: p.size,
        animation: `float-up ${p.duration}s linear ${p.delay}s infinite`
      }
    },
    i
  )) });
}
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      ),
      children: [
        eyebrow && /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary" }),
          eyebrow
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl", children: title }) }),
        subtitle && /* @__PURE__ */ jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-relaxed text-muted-foreground", children: subtitle }) })
      ]
    }
  );
}
export {
  Counter as C,
  MagneticButton as M,
  Particles as P,
  Reveal as R,
  Stagger as S,
  TextReveal as T,
  SectionHeading as a,
  StaggerItem as b,
  itemVariants as i
};
