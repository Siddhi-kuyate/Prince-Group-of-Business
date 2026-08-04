import { motion } from "motion/react";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">{kicker}</span>
      <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-muted-foreground">{subtitle}</p> : null}
      <span
        className={`mt-6 block h-[3px] w-16 rounded-full ${align === "center" ? "mx-auto" : ""}`}
        style={{ background: "var(--gradient-primary)" }}
      />
    </motion.div>
  );
}
