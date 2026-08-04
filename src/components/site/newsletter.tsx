import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { MailCheck } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const emailSchema = z.string().trim().email("Enter a valid email address").max(255);

export function Newsletter() {
  const [consent, setConsent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = new FormData(form).get("email");
    const parsed = emailSchema.safeParse(value);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Enter a valid email address");
      return;
    }
    if (!consent) {
      toast.error("Please confirm you agree to receive product updates.");
      return;
    }

    form.reset();
    setConsent(false);
    toast.success("You're subscribed — welcome to Prince Group of Business updates.");
  };

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12"
          style={{ background: "var(--gradient-primary)" }}
        >
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-primary-foreground">
            <MailCheck className="h-7 w-7" />
          </span>
          <h2 className="mt-6 text-2xl font-bold text-primary-foreground sm:text-3xl">
            Stay Connected with Prince Group of Business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85">
            Product launches, engineering insights and maintenance tips — a few times a year, never spam.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>

          <label className="mx-auto mt-4 flex max-w-lg cursor-pointer items-start justify-center gap-2 text-left text-xs text-primary-foreground/80">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/40"
            />
            I agree to receive product updates and marketing emails from Prince Group of Business.
          </label>
        </motion.div>
      </div>
    </section>
  );
}
