import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { s as styleMma, f as fightingStyles } from "./router-_vwHl8xn.js";
import { P as PageHero } from "./PageHero-DKdQm1-1.js";
import { C as CTASection } from "./CTASection-Bt90ssJc.js";
import { S as Stagger } from "./animated-DsA-r4ln.js";
import { S as StyleCard } from "./StyleCard-CbQuAZri.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "motion/react";
import "react-icons/fi";
import "react-icons/gi";
import "clsx";
import "tailwind-merge";
import "react-icons/fa6";
import "sonner";
function StylesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Disciplines", title: "Find Your Fight", subtitle: "Ten world-class disciplines, each taught by specialists. Whether you strike, grapple or want to do it all — your style is waiting.", image: styleMma }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsx(Stagger, { className: "grid gap-7 sm:grid-cols-2 lg:grid-cols-3", amount: 0.05, children: fightingStyles.map((style) => /* @__PURE__ */ jsx(StyleCard, { style }, style.slug)) }) }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  StylesPage as component
};
