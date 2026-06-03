import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "@/services/api/regions";
import { RegionCard } from "@/components/shared/RegionCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Regions() {
  const { data, isLoading } = useQuery({ queryKey: ["regions"], queryFn: fetchRegions });

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Ten regions
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-extralight tracking-tight md:text-5xl">
                Every territory, fully indexed.
              </h2>
            </div>
            <Link
              to="/regions"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all regions
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-2xl border border-border bg-muted/40"
                />
              ))
            : data?.map((r, i) => (
                <ScrollReveal key={r.id} delay={(i % 3) * 0.06}>
                  <RegionCard region={r} />
                </ScrollReveal>
              ))}
        </div>
      </div>
    </section>
  );
}
