import { motion } from "motion/react";
import type { Region } from "@/types";
import { formatNumber } from "@/utils/format";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function RegionHero({ region }: { region: Region }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.05),transparent)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10">
        <Link
          to="/regions"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All regions
        </Link>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          Capital · {region.capital}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-7xl font-extralight leading-none tracking-tight md:text-9xl"
        >
          {region.name}
        </motion.h1>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {[
            { label: "Population", value: formatNumber(region.population) },
            { label: "Area (km²)", value: formatNumber(region.area_km2) },
            { label: "Dev. index", value: region.development_index.toFixed(2) },
            { label: "Active dev.", value: formatNumber(region.metrics.active_developments) },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              className="border-l border-border pl-5"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-3 text-3xl font-extralight tracking-tight md:text-4xl">{s.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
