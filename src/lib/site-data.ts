import styleMma from "@/assets/style-mma.jpg";
import styleBoxing from "@/assets/style-boxing.jpg";
import styleKickboxing from "@/assets/style-kickboxing.jpg";
import styleMuaythai from "@/assets/style-muaythai.jpg";
import styleWrestling from "@/assets/style-wrestling.jpg";
import styleBjj from "@/assets/style-bjj.jpg";
import styleKarate from "@/assets/style-karate.jpg";
import styleTaekwondo from "@/assets/style-taekwondo.jpg";
import styleWushu from "@/assets/style-wushu.jpg";
import styleSelfdefense from "@/assets/style-selfdefense.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export type FightingStyle = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  level: string;
  benefits: string[];
  schedule: string;
};

export const fightingStyles: FightingStyle[] = [
  {
    slug: "mma",
    name: "MMA",
    tagline: "The Complete Fighter",
    description:
      "Mixed Martial Arts blends striking, wrestling and submissions into one complete combat system. Forge a fighter's mindset and a complete skillset.",
    image: styleMma,
    level: "All Levels",
    benefits: ["Full-body conditioning", "Striking + grappling", "Fight IQ", "Cage-ready confidence"],
    schedule: "Mon · Wed · Fri — 6:00 PM",
  },
  {
    slug: "boxing",
    name: "Boxing",
    tagline: "The Sweet Science",
    description:
      "Master footwork, head movement and devastating combinations. Boxing sharpens reflexes, power and ring intelligence.",
    image: styleBoxing,
    level: "Beginner → Pro",
    benefits: ["Hand speed & power", "Elite cardio", "Defensive mastery", "Mental toughness"],
    schedule: "Tue · Thu — 7:00 PM · Sat — 10:00 AM",
  },
  {
    slug: "kickboxing",
    name: "Kickboxing",
    tagline: "Strike With Authority",
    description:
      "Explosive punch-kick combinations that build power, agility and relentless conditioning for stand-up dominance.",
    image: styleKickboxing,
    level: "All Levels",
    benefits: ["Explosive power", "Flexibility", "Calorie torch", "Striking range"],
    schedule: "Mon · Wed — 8:00 PM",
  },
  {
    slug: "muay-thai",
    name: "Muay Thai",
    tagline: "Art of Eight Limbs",
    description:
      "The legendary striking art using fists, elbows, knees and shins. Brutal, beautiful and battle-tested.",
    image: styleMuaythai,
    level: "All Levels",
    benefits: ["Elbow & knee strikes", "Clinch control", "Bone conditioning", "Warrior discipline"],
    schedule: "Tue · Thu — 6:00 PM · Sun — 11:00 AM",
  },
  {
    slug: "wrestling",
    name: "Wrestling",
    tagline: "Control The Fight",
    description:
      "Takedowns, control and relentless pressure. Wrestling is the foundation of dominance on the ground.",
    image: styleWrestling,
    level: "Intermediate",
    benefits: ["Takedown mastery", "Explosive strength", "Top control", "Grit & endurance"],
    schedule: "Mon · Wed — 7:00 PM",
  },
  {
    slug: "bjj",
    name: "Brazilian Jiu-Jitsu",
    tagline: "The Gentle Art",
    description:
      "Leverage over strength. Submit larger opponents through technique, timing and a relentless ground game.",
    image: styleBjj,
    level: "All Levels",
    benefits: ["Submissions", "Ground control", "Problem solving", "Self-defense"],
    schedule: "Tue · Thu — 8:00 PM · Sat — 12:00 PM",
  },
  {
    slug: "karate",
    name: "Karate",
    tagline: "Discipline & Power",
    description:
      "Traditional striking refined over centuries. Build precision, focus and an unbreakable spirit.",
    image: styleKarate,
    level: "All Levels · Kids",
    benefits: ["Precision striking", "Discipline", "Focus & respect", "Kata mastery"],
    schedule: "Mon · Wed · Fri — 5:00 PM",
  },
  {
    slug: "taekwondo",
    name: "Taekwondo",
    tagline: "The Way of the Foot & Fist",
    description:
      "Dynamic, high-flying kicks and lightning speed. Olympic-level athleticism and explosive power.",
    image: styleTaekwondo,
    level: "All Levels · Kids",
    benefits: ["Explosive kicks", "Flexibility", "Speed & agility", "Competition ready"],
    schedule: "Tue · Thu — 5:00 PM · Sat — 9:00 AM",
  },
  {
    slug: "wushu",
    name: "Wushu",
    tagline: "Living Martial Art",
    description:
      "Fluid, acrobatic and powerful. Wushu combines athletic performance with authentic combat heritage.",
    image: styleWushu,
    level: "Intermediate",
    benefits: ["Acrobatic control", "Weapon forms", "Balance & grace", "Performance power"],
    schedule: "Wed · Fri — 6:30 PM",
  },
  {
    slug: "self-defense",
    name: "Self Defense",
    tagline: "Protect What Matters",
    description:
      "Real-world, practical defense built for any situation. Awareness, escapes and decisive counters.",
    image: styleSelfdefense,
    level: "Beginner Friendly",
    benefits: ["Situational awareness", "Escapes", "Confidence", "Practical counters"],
    schedule: "Sat — 1:00 PM · Sun — 10:00 AM",
  },
];

