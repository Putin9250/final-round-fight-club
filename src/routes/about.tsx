import { createFileRoute } from "@tanstack/react-router";
import { FiTarget, FiEye, FiShield, FiHeart, FiZap, FiUsers } from "react-icons/fi";
import { GiTrophyCup, GiMedal, GiLaurelsTrophy, GiBlackBelt } from "react-icons/gi";

import aboutFacility from "@/assets/about-facility.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/animated";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Final Round Fight Club | Our Story & Mission" },
      {
        name: "description",
        content:
          "Discover the story behind Final Round Fight Club — our mission, values, championship culture and world-class facility built to forge warriors.",
      },
      { property: "og:title", content: "About Final Round Fight Club" },
      { property: "og:description", content: "Our story, mission and championship culture." },
      { property: "og:image", content: aboutFacility },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: FiShield, title: "Discipline", desc: "Mastery is built one disciplined day at a time. We honor the grind." },
  { icon: FiZap, title: "Fearlessness", desc: "We train courage. Step into discomfort and grow beyond your limits." },
  { icon: FiHeart, title: "Respect", desc: "Every fighter, every belt, every journey is honored on our mats." },
  { icon: FiUsers, title: "Community", desc: "A brotherhood and sisterhood that lifts each other higher." },
];

const facility = [
  "Full-size competition boxing ring",
  "Regulation MMA cage",
  "2,000 sq ft of premium mat space",
  "Olympic-grade strength & conditioning zone",
  "Recovery suite with sauna & ice baths",
  "Pro-grade heavy bag gallery",
];

const awards = [
  { icon: GiTrophyCup, value: "48", label: "Championship Titles" },
  { icon: GiMedal, value: "12", label: "National Medalists" },
  { icon: GiLaurelsTrophy, value: "7", label: "Pro Fighters Developed" },
  { icon: GiBlackBelt, value: "120+", label: "Black Belts Awarded" },
];

const timeline = [
  { year: "2010", title: "The Beginning", desc: "Founded in a small warehouse with one ring and a relentless vision." },
  { year: "2014", title: "First Champion", desc: "Our first athlete claimed a national amateur title, putting us on the map." },
  { year: "2018", title: "The Expansion", desc: "Moved into our flagship 15,000 sq ft elite training facility." },
  { year: "2021", title: "Going Pro", desc: "Launched the Final Round Fight Team, developing professional competitors." },
  { year: "2025", title: "A Legacy", desc: "2,500+ members trained and 48 titles won — and we're just getting started." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Forged In The Fire Of Competition"
        subtitle="Final Round Fight Club was born from a simple belief: anyone can become extraordinary with the right coaching, culture and commitment."
        image={aboutFacility}
      />

      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-lg border border-border">
            <img src={gallery1} alt="Athletes training together" loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Est. 2010"
              title={<>More Than A Gym.<br />A Way Of Life.</>}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                What started as a single ring in a downtown warehouse has grown into the city's premier
                combat sports academy. But our mission has never changed: to forge warriors, in and out
                of the ring.
              </p>
              <p>
                We've trained complete beginners into confident competitors, and weekend warriors into
                national medalists. Every member matters. Every round counts. Every champion was once a
                beginner who refused to quit.
              </p>
              <p>
                This is Final Round Fight Club — where the only opponent that matters is the person you
                were yesterday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="border-y border-border bg-charcoal py-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="rounded-lg border border-border bg-card p-10">
            <FiTarget className="text-4xl text-primary" />
            <h3 className="mt-6 font-display text-3xl uppercase tracking-tight text-foreground">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To empower every individual — regardless of age, background or experience — to discover
              their inner warrior through world-class martial arts instruction, an unbreakable community,
              and a culture of relentless self-improvement.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-lg border border-border bg-card p-10">
            <FiEye className="text-4xl text-primary" />
            <h3 className="mt-6 font-display text-3xl uppercase tracking-tight text-foreground">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To be recognized as the most respected combat sports academy in the nation — a place where
              champions are forged, character is built, and lives are transformed, one round at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What We Stand For" title={<>Our Core Values</>} />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title} className="rounded-lg border border-border bg-card p-7 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-sm border border-primary/30 bg-primary/10">
                  <v.icon className="text-2xl text-primary" />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold uppercase tracking-wide text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FACILITY */}
      <section className="border-y border-border bg-charcoal py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="The Arena" title={<>A World-Class Facility</>} />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {facility.map((f) => (
                <StaggerItem key={f} className="flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-foreground/90">{f}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.15} className="overflow-hidden rounded-lg border border-border">
            <img src={aboutFacility} alt="Inside the facility" loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="The Receipts" title={<>Awards & Achievements</>} />
          <Stagger className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {awards.map((a) => (
              <StaggerItem key={a.label} className="rounded-lg border border-border bg-card p-8 text-center">
                <a.icon className="mx-auto text-4xl text-primary" />
                <p className="mt-4 font-display text-5xl text-gradient-gold">{a.value}</p>
                <p className="mt-1 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{a.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-border bg-charcoal py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="The Journey" title={<>Our Legacy In Time</>} />
          <div className="relative mt-14 pl-8 sm:pl-0">
            <div className="absolute left-0 top-0 h-full w-px bg-border sm:left-1/2" />
            <Stagger className="space-y-10">
              {timeline.map((t, i) => (
                <StaggerItem key={t.year}>
                  <div className={`relative sm:flex sm:items-center sm:gap-8 ${i % 2 === 0 ? "" : "sm:flex-row-reverse"}`}>
                    <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2" />
                    <div className="sm:w-1/2">
                      <div className={`rounded-lg border border-border bg-card p-6 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                        <p className="font-display text-3xl text-primary">{t.year}</p>
                        <h3 className="mt-1 font-heading text-base font-bold uppercase tracking-wide text-foreground">{t.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
