import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiBoxingGlove } from "react-icons/gi";

import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
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

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent py-5",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <GiBoxingGlove className="text-2xl text-primary" />
            <span className="font-display text-lg uppercase leading-none tracking-tight text-foreground">
              Final Round
              <span className="block font-heading text-[0.6rem] font-semibold tracking-[0.42em] text-primary">
                FIGHT CLUB
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative px-3.5 py-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "!text-foreground" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-sm bg-primary px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:scale-105"
            >
              Join Now
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-2xl text-foreground lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col bg-background/98 px-6 pt-24 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="block border-b border-border py-4 font-display text-3xl uppercase tracking-tight text-foreground"
                    activeProps={{ className: "!text-primary" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-4 font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground"
            >
              Join Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}