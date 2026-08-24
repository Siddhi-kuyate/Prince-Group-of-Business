import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Toaster } from "@/components/ui/sonner";
import { FeaturedProducts } from "@/components/site/products";

const title = "Products | Prince Group of Business";

const description =
  "Explore precision-built industrial processing equipment from Prince Group of Business.";

export const Route = createFileRoute("/products")({
  component: ProductsPage,

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
        href: "https://www.princegroupbusiness.in/products",
      },
    ],
  }),
});

function ProductsPage() {
  return (
    <>
      <Header />

      <main>
        <FeaturedProducts />
      </main>

      <Footer />

      <FloatingActions />

      <Toaster position="top-center" richColors />
    </>
  );
}