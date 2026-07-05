import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";

const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { loading: () => <SectionSkeleton /> }
);

const Contact = dynamic(
  () =>
    import("@/components/sections/contact").then((m) => ({
      default: m.Contact,
    })),
  { loading: () => <SectionSkeleton /> }
);

function SectionSkeleton() {
  return (
    <div className="section-padding container mx-auto px-4">
      <div className="h-8 w-48 bg-white/5 rounded-lg mx-auto mb-8 animate-pulse" />
      <div className="h-64 bg-white/5 rounded-2xl animate-pulse" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
