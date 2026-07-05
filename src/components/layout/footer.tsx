import { siteConfig } from "@/data/site";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[var(--color-bg-mid)]">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-3">
              {siteConfig.name}
            </h3>
            <p className="text-muted text-sm leading-relaxed max-w-md mb-6">
              Front-End Developer crafting premium digital experiences for
              international clients. Available for freelance projects on Upwork,
              LinkedIn, and direct collaboration.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} className="text-violet-400 shrink-0" />
              {siteConfig.location}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-violet-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-violet-300 transition-colors"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-violet-300 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-violet-300 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="text-violet-400 hover:text-violet-300"
            >
              Next.js
            </Link>{" "}
            & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
