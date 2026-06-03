import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp } from "@/animations/variants";

interface Props {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, variants = fadeInUp, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
