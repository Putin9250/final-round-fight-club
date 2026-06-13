import { createFileRoute } from "@tanstack/react-router";

import ctaBanner from "@/assets/cta-banner.jpg";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { LocationSection } from "@/components/LocationSection";
import { Reveal, SectionHeading } from "@/components/animated";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Trial — Final Round Fight Club" },
      {
        name: "description",
        content:
          "Book your free trial class at Final Round Fight Club. Reach out about memberships, fighting styles and personal coaching. We reply within 24 hours.",
      },
      { property: "og:title", content: "Contact Final Round Fight Club" },
      { property: "og:description", content: "Book your free trial today." },
      { property: "og:image", content: ctaBanner },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Start Your Journey"
        subtitle="Ready to train? Book your free trial or send us a message — our team responds within 24 hours."
        image={ctaBanner}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Send A Message"
                title={<>Let's Talk Training</>}
                subtitle="Tell us your goals and the style you're curious about. We'll match you with the right program."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <SectionHeading align="left" eyebrow="Visit The Arena" title={<>Find Us</>} />
              <div className="mt-10">
                <LocationSection />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}