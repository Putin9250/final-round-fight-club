import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { faqs } from "@/lib/site-data";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
      {faqs.map((faq, i) => {
        const active = open === i;
        return (
          <div key={faq.q}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-heading text-base font-semibold uppercase tracking-wide text-foreground sm:text-lg">
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: active ? 135 : 0 }}
                transition={{ duration: 0.3 }}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-border text-primary"
              >
                <FiPlus />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}