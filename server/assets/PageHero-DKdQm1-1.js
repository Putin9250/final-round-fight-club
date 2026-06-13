import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { P as Particles, T as TextReveal } from "./animated-DsA-r4ln.js";
function PageHero({
  eyebrow,
  title,
  subtitle,
  image
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative flex min-h-[56vh] items-end overflow-hidden pb-16 pt-40", children: [
    /* @__PURE__ */ jsx(
      motion.img,
      {
        src: image,
        alt: "",
        "aria-hidden": true,
        initial: { scale: 1.18 },
        animate: { scale: 1 },
        transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" }),
    /* @__PURE__ */ jsx(Particles, { count: 18 }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.span,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.35em] text-primary",
          children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary" }),
            eyebrow
          ]
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl", children: /* @__PURE__ */ jsx(TextReveal, { text: title, delay: 0.3 }) }),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6 },
          className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
          children: subtitle
        }
      )
    ] })
  ] });
}
export {
  PageHero as P
};
