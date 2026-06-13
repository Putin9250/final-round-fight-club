import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { FiTarget, FiEye, FiShield, FiZap, FiHeart, FiUsers } from "react-icons/fi";
import { GiTrophyCup, GiMedal, GiLaurelsTrophy, GiBlackBelt } from "react-icons/gi";
import { b as aboutFacility, g as gallery1 } from "./router-_vwHl8xn.js";
import { P as PageHero } from "./PageHero-DKdQm1-1.js";
import { C as CTASection } from "./CTASection-Bt90ssJc.js";
import { R as Reveal, a as SectionHeading, S as Stagger, b as StaggerItem } from "./animated-DsA-r4ln.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "motion/react";
import "clsx";
import "tailwind-merge";
import "react-icons/fa6";
import "sonner";
const values = [{
  icon: FiShield,
  title: "Discipline",
  desc: "Mastery is built one disciplined day at a time. We honor the grind."
}, {
  icon: FiZap,
  title: "Fearlessness",
  desc: "We train courage. Step into discomfort and grow beyond your limits."
}, {
  icon: FiHeart,
  title: "Respect",
  desc: "Every fighter, every belt, every journey is honored on our mats."
}, {
  icon: FiUsers,
  title: "Community",
  desc: "A brotherhood and sisterhood that lifts each other higher."
}];
const facility = ["Full-size competition boxing ring", "Regulation MMA cage", "2,000 sq ft of premium mat space", "Olympic-grade strength & conditioning zone", "Recovery suite with sauna & ice baths", "Pro-grade heavy bag gallery"];
const awards = [{
  icon: GiTrophyCup,
  value: "48",
  label: "Championship Titles"
}, {
  icon: GiMedal,
  value: "12",
  label: "National Medalists"
}, {
  icon: GiLaurelsTrophy,
  value: "7",
  label: "Pro Fighters Developed"
}, {
  icon: GiBlackBelt,
  value: "120+",
  label: "Black Belts Awarded"
}];
const timeline = [{
  year: "2010",
  title: "The Beginning",
  desc: "Founded in a small warehouse with one ring and a relentless vision."
}, {
  year: "2014",
  title: "First Champion",
  desc: "Our first athlete claimed a national amateur title, putting us on the map."
}, {
  year: "2018",
  title: "The Expansion",
  desc: "Moved into our flagship 15,000 sq ft elite training facility."
}, {
  year: "2021",
  title: "Going Pro",
  desc: "Launched the Final Round Fight Team, developing professional competitors."
}, {
  year: "2025",
  title: "A Legacy",
  desc: "2,500+ members trained and 48 titles won — and we're just getting started."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Our Story", title: "Forged In The Fire Of Competition", subtitle: "Final Round Fight Club was born from a simple belief: anyone can become extraordinary with the right coaching, culture and commitment.", image: aboutFacility }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsx("img", { src: gallery1, alt: "Athletes training together", loading: "lazy", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "Est. 2010", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "More Than A Gym.",
          /* @__PURE__ */ jsx("br", {}),
          "A Way Of Life."
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: "What started as a single ring in a downtown warehouse has grown into the city's premier combat sports academy. But our mission has never changed: to forge warriors, in and out of the ring." }),
          /* @__PURE__ */ jsx("p", { children: "We've trained complete beginners into confident competitors, and weekend warriors into national medalists. Every member matters. Every round counts. Every champion was once a beginner who refused to quit." }),
          /* @__PURE__ */ jsx("p", { children: "This is Final Round Fight Club — where the only opponent that matters is the person you were yesterday." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-charcoal py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "rounded-lg border border-border bg-card p-10", children: [
        /* @__PURE__ */ jsx(FiTarget, { className: "text-4xl text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-3xl uppercase tracking-tight text-foreground", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: "To empower every individual — regardless of age, background or experience — to discover their inner warrior through world-class martial arts instruction, an unbreakable community, and a culture of relentless self-improvement." })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.15, className: "rounded-lg border border-border bg-card p-10", children: [
        /* @__PURE__ */ jsx(FiEye, { className: "text-4xl text-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-3xl uppercase tracking-tight text-foreground", children: "Our Vision" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: "To be recognized as the most respected combat sports academy in the nation — a place where champions are forged, character is built, and lives are transformed, one round at a time." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "What We Stand For", title: /* @__PURE__ */ jsx(Fragment, { children: "Our Core Values" }) }),
      /* @__PURE__ */ jsx(Stagger, { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: values.map((v) => /* @__PURE__ */ jsxs(StaggerItem, { className: "rounded-lg border border-border bg-card p-7 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-14 w-14 place-items-center rounded-sm border border-primary/30 bg-primary/10", children: /* @__PURE__ */ jsx(v.icon, { className: "text-2xl text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-heading text-base font-bold uppercase tracking-wide text-foreground", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: v.desc })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-charcoal py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "The Arena", title: /* @__PURE__ */ jsx(Fragment, { children: "A World-Class Facility" }) }),
        /* @__PURE__ */ jsx(Stagger, { className: "mt-8 grid gap-3 sm:grid-cols-2", children: facility.map((f) => /* @__PURE__ */ jsxs(StaggerItem, { className: "flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/90", children: f })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.15, className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsx("img", { src: aboutFacility, alt: "Inside the facility", loading: "lazy", className: "h-full w-full object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "The Receipts", title: /* @__PURE__ */ jsx(Fragment, { children: "Awards & Achievements" }) }),
      /* @__PURE__ */ jsx(Stagger, { className: "mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4", children: awards.map((a) => /* @__PURE__ */ jsxs(StaggerItem, { className: "rounded-lg border border-border bg-card p-8 text-center", children: [
        /* @__PURE__ */ jsx(a.icon, { className: "mx-auto text-4xl text-primary" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-5xl text-gradient-gold", children: a.value }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: a.label })
      ] }, a.label)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-charcoal py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "The Journey", title: /* @__PURE__ */ jsx(Fragment, { children: "Our Legacy In Time" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-14 pl-8 sm:pl-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 h-full w-px bg-border sm:left-1/2" }),
        /* @__PURE__ */ jsx(Stagger, { className: "space-y-10", children: timeline.map((t, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: `relative sm:flex sm:items-center sm:gap-8 ${i % 2 === 0 ? "" : "sm:flex-row-reverse"}`, children: [
          /* @__PURE__ */ jsx("span", { className: "absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2" }),
          /* @__PURE__ */ jsx("div", { className: "sm:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: `rounded-lg border border-border bg-card p-6 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`, children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary", children: t.year }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1 font-heading text-base font-bold uppercase tracking-wide text-foreground", children: t.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t.desc })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden sm:block sm:w-1/2" })
        ] }) }, t.year)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  AboutPage as component
};
