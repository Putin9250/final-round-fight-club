import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiPlus, FiArrowRight, FiArrowDown, FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { GiBoxingGlove, GiPunchBlast, GiBlackBelt, GiTrophyCup } from "react-icons/gi";
import { d as testimonials, e as faqs, h as heroFighter, i as stats, j as gallery2, f as fightingStyles, a as trainers, k as galleryImages } from "./router-_vwHl8xn.js";
import { P as Particles, T as TextReveal, M as MagneticButton, R as Reveal, C as Counter, a as SectionHeading, S as Stagger, b as StaggerItem } from "./animated-DsA-r4ln.js";
import { b as btnPrimary, a as btnOutline, C as CTASection } from "./CTASection-Bt90ssJc.js";
import { S as StyleCard } from "./StyleCard-CbQuAZri.js";
import { T as TrainerCard } from "./TrainerCard-DjYSPDMf.js";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "@tanstack/react-query";
import "clsx";
import "tailwind-merge";
import "sonner";
function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const go = (next) => {
    setDir(next > index || index === testimonials.length - 1 && next === 0 ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const t2 = setInterval(() => go(index + 1), 6e3);
    return () => clearInterval(t2);
  }, [index]);
  const t = testimonials[index];
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsx(FaQuoteRight, { className: "mx-auto mb-8 text-5xl text-primary/30" }),
    /* @__PURE__ */ jsx("div", { className: "relative min-h-[16rem] overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", custom: dir, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        custom: dir,
        initial: { opacity: 0, x: dir * 60 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: dir * -60 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex justify-center gap-1", children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsx(FaStar, { className: "text-primary" }, i)) }),
          /* @__PURE__ */ jsxs("p", { className: "font-heading text-xl font-light leading-relaxed text-foreground sm:text-2xl", children: [
            "“",
            t.quote,
            "”"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-7 font-display text-lg uppercase tracking-tight text-primary", children: t.name }),
          /* @__PURE__ */ jsx("p", { className: "font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: t.role })
        ]
      },
      index
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => go(index - 1),
          "aria-label": "Previous",
          className: "grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground transition-all hover:border-primary hover:text-primary",
          children: /* @__PURE__ */ jsx(FiChevronLeft, {})
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: testimonials.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => go(i),
          "aria-label": `Go to testimonial ${i + 1}`,
          className: `h-1.5 rounded-full transition-all ${i === index ? "w-7 bg-primary" : "w-1.5 bg-border"}`
        },
        i
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => go(index + 1),
          "aria-label": "Next",
          className: "grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground transition-all hover:border-primary hover:text-primary",
          children: /* @__PURE__ */ jsx(FiChevronRight, {})
        }
      )
    ] })
  ] });
}
function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl divide-y divide-border border-y border-border", children: faqs.map((faq, i) => {
    const active = open === i;
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setOpen(active ? null : i),
          className: "flex w-full items-center justify-between gap-4 py-6 text-left",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-heading text-base font-semibold uppercase tracking-wide text-foreground sm:text-lg", children: faq.q }),
            /* @__PURE__ */ jsx(
              motion.span,
              {
                animate: { rotate: active ? 135 : 0 },
                transition: { duration: 0.3 },
                className: "grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-border text-primary",
                children: /* @__PURE__ */ jsx(FiPlus, {})
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: active && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          className: "overflow-hidden",
          children: /* @__PURE__ */ jsx("p", { className: "pb-6 pr-12 text-sm leading-relaxed text-muted-foreground", children: faq.a })
        }
      ) })
    ] }, faq.q);
  }) });
}
function useGsapParallax(intensity = 18) {
  const ref = useRef(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      el,
      { yPercent: -intensity },
      {
        yPercent: intensity,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [intensity]);
  return ref;
}
const disciplines = ["MMA", "Boxing", "Muay Thai", "BJJ", "Kickboxing", "Wrestling", "Karate", "Taekwondo", "Wushu", "Self Defense"];
const whyItems = [{
  icon: GiPunchBlast,
  title: "Elite Coaching",
  desc: "Learn from champions and certified pros with decades of real fight experience."
}, {
  icon: GiBlackBelt,
  title: "10 Disciplines",
  desc: "From striking to grappling, master every range under one roof."
}, {
  icon: GiTrophyCup,
  title: "Championship Culture",
  desc: "A proven system that has forged national medalists and pro fighters."
}, {
  icon: GiBoxingGlove,
  title: "All Levels Welcome",
  desc: "Beginner-friendly programs that meet you exactly where you are."
}];
const events = [{
  date: "JUL 12",
  title: "Amateur Fight Night",
  tag: "Competition"
}, {
  date: "JUL 26",
  title: "Free Community Boxing Day",
  tag: "Open House"
}, {
  date: "AUG 09",
  title: "BJJ Open Mat Seminar",
  tag: "Seminar"
}];
function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overviewImg = useGsapParallax(14);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative flex min-h-[100svh] items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(motion.img, { src: heroFighter, alt: "Fighter wrapping his hands before training", style: {
        y: bgY,
        scale: bgScale
      }, className: "absolute inset-0 h-full w-full object-cover object-center" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" }),
      /* @__PURE__ */ jsx(Particles, { count: 24 }),
      /* @__PURE__ */ jsxs(motion.div, { style: {
        y: contentY,
        opacity: contentOpacity
      }, className: "relative mx-auto w-full max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxs(motion.span, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2
        }, className: "inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.35em] text-primary", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }),
          " Elite Combat Academy · Est. 2010"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 max-w-4xl font-display text-[3.2rem] uppercase leading-[0.88] tracking-tight text-foreground sm:text-7xl md:text-[6rem]", children: [
          /* @__PURE__ */ jsx(TextReveal, { text: "Train Like A Warrior.", delay: 0.3 }),
          /* @__PURE__ */ jsx("span", { className: "mt-1 block text-gradient-gold", children: /* @__PURE__ */ jsx(TextReveal, { text: "Fight Like A Champion.", delay: 0.6 }) })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1
        }, className: "mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Step into the most disciplined combat sports academy in the city. Ten world-class disciplines. Coaches who've been there. A culture built to forge champions." }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.2
        }, className: "mt-10 flex flex-col gap-4 sm:flex-row", children: [
          /* @__PURE__ */ jsxs(MagneticButton, { onClick: () => navigate({
            to: "/contact"
          }), className: btnPrimary, children: [
            "Join Now ",
            /* @__PURE__ */ jsx(FiArrowRight, { className: "transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsx(MagneticButton, { onClick: () => navigate({
            to: "/contact"
          }), className: btnOutline, children: "Book Free Trial" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 1.6
      }, className: "absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex", children: [
        /* @__PURE__ */ jsx("span", { className: "font-heading text-[0.6rem] uppercase tracking-[0.3em]", children: "Scroll" }),
        /* @__PURE__ */ jsx(motion.span, { animate: {
          y: [0, 8, 0]
        }, transition: {
          repeat: Infinity,
          duration: 1.6
        }, children: /* @__PURE__ */ jsx(FiArrowDown, { className: "text-primary" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-y border-border bg-charcoal py-5", children: /* @__PURE__ */ jsxs("div", { className: "flex overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "flex shrink-0 animate-marquee items-center gap-8 pr-8", children: [...disciplines, ...disciplines].map((d, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-8 font-display text-2xl uppercase tracking-tight text-foreground/30", children: [
        d,
        " ",
        /* @__PURE__ */ jsx(GiBoxingGlove, { className: "text-primary/60" })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "flex shrink-0 animate-marquee items-center gap-8 pr-8", "aria-hidden": true, children: [...disciplines, ...disciplines].map((d, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-8 font-display text-2xl uppercase tracking-tight text-foreground/30", children: [
        d,
        " ",
        /* @__PURE__ */ jsx(GiBoxingGlove, { className: "text-primary/60" })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-background py-16", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-5xl text-gradient-gold sm:text-6xl", children: /* @__PURE__ */ jsx(Counter, { value: s.value, suffix: s.suffix }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative h-[34rem] overflow-hidden rounded-lg border border-border", children: [
        /* @__PURE__ */ jsx("img", { ref: overviewImg, src: gallery2, alt: "Champion raising a title belt", loading: "lazy", className: "absolute inset-0 h-[130%] w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" }),
        /* @__PURE__ */ jsx(Reveal, { className: "absolute bottom-6 left-6 right-6", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-lg p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary", children: "48 Titles" }),
          /* @__PURE__ */ jsx("p", { className: "font-heading text-xs uppercase tracking-[0.2em] text-foreground/80", children: "Won by Final Round athletes" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "Why Final Round", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Forged In Discipline,",
          /* @__PURE__ */ jsx("br", {}),
          "Built For Glory"
        ] }), subtitle: "We don't just teach martial arts — we build warriors. Every session is engineered to develop your body, sharpen your mind, and unlock the fighter within. Whether you're chasing a title or your best self, this is where it begins." }),
        /* @__PURE__ */ jsx(Stagger, { className: "mt-10 grid gap-5 sm:grid-cols-2", children: whyItems.map((item) => /* @__PURE__ */ jsxs(StaggerItem, { className: "rounded-lg border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsx(item.icon, { className: "text-3xl text-primary" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-heading text-base font-bold uppercase tracking-wide text-foreground", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: item.desc })
        ] }, item.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-charcoal py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end justify-between gap-6 sm:flex-row", children: [
        /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "Disciplines", title: /* @__PURE__ */ jsx(Fragment, { children: "Featured Fighting Styles" }), subtitle: "Master striking, grappling and everything in between with programs for every level." }),
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs(Link, { to: "/styles", className: btnOutline, children: [
          "View All Styles ",
          /* @__PURE__ */ jsx(FiArrowUpRight, {})
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Stagger, { className: "mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3", children: fightingStyles.slice(0, 6).map((style) => /* @__PURE__ */ jsx(StyleCard, { style }, style.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "The Coaches", title: /* @__PURE__ */ jsx(Fragment, { children: "Trained By Champions" }), subtitle: "Our world-class coaching staff brings decades of championship experience to your corner." }),
      /* @__PURE__ */ jsx(Stagger, { className: "mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4", children: trainers.map((t) => /* @__PURE__ */ jsx(TrainerCard, { trainer: t }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-charcoal py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Membership", title: /* @__PURE__ */ jsx(Fragment, { children: "Choose Your Path" }), subtitle: "Flexible plans built around your goals. No lock-in contracts, cancel anytime." }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Transformation Stories", title: /* @__PURE__ */ jsx(Fragment, { children: "What Our Fighters Say" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14", children: /* @__PURE__ */ jsx(TestimonialSlider, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-charcoal py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col items-end justify-between gap-6 sm:flex-row", children: /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "Inside The Club", title: /* @__PURE__ */ jsx(Fragment, { children: "The Grind In Frames" }) }) }),
      /* @__PURE__ */ jsx(Stagger, { className: "mt-12 grid grid-cols-2 gap-4 md:grid-cols-3", amount: 0.1, children: galleryImages.slice(0, 6).map((img, i) => /* @__PURE__ */ jsxs(StaggerItem, { className: `group relative overflow-hidden rounded-lg border border-border ${i === 0 ? "col-span-2 row-span-2" : ""}`, children: [
        /* @__PURE__ */ jsx("img", { src: img.src, alt: `${img.category} session`, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "What's Next", title: /* @__PURE__ */ jsx(Fragment, { children: "Upcoming Events" }) }),
      /* @__PURE__ */ jsx(Stagger, { className: "mx-auto mt-14 max-w-3xl divide-y divide-border border-y border-border", children: events.map((e) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "group flex items-center gap-5 py-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid h-16 w-16 shrink-0 place-items-center rounded-sm border border-border bg-card text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-sm leading-none text-primary", children: e.date.split(" ")[0] }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg leading-none text-foreground", children: e.date.split(" ")[1] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-heading text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary", children: e.tag }),
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-lg font-bold uppercase tracking-wide text-foreground", children: e.title })
        ] }),
        /* @__PURE__ */ jsx(FiCalendar, { className: "text-xl text-muted-foreground transition-colors group-hover:text-primary" })
      ] }) }, e.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-charcoal py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Got Questions", title: /* @__PURE__ */ jsx(Fragment, { children: "Frequently Asked" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14", children: /* @__PURE__ */ jsx(FAQAccordion, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  HomePage as component
};
