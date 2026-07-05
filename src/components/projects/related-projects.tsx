import { getRelatedProjects, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";
import Link from "next/link";

export function RelatedProjects({ project }: { project: Project }) {
  const related = getRelatedProjects(project.slug);

  return (
    <section className="section-padding bg-[var(--color-bg-mid)]/50 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Related Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`}>
              <GlassCard className="overflow-hidden h-full group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <Badge variant="primary">{p.category}</Badge>
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted text-sm mt-2 line-clamp-2">
                    {p.shortDescription}
                  </p>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
