"use client";

import { services } from "@/data/services";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerWrapper, fadeInUp } from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Shield,
  Palette,
  Bug,
  Rocket,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={28} />,
  smartphone: <Smartphone size={28} />,
  shield: <Shield size={28} />,
  palette: <Palette size={28} />,
  bug: <Bug size={28} />,
  rocket: <Rocket size={28} />,
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--color-bg-mid)]/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Services"
          subtitle="Premium development services tailored for businesses and entrepreneurs worldwide."
        />

        <StaggerWrapper className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <GlassCard className="p-8 h-full text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p
                  className="text-muted/70 text-sm leading-relaxed"
                  lang="ar"
                  dir="rtl"
                >
                  {service.descriptionAr}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
