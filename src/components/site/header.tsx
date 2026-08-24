import { useEffect, useState } from "react";
import {
  Menu,
  Search,
  X,
  Milk,
  Utensils,
  GlassWater,
  FlaskConical,
  Building2,
  Pill,
  Shirt,
  Settings,
  Boxes,
  Wrench,
  Handshake,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import { navLinks } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

const industryItems = [
  {
    name: "Dairy",
    href: "#dairy",
    icon: Milk,
  },
  {
    name: "Food",
    href: "#food",
    icon: Utensils,
  },
  {
    name: "Beverages",
    href: "#beverages",
    icon: GlassWater,
  },
  {
    name: "Chemical",
    href: "#chemical",
    icon: FlaskConical,
  },
  {
    name: "Construction",
    href: "#construction",
    icon: Building2,
  },
  {
    name: "Pharma",
    href: "#pharma",
    icon: Pill,
  },
  {
    name: "Textile",
    href: "#textile",
    icon: Shirt,
  },
];

const solutionItems = [
  {
    name: "All Manufacturing Systems",
    href: "#manufacturing-systems",
    icon: Settings,
  },
  {
    name: "Third-Party Products",
    href: "#third-party-products",
    icon: Boxes,
  },
  {
    name: "Service Offerings",
    href: "#service-offerings",
    icon: Wrench,
  },
  {
    name: "Service Agreements",
    href: "#service-agreements",
    icon: Handshake,
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-lg backdrop-blur-md"
          : "bg-black/20"
      }`}
    >
      <div className="section-shell flex min-h-[82px] items-center gap-6">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label="Prince Group of Business home"
        >
          <img
            src={logo}
            alt="Prince Group of Business logo"
            width={58}
            height={58}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
          />

          <div className="hidden sm:block">
            <div className="font-sans text-xl font-extrabold uppercase tracking-wide text-white">
              PRINCE GROUP
            </div>

            <div className="font-sans text-s font-extrabold uppercase tracking-wide text-white">
              OF BUSINESS
            </div>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-1 lg:flex"
        >

          {/* ================= INDUSTRIES ================= */}
          <div className="group relative">

            <Link
              to="/industries"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              Industries
            </Link>

            <div className="invisible absolute left-0 top-full w-64 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="rounded-xl border border-white/20 bg-black/40 p-2 shadow-2xl backdrop-blur-md">

                {industryItems.map((industry) => {
                  const Icon = industry.icon;

                  return (
                    <a
                      key={industry.name}
                      href={industry.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span>{industry.name}</span>
                    </a>
                  );
                })}

              </div>
            </div>
          </div>

          {/* ================= SOLUTIONS ================= */}
          <div className="group relative">

            <Link
              to="/solutions"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              Solutions
            </Link>

            <div className="invisible absolute left-0 top-full w-72 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="rounded-xl border border-white/20 bg-black/40 p-2 shadow-2xl backdrop-blur-md">

                {solutionItems.map((solution) => {
                  const Icon = solution.icon;

                  return (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span>{solution.name}</span>
                    </a>
                  );
                })}

              </div>
            </div>
          </div>

          {/* ================= OTHER NAVIGATION ================= */}
          {navLinks
            .filter(
              (link) =>
                link.label !== "Industries" &&
                link.label !== "Solutions",
            )
            .map((link) => {
              const linkClass =
                "rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white";

              {/* ================= CONTACT ================= */}
               if (link.label === "Contact") {
  return (
    <Link
      key={link.label}
      to="/contact"
      className={linkClass}
    >
      {link.label}
    </Link>
  );
}

              {/* ================= OTHER LINKS ================= */}
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={linkClass}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={linkClass}
                >
                  {link.label}
                </a>
              );
            })}
        </nav>

        {/* ================= SEARCH + THEME + MOBILE ================= */}
        <div className="flex shrink-0 items-center gap-2 text-white">

          {/* Search */}
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-label="Search the site"
            aria-expanded={searchOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 hover:text-white"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          {/* Theme */}
          <ThemeToggle />

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 hover:text-white lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>

      {/* ================= SEARCH BAR ================= */}
      {searchOpen && (
        <div className="border-t border-white/10 bg-black">

          <form
            className="section-shell flex items-center gap-3 py-3"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <Search className="h-4 w-4 text-white/70" />

            <input
              type="search"
              placeholder="Search products, industries, solutions..."
              aria-label="Search"
              className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/50"
            />
          </form>

        </div>
      )}

      {/* ================= MOBILE NAVIGATION ================= */}
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-white/10 bg-black lg:hidden"
        >
          <div className="section-shell flex flex-col py-3">

            {/* Mobile Industries */}
            <div className="border-b border-white/10 pb-2">

              <div className="px-3 py-3 text-sm font-semibold text-white">
                Industries
              </div>

              <div className="grid grid-cols-2 gap-1">

                {industryItems.map((industry) => {
                  const Icon = industry.icon;

                  return (
                    <a
                      key={industry.name}
                      href={industry.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />

                      <span>{industry.name}</span>
                    </a>
                  );
                })}

              </div>
            </div>

            {/* Mobile Solutions */}
            <div className="border-b border-white/10 py-2">

              <div className="px-3 py-3 text-sm font-semibold text-white">
                Solutions
              </div>

              <div className="flex flex-col">

                {solutionItems.map((solution) => {
                  const Icon = solution.icon;

                  return (
                    <a
                      key={solution.name}
                      href={solution.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />

                      <span>{solution.name}</span>
                    </a>
                  );
                })}

              </div>
            </div>

            {/* Mobile Other Links */}
            {navLinks
              .filter(
                (link) =>
                  link.label !== "Industries" &&
                  link.label !== "Solutions",
              )
              .map((link) => {
                const linkClass =
                  "rounded-lg px-3 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white";

                {/* ================= MOBILE CONTACT ================= */}
                if (link.label === "Contact") {
                  return (
                    <Link
                      key={link.label}
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      {link.label}
                    </Link>
                  );
                }

                if (link.href.startsWith("/")) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                );
              })}

          </div>
        </nav>
      )}
    </motion.header>
  );
}