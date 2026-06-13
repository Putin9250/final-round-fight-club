import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FiArrowRight, FiArrowDown, FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { GiBoxingGlove, GiPunchBlast, GiTrophyCup, GiBlackBelt } from "react-icons/gi";

import heroFighter from "@/assets/hero-fighter.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import {
  Counter,
  MagneticButton,
  Particles,
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  TextReveal,
} from "@/components/animated";
import { CTASection } from "@/components/CTASection";
import { StyleCard } from "@/components/StyleCard";
import { TrainerCard } from "@/components/TrainerCard";
import { MembershipCard } from "@/components/MembershipCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { FAQAccordion } from "@/components/FAQAccordion";
import { btnOutline, btnPrimary } from "@/components/ui-button";
import { useGsapParallax } from "@/hooks/useGsapParallax";
import {
  fightingStyles,
  galleryImages,
  plans,
  stats,
  trainers,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Final Round Fight Club — Train Like A Warrior, Fight Like A Champion" },
      {
        name: "description",
        content:
          "Elite martial arts academy offering MMA, Boxing, Muay Thai, BJJ, Wrestling and more. World-class coaches, championship culture. Book your free trial today.",
      },
      { property: "og:title", content: "Final Round Fight Club — Elite Martial Arts Academy" },
      {
        property: "og:description",
        content: "Train like a warrior. Fight like a champion. 10 disciplines, world-class coaches.",
      },
      { property: "og:image", content: heroFighter },
      { name: "twitter:image", content: heroFighter },
    ],
  }),
  component: HomePage,
});

const disciplines = ["MMA", "Boxing", "Muay Thai", "BJJ", "Kickboxing", "Wrestling", "Karate", "Taekwondo", "Wushu", "Self Defense"];

const whyItems = [
  { icon: GiPunchBlast, title: "Elite Coaching", desc: "Learn from champions and certified pros with decades of real fight experience." },
  { icon: GiBlackBelt, title: "10 Disciplines", desc: "From striking to grappling, master every range under one roof." },
  { icon: GiTrophyCup, title: "Championship Culture", desc: "A proven system that has forged national medalists and pro fighters." },
  { icon: GiBoxingGlove, title: "All Levels Welcome", desc: "Beginner-friendly programs that meet you exactly where you are." },
];

const events = [
  { date: "JUL 12", title: "Amateur Fight Night", tag: "Competition" },
  { date: "JUL 26", title: "Free Community Boxing Day", tag: "Open House" },
  { date: "AUG 09", title: "BJJ Open Mat Seminar", tag: "Seminar" },
];

function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overviewImg = useGsapParallax<HTMLImageElement>(14);

  return (
    <>
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden">
        <motion.img
          src={heroFighter}
          alt="Fighter wrapping his hands before training"
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <Particles count={24} />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative mx-auto w-full max-w-7xl px-5 sm:px-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.35em] text-primary"
          >
            <span className="h-px w-10 bg-primary" /> Elite Combat Academy · Est. 2010
          </motion.span>

          <h1 className="mt-6 max-w-4xl font-display text-[3.2rem] uppercase leading-[0.88] tracking-tight text-foreground sm:text-7xl md:text-[6rem]">
            <TextReveal text="Train Like A Warrior." delay={0.3} />
            <span className="mt-1 block text-gradient-gold">
              <TextReveal text="Fight Like A Champion." delay={0.6} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Step into the most disciplined combat sports academy in the city. Ten world-class
            disciplines. Coaches who've been there. A culture built to forge champions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton onClick={() => navigate({ to: "/contact" })} className={btnPrimary}>
              Join Now <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton onClick={() => navigate({ to: "/contact" })} className={btnOutline}>
              Book Free Trial
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
        >
          <span className="font-heading text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <FiArrowDown className="text-primary" />
          </motion.span>
        </motion.div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="border-y border-border bg-charcoal py-5">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...disciplines, ...disciplines].map((d, i) => (
              <span key={i} className="flex items-center gap-8 font-display text-2xl uppercase tracking-tight text-foreground/30">
                {d} <GiBoxingGlove className="text-primary/60" />
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden>
            {[...disciplines, ...disciplines].map((d, i) => (
              <span key={i} className="flex items-center gap-8 font-display text-2xl uppercase tracking-tight text-foreground/30">
                {d} <GiBoxingGlove className="text-primary/60" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============ STATS ============ */}
      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-5xl text-gradient-gold sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ OVERVIEW / WHY ============ */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative h-[34rem] overflow-hidden rounded-lg border border-border">
            <img
              ref={overviewImg}
              src={gallery2}
              alt="Champion raising a title belt"
              loading="lazy"
              className="absolute inset-0 h-[130%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <Reveal className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-lg p-5">
                <p className="font-display text-3xl text-primary">48 Titles</p>
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-foreground/80">
                  Won by Final Round athletes
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Final Round"
              title={<>Forged In Discipline,<br />Built For Glory</>}
              subtitle="We don't just teach martial arts — we build warriors. Every session is engineered to develop your body, sharpen your mind, and unlock the fighter within. Whether you're chasing a title or your best self, this is where it begins."
            />
            <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
              {whyItems.map((item) => (
                <StaggerItem key={item.title} className="rounded-lg border border-border bg-card p-6">
                  <item.icon className="text-3xl text-primary" />
                  <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-wide text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ FEATURED STYLES ============ */}
      <section className="border-t border-border bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              align="left"
              eyebrow="Disciplines"
              title={<>Featured Fighting Styles</>}
              subtitle="Master striking, grappling and everything in between with programs for every level."
            />
            <Reveal>
              <Link to="/styles" className={btnOutline}>
                View All Styles <FiArrowUpRight />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {fightingStyles.slice(0, 6).map((style) => (
              <StyleCard key={style.slug} style={style} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ TRAINERS ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The Coaches"
            title={<>Trained By Champions</>}
            subtitle="Our world-class coaching staff brings decades of championship experience to your corner."
          />
          <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((t) => (
              <TrainerCard key={t.name} trainer={t} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ MEMBERSHIP ============ */}
      <section className="border-y border-border bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Membership"
            title={<>Choose Your Path</>}
            subtitle="Flexible plans built around your goals. No lock-in contracts, cancel anytime."
          />
          {/* <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <MembershipCard key={p.name} plan={p} />
            ))}
          </Stagger> */}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Transformation Stories" title={<>What Our Fighters Say</>} />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ============ GALLERY PREVIEW ============ */}
      <section className="border-t border-border bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading align="left" eyebrow="Inside The Club" title={<>The Grind In Frames</>} />
          </div>
          <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3" amount={0.1}>
            {galleryImages.slice(0, 6).map((img, i) => (
              <StaggerItem
                key={i}
                className={`group relative overflow-hidden rounded-lg border border-border ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={`${img.category} session`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ EVENTS ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What's Next" title={<>Upcoming Events</>} />
          <Stagger className="mx-auto mt-14 max-w-3xl divide-y divide-border border-y border-border">
            {events.map((e) => (
              <StaggerItem key={e.title}>
                <div className="group flex items-center gap-5 py-6">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-sm border border-border bg-card text-center">
                    <span className="font-display text-sm leading-none text-primary">{e.date.split(" ")[0]}</span>
                    <span className="font-display text-lg leading-none text-foreground">{e.date.split(" ")[1]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-heading text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary">{e.tag}</p>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">{e.title}</h3>
                  </div>
                  <FiCalendar className="text-xl text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="border-t border-border bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Got Questions" title={<>Frequently Asked</>} />
          <div className="mt-14">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTASection />
    </>
  );
}
