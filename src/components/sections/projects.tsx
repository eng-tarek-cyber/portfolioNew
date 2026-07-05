"use client";

import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerWrapper, fadeInUp } from "@/components/ui/motion";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-violet-500/30 transition-colors"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="primary">{project.category}</Badge>
          <Badge variant="success">{project.status}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline">+{project.techStack.length - 4}</Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            href={`/projects/${project.slug}`}
            size="sm"
            variant="primary"
          >
            <FileText size={14} />
            Case Study
          </Button>
          <Button href={project.liveUrl} size="sm" variant="outline" external>
            <ExternalLink size={14} />
            Live Demo
          </Button>
          <Button href={project.githubUrl} size="sm" variant="ghost" external>
            <Github size={14} />
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my best work — from dashboards to agency platforms and real estate sites."
        />

        <StaggerWrapper className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerWrapper>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="#contact"
            className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
          >
            Have a project in mind? Let&apos;s talk →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
