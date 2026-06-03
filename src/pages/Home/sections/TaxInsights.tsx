import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "@/services/api/regions";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function TaxInsights() {
  const { data } = useQuery({ queryKey: ["regions"], queryFn: fetchRegions });
  const regions = data ?? [];

  const taxData = regions.map((r) => ({
    name: r.name,
    commercial: r.tax_profile.commercial_tax_rate,
    residential: r.tax_profile.residential_tax_rate * 100,
  }));

  const growthData = regions.map((r) => ({
    name: r.name,
    growth: r.metrics.urban_growth_rate,
    approval: r.metrics.permit_approval_rate,
  }));

  return (
    <section className="border-t border-border bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Tax insights
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extralight tracking-tight md:text-5xl">
            Patterns across the territory.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <ChartCard title="Tax rates by region" subtitle="Commercial vs residential (%)">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={taxData} margin={{ top: 10, right: 0, left: -16, bottom: 0 }}>
                  <CartesianGrid stroke="hsl(var(--border))" vertical={false} strokeDasharray="0" />
                  <XAxis
                    dataKey="name"
                    stroke="#9CA3AF"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      border: "1px solid #F3F4F6",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="commercial" fill="#000" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="residential" fill="#9CA3AF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ChartCard title="Growth & approval" subtitle="Urban growth vs permit approval (%)">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData} margin={{ top: 10, right: 0, left: -16, bottom: 0 }}>
                  <CartesianGrid stroke="#F3F4F6" vertical={false} />
                  <XAxis
                    dataKey="name"
                    stroke="#9CA3AF"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      border: "1px solid #F3F4F6",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="approval"
                    stroke="#000"
                    strokeWidth={1.5}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="growth"
                    stroke="#9CA3AF"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <div className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{subtitle}</p>
        <h3 className="mt-2 text-xl font-light tracking-tight">{title}</h3>
      </div>
      {children}
    </div>
  );
}
