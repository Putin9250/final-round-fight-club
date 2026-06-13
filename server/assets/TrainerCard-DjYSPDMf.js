import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FiX, FiAward } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { i as itemVariants } from "./animated-DsA-r4ln.js";
function TrainerCard({ trainer }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.button,
      {
        variants: itemVariants,
        onClick: () => setOpen(true),
        className: "group relative block overflow-hidden rounded-lg border border-border bg-card text-left",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-[26rem] overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: trainer.image,
                alt: trainer.name,
                loading: "lazy",
                className: "h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" }),
            /* @__PURE__ */ jsx("span", { className: "absolute right-4 top-4 rounded-sm bg-primary px-3 py-1 font-heading text-[0.6rem] font-bold uppercase tracking-[0.15em] text-primary-foreground", children: trainer.Speciality })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-heading text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary", children: trainer.role }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-2xl uppercase leading-none tracking-tight text-foreground", children: trainer.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 inline-flex items-center gap-1.5 font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-foreground/70 transition-colors group-hover:text-primary", children: "View Profile +" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.9, opacity: 0, y: 20 },
            animate: { scale: 1, opacity: 1, y: 0 },
            exit: { scale: 0.95, opacity: 0 },
            transition: { ease: [0.16, 1, 0.3, 1] },
            onClick: (e) => e.stopPropagation(),
            className: "relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg border border-border bg-card sm:grid-cols-[1fr_1.2fr]",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  "aria-label": "Close",
                  className: "absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-sm bg-background/70 text-foreground hover:text-primary",
                  children: /* @__PURE__ */ jsx(FiX, {})
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: trainer.image,
                  alt: trainer.name,
                  className: "h-56 w-full object-cover object-top sm:h-full"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto p-7", children: [
                /* @__PURE__ */ jsx("p", { className: "font-heading text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary", children: trainer.role }),
                /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-3xl uppercase leading-none tracking-tight text-foreground", children: trainer.name }),
                /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-3 gap-3 border-y border-border py-4", children: [
                  /* @__PURE__ */ jsx(Stat, { label: "Experience", value: trainer.experience }),
                  /* @__PURE__ */ jsx(Stat, { label: "Coaching", value: trainer.specialization }),
                  /* @__PURE__ */ jsx(Stat, { label: "Focus", value: trainer.specialization.split(" ")[0] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed text-muted-foreground", children: trainer.bio }),
                /* @__PURE__ */ jsx("p", { className: "mt-5 font-heading text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: "Student Achivments" }),
                /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: trainer.certifications.map((c) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/85", children: [
                  /* @__PURE__ */ jsx(FiAward, { className: "shrink-0 text-primary" }),
                  " ",
                  c
                ] }, c)) }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: [FaInstagram, FaXTwitter, FaYoutube].map((Icon, i) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary",
                    children: /* @__PURE__ */ jsx(Icon, {})
                  },
                  i
                )) })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
function Stat({ label, value }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-primary", children: value }),
    /* @__PURE__ */ jsx("p", { className: "font-heading text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground", children: label })
  ] });
}
export {
  TrainerCard as T
};
