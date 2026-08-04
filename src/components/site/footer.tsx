import { Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { company, gmailLink, industries, navLinks, products, whatsappLink } from "@/lib/site";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: Twitter, label: "X", href: "https://x.com" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logo}
              alt="Prince Group of Business logo"
              loading="lazy"
              width={220}
              height={110}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Prince Group of Business designs, manufactures and commissions industrial processing equipment
              and turnkey engineering solutions for dairy, food, beverage, pharmaceutical and chemical plants.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold tracking-[0.16em] text-white uppercase">Quick Links</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-glow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <h3 className="text-sm font-semibold tracking-[0.16em] text-white uppercase">Products</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {products.slice(0, 7).map((product) => (
                <li key={product.name}>
                  <a href="#products" className="transition-colors hover:text-primary-glow">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-white uppercase">Industries</h3>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <a href="#industries" className="transition-colors hover:text-primary-glow">
                    {industry.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold tracking-[0.16em] text-white uppercase">Contact</h3>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                {company.address}
              </p>
              <p className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-glow" />
                <a href={company.phoneHref} className="hover:text-primary-glow">
                  {company.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-glow" />
                <a href={`mailto:${company.email}`} className="hover:text-primary-glow">
                  {company.email}
                </a>
              </p>
            </address>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white"
              >
                <Mail className="h-3.5 w-3.5" /> Gmail
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#contact" className="hover:text-primary-glow">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-primary-glow">
              Terms &amp; Conditions
            </a>
            <a href="/sitemap.xml" className="hover:text-primary-glow">
              Sitemap
            </a>
          </nav>
          <p className="font-display text-sm font-semibold text-white">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
