import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const metrics = [
  { label: "Average property tax", value: 0.09, suffix: "%", decimals: 2 },
  { label: "National development index", value: 0.58, suffix: "", decimals: 2 },
  { label: "Urban growth rate", value: 3.2, suffix: "%", decimals: 1 },
  { label: "Permit approval rate", value: 68.4, suffix: "%", decimals: 1 },
  { label: "Active developments", value: 1834, suffix: "", decimals: 0 },
  { label: "Regions covered", value: 10, suffix: "", decimals: 0 },
];

export function Metrics() {
  return (
    <section className="border-y border-border bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            National signal
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extralight tracking-tight md:text-5xl">
            A country measured in tax, growth, and approval.
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.06}>
              <div className="border-l border-border pl-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {m.label}
                </p>
                <p className="mt-4 text-5xl font-extralight tracking-tight md:text-6xl">
                  <AnimatedCounter value={m.value} decimals={m.decimals} suffix={m.suffix} />
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
