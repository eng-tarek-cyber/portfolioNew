import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { PageTransition } from "@/components/layout/page-transition";
import { ProjectDetailContent } from "@/components/projects/project-detail-content";
import { RelatedProjects } from "@/components/projects/related-projects";
import { absoluteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.title} — Case Study`;
  const description = project.shortDescription;
  const url = absoluteUrl(`/projects/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: absoluteUrl(project.image), alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(project.image)],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${slug}`),
    image: absoluteUrl(project.image),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    keywords: project.techStack.join(", "),
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailContent project={project} />
      <RelatedProjects project={project} />
    </PageTransition>
  );
}
