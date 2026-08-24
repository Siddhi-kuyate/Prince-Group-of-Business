import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { MessageSquareText } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const feedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255),

  feedback: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters")
    .max(1000),
});

export function Newsletter() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const data = Object.fromEntries(
      new FormData(form),
    );

    const parsed = feedbackSchema.safeParse(data);

    if (!parsed.success) {
      toast.error(
        parsed.error.issues[0]?.message ??
          "Please check your information",
      );
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      form.reset();

      toast.success(
        "Thank you for your feedback!",
      );
    }, 700);
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12"
          style={{
            background: "#071B33",
          }}
        >
          {/* Icon */}
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white">
            <MessageSquareText className="h-7 w-7" />
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-center text-2xl font-bold text-white sm:text-3xl">
            Share Your Feedback
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/85">
            Your feedback helps Prince Group of Business improve our
            products, services and customer experience.
          </p>

          {/* Feedback Form */}
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 grid w-full max-w-2xl gap-4"
            noValidate
          >
            {/* Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="feedback-name"
                  className="text-xs font-medium text-white/80"
                >
                  Your Name
                </label>

                <input
                  id="feedback-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="feedback-email"
                  className="text-xs font-medium text-white/80"
                >
                  Email Address
                </label>

                <input
                  id="feedback-email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
              </div>
            </div>

            {/* Feedback */}
            <div>
              <label
                htmlFor="customer-feedback"
                className="text-xs font-medium text-white/80"
              >
                Your Feedback
              </label>

              <textarea
                id="customer-feedback"
                name="feedback"
                rows={5}
                required
                maxLength={1000}
                placeholder="Tell us about your experience..."
                className="mt-2 w-full resize-none rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {submitting
                  ? "Submitting…"
                  : "Submit Feedback"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}