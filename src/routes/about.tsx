import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Toaster } from "@/components/ui/sonner";
import { WhyChoose } from "@/components/site/solutions";

const title = "About Us | Prince Group of Business";

const description =
  "Learn about Prince Group of Business, our engineering expertise, quality commitment and approach to industrial processing solutions.";

export const Route = createFileRoute("/about")({
  component: AboutPage,

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
        href: "https://www.princegroupbusiness.in/about",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <WhyChoose />
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