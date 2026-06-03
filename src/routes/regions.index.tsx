import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { fetchRegions } from "@/services/api/regions";
import { RegionCard } from "@/components/shared/RegionCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const Route = createFileRoute("/regions/")({
  head: () => ({
    meta: [
      { title: "Regions — TaxTerrain" },
      {
        name: "description",
        content:
          "Browse all ten regions of Cameroon — population, land prices, permit approval rates and investment trends.",
      },
      { property: "og:title", content: "Regions — TaxTerrain" },
      {
        property: "og:description",
        content:
          "Browse all ten regions of Cameroon with key property, tax and investment indicators.",
      },
    ],
  }),
  component: RegionsPage,
});

function RegionsPage() {
  const { data, isLoading } = useQuery({ queryKey: ["regions"], queryFn: fetchRegions });

  return (
    <PageWrapper>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Cameroon · Regions
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl">
            Ten regions, one structured view of property and investment.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Select a region to read its tax profile, market indicators and the laws shaping land,
            construction and investment.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-64 animate-pulse rounded-2xl border border-border bg-muted/40"
                  />
                ))
              : data?.map((r, i) => (
                  <ScrollReveal key={r.id} delay={(i % 3) * 0.05}>
                    <RegionCard region={r} />
                  </ScrollReveal>
                ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
