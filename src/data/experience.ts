export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: "work" | "education";
}

export const experience: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Freelance / Personal Projects",
    period: "2023 — Present",
    description:
      "Building responsive websites, admin dashboards, and agency platforms for clients. Specializing in React, JavaScript, and modern CSS with a focus on premium UI/UX.",
    technologies: ["React", "JavaScript", "HTML/CSS", "Bootstrap", "Git"],
    type: "work",
  },
  {
    title: "Web Development Projects",
    company: "Self-Directed Learning",
    period: "2022 — Present",
    description:
      "Completed 10+ projects including e-commerce dashboards, creative agency sites, and real estate platforms deployed on GitHub Pages.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    type: "work",
  },
  {
    title: "Bachelor's in Information Systems",
    company: "University — Business Analytics Focus",
    period: "2021 — Present",
    description:
      "Studying information systems with emphasis on business analytics, data-driven decision making, and bridging technical skills with business strategy.",
    technologies: ["Data Analysis", "Business Intelligence", "Systems Design"],
    type: "education",
  },
  {
    title: "Cyber Security Fundamentals",
    company: "Self-Study & Online Courses",
    period: "2023 — Present",
    description:
      "Exploring web security, vulnerability assessment, and secure coding practices to complement front-end development expertise.",
    technologies: ["Network Security", "Web Security", "Ethical Hacking Basics"],
    type: "education",
  },
];
