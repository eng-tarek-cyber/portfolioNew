"use client";

import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <AnimatePresence onExitComplete={() => setDone(true)}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-bg-deep)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse delay-700" />
          </div>

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-violet-500/30 animate-spin [animation-duration:3s]" />
              <Image
                src="/img/tarek1.jpeg"
                alt=""
                width={96}
                height={96}
                className="rounded-full object-cover ring-4 ring-violet-500/20"
                priority
              />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-2">
              Welcome
            </p>
            <p className="text-2xl font-bold text-white mb-1">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted">
              {siteConfig.author.jobTitle}
            </p>
            <div className="mt-6 w-48 h-1 mx-auto rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
