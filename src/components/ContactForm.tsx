import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { useState } from "react";
import { FiSend, FiLoader } from "react-icons/fi";
import { toast } from "sonner";

import { fightingStyles } from "@/lib/site-data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  style: string;
  message: string;
};

const empty: FormState = { name: "", email: "", phone: "", style: "", message: "" };

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Name is required";
  else if (form.name.trim().length > 100) errors.name = "Name is too long";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
  if (form.phone && !/^[\d\s+()-]{7,20}$/.test(form.phone)) errors.phone = "Enter a valid phone";
  if (!form.message.trim()) errors.message = "Tell us a bit about your goals";
  else if (form.message.trim().length > 1000) errors.message = "Message is too long";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);

    // ✅ Correctly prefixed environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: form.name,        // matches {{name}} in template
            email: form.email,      // matches {{email}}
            mobile: form.phone,     // matches {{mobile}} – using phone field as mobile
            message: form.message,  // matches {{message}}
          },
          { publicKey }
        );
      } else {
        throw new Error("EmailJS is not configured. Check your environment variables.");
      }
      toast.success("Message sent! Our team will reach out within 24 hours.");
      setForm(empty);
    } catch (error: any) {
      console.error("EmailJS error:", error);
      const errorMsg = error?.text || "Something went wrong. Please try again or call us directly.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-sm border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            value={form.name}
            onChange={update("name")}
            placeholder="John Warrior"
            className={`${fieldClass} ${errors.name ? "border-accent" : "border-border"}`}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={`${fieldClass} ${errors.email ? "border-accent" : "border-border"}`}
          />
        </Field>
        <Field label="Phone / Mobile" error={errors.phone}>
          <input
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 (310) 555-0199"
            className={`${fieldClass} ${errors.phone ? "border-accent" : "border-border"}`}
          />
        </Field>
        <Field label="Fighting Style Interest">
          <select
            value={form.style}
            onChange={update("style")}
            className={`${fieldClass} border-border`}
          >
            <option value="">Select a style</option>
            {fightingStyles.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" error={errors.message}>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="Tell us about your goals and experience..."
          className={`${fieldClass} resize-none ${errors.message ? "border-accent" : "border-border"}`}
        />
      </Field>
      <motion.button
        type="submit"
        disabled={loading}
        whileTap={{ scale: 0.97 }}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70 sm:w-auto"
      >
        {loading ? (
          <>
            <FiLoader className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <FiSend />
          </>
        )}
      </motion.button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-accent">{error}</span>}
    </label>
  );
}