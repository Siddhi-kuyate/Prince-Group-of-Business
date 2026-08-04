import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import contactBg from "@/assets/contact-bg.jpg";
import { company, gmailLink, whatsappLink } from "@/lib/site";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  companyName: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(20),
  message: z.string().trim().min(10, "Tell us a little more about your requirement").max(1000),
});

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: Twitter, label: "X", href: "https://x.com" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = enquirySchema.safeParse(data);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you — our engineering team will contact you within one business day.");
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <img
        src={contactBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.22em] text-primary-glow uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Talk to Prince Group of Business
          </h2>
          <p className="mt-4 text-base text-white/70">
            Share your process requirement and our engineers will revert with a technical proposal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="glass-dark rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white">Request a Quote</h3>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2" noValidate>
              <Field label="Full Name" name="name" placeholder="Your name" required />
              <Field label="Company" name="companyName" placeholder="Company name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" required />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs font-medium tracking-wide text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  maxLength={1000}
                  placeholder="Tell us about your product, capacity and timeline"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-primary-glow focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:col-span-2"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending…" : "Send Enquiry"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <address className="glass-dark grid gap-5 rounded-3xl p-6 not-italic sm:p-8">
              <InfoRow icon={MapPin} title="Head Office & Works">
                {company.address}
              </InfoRow>
              <InfoRow icon={Phone} title="Phone">
                <a href={company.phoneHref} className="hover:text-primary-glow">
                  {company.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} title="Email">
                <a href={`mailto:${company.email}`} className="hover:text-primary-glow">
                  {company.email}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} title="Business Hours">
                {company.hours}
              </InfoRow>

              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" /> Gmail
                </a>
              </div>

              <div className="flex gap-2">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/15"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </address>

            <div className="overflow-hidden rounded-3xl border border-white/15">
              <iframe
                title="Prince Group of Business location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium tracking-wide text-white/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-primary-glow focus:outline-none"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-primary-glow">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/85">{children}</p>
      </div>
    </div>
  );
}
