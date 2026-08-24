import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import contactBg from "@/assets/contact-bg.jpg";

import {
  company,
  gmailLink,
  socialLinks,
  whatsappLink,
} from "@/lib/site";

import { supabase } from "@/lib/supabase";

/* =========================================================
   ZOD VALIDATION SCHEMA
   ========================================================= */

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100),

  companyName: z
    .string()
    .trim()
    .max(120)
    .optional(),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255),

  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .max(20),

  message: z
    .string()
    .trim()
    .min(
      10,
      "Please tell us a little more about your requirement (at least 10 characters)",
    )
    .max(1000),
});

/* =========================================================
   SOCIAL LINKS
   ========================================================= */

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: socialLinks.instagram,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: socialLinks.linkedin,
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: socialLinks.facebook,
  },
];

/* =========================================================
   GOOGLE MAPS EMBED
   Stable embed using the maps/embed API with a place query.
   No API key required for this embed format.
   ========================================================= */

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  company.address,
)}&output=embed&hl=en&z=16`;

/* =========================================================
   CONTACT COMPONENT
   ========================================================= */

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (submitting) return; // prevent duplicate submissions

    const form = event.currentTarget;

    const data = Object.fromEntries(
      new FormData(form),
    );

    // ── 1. Client-side validation ──────────────────────────
    const parsed = enquirySchema.safeParse(data);

    if (!parsed.success) {
      toast.error(
        parsed.error.issues[0]?.message ??
          "Please check the form and try again.",
      );
      return;
    }

    setSubmitting(true);

    try {
      // ── 2. Save enquiry to Supabase ────────────────────────
      const { error: enquiryError } = await supabase
        .from("customer_enquiries")
        .insert({
          name: parsed.data.name,
          company_name:
            parsed.data.companyName ?? null,
          email: parsed.data.email,
          phone: parsed.data.phone,
          message: parsed.data.message,
          status: "new",
        });

      if (enquiryError) {
        console.error(
          "Supabase enquiry error:",
          enquiryError,
        );
        toast.error(
          "Sorry, we couldn't submit your enquiry. Please try again or contact us on WhatsApp.",
        );
        return;
      }

      // ── 3. Trigger Edge Function email notification ────────
      const { error: emailError } =
        await supabase.functions.invoke(
          "send-enquiry-email",
          {
            body: {
              name: parsed.data.name,
              companyName:
                parsed.data.companyName ?? "",
              email: parsed.data.email,
              phone: parsed.data.phone,
              message: parsed.data.message,
            },
          },
        );

      // ── 4. Email failed but enquiry was saved — still OK ──
      if (emailError) {
        console.error(
          "Email notification error:",
          emailError,
        );
        // Enquiry is saved; show success and reset
        form.reset();
        toast.success(
          "Your enquiry has been submitted. Our team will contact you soon.",
        );
        return;
      }

      // ── 5. Full success ────────────────────────────────────
      form.reset();
      toast.success(
        "Thank you! Your enquiry has been submitted successfully. We will contact you within one business day.",
      );
    } catch (error) {
      console.error(
        "Unexpected enquiry submission error:",
        error,
      );
      toast.error(
        "Sorry, we couldn't submit your enquiry. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* ================= BACKGROUND ================= */}

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

      {/* ================= CONTENT ================= */}

      <div className="section-shell relative">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-xs font-semibold tracking-[0.22em] text-primary-glow uppercase">
            Contact Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Talk to Prince Group of Business
          </h2>

          <p className="mt-4 text-base text-white/70">
            Share your process requirement and our
            engineers will revert with a technical
            proposal.
          </p>

        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ================= ENQUIRY FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 26,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            className="glass-dark rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white">
              Request a Quote
            </h3>

            <form
              onSubmit={onSubmit}
              className="mt-6 grid gap-4 sm:grid-cols-2"
              noValidate
            >

              {/* NAME */}

              <Field
                label="Full Name"
                name="name"
                placeholder="Your name"
                required
              />

              {/* COMPANY */}

              <Field
                label="Company"
                name="companyName"
                placeholder="Company name (optional)"
              />

              {/* EMAIL */}

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />

              {/* PHONE */}

              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+91 82376 05344"
                required
              />

              {/* MESSAGE */}

              <div className="sm:col-span-2">

                <label
                  htmlFor="enquiry-message"
                  className="text-xs font-medium tracking-wide text-white/70"
                >
                  Message <span aria-hidden="true" className="text-primary-glow">*</span>
                </label>

                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  required
                  maxLength={1000}
                  placeholder="Tell us about your product, capacity and timeline"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 focus:border-primary-glow focus:outline-none"
                />

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
                style={{
                  background:
                    "var(--gradient-primary)",
                }}
              >

                <Send className="h-4 w-4" />

                {submitting
                  ? "Sending…"
                  : "Send Enquiry"}

              </button>

            </form>
          </motion.div>

          {/* ================= CONTACT INFORMATION ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 26,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col gap-6"
          >

            <address className="glass-dark grid gap-5 rounded-3xl p-6 not-italic sm:p-8">

              {/* ADDRESS */}

              <InfoRow
                icon={MapPin}
                title="Head Office & Works"
              >
                B-304, 3rd Floor, Jai Ganesh Vardhasht Society,
                Gandhi Nagar Road, Pimpri,
                Pune, Maharashtra, India
              </InfoRow>

              {/* PHONE */}

              <InfoRow
                icon={Phone}
                title="Phone"
              >
                <a
                  href={company.phoneHref}
                  className="transition-colors hover:text-primary-glow"
                >
                  {company.phone}
                </a>
              </InfoRow>

              {/* EMAIL */}

              <InfoRow
                icon={Mail}
                title="Email"
              >
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-primary-glow"
                >
                  {company.email}
                </a>
              </InfoRow>

              {/* BUSINESS HOURS */}

              <InfoRow
                icon={Clock}
                title="Business Hours"
              >
                {company.hours}
              </InfoRow>

              {/* ================= WHATSAPP + EMAIL ================= */}

              <div className="flex flex-wrap gap-3">

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Prince Group of Business on WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>

                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send email to Prince Group of Business via Gmail"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>

              </div>

              {/* ================= SOCIAL MEDIA ================= */}

              <div>

                <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-white/55 uppercase">
                  Social Media
                </p>

                <div className="flex gap-2">

                  {socials.map(
                    ({
                      icon: Icon,
                      label,
                      href,
                    }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Prince Group of Business on ${label}`}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-primary-glow"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ),
                  )}

                </div>

              </div>

            </address>

            {/* ================= GOOGLE MAP ================= */}

            <div className="overflow-hidden rounded-3xl border border-white/15">

              <iframe
                title="Prince Group of Business — B-304, 3rd Floor, Jai Ganesh Vardhasht Society, Gandhi Nagar Road, Pimpri, Pune"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
                allowFullScreen
              />

              {/* Open in Google Maps button */}
              <div className="flex items-center justify-center bg-white/5 px-4 py-3">
                <a
                  href={company.mapDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Prince Group of Business location in Google Maps"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow transition-colors hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   FORM FIELD
   ========================================================= */

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

      <label
        htmlFor={`enquiry-${name}`}
        className="text-xs font-medium tracking-wide text-white/70"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-primary-glow"> *</span>
        )}
      </label>

      <input
        id={`enquiry-${name}`}
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

/* =========================================================
   INFORMATION ROW
   ========================================================= */

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

        <p className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase">
          {title}
        </p>

        <p className="mt-1 text-sm leading-relaxed text-white/85">
          {children}
        </p>

      </div>

    </div>
  );
}