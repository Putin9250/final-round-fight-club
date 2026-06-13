import { Link } from "@tanstack/react-router";
import { FiArrowUpRight, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";
import { GiBoxingGlove } from "react-icons/gi";

import { navLinks } from "@/lib/site-data";

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-charcoal">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <GiBoxingGlove className="text-3xl text-primary" />
              <span className="font-display text-xl uppercase leading-none tracking-tight text-foreground">
                Final Round
                <span className="block font-heading text-[0.65rem] font-semibold tracking-[0.42em] text-primary">
                  FIGHT CLUB
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Where warriors are forged. Elite combat training across ten disciplines, built for champions and beginners alike.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground">More</h3>
                            <div className="overflow-hidden rounded-lg border border-border">
                                    <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.623284622481!2d77.06209969999999!3d28.6204205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d057eb4d6ec8d%3A0xe3da5041093608da!2sFinal%20Round%20Fight%20Club!5e0!3m2!1sen!2sin!4v1781277881309!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}  
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Final Round Fight Club Location"
        />
                                  </div>
            
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground">Visit Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-primary" />
                <span>G-84, School Rd, near Shoe Market, Vijay Vihar, Milap Nagar, Uttam Nagar, New Delhi, Delhi, 110059</span>
              </li>
              <li className="flex gap-3">
                <FiPhone className="shrink-0 text-primary" />
                <a href="tel:+918920364688" className="hover:text-primary">+91 8920364688</a>
              </li>
              <li className="flex gap-3">
                <FiPhone className="shrink-0 text-primary" />
                <a href="tel:+917042454551" className="hover:text-primary">+91 7042454551</a>
              </li>
              <li className="flex gap-3">
                <FiMail className="shrink-0 text-primary" />
                <a href="mailto:train@finalround.com" className="hover:text-primary">train@finalround.com</a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-[0.15em] text-primary hover:gap-2.5 transition-all"
            >
              Book Free Trial <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Final Round Fight Club. All rights reserved.</p>
          <p className="font-heading uppercase tracking-[0.2em]">Train Hard · Stay Humble · Fight Smart</p>
        </div>
      </div>
    </footer>
  );
}