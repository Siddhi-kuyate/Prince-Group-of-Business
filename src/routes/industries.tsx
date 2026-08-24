import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Toaster } from "@/components/ui/sonner";
import { Industries } from "@/components/site/products";

const title = "Industries | Prince Group of Business";

const description =
  "Explore the industries served by Prince Group of Business including dairy, food, beverage, pharmaceutical, chemical, textile and construction.";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,

  head: () => ({
    meta: [
      {
        title,
      },
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
    ],

    links: [
      {
        rel: "canonical",
        href: "https://www.princegroupbusiness.in/industries",
      },
    ],
  }),
});

function IndustriesPage() {
  return (
    <>
      <Header />

      <main>
        <Industries />
      </main>

      <Footer />

      <FloatingActions />

      <Toaster position="top-center" richColors />
    </>
  );
}