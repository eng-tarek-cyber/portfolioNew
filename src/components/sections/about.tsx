"use client";

import { siteConfig } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  MotionWrapper,
  StaggerWrapper,
  fadeInUp,
} from "@/components/ui/motion";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb, Briefcase } from "lucide-react";
import Image from "next/image";

const aboutSections = [
  { icon: Lightbulb, title: "Story", key: "story" as const },
  { icon: Briefcase, title: "Experience", key: "experience" as const },
  { icon: GraduationCap, title: "Education", key: "education" as const },
];

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer blending code, design, and analytics to build meaningful digital products."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <StaggerWrapper className="space-y-6">
            {aboutSections.map(({ icon: Icon, title, key }) => (
              <motion.div key={key} variants={fadeInUp}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {about[key]}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <MotionWrapper>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center shrink-0">
                    <Heart size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Fun Facts
                    </h3>
                    <ul className="space-y-2">
                      {about.funFacts.map((fact) => (
                        <li
                          key={fact}
                          className="text-muted text-sm flex items-start gap-2"
                        >
                          <span className="text-violet-400 mt-1">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </MotionWrapper>
          </StaggerWrapper>

          <div className="space-y-8">
            <MotionWrapper className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/img/tarek1.jpeg"
                  alt={`${siteConfig.name} — About`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </MotionWrapper>

            <StaggerWrapper className="grid grid-cols-2 gap-4">
              {about.stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <GlassCard className="p-5 text-center">
                    <p className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
