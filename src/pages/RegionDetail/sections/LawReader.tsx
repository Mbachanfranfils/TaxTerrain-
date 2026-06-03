import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import type { LawSection } from "@/types";

const categoryLabel: Record<LawSection["category"], string> = {
  property_tax: "Property tax",
  land_ownership: "Land ownership",
  construction_permits: "Construction permits",
  zoning: "Zoning",
  foreign_investment: "Foreign investment",
  environmental: "Environmental",
};

export function LawReader({ laws, regionName }: { laws: LawSection[]; regionName: string }) {
  return (
    <section className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Regulatory reader
          </p>
          <h2 className="mt-4 text-4xl font-extralight tracking-tight md:text-5xl">
            The legal terrain of {regionName}.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            A continuous reading of the laws that shape property, investment, and development.
            Scroll to advance.
          </p>
        </div>

        <div className="mt-24 space-y-40">
          {laws.map((law) => (
            <LawBlock key={law.id} law={law} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LawBlock({ law }: { law: LawSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"],
  });

  return (
    <article ref={ref} className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
      <div className="md:sticky md:top-32 md:self-start">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {categoryLabel[law.category]}
        </p>
        <h3 className="mt-3 text-2xl font-light tracking-tight">{law.title}</h3>
        <p className="mt-4 text-xs text-muted-foreground">{law.reference_code}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Updated{" "}
          {new Date(law.last_updated).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="space-y-8 text-2xl font-light leading-relaxed tracking-tight md:text-3xl">
        {law.content.map((paragraph, i) => (
          <Paragraph
            key={i}
            text={paragraph}
            scrollYProgress={scrollYProgress}
            index={i}
            total={law.content.length}
          />
        ))}
      </div>
    </article>
  );
}

function Paragraph({
  text,
  scrollYProgress,
  index,
  total,
}: {
  text: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const mid = (index + 0.5) / total;
  const end = (index + 1) / total;

  // Color transitions: inactive gray -> active near-black -> completed pure black
  const color = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), mid, Math.min(1, end + 0.05)],
    ["#9CA3AF", "#111827", "#000000"],
  );
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end],
    [0.55, 1, 1],
  );

  return <motion.p style={{ color, opacity, willChange: "opacity, color" }}>{text}</motion.p>;
}
