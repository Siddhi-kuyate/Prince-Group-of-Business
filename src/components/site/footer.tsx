import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
 

import logo from "@/assets/logo.png";
import { company, industries, socialLinks } from "@/lib/site";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: socialLinks.instagram,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: socialLinks.linkedin,
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: socialLinks.facebook,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      {/* ================= MAIN FOOTER ================= */}
      <div className="section-shell py-16">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* ================= LEFT: LOGO + TAGLINE ================= */}
          <div>
            <img
              src={logo}
              alt="Prince Group of Business"
              loading="lazy"
              width={500}
              height={250}
              className="h-36 w-auto object-contain sm:h-44 lg:h-52"
            />

            <p className="mt-1 max-w-sm font-display text-lg font-semibold leading-relaxed text-white">
              Crowning Success, 
            </p>

             <p className="mt-0 max-w-sm font-display text-lg font-semibold leading-relaxed text-white">
               Building Legacies.
            </p>
          </div>

          {/* ================= CENTER: INDUSTRIES + SOCIAL ================= */}
          <nav aria-label="Industries">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Industries
            </h3>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <a
                    href="#industries"
                    className="transition-colors hover:text-primary-glow"
                  >
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* ================= SOCIAL MEDIA ================= */}
            <div className="mt-10 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-primary-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </nav>

          {/* ================= RIGHT: CONTACT ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>

            <address className="mt-6 space-y-5 text-sm not-italic">

              {/* Address */}
              <p className="flex gap-3 leading-relaxed">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />

                <span>{company.address}</span>
              </p>

              {/* Phone */}
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />

                <a
                  href={company.phoneHref}
                  className="transition-colors hover:text-primary-glow"
                >
                  {company.phone}
                </a>
              </p>

              {/* Email */}
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />

                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-primary-glow"
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          {/* Legal Links */}
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            <a
              href="/contact"
              className="transition-colors hover:text-primary-glow"
            >
              Privacy Policy
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-primary-glow"
            >
              Terms &amp; Conditions
            </a>

            <a
              href="/sitemap.xml"
              className="transition-colors hover:text-primary-glow"
            >
              Sitemap
            </a>
          </nav>

          {/* Bottom Tagline */}
          <p className="font-display text-sm font-semibold text-white">
            {company.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}