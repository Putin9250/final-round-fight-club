import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FiX, FiAward } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

import type { Trainer } from "@/lib/site-data";
import { itemVariants } from "@/components/animated";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        variants={itemVariants}
        onClick={() => setOpen(true)}
        className="group relative block overflow-hidden rounded-lg border border-border bg-card text-left"
      >
        <div className="relative h-[26rem] overflow-hidden">
          <img
            src={trainer.image}
            alt={trainer.name}
            loading="lazy"
            className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <span className="absolute right-4 top-4 rounded-sm bg-primary px-3 py-1 font-heading text-[0.6rem] font-bold uppercase tracking-[0.15em] text-primary-foreground">
            {trainer.Speciality}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary">
            {trainer.role}
          </p>
          <h3 className="mt-1 font-display text-2xl uppercase leading-none tracking-tight text-foreground">
            {trainer.name}
          </h3>
          <p className="mt-3 inline-flex items-center gap-1.5 font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-foreground/70 transition-colors group-hover:text-primary">
            View Profile +
          </p>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg border border-border bg-card sm:grid-cols-[1fr_1.2fr]"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-sm bg-background/70 text-foreground hover:text-primary"
              >
                <FiX />
              </button>
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-56 w-full object-cover object-top sm:h-full"
              />
              <div className="overflow-y-auto p-7">
                <p className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary">
                  {trainer.role}
                </p>
                <h3 className="mt-1 font-display text-3xl uppercase leading-none tracking-tight text-foreground">
                  {trainer.name}
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4">
                  <Stat label="Experience" value={trainer.experience} />
                  <Stat label="Coaching" value={trainer.specialization} />
                  <Stat label="Focus" value={trainer.specialization.split(" ")[0]} />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{trainer.bio}</p>
                <p className="mt-5 font-heading text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Student Achivments
                </p>
                <ul className="mt-3 space-y-2">
                  {trainer.certifications.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-foreground/85">
                      <FiAward className="shrink-0 text-primary" /> {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  {[FaInstagram, FaXTwitter, FaYoutube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-xl text-primary">{value}</p>
      <p className="font-heading text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}