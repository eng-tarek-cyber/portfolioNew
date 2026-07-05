"use client";

import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { MotionWrapper, StaggerWrapper, fadeInUp } from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ProjectDetailContent({ project }: { project: Project }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-violet-300 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary">{project.category}</Badge>
                <Badge variant="success">{project.status}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={project.liveUrl} external size="lg">
                  <ExternalLink size={18} />
                  Live Demo
                </Button>
                <Button href={project.githubUrl} variant="outline" external size="lg">
                  <Github size={18} />
                  GitHub
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-violet-500/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-[var(--color-bg-mid)]/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Project Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Problem</h3>
              <p className="text-muted text-sm leading-relaxed">
                {project.overview.problem}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
              <p className="text-muted text-sm leading-relaxed">
                {project.overview.solution}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Goals</h3>
              <ul className="space-y-2">
                {project.overview.goals.map((g) => (
                  <li key={g} className="text-muted text-sm flex gap-2">
                    <span className="text-violet-400">•</span>{g}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Target Users
              </h3>
              <ul className="space-y-2">
                {project.overview.targetUsers.map((u) => (
                  <li key={u} className="text-muted text-sm flex gap-2">
                    <span className="text-violet-400">•</span>{u}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="primary" className="text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[var(--color-bg-mid)]/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Key Features
          </h2>
          <StaggerWrapper className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <GlassCard className="p-6 h-full">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              Project Gallery
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 cursor-zoom-in group"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={project.gallery[galleryIndex]}
                  alt={`${project.title} screenshot ${galleryIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                  <ZoomIn
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {project.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setGalleryIndex(
                        (i) =>
                          (i - 1 + project.gallery.length) %
                          project.gallery.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setGalleryIndex((i) => (i + 1) % project.gallery.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="flex justify-center gap-2 mt-4">
                    {project.gallery.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setGalleryIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === galleryIndex
                            ? "bg-violet-500 w-6"
                            : "bg-white/20"
                        }`}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {lightboxOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                type="button"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
              <div className="relative w-full max-w-5xl aspect-video">
                <Image
                  src={project.gallery[galleryIndex]}
                  alt={`${project.title} full view`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          )}
        </section>
      )}

      {/* Architecture */}
      <section className="section-padding bg-[var(--color-bg-mid)]/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Architecture
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(
              Object.entries(project.architecture) as [
                string,
                string,
              ][]
            ).map(([key, value]) => (
              <GlassCard key={key} className="p-6">
                <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-2">
                  {key}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{value}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Lessons */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((c) => (
                  <MotionWrapper key={c}>
                    <GlassCard className="p-5">
                      <p className="text-muted text-sm leading-relaxed">{c}</p>
                    </GlassCard>
                  </MotionWrapper>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Lessons Learned
              </h2>
              <ul className="space-y-4">
                {project.lessonsLearned.map((l) => (
                  <MotionWrapper key={l}>
                    <GlassCard className="p-5">
                      <p className="text-muted text-sm leading-relaxed">{l}</p>
                    </GlassCard>
                  </MotionWrapper>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="section-padding bg-[var(--color-bg-mid)]/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Performance & Best Practices
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(
              Object.entries(project.performance) as [string, string][]
            ).map(([key, value]) => (
              <GlassCard key={key} className="p-6">
                <h3 className="text-base font-semibold text-white mb-2 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{value}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Future Improvements
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.futureImprovements.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
