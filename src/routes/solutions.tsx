import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Toaster } from "@/components/ui/sonner";
import { Solutions, WhyChoose } from "@/components/site/solutions";
import { company } from "@/lib/site";

const title = "Solutions | Prince Group of Business";

const description =
  "Explore engineering and processing solutions from Prince Group of Business — dairy, food, beverage, pharmaceutical, chemical, industrial automation, installation and after-sales support.";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,

  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://www.princegroupbusiness.in/solutions",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://www.princegroupbusiness.in/solutions",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Industrial Processing Solutions",
          provider: {
            "@type": "Organization",
            name: company.name,
            telephone: company.phone,
            email: company.email,
          },
          description,
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
});

function SolutionsPage() {
  return (
    <>
      <Header />

      <main>
        <Solutions />
        <WhyChoose />
      </main>

      <Footer />

      <FloatingActions />

      <Toaster position="top-center" richColors />
    </>
  );
}
