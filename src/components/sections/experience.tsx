"use client";

import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionWrapper } from "@/components/ui/motion";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and academic background in technology and business analytics."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <MotionWrapper
                key={`${item.title}-${item.period}`}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div
                    className={`md:w-1/2 pl-14 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="absolute left-3 md:left-1/2 top-6 w-6 h-6 -translate-x-1/2 rounded-full bg-[var(--color-bg-deep)] border-2 border-violet-500 flex items-center justify-center z-10">
                      {item.type === "education" ? (
                        <GraduationCap size={12} className="text-violet-400" />
                      ) : (
                        <Briefcase size={12} className="text-violet-400" />
                      )}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-violet-500/30 transition-colors">
                      <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted mb-3">{item.company}</p>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
