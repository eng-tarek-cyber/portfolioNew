export type SkillCategory =
  | "Frontend"
  | "Tools"
  | "Cloud"
  | "Soft Skills"
  | "Experience";

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Tools",
  "Cloud",
  "Experience",
  "Soft Skills",
];

export const skills: Skill[] = [
  { name: "HTML5", icon: "html5", category: "Frontend" },
  { name: "CSS3", icon: "css3", category: "Frontend" },
  { name: "JavaScript", icon: "javascript", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "Frontend" },

  { name: "Git", icon: "git", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "VS Code", icon: "vscode", category: "Tools" },
  { name: "Figma", icon: "figma", category: "Tools" },
  { name: "Vercel", icon: "vercel", category: "Cloud" },
  { name: "GitHub Pages", icon: "githubpages", category: "Cloud" },
  { name: "Cyber Security", icon: "security", category: "Soft Skills" },
  { name: "Problem Solving", icon: "problem", category: "Soft Skills" },
  { name: "Communication", icon: "communication", category: "Soft Skills" },
  { name: "Team Collaboration", icon: "team", category: "Soft Skills" },
  // Experience
  { name: "Team Project", icon: "users", category: "Experience" },
  { name: "Agile Workflow", icon: "workflow", category: "Experience" },
  { name: "REST API Integration", icon: "api", category: "Experience" },
  { name: "Git Workflow", icon: "git", category: "Experience" },
  { name: "Code Review", icon: "review", category: "Experience" },
  { name: "Pull Requests", icon: "github", category: "Experience" },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((s) => s.category === category);
}
