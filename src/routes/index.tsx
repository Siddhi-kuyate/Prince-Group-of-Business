import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Solutions } from "@/components/site/solutions";
import { Testimonials } from "@/components/site/testimonials";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { LoadingScreen } from "@/components/site/loading-screen";
import { company } from "@/lib/site";

const title =
  "Prince Group of Business | Industrial Processing Equipment Manufacturer";

const description =
  "Prince Group of Business manufactures industrial processing equipment and turnkey engineering solutions for dairy, food, beverage, pharmaceutical and chemical plants.";

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.princegroupbusiness.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://www.princegroupbusiness.in/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",

        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",

          name: company.name,
          description,
          slogan: company.tagline,
          telephone: company.phone,
          email: company.email,
          url: "https://www.princegroupbusiness.in",

          address: {
            "@type": "PostalAddress",
            streetAddress:
              "B-304, 3rd Floor, Jai Ganesh Vardhasht Society, Gandhi Nagar Road",
            addressLocality: "Pimpri, Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },

          areaServed: "Worldwide",

          sameAs: [
            "https://www.instagram.com/pg_businesses/",
            "https://www.linkedin.com/company/prince-group-of-business/",
            "https://www.facebook.com/share/1DMrPZSBBP/",
          ],

          knowsAbout: [
            "Dairy processing equipment",
            "Food processing equipment",
            "Beverage processing equipment",
            "Pharmaceutical processing equipment",
            "Industrial automation",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <LoadingScreen />

      <Header />

      <main id="main">
        <Hero />

        {/* Solutions stays on Home */}
        <Solutions />

        {/* Testimonials stays on Home */}
        <Testimonials />

        {/* ================= CONTACT CTA ================= */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          {/* Contact Background Image */}
          <img
            src={contactBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1920}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Contact Content */}
          <div className="section-shell relative">
            <div className="mx-auto max-w-3xl text-center">
              {/* Line 1 */}
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                Contact Us
              </span>

              {/* Line 2 */}
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Talk to Prince Group of Business
              </h2>

              {/* Line 3 */}
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                Share your process requirement and our engineers will revert
                with a technical proposal.
              </p>

              {/* Contact Us Button */}
              <div className="mt-8 flex justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Contact Us

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Feedback */}
        <Newsletter />
      </main>

      <Footer />

      <FloatingActions />

      <Toaster
        position="top-center"
        richColors
      />
    </>
  );
}