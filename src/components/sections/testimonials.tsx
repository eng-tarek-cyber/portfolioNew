"use client";

import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding bg-[var(--color-bg-mid)]/50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What clients and collaborators say about working with me."
        />

        <div className="relative max-w-3xl mx-auto">
          <Quote
            size={48}
            className="absolute -top-4 left-0 text-violet-500/20"
          />

          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-500/30">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-muted">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-violet-500/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-violet-500 w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-violet-500/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
