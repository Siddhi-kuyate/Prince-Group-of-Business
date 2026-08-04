import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Solutions, WhyChoose } from "@/components/site/solutions";
import { FeaturedProducts, Industries } from "@/components/site/products";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { LoadingScreen } from "@/components/site/loading-screen";
import { company } from "@/lib/site";

const title = "Prince Group of Business | Industrial Processing Equipment Manufacturer";
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
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No. 24, MIDC Industrial Area",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411019",
            addressCountry: "IN",
          },
          areaServed: "Worldwide",
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
        <Solutions />
        <FeaturedProducts />
        <Industries />
        <WhyChoose />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </>
  );
}
