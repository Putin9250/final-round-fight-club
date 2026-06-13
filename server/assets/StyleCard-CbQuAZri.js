import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";
import { i as itemVariants } from "./animated-DsA-r4ln.js";
function StyleCard({ style }) {
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      variants: itemVariants,
      className: "group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-64 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: style.image,
              alt: style.name,
              loading: "lazy",
              className: "h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" }),
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-4 rounded-sm bg-accent/90 px-3 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent-foreground", children: style.level }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-5", children: [
            /* @__PURE__ */ jsx("p", { className: "font-heading text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary", children: style.tagline }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl uppercase leading-none tracking-tight text-foreground", children: style.name })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: style.description }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 grid grid-cols-2 gap-2.5", children: style.benefits.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-xs text-foreground/85", children: [
            /* @__PURE__ */ jsx(FiCheck, { className: "shrink-0 text-primary" }),
            " ",
            b
          ] }, b)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-lg ring-1 ring-transparent transition-all duration-500 group-hover:ring-primary/40" })
      ]
    }
  );
}
export {
  StyleCard as S
};