export type Trainer = {
  name: string;
  role: string;
  image: string;
  experience: string;
  Speciality: string;
  specialization: string;
  certifications: string[];
  bio: string;
  socials: { twitter: string; instagram: string; youtube: string };
};

export const trainers: Trainer[] = [
  {
    name: "Raushan",
    role: "BJJ Expert",
    image: trainer4,
    experience: "20+ Years",
    Speciality: "MMA Coach",
    specialization: "MMA",
    certifications: ["Trained Multiple National Champions","Make Hunderd of Amature Fights", "Helped student to over come from fear"],
    bio: "A multiple-time champions coach, Raushan turns beginners into submission specialists with a patient, technical approach.",
    socials: { twitter: "#", instagram: "#", youtube: "#" },
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Beginner",
    price: "$59",
    period: "/mo",
    description: "Step into the ring and build your foundation.",
    features: ["2 classes per week", "Access to fundamentals", "Locker room access", "Free intro assessment"],
    cta: "Start Training",
  },
  {
    name: "Intermediate",
    price: "$99",
    period: "/mo",
    description: "Sharpen your skills across multiple disciplines.",
    features: ["Unlimited group classes", "All fighting styles", "2 open-mat sessions", "Recovery & sauna access", "Fight gear discount"],
    popular: true,
    cta: "Go Unlimited",
  },
  {
    name: "Professional",
    price: "$169",
    period: "/mo",
    description: "Train like a champion with elite-level access.",
    features: ["Everything in Intermediate", "Fight team eligibility", "Strength & conditioning", "Nutrition planning", "Competition cornering"],
    cta: "Join The Elite",
  },
  {
    name: "Personal Coaching",
    price: "$299",
    period: "/mo",
    description: "1-on-1 mastery, tailored to your goals.",
    features: ["8 private sessions/mo", "Personalized game plan", "Video fight analysis", "Priority scheduling", "Direct coach access"],
    cta: "Book Your Coach",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jordan M.",
    role: "Amateur MMA Fighter",
    quote:
      "Final Round transformed me from a nervous beginner into a competitor with 3 amateur wins. The coaching is world-class and the energy is unmatched.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Boxing Member",
    quote:
      "I came for fitness and found a family. I've lost 40 lbs, gained real confidence, and finally feel powerful. This place changes lives.",
    rating: 5,
  },
  {
    name: "Andre T.",
    role: "BJJ Blue Belt",
    quote:
      "The technical detail Diego brings is on another level. In one year I earned my blue belt and competed at Pan-Ams. Worth every second.",
    rating: 5,
  },
  {
    name: "Mia L.",
    role: "Muay Thai Member",
    quote:
      "Authentic, intense and incredibly supportive. Somchai pushes you to be your best self every single round. The best gym in the city, period.",
    rating: 5,
  },
];

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "Do I need any experience to start?",
    a: "Not at all. The majority of our members start as complete beginners. Our coaches build your foundation from day one in a welcoming, judgment-free environment.",
  },
  {
    q: "What should I bring to my first class?",
    a: "Just comfortable workout clothes, a water bottle and a great attitude. We'll provide loaner gloves and gear for your free trial session.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every new member gets a free trial class plus a personal assessment so we can match you to the right program and goals.",
  },
  {
    q: "Do you offer kids and family programs?",
    a: "Absolutely. We run dedicated youth programs in Karate, Taekwondo and BJJ that build discipline, focus and confidence in a safe setting.",
  },
  {
    q: "Can I train for competition?",
    a: "Definitely. Our Professional tier and Fight Team give competitors structured camps, sparring, conditioning and cornering at events.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes. Memberships are flexible — you can freeze or cancel anytime with no long-term lock-in contracts.",
  },
];

export const galleryImages = [
  { src: gallery1, category: "Training", tall: false },
  { src: styleMuaythai, category: "Training", tall: true },
  { src: gallery2, category: "Competition", tall: true },
  { src: gallery4, category: "Facility", tall: true },
  { src: gallery3, category: "Training", tall: false },
  { src: styleBoxing, category: "Competition", tall: true },
  { src: styleWrestling, category: "Competition", tall: true },
  { src: styleBjj, category: "Training", tall: true },
  { src: styleTaekwondo, category: "Competition", tall: true },
];

export const galleryCategories = ["All", "Training", "Competition", "Facility"];

export const stats = [
  { value: 2500, suffix: "+", label: "Members Trained" },
  { value: 48, suffix: "", label: "Championship Titles" },
  { value: 25, suffix: "+", label: "Expert Coaches" },
  { value: 15, suffix: "yrs", label: "Of Excellence" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/styles", label: "Styles" },
  { to: "/trainers", label: "Trainers" },
  { to: "/contact", label: "Contact" },
] as const;