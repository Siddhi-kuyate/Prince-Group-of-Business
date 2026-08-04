import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Cpu,
  CupSoda,
  Factory,
  FlaskConical,
  Headset,
  Leaf,
  LifeBuoy,
  Milk,
  Pill,
  Ruler,
  UtensilsCrossed,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { advantages, solutions } from "@/lib/site";
import { SectionHeading } from "./section-heading";

const icons: Record<string, LucideIcon> = {
  Milk,
  UtensilsCrossed,
  CupSoda,
  Pill,
  FlaskConical,
  Cpu,
  Wrench,
  LifeBuoy,
  Factory,
  Ruler,
  Leaf,
  BadgeCheck,
  Users,
  Headset,
};

export function Solutions() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="How We Can Help You"
          title="Process engineering across every stage of your plant"
          subtitle="From concept and detailed design to fabrication, automation and lifetime service — one accountable partner."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, i) => {
            const Icon = icons[item.icon] ?? Factory;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: "easeOut" }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28" style={{ background: "var(--gradient-ink)" }}>
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.22em] text-primary-glow uppercase">
            Why Prince Group of Business
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Built by engineers who stay accountable after handover
          </h2>
          <p className="mt-4 text-base text-white/70">
            Six reasons manufacturers across dairy, food, pharma and chemical choose us for critical process lines.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = icons[item.icon] ?? BadgeCheck;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
                className="glass-dark rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-primary-glow">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
