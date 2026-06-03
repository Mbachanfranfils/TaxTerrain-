import { createFileRoute, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { fetchRegionBySlug } from "@/services/api/regions";
import { RegionHero } from "@/pages/RegionDetail/sections/Hero";
import { TaxOverview } from "@/pages/RegionDetail/sections/TaxOverview";
import { LawReader } from "@/pages/RegionDetail/sections/LawReader";

export const Route = createFileRoute("/regions/$slug")({
  head: ({ params }) => {
    const name = params.slug
      .split("-")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(" ");
    return {
      meta: [
        { title: `${name} Region — TaxTerrain` },
        {
          name: "description",
          content: `Property taxes, regulations and investment indicators for the ${name} Region of Cameroon.`,
        },
        { property: "og:title", content: `${name} Region — TaxTerrain` },
        {
          property: "og:description",
          content: `Tax profile, land prices and regulatory framework for the ${name} Region.`,
        },
      ],
    };
  },
  component: RegionDetailPage,
  errorComponent: ({ error, reset }) => (
    <PageWrapper>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl font-light">Region not available</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 rounded-full bg-foreground px-6 py-3 text-sm text-background"
        >
          Retry
        </button>
      </div>
    </PageWrapper>
  ),
  notFoundComponent: () => (
    <PageWrapper>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl font-light">Region not found</h1>
      </div>
    </PageWrapper>
  ),
});

function RegionDetailPage() {
  const { slug } = Route.useParams();
  const {
    data: region,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["region", slug],
    queryFn: () => fetchRegionBySlug(slug),
  });

  if (error) throw notFound();

  if (isLoading || !region) {
    return (
      <PageWrapper>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <div className="h-10 w-40 animate-pulse rounded bg-muted" />
          <div className="mt-8 h-32 w-full animate-pulse rounded bg-muted" />
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <RegionHero region={region} />
      <TaxOverview region={region} />
      <LawReader laws={region.laws} regionName={region.name} />
    </PageWrapper>
  );
}
