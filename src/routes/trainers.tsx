import { createFileRoute } from "@tanstack/react-router";

import trainer1 from "@/assets/trainer-1.jpg";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Stagger } from "@/components/animated";
import { TrainerCard } from "@/components/TrainerCard";
import { trainers } from "@/lib/site-data";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Coaches — Champion Trainers | Final Round Fight Club" },
      {
        name: "description",
        content:
          "Meet the world-class coaching staff at Final Round Fight Club — champions and certified specialists in MMA, Boxing, Muay Thai and BJJ.",
      },
      { property: "og:title", content: "Trained By Champions — Final Round Fight Club" },
      { property: "og:description", content: "Meet our elite coaching staff." },
      { property: "og:image", content: trainer1 },
    ],
  }),
  component: TrainersPage,
});

function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="The Coaches"
        title="Trained By Champions"
        subtitle="Decades of championship experience in your corner. Tap a coach to view their full profile, record and certifications."
        image={trainer1}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((t) => (
              <TrainerCard key={t.name} trainer={t} />
            ))}
          </Stagger>
        </div>
      </section>
      <CTASection />
    </>
  );
}