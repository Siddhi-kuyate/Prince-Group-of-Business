import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroSlides } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index]!;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-ink"
    >
      {/* Hero Background Image */}
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
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 7, ease: "linear" },
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

      {/* Hero Content */}
      <div className="section-shell relative flex min-h-[100svh] flex-col justify-center pt-28 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            {/* Kicker */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
              {slide.kicker}
            </span>

            {/* Title */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {slide.subtitle}
            </p>

            {/* Hero Button */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={slide.buttonHref}
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--gradient-primary)",
                }}
              >
                {slide.buttonText}

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="section-shell flex justify-center">
          <div className="flex items-center gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-10 bg-white"
                    : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}