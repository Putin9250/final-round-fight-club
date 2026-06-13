import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { f as fightingStyles, c as ctaBanner } from "./router-_vwHl8xn.js";
import { P as PageHero } from "./PageHero-DKdQm1-1.js";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { useState } from "react";
import { FiLoader, FiSend, FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { toast } from "sonner";
import { R as Reveal, a as SectionHeading } from "./animated-DsA-r4ln.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react-icons/gi";
import "clsx";
import "tailwind-merge";
import "react-icons/fa6";
const empty = { name: "", email: "", phone: "", style: "", message: "" };
function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  else if (form.name.trim().length > 100) errors.name = "Name is too long";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
  if (form.phone && !/^[\d\s+()-]{7,20}$/.test(form.phone)) errors.phone = "Enter a valid phone";
  if (!form.message.trim()) errors.message = "Tell us a bit about your goals";
  else if (form.message.trim().length > 1e3) errors.message = "Message is too long";
  return errors;
}
function ContactForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);
    const serviceId = "service_xj74ggc";
    const templateId = "template_pvfbomn";
    const publicKey = "Ioi-T0lXKdLP_Aczh";
    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: form.name,
            // matches {{name}} in template
            email: form.email,
            // matches {{email}}
            mobile: form.phone,
            // matches {{mobile}} – using phone field as mobile
            message: form.message
            // matches {{message}}
          },
          { publicKey }
        );
      }
      toast.success("Message sent! Our team will reach out within 24 hours.");
      setForm(empty);
    } catch (error) {
      console.error("EmailJS error:", error);
      const errorMsg = error?.text || "Something went wrong. Please try again or call us directly.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  }
  const fieldClass = "w-full rounded-sm border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Field, { label: "Name", error: errors.name, children: /* @__PURE__ */ jsx(
        "input",
        {
          value: form.name,
          onChange: update("name"),
          placeholder: "John Warrior",
          className: `${fieldClass} ${errors.name ? "border-accent" : "border-border"}`
        }
      ) }),
      /* @__PURE__ */ jsx(Field, { label: "Email", error: errors.email, children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          value: form.email,
          onChange: update("email"),
          placeholder: "you@email.com",
          className: `${fieldClass} ${errors.email ? "border-accent" : "border-border"}`
        }
      ) }),
      /* @__PURE__ */ jsx(Field, { label: "Phone / Mobile", error: errors.phone, children: /* @__PURE__ */ jsx(
        "input",
        {
          value: form.phone,
          onChange: update("phone"),
          placeholder: "+1 (310) 555-0199",
          className: `${fieldClass} ${errors.phone ? "border-accent" : "border-border"}`
        }
      ) }),
      /* @__PURE__ */ jsx(Field, { label: "Fighting Style Interest", children: /* @__PURE__ */ jsxs(
        "select",
        {
          value: form.style,
          onChange: update("style"),
          className: `${fieldClass} border-border`,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select a style" }),
            fightingStyles.map((s) => /* @__PURE__ */ jsx("option", { value: s.name, children: s.name }, s.slug))
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Field, { label: "Message", error: errors.message, children: /* @__PURE__ */ jsx(
      "textarea",
      {
        value: form.message,
        onChange: update("message"),
        rows: 5,
        placeholder: "Tell us about your goals and experience...",
        className: `${fieldClass} resize-none ${errors.message ? "border-accent" : "border-border"}`
      }
    ) }),
    /* @__PURE__ */ jsx(
      motion.button,
      {
        type: "submit",
        disabled: loading,
        whileTap: { scale: 0.97 },
        className: "inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70 sm:w-auto",
        children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(FiLoader, { className: "animate-spin" }),
          " Sending..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Send Message ",
          /* @__PURE__ */ jsx(FiSend, {})
        ] })
      }
    )
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "mb-2 block font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    children,
    error && /* @__PURE__ */ jsx("span", { className: "mt-1.5 block text-xs text-accent", children: error })
  ] });
}
const info = [
  { icon: FiMapPin, label: "Address", value: "G-84, School Rd, near Shoe Market,Milap Nagar, Uttam Nagar, New Delhi, 110059" },
  { icon: FiPhone, label: "Phone", value: "8920364688" },
  { icon: FiClock, label: "Hours", value: "Mon–Fri: 6AM – 10PM " }
];
function LocationSection() {
  return /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsx(Reveal, { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: info.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsx(item.icon, { className: "text-2xl text-primary" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: item.label }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-foreground", children: item.value })
    ] }, item.label)) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.15, className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.623284622481!2d77.06209969999999!3d28.6204205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d057eb4d6ec8d%3A0xe3da5041093608da!2sFinal%20Round%20Fight%20Club!5e0!3m2!1sen!2sin!4v1781277881309!5m2!1sen!2sin",
        width: "100%",
        height: "450",
        style: { border: 0 },
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: "Final Round Fight Club Location"
      }
    ) })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Get In Touch", title: "Start Your Journey", subtitle: "Ready to train? Book your free trial or send us a message — our team responds within 24 hours.", image: ctaBanner }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-14 lg:grid-cols-[1.1fr_1fr]", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "Send A Message", title: /* @__PURE__ */ jsx(Fragment, { children: "Let's Talk Training" }), subtitle: "Tell us your goals and the style you're curious about. We'll match you with the right program." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(ContactForm, {}) })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.15, children: [
        /* @__PURE__ */ jsx(SectionHeading, { align: "left", eyebrow: "Visit The Arena", title: /* @__PURE__ */ jsx(Fragment, { children: "Find Us" }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(LocationSection, {}) })
      ] })
    ] }) }) })
  ] });
}
export {
  ContactPage as component
};
