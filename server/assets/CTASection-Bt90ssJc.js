import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { FiArrowRight } from "react-icons/fi";
import { c as ctaBanner } from "./router-_vwHl8xn.js";
import { R as Reveal } from "./animated-DsA-r4ln.js";
const btnPrimary = "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90";
const btnOutline = "group relative inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/25 bg-transparent px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.15em] text-foreground transition-all hover:border-primary hover:text-primary";
function CTASection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: ctaBanner, alt: "", "aria-hidden": true, className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/80" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", { className: "font-heading text-xs font-semibold uppercase tracking-[0.35em] text-primary", children: "Your Moment Starts Now" }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("h2", { className: "mt-5 font-display text-5xl uppercase leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl", children: [
        "Step Into The ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Arena" })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground", children: "Your first class is on us. No experience needed — just the will to start. Book your free trial and begin the transformation today." }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: btnPrimary, children: [
          "Join Now ",
          /* @__PURE__ */ jsx(FiArrowRight, { className: "transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: btnOutline, children: "Book Free Trial" })
      ] }) })
    ] })
  ] });
}
export {
  CTASection as C,
  btnOutline as a,
  btnPrimary as b
};
