"use client";

import { skills, skillCategories, type SkillCategory } from "@/data/skills";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerWrapper, fadeInUp } from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Wrench,
  BriefcaseBusiness,
  Workflow,
  Users,
  Shield,
  GitBranch,
  Globe,
  Palette,
  Brain,
  MessageCircle,
  FileCode2,
  Braces,
  Binary,
  Boxes,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  html5: <Braces size={22} />,
  css3: <Palette size={22} />,
  javascript: <Binary size={22} />,
  typescript: <FileCode2 size={22} />,
  react: <Globe size={22} />,
  nextjs: <Globe size={22} />,
  tailwind: <Palette size={22} />,
  bootstrap: <Palette size={22} />,
  redux: <Boxes size={22} />,
  api: <Globe size={22} />,

  git: <GitBranch size={22} />,
  github: <GitBranch size={22} />,
  vscode: <Wrench size={22} />,
  figma: <Palette size={22} />,
  vercel: <Cloud size={22} />,
  githubpages: <Cloud size={22} />,

  security: <Shield size={22} />,
  problem: <Brain size={22} />,
  communication: <MessageCircle size={22} />,
  team: <Users size={22} />,

  // Experience
  users: <Users size={22} />,
  workflow: <Workflow size={22} />,
  review: <BriefcaseBusiness size={22} />,
};

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  Frontend: <Code2 size={18} />,
  Experience: <BriefcaseBusiness size={18} />,
  Tools: <Wrench size={18} />,
  Cloud: <Cloud size={18} />,
  "Soft Skills": <Users size={18} />,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-[var(--color-bg-mid)]/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit spanning front-end, back-end, and professional soft skills."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category,
            );
            return (
              <StaggerWrapper key={category}>
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center text-violet-400">
                      {categoryIcons[category]}
                    </div>
                    <h3 className="font-semibold text-white">{category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all cursor-default min-h-[64px]"
                      >
                        <span className="text-violet-400 shrink-0">
                          {iconMap[skill.icon] || <Code2 size={22} />}
                        </span>
                        <span className="min-w-0 flex-1 break-words text-sm text-white/80 font-medium leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </StaggerWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
