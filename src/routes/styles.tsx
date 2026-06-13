import { createFileRoute } from "@tanstack/react-router";

import styleMma from "@/assets/style-mma.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Stagger } from "@/components/animated";
import { StyleCard } from "@/components/StyleCard";
import { fightingStyles } from "@/lib/site-data";

export const Route = createFileRoute("/styles")({
  head: () => ({
    meta: [
      { title: "Fighting Styles — MMA, Boxing, Muay Thai & More | Final Round" },
      {
        name: "description",
        content:
          "Explore 10 world-class disciplines at Final Round Fight Club: MMA, Boxing, Kickboxing, Muay Thai, Wrestling, BJJ, Karate, Taekwondo, Wushu and Self Defense.",
      },
      { property: "og:title", content: "Fighting Styles — Final Round Fight Club" },
      { property: "og:description", content: "Ten disciplines. One academy. Find your fight." },
      { property: "og:image", content: styleMma },
    ],
  }),
  component: StylesPage,
});

function StylesPage() {
  return (
    <>
      <PageHero
        eyebrow="Disciplines"
        title="Find Your Fight"
        subtitle="Ten world-class disciplines, each taught by specialists. Whether you strike, grapple or want to do it all — your style is waiting."
        image={styleMma}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
            {fightingStyles.map((style) => (
              <StyleCard key={style.slug} style={style} />
            ))}
          </Stagger>
        </div>
      </section>
      <CTASection />
    </>
  );
}