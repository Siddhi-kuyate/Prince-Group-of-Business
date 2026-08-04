import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import { navLinks } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-shell flex h-[72px] items-center justify-between gap-4">
        <a href="#home" className="flex min-w-0 items-center" aria-label="Prince Group of Business home">
          <img
            src={logo}
            alt="Prince Group of Business logo"
            width={200}
            height={100}
            className={`h-9 w-auto shrink-0 sm:h-11 ${solid ? "" : "brightness-0 invert"}`}
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                solid
                  ? "text-foreground/80 hover:bg-secondary hover:text-primary"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={`flex shrink-0 items-center gap-2 ${solid ? "text-foreground" : "text-white"}`}>
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search the site"
            aria-expanded={searchOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-current/20 transition-colors hover:bg-current/10"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            style={{ background: "var(--gradient-primary)" }}
          >
            Request a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-current/20 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl">
          <form
            className="section-shell flex items-center gap-3 py-3"
            onSubmit={(e) => e.preventDefault()}
            role="search"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products, industries, services…"
              aria-label="Search"
              className="w-full bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </form>
        </div>
      )}

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <div className="section-shell flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              Request a Quote
            </a>
          </div>
        </nav>
      )}
    </motion.header>
  );
}
