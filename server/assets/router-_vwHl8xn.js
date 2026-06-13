import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiX, FiMenu, FiMapPin, FiPhone, FiMail, FiArrowUpRight } from "react-icons/fi";
import { GiBoxingGlove } from "react-icons/gi";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";
import { Toaster as Toaster$1 } from "sonner";
const appCss = "/final-round-fight-club/assets/styles-CRPrnCa1.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const styleMma = "/final-round-fight-club/assets/style-mma-BLXOMzBS.jpg";
const styleBoxing = "/final-round-fight-club/assets/style-boxing-CtGOvRQa.jpg";
const styleKickboxing = "/final-round-fight-club/assets/style-kickboxing-BsVIvA6q.jpg";
const styleMuaythai = "/final-round-fight-club/assets/style-muaythai-7z46RBW5.jpg";
const styleWrestling = "/final-round-fight-club/assets/style-wrestling-BXp9r17K.jpg";
const styleBjj = "/final-round-fight-club/assets/style-bjj-qM7MPFPx.jpg";
const styleKarate = "/final-round-fight-club/assets/style-karate-Cmz58AZq.jpg";
const styleTaekwondo = "/final-round-fight-club/assets/style-taekwondo-CcvTxZXw.jpg";
const styleWushu = "/final-round-fight-club/assets/style-wushu-DJoW7N69.jpg";
const styleSelfdefense = "/final-round-fight-club/assets/style-selfdefense-BvQC7Ye-.jpg";
const trainer4 = "/final-round-fight-club/assets/trainer-4-C5xn_wF3.jpg";
const gallery1 = "/final-round-fight-club/assets/gallery-1-CcaLfuNP.jpg";
const gallery2 = "/final-round-fight-club/assets/gallery-2-CrRRPrFC.jpg";
const gallery3 = "/final-round-fight-club/assets/gallery-3-C490FCOd.jpg";
const gallery4 = "/final-round-fight-club/assets/gallery-4-BkSJ4bLp.jpg";
const fightingStyles = [
  {
    slug: "mma",
    name: "MMA",
    tagline: "The Complete Fighter",
    description: "Mixed Martial Arts blends striking, wrestling and submissions into one complete combat system. Forge a fighter's mindset and a complete skillset.",
    image: styleMma,
    level: "All Levels",
    benefits: ["Full-body conditioning", "Striking + grappling", "Fight IQ", "Cage-ready confidence"],
    schedule: "Mon · Wed · Fri — 6:00 PM"
  },
  {
    slug: "boxing",
    name: "Boxing",
    tagline: "The Sweet Science",
    description: "Master footwork, head movement and devastating combinations. Boxing sharpens reflexes, power and ring intelligence.",
    image: styleBoxing,
    level: "Beginner → Pro",
    benefits: ["Hand speed & power", "Elite cardio", "Defensive mastery", "Mental toughness"],
    schedule: "Tue · Thu — 7:00 PM · Sat — 10:00 AM"
  },
  {
    slug: "kickboxing",
    name: "Kickboxing",
    tagline: "Strike With Authority",
    description: "Explosive punch-kick combinations that build power, agility and relentless conditioning for stand-up dominance.",
    image: styleKickboxing,
    level: "All Levels",
    benefits: ["Explosive power", "Flexibility", "Calorie torch", "Striking range"],
    schedule: "Mon · Wed — 8:00 PM"
  },
  {
    slug: "muay-thai",
    name: "Muay Thai",
    tagline: "Art of Eight Limbs",
    description: "The legendary striking art using fists, elbows, knees and shins. Brutal, beautiful and battle-tested.",
    image: styleMuaythai,
    level: "All Levels",
    benefits: ["Elbow & knee strikes", "Clinch control", "Bone conditioning", "Warrior discipline"],
    schedule: "Tue · Thu — 6:00 PM · Sun — 11:00 AM"
  },
  {
    slug: "wrestling",
    name: "Wrestling",
    tagline: "Control The Fight",
    description: "Takedowns, control and relentless pressure. Wrestling is the foundation of dominance on the ground.",
    image: styleWrestling,
    level: "Intermediate",
    benefits: ["Takedown mastery", "Explosive strength", "Top control", "Grit & endurance"],
    schedule: "Mon · Wed — 7:00 PM"
  },
  {
    slug: "bjj",
    name: "Brazilian Jiu-Jitsu",
    tagline: "The Gentle Art",
    description: "Leverage over strength. Submit larger opponents through technique, timing and a relentless ground game.",
    image: styleBjj,
    level: "All Levels",
    benefits: ["Submissions", "Ground control", "Problem solving", "Self-defense"],
    schedule: "Tue · Thu — 8:00 PM · Sat — 12:00 PM"
  },
  {
    slug: "karate",
    name: "Karate",
    tagline: "Discipline & Power",
    description: "Traditional striking refined over centuries. Build precision, focus and an unbreakable spirit.",
    image: styleKarate,
    level: "All Levels · Kids",
    benefits: ["Precision striking", "Discipline", "Focus & respect", "Kata mastery"],
    schedule: "Mon · Wed · Fri — 5:00 PM"
  },
  {
    slug: "taekwondo",
    name: "Taekwondo",
    tagline: "The Way of the Foot & Fist",
    description: "Dynamic, high-flying kicks and lightning speed. Olympic-level athleticism and explosive power.",
    image: styleTaekwondo,
    level: "All Levels · Kids",
    benefits: ["Explosive kicks", "Flexibility", "Speed & agility", "Competition ready"],
    schedule: "Tue · Thu — 5:00 PM · Sat — 9:00 AM"
  },
  {
    slug: "wushu",
    name: "Wushu",
    tagline: "Living Martial Art",
    description: "Fluid, acrobatic and powerful. Wushu combines athletic performance with authentic combat heritage.",
    image: styleWushu,
    level: "Intermediate",
    benefits: ["Acrobatic control", "Weapon forms", "Balance & grace", "Performance power"],
    schedule: "Wed · Fri — 6:30 PM"
  },
  {
    slug: "self-defense",
    name: "Self Defense",
    tagline: "Protect What Matters",
    description: "Real-world, practical defense built for any situation. Awareness, escapes and decisive counters.",
    image: styleSelfdefense,
    level: "Beginner Friendly",
    benefits: ["Situational awareness", "Escapes", "Confidence", "Practical counters"],
    schedule: "Sat — 1:00 PM · Sun — 10:00 AM"
  }
];
const trainers = [
  {
    name: "Raushan",
    role: "BJJ Expert",
    image: trainer4,
    experience: "20+ Years",
    Speciality: "MMA Coach",
    specialization: "MMA",
    certifications: ["Trained Multiple National Champions", "Make Hunderd of Amature Fights", "Helped student to over come from fear"],
    bio: "A multiple-time champions coach, Raushan turns beginners into submission specialists with a patient, technical approach.",
    socials: { twitter: "#", instagram: "#", youtube: "#" }
  }
];
const testimonials = [
  {
    name: "Jordan M.",
    role: "Amateur MMA Fighter",
    quote: "Final Round transformed me from a nervous beginner into a competitor with 3 amateur wins. The coaching is world-class and the energy is unmatched.",
    rating: 5
  },
  {
    name: "Priya S.",
    role: "Boxing Member",
    quote: "I came for fitness and found a family. I've lost 40 lbs, gained real confidence, and finally feel powerful. This place changes lives.",
    rating: 5
  },
  {
    name: "Andre T.",
    role: "BJJ Blue Belt",
    quote: "The technical detail Diego brings is on another level. In one year I earned my blue belt and competed at Pan-Ams. Worth every second.",
    rating: 5
  },
  {
    name: "Mia L.",
    role: "Muay Thai Member",
    quote: "Authentic, intense and incredibly supportive. Somchai pushes you to be your best self every single round. The best gym in the city, period.",
    rating: 5
  }
];
const faqs = [
  {
    q: "Do I need any experience to start?",
    a: "Not at all. The majority of our members start as complete beginners. Our coaches build your foundation from day one in a welcoming, judgment-free environment."
  },
  {
    q: "What should I bring to my first class?",
    a: "Just comfortable workout clothes, a water bottle and a great attitude. We'll provide loaner gloves and gear for your free trial session."
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every new member gets a free trial class plus a personal assessment so we can match you to the right program and goals."
  },
  {
    q: "Do you offer kids and family programs?",
    a: "Absolutely. We run dedicated youth programs in Karate, Taekwondo and BJJ that build discipline, focus and confidence in a safe setting."
  },
  {
    q: "Can I train for competition?",
    a: "Definitely. Our Professional tier and Fight Team give competitors structured camps, sparring, conditioning and cornering at events."
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes. Memberships are flexible — you can freeze or cancel anytime with no long-term lock-in contracts."
  }
];
const galleryImages = [
  { src: gallery1, category: "Training", tall: false },
  { src: styleMuaythai, category: "Training", tall: true },
  { src: gallery2, category: "Competition", tall: true },
  { src: gallery4, category: "Facility", tall: true },
  { src: gallery3, category: "Training", tall: false },
  { src: styleBoxing, category: "Competition", tall: true },
  { src: styleWrestling, category: "Competition", tall: true },
  { src: styleBjj, category: "Training", tall: true },
  { src: styleTaekwondo, category: "Competition", tall: true }
];
const stats = [
  { value: 2500, suffix: "+", label: "Members Trained" },
  { value: 48, suffix: "", label: "Championship Titles" },
  { value: 25, suffix: "+", label: "Expert Coaches" },
  { value: 15, suffix: "yrs", label: "Of Excellence" }
];
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/styles", label: "Styles" },
  { to: "/trainers", label: "Trainers" },
  { to: "/contact", label: "Contact" }
];
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.header,
      {
        initial: { y: -80, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        className: cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "border-b border-border bg-background/85 py-3 backdrop-blur-xl" : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent py-5"
        ),
        children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(GiBoxingGlove, { className: "text-2xl text-primary" }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-lg uppercase leading-none tracking-tight text-foreground", children: [
              "Final Round",
              /* @__PURE__ */ jsx("span", { className: "block font-heading text-[0.6rem] font-semibold tracking-[0.42em] text-primary", children: "FIGHT CLUB" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden items-center gap-1 lg:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: link.to,
              className: "group relative px-3.5 py-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground",
              activeProps: { className: "!text-foreground" },
              activeOptions: { exact: link.to === "/" },
              children: [
                link.label,
                /* @__PURE__ */ jsx("span", { className: "absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" })
              ]
            },
            link.to
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center rounded-sm bg-primary px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:scale-105",
              children: "Join Now"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Toggle menu",
              onClick: () => setOpen((v) => !v),
              className: "text-2xl text-foreground lg:hidden",
              children: open ? /* @__PURE__ */ jsx(FiX, {}) : /* @__PURE__ */ jsx(FiMenu, {})
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-40 flex flex-col bg-background/98 px-6 pt-24 backdrop-blur-xl lg:hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1", children: navLinks.map((link, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.06 * i + 0.1 },
              children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.to,
                  className: "block border-b border-border py-4 font-display text-3xl uppercase tracking-tight text-foreground",
                  activeProps: { className: "!text-primary" },
                  activeOptions: { exact: link.to === "/" },
                  children: link.label
                }
              )
            },
            link.to
          )) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-4 font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground",
              children: "Join Now"
            }
          )
        ]
      }
    ) })
  ] });
}
const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaFacebookF, href: "#", label: "Facebook" }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden border-t border-border bg-charcoal", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 py-16 sm:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(GiBoxingGlove, { className: "text-3xl text-primary" }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-xl uppercase leading-none tracking-tight text-foreground", children: [
              "Final Round",
              /* @__PURE__ */ jsx("span", { className: "block font-heading text-[0.65rem] font-semibold tracking-[0.42em] text-primary", children: "FIGHT CLUB" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground", children: "Where warriors are forged. Elite combat training across ten disciplines, built for champions and beginners alike." }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: socials.map((s) => /* @__PURE__ */ jsx(
            "a",
            {
              href: s.href,
              "aria-label": s.label,
              className: "grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary",
              children: /* @__PURE__ */ jsx(s.icon, {})
            },
            s.label
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground", children: "Explore" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3", children: navLinks.slice(0, 5).map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.to,
              className: "text-sm text-muted-foreground transition-colors hover:text-primary",
              children: link.label
            }
          ) }, link.to)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground", children: "More" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.623284622481!2d77.06209969999999!3d28.6204205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d057eb4d6ec8d%3A0xe3da5041093608da!2sFinal%20Round%20Fight%20Club!5e0!3m2!1sen!2sin!4v1781277881309!5m2!1sen!2sin",
              width: "100%",
              height: "450",
              style: { border: 0 },
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              title: "Final Round Fight Club Location"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground", children: "Visit Us" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(FiMapPin, { className: "mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "G-84, School Rd, near Shoe Market, Vijay Vihar, Milap Nagar, Uttam Nagar, New Delhi, Delhi, 110059" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(FiPhone, { className: "shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+918920364688", className: "hover:text-primary", children: "+91 8920364688" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(FiPhone, { className: "shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+917042454551", className: "hover:text-primary", children: "+91 7042454551" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx(FiMail, { className: "shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:train@finalround.com", className: "hover:text-primary", children: "train@finalround.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-6 inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-[0.15em] text-primary hover:gap-2.5 transition-all",
              children: [
                "Book Free Trial ",
                /* @__PURE__ */ jsx(FiArrowUpRight, {})
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Final Round Fight Club. All rights reserved."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-heading uppercase tracking-[0.2em]", children: "Train Hard · Stay Humble · Fight Smart" })
      ] })
    ] })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Final Round Fight Club — Elite Martial Arts Academy" },
      {
        name: "description",
        content: "Train like a warrior, fight like a champion. Elite MMA, Boxing, Muay Thai, BJJ & more at Final Round Fight Club. Book your free trial today."
      },
      { name: "author", content: "Final Round Fight Club" },
      { property: "og:title", content: "Final Round Fight Club — Elite Martial Arts Academy" },
      {
        property: "og:description",
        content: "World-class combat training across 10 disciplines. Forge your warrior spirit at Final Round Fight Club."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Final Round Fight Club — Elite Martial Arts Academy" },
      { name: "description", content: "Luxe Redesign Studio analyzes and redesigns websites to embody premium luxury e-commerce aesthetics." },
      { property: "og:description", content: "Luxe Redesign Studio analyzes and redesigns websites to embody premium luxury e-commerce aesthetics." },
      { name: "twitter:description", content: "Luxe Redesign Studio analyzes and redesigns websites to embody premium luxury e-commerce aesthetics." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51a0f368-a063-4d10-a377-b3dfbac4ed44/id-preview-676a4c0d--ddc71a34-2078-4a13-8f53-bc1e8593a8f1.lovable.app-1781192653320.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51a0f368-a063-4d10-a377-b3dfbac4ed44/id-preview-676a4c0d--ddc71a34-2078-4a13-8f53-bc1e8593a8f1.lovable.app-1781192653320.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center", richColors: true })
  ] });
}
const trainer1 = "/final-round-fight-club/assets/trainer-1-DZ_PHd3E.jpg";
const $$splitComponentImporter$4 = () => import("./trainers-luhS52KC.js");
const Route$5 = createFileRoute("/trainers")({
  head: () => ({
    meta: [{
      title: "Our Coaches — Champion Trainers | Final Round Fight Club"
    }, {
      name: "description",
      content: "Meet the world-class coaching staff at Final Round Fight Club — champions and certified specialists in MMA, Boxing, Muay Thai and BJJ."
    }, {
      property: "og:title",
      content: "Trained By Champions — Final Round Fight Club"
    }, {
      property: "og:description",
      content: "Meet our elite coaching staff."
    }, {
      property: "og:image",
      content: trainer1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./styles-DUSeaiHD.js");
const Route$4 = createFileRoute("/styles")({
  head: () => ({
    meta: [{
      title: "Fighting Styles — MMA, Boxing, Muay Thai & More | Final Round"
    }, {
      name: "description",
      content: "Explore 10 world-class disciplines at Final Round Fight Club: MMA, Boxing, Kickboxing, Muay Thai, Wrestling, BJJ, Karate, Taekwondo, Wushu and Self Defense."
    }, {
      property: "og:title",
      content: "Fighting Styles — Final Round Fight Club"
    }, {
      property: "og:description",
      content: "Ten disciplines. One academy. Find your fight."
    }, {
      property: "og:image",
      content: styleMma
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const BASE_URL = "";
const Route$3 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/styles", changefreq: "monthly", priority: "0.9" },
          { path: "/trainers", changefreq: "monthly", priority: "0.8" },
          { path: "/membership", changefreq: "monthly", priority: "0.9" },
          { path: "/schedule", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const ctaBanner = "/final-round-fight-club/assets/cta-banner-D_fGyP7f.jpg";
const $$splitComponentImporter$2 = () => import("./contact-DphZqePd.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Free Trial — Final Round Fight Club"
    }, {
      name: "description",
      content: "Book your free trial class at Final Round Fight Club. Reach out about memberships, fighting styles and personal coaching. We reply within 24 hours."
    }, {
      property: "og:title",
      content: "Contact Final Round Fight Club"
    }, {
      property: "og:description",
      content: "Book your free trial today."
    }, {
      property: "og:image",
      content: ctaBanner
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const aboutFacility = "/final-round-fight-club/assets/about-facility-BF7Jx1fg.jpg";
const $$splitComponentImporter$1 = () => import("./about-CHjOhunO.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Final Round Fight Club | Our Story & Mission"
    }, {
      name: "description",
      content: "Discover the story behind Final Round Fight Club — our mission, values, championship culture and world-class facility built to forge warriors."
    }, {
      property: "og:title",
      content: "About Final Round Fight Club"
    }, {
      property: "og:description",
      content: "Our story, mission and championship culture."
    }, {
      property: "og:image",
      content: aboutFacility
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const heroFighter = "/final-round-fight-club/assets/hero-fighter-Bvay8Z1j.jpg";
const $$splitComponentImporter = () => import("./index-D0rU1QLq.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Final Round Fight Club — Train Like A Warrior, Fight Like A Champion"
    }, {
      name: "description",
      content: "Elite martial arts academy offering MMA, Boxing, Muay Thai, BJJ, Wrestling and more. World-class coaches, championship culture. Book your free trial today."
    }, {
      property: "og:title",
      content: "Final Round Fight Club — Elite Martial Arts Academy"
    }, {
      property: "og:description",
      content: "Train like a warrior. Fight like a champion. 10 disciplines, world-class coaches."
    }, {
      property: "og:image",
      content: heroFighter
    }, {
      name: "twitter:image",
      content: heroFighter
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TrainersRoute = Route$5.update({
  id: "/trainers",
  path: "/trainers",
  getParentRoute: () => Route$6
});
const StylesRoute = Route$4.update({
  id: "/styles",
  path: "/styles",
  getParentRoute: () => Route$6
});
const SitemapDotxmlRoute = Route$3.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  SitemapDotxmlRoute,
  StylesRoute,
  TrainersRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  trainers as a,
  aboutFacility as b,
  ctaBanner as c,
  testimonials as d,
  faqs as e,
  fightingStyles as f,
  gallery1 as g,
  heroFighter as h,
  stats as i,
  gallery2 as j,
  galleryImages as k,
  cn as l,
  router as r,
  styleMma as s,
  trainer1 as t
};
