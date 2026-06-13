import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { t as trainer1, a as trainers } from "./router-_vwHl8xn.js";
import { P as PageHero } from "./PageHero-DKdQm1-1.js";
import { C as CTASection } from "./CTASection-Bt90ssJc.js";
import { S as Stagger } from "./animated-DsA-r4ln.js";
import { T as TrainerCard } from "./TrainerCard-DjYSPDMf.js";
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
function TrainersPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "The Coaches", title: "Trained By Champions", subtitle: "Decades of championship experience in your corner. Tap a coach to view their full profile, record and certifications.", image: trainer1 }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsx(Stagger, { className: "grid gap-7 sm:grid-cols-2 lg:grid-cols-4", children: trainers.map((t) => /* @__PURE__ */ jsx(TrainerCard, { trainer: t }, t.name)) }) }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  TrainersPage as component
};
