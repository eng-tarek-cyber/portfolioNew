"use client";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-violet-500/30 group-hover:ring-violet-500/60 transition-all">
            <Image
              src="/img/tarek1.jpeg"
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <span className="font-bold text-white text-lg hidden sm:block">
            {siteConfig.name.split(" ")[0]}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-muted hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[var(--nav-bg)] backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-muted hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
