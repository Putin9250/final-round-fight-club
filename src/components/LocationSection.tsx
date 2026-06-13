import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

import { Reveal } from "@/components/animated";

const info = [
  { icon: FiMapPin, label: "Address", value: "G-84, School Rd, near Shoe Market,Milap Nagar, Uttam Nagar, New Delhi, 110059" },
  { icon: FiPhone, label: "Phone", value: "8920364688" },
  { icon: FiClock, label: "Hours", value: "Mon–Fri: 6AM – 10PM " },
];

export function LocationSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {info.map((item) => (
          <div key={item.label} className="rounded-lg border border-border bg-card p-6">
            <item.icon className="text-2xl text-primary" />
            <p className="mt-4 font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{item.value}</p>
          </div>
        ))}
      </Reveal>
      <Reveal delay={0.15} className="overflow-hidden rounded-lg border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.623284622481!2d77.06209969999999!3d28.6204205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d057eb4d6ec8d%3A0xe3da5041093608da!2sFinal%20Round%20Fight%20Club!5e0!3m2!1sen!2sin!4v1781277881309!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}  
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Final Round Fight Club Location"
        />
      </Reveal>
    </div>
  );
}