import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Toaster } from "@/components/ui/sonner";

const title = "Blogs | Prince Group of Business";

const description =
  "Read the latest insights, industry knowledge and updates from Prince Group of Business.";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,

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
        href: "https://www.princegroupbusiness.in/blogs",
      },
    ],
  }),
});

function BlogsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        <section className="section-shell py-32 sm:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Our Blog
            </span>

            <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
              Industrial Processing Insights
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Discover industry insights, engineering knowledge and the latest
              developments in industrial processing solutions.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold text-foreground">
                Dairy Processing
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Learn about modern dairy processing systems, equipment and
                hygienic production practices.
              </p>

              <button
                type="button"
                className="mt-5 text-sm font-semibold text-primary"
              >
                Read More →
              </button>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold text-foreground">
                Food & Beverage
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Explore processing technologies that improve efficiency,
                quality and production performance.
              </p>

              <button
                type="button"
                className="mt-5 text-sm font-semibold text-primary"
              >
                Read More →
              </button>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold text-foreground">
                Industrial Engineering
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Practical engineering insights for industrial plants,
                automation and process equipment.
              </p>

              <button
                type="button"
                className="mt-5 text-sm font-semibold text-primary"
              >
                Read More →
              </button>
            </article>
          </div>
        </section>
      </main>

      <Footer />

      <FloatingActions />

      <Toaster position="top-center" richColors />
    </>
  );
}