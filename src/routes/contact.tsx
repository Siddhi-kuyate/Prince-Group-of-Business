import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Toaster } from "@/components/ui/sonner";
import { company } from "@/lib/site";

const title = "Contact Us | Prince Group of Business";

const description =
  "Contact Prince Group of Business for industrial processing equipment enquiries. Call +91 82376 05344, email sales.pgbusiness@gmail.com, or visit us at B-304, Jai Ganesh Vardhasht Society, Pimpri, Pune.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,

  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.princegroupbusiness.in/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],

    links: [{ rel: "canonical", href: "https://www.princegroupbusiness.in/contact" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.name,
          description,
          url: "https://www.princegroupbusiness.in/contact",
          telephone: company.phone,
          email: company.email,
          openingHours: "Mo-Sa 09:00-18:00",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "B-304, 3rd Floor, Jai Ganesh Vardhasht Society, Gandhi Nagar Road",
            addressLocality: "Pimpri, Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.instagram.com/pg_businesses/",
            "https://www.linkedin.com/company/prince-group-of-business/",
            "https://www.facebook.com/share/1DMrPZSBBP/",
          ],
        }),
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <Header />

      <main id="main" className="pt-[82px]">
        <Contact />
      </main>

      <Footer />

      <FloatingActions />

      <Toaster position="top-center" richColors />
    </>
  );
}