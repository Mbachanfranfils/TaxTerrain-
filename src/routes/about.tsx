import { createFileRoute } from "@tanstack/react-router";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TaxTerrain" },
      {
        name: "description",
        content:
          "TaxTerrain organizes Cameroon property taxation, land regulation and investment data into a single, navigable reference.",
      },
      { property: "og:title", content: "About — TaxTerrain" },
      {
        property: "og:description",
        content:
          "A structured reference for property taxation and investment regulation across Cameroon.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageWrapper>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">About</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl">
            A reference for property, tax and investment across Cameroon.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 lg:grid-cols-3 lg:px-10">
          <ScrollReveal>
            <h2 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mission</h2>
            <p className="mt-4 text-lg font-light leading-relaxed">
              Make Cameroon's property tax framework and regional investment regulations legible to
              anyone — buyer, developer, lawyer, investor.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Platform</h2>
            <p className="mt-4 text-lg font-light leading-relaxed">
              One structured surface combining tax profiles, land economics and legal references —
              organised by region, designed for clarity.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Sources</h2>
            <p className="mt-4 text-lg font-light leading-relaxed">
              Data is sourced from the General Tax Code, the Ministry of Housing and Urban
              Development, and the National Investment Agency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="max-w-2xl text-3xl font-extralight tracking-tight md:text-4xl">
              Built for decision-makers operating across regions, sectors, and jurisdictions.
            </h2>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
