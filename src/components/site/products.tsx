import { motion } from "motion/react";
import { ArrowUpRight, Eye } from "lucide-react";
import { industries, products } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Our Products"
          title="Industrial Processing Equipment Built for Performance"
          subtitle="Explore our range of precision-engineered equipment designed for reliable, efficient and hygienic industrial processing."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.06,
                ease: "easeOut",
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} — industrial processing equipment by Prince Group of Business`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <a
                  href="#contact"
                  className="absolute inset-x-4 bottom-4 inline-flex translate-y-3 items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-sm font-semibold text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Eye className="h-4 w-4" />
                  Quick View
                </a>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-foreground">
                  {product.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.text}
                </p>

                <div className="mt-5 flex gap-2">
                  <a
                    href="#contact"
                    className="flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    View Details
                  </a>

                  <a
                    href="#contact"
                    className="flex-1 rounded-full py-2 text-center text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="bg-background py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Industries We Serve"
          title="Process expertise across seven demanding sectors"
          subtitle="Different products, different regulations — the same commitment to hygienic, efficient and reliable plants."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <motion.a
              key={industry.name}
              href="#contact"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.06,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <img
                src={industry.image}
                alt={`${industry.name} industry processing solutions`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-white">
                    {industry.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/75">
                    {industry.text}
                  </p>
                </div>

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}