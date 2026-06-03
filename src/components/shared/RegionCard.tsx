import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingDown, TrendingUp, Minus } from "lucide-react";
import type { Region } from "@/types";
import { formatNumber, formatXAF } from "@/utils/format";

const trendIcon = {
  rising: <TrendingUp className="h-3.5 w-3.5" />,
  declining: <TrendingDown className="h-3.5 w-3.5" />,
  stable: <Minus className="h-3.5 w-3.5" />,
};

export function RegionCard({ region }: { region: Region }) {
  return (
    <Link to="/regions/$slug" params={{ slug: region.slug }} className="group block">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {region.capital}
            </p>
            <h3 className="mt-2 text-3xl font-light tracking-tight">{region.name}</h3>
          </div>
          <div className="rounded-full border border-border p-2 transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
          <Stat label="Population" value={formatNumber(region.population)} />
          <Stat label="Area" value={`${formatNumber(region.area_km2)} km²`} />
          <Stat label="Avg. land" value={formatXAF(region.metrics.avg_land_price_xaf) + "/m²"} />
          <Stat
            label="Trend"
            value={
              <span className="inline-flex items-center gap-1.5 capitalize">
                {trendIcon[region.metrics.investment_trend]}
                {region.metrics.investment_trend}
              </span>
            }
          />
        </div>
      </motion.article>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-foreground">{value}</p>
    </div>
  );
}
