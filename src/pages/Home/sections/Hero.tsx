import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <BackgroundGeo />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          Cameroon · Property & Investment Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 max-w-5xl text-5xl font-extralight leading-[1.02] tracking-tight md:text-7xl lg:text-8xl"
        >
          Explore Cameroon's
          <br />
          <span className="text-muted-foreground">property tax</span> and
          <br />
          development landscape.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Navigate regional property taxes, land regulations, investment laws, and development
          insights across all ten regions of Cameroon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/regions"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition-opacity hover:opacity-90"
          >
            Explore Regions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/regions"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm transition-colors hover:border-foreground"
          >
            View Regulations
          </Link>
        </motion.div>

        <FloatingIndicators />
      </div>
    </section>
  );
}

function BackgroundGeo() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        viewBox="0 0 800 800"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.circle
            key={i}
            cx="400"
            cy="400"
            r={40 + i * 28}
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          />
        ))}
        <motion.path
          d="M 280 240 Q 360 180 460 220 T 580 320 Q 620 420 540 520 T 380 560 Q 280 540 240 440 T 280 240 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function FloatingIndicators() {
  const items = [
    { label: "Active developments", value: "1,834", delay: 0.6, pos: "right-[6%] top-[18%]" },
    { label: "Avg. permit approval", value: "68.4%", delay: 0.8, pos: "right-[14%] top-[58%]" },
    { label: "Urban growth", value: "+3.2%", delay: 1.0, pos: "right-[2%] top-[40%]" },
  ];
  return (
    <>
      {items.map((i) => (
        <motion.div
          key={i.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i.delay }}
          className={`absolute hidden rounded-xl border border-border bg-background/70 px-5 py-4 backdrop-blur-xl xl:block ${i.pos}`}
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{i.label}</p>
          <p className="mt-1 text-2xl font-light tracking-tight">{i.value}</p>
        </motion.div>
      ))}
    </>
  );
}
