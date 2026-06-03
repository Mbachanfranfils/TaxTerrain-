import { createFileRoute } from "@tanstack/react-router";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Hero } from "@/pages/Home/sections/Hero";
import { Metrics } from "@/pages/Home/sections/Metrics";
import { Regions } from "@/pages/Home/sections/Regions";
import { TaxInsights } from "@/pages/Home/sections/TaxInsights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TaxTerrain — Cameroon Property Tax & Investment Intelligence" },
      {
        name: "description",
        content:
          "Explore property taxes, land regulations and investment laws across all ten regions of Cameroon.",
      },
      {
        property: "og:title",
        content: "TaxTerrain — Cameroon Property Tax & Investment Intelligence",
      },
      {
        property: "og:description",
        content:
          "Navigate regional property taxes, land regulations, investment laws and development insights across Cameroon.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageWrapper>
      <Hero />
      <Metrics />
      <Regions />
      <TaxInsights />
    </PageWrapper>
  );
}
