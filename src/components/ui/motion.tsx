"use client";

import { motion, type Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function MotionWrapper({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...((variants.visible as object) || {}),
          transition: {
            ...(((variants.visible as { transition?: object })?.transition) || {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerWrapperProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerWrapper({
  children,
  className,
  once = true,
}: StaggerWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export { motion };
