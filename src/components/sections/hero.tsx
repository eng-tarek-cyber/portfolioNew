"use client";

import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-violet-400/60 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-2 h-2 rounded-full bg-blue-400/60 hidden lg:block"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-violet-400" />
              <span className="text-sm text-violet-300 font-medium">
                Available for freelance work
              </span>
            </div>

            <p className="text-muted text-lg mb-2">{hero.greeting}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-4">
              {hero.name.split(" ").map((word, i) =>
                i === 1 ? (
                  <span key={i} className="gradient-text">
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={i}>
                    {i > 0 ? " " : ""}
                    {word}
                  </span>
                ),
              )}
            </h1>
            <p className="text-lg md:text-xl text-violet-300/90 font-medium mb-6">
              {hero.role}
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-8">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button href="#projects" size="lg">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Hire Me
              </Button>
              <Button
                href={siteConfig.cvPath}
                variant="secondary"
                size="lg"
                download
              >
                <Download size={18} />
                Download CV
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {hero.techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <Badge variant="primary">{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 to-blue-500/30 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-violet-500/20">
                <Image
                  src="/img/tarek1.jpeg"
                  alt={`${siteConfig.name} — Front-End Developer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-[var(--color-bg-card)] border border-white/10 backdrop-blur-xl shadow-xl">
                <p className="text-xs text-muted">Based in</p>
                <p className="text-sm font-semibold text-white">Egypt 🇪🇬</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-violet-300 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  );
}
