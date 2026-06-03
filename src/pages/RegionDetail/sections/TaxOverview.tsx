import type { Region } from "@/types";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { formatXAF, formatPercent } from "@/utils/format";

export function TaxOverview({ region }: { region: Region }) {
  const t = region.tax_profile;
  const cards = [
    {
      label: "Residential tax",
      value: t.residential_tax_rate,
      format: (n: number) => formatPercent(n, 2),
      note: "Annual, on assessed value",
    },
    {
      label: "Commercial tax",
      value: t.commercial_tax_rate,
      format: (n: number) => formatPercent(n, 1),
      note: "Effective municipal rate",
    },
    {
      label: "Land transfer fee",
      value: t.land_transfer_fee,
      format: (n: number) => formatPercent(n, 0),
      note: "On transaction value",
    },
    {
      label: "Permit cost",
      value: t.permit_cost_xaf,
      format: (n: number) => formatXAF(n),
      note: "Avg. residential R+1",
    },
    {
      label: "Land registration",
      value: t.land_registration_cost,
      format: (n: number) => formatXAF(n),
      note: "Conservation foncière",
    },
    {
      label: "Avg. land price",
      value: region.metrics.avg_land_price_xaf,
      format: (n: number) => formatXAF(n) + "/m²",
      note: "Urban benchmark",
    },
  ];

  return (
    <section className="border-b border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Tax overview
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extralight tracking-tight md:text-5xl">
            The cost of property in {region.name}.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {cards.map((c, i) => (
            <ScrollReveal key={c.label} delay={(i % 3) * 0.06}>
              <div className="h-full bg-card p-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-6 text-4xl font-extralight tracking-tight md:text-5xl">
                  <AnimatedCounter value={c.value} format={c.format} />
                </p>
                <p className="mt-4 text-xs text-muted-foreground">{c.note}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
