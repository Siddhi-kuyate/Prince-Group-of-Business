import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index]!;
  const initials = item.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Customer Testimonials"
          title="Trusted on the plant floor, not just in the brochure"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="glass-card rounded-3xl p-8 shadow-[var(--shadow-card)] sm:p-10"
            >
              <Quote className="h-9 w-9 text-primary/35" />
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground sm:text-xl">
                “{item.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-4">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <figcaption className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.role}, {item.company}
                  </p>
                </figcaption>
                <div className="ml-auto flex shrink-0 gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
