import { motion } from "motion/react";
import {
  BadgeCheck,
  Building2,
  CupSoda,
  Factory,
  FlaskConical,
  Headset,
  Leaf,
  Milk,
  Pill,
  Shirt,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from "lucide-react";

import { advantages } from "@/lib/site";
import { SectionHeading } from "./section-heading";

/* =========================================================
   INDUSTRY ICONS
   ========================================================= */

const industryIcons: Record<string, LucideIcon> = {
  Dairy: Milk,
  Food: UtensilsCrossed,
  Beverage: CupSoda,
  Pharmaceutical: Pill,
  Chemical: FlaskConical,
  Textile: Shirt,
  Construction: Building2,
};

/* =========================================================
   WHY CHOOSE ICONS
   ========================================================= */

const icons: Record<string, LucideIcon> = {
  Factory,
  Leaf,
  BadgeCheck,
  Users,
  Headset,
};

/* =========================================================
   SOLUTIONS / INDUSTRIES
   ========================================================= */

const industryItems = [
  {
    name: "Dairy",
    href: "/industries/dairy",
  },
  {
    name: "Food",
    href: "/industries/food",
  },
  {
    name: "Beverage",
    href: "/industries/beverage",
  },
  {
    name: "Pharmaceutical",
    href: "/industries/pharmaceutical",
  },
  {
    name: "Chemical",
    href: "/industries/chemical",
  },
  {
    name: "Textile",
    href: "/industries/textile",
  },
  {
    name: "Construction",
    href: "/industries/construction",
  },
];

/* =========================================================
   SOLUTIONS
   ========================================================= */

export function Solutions() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="How We Can Help You"
          title="Solutions for Every Industry"
          subtitle="Specialized engineering and processing solutions designed for diverse industrial requirements."
        />

        {/* Industry Solution Cards */}
        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {industryItems.map((industry, i) => {
            const Icon = industryIcons[industry.name] ?? Factory;

            return (
              <motion.a
                key={industry.name}
                href={industry.href}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.07,
                  ease: "easeOut",
                }}
                className="group relative mx-auto flex aspect-square w-full max-w-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                {/* Top Hover Line */}
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--gradient-primary)" }}
                />

                {/* Icon */}
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </span>

                {/* Industry Name */}
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {industry.name}
                </h3>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY CHOOSE PRINCE GROUP OF BUSINESS
   ========================================================= */

export function WhyChoose() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "var(--gradient-ink)" }}
    >
      <div className="section-shell">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.22em] text-primary-glow uppercase">
            Why Prince Group of Business
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Built by engineers who stay accountable after handover
          </h2>

          <p className="mt-4 text-base text-white/70">
            Six reasons manufacturers across dairy, food, pharma and chemical
            choose us for critical process lines.
          </p>
        </div>

        {/* Why Choose Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = icons[item.icon] ?? BadgeCheck;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                  ease: "easeOut",
                }}
                className="glass-dark rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-primary-glow">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

