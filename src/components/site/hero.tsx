import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { heroSlides, stats } from "@/lib/site";
import { Counter } from "./counter";

export function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(timer);
  }, [index]);

  const slide = heroSlides[index]!;

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={slide.image}
          alt={slide.alt}
          width={1920}
          height={1088}
          fetchPriority={index === 0 ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 7, ease: "linear" } }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

      <div className="section-shell relative flex min-h-[100svh] flex-col justify-center pt-28 pb-40 sm:pb-44">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/90 uppercase backdrop-blur-md">
              {slide.kicker}
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--gradient-primary)" }}
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <Phone className="h-4 w-4" />
                Explore Products
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-0 bottom-40 left-0 sm:bottom-44">
        <div className="section-shell flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="ml-2 flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="section-shell pb-6">
          <dl className="glass-dark grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-5 py-6 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block font-display text-3xl font-bold text-white sm:text-4xl"
                  />
                  <span className="mt-1 block text-[11px] font-medium tracking-[0.14em] text-white/70 uppercase sm:text-xs">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
