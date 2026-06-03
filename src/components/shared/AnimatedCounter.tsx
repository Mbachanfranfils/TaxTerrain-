import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface Props {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}

export function AnimatedCounter({
  value,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  format,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(format ? format(latest) : `${prefix}${latest.toFixed(decimals)}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, decimals, prefix, suffix, format]);

  return <span ref={ref}>{display}</span>;
}
