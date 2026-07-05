export const siteConfig = {
  name: "Tarek Ahmed",
  title: "Tarek Ahmed | Front-End Developer Portfolio",
  description:
    "Tarek Ahmed — Front-End Developer & Information Systems student in Kafr El Sheikh, Egypt. Portfolio: React, JavaScript, responsive websites, dashboards, and UI projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eng-tarek-cyber.github.io/portfolioNew",
  ogImage: "/img/tarek1.jpeg",
  email: "snamr015@gmail.com",
  phone: "+201006494164",
  phoneDisplay: "+20 100 649 4164",
  location: "Kafr El Sheikh, Egypt",
  cvPath: "/img/tarek-ahmed-eid.pdf",
  author: {
    name: "Tarek Ahmed",
    alternateName: ["Tarek Eid", "طارق عيد"],
    jobTitle: "Front-End Developer",
    image: "/img/tarek1.jpeg",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/tarek-eid-5280b3392",
    github: "https://github.com/eng-tarek-cyber",
    facebook: "https://www.facebook.com/share/17Y2h3uZXm/",
    instagram: "https://www.instagram.com/tarek.eid.7393",
    whatsapp: "https://wa.me/201006494164",
  },
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    greeting: "Hello, I'm",
    name: "Tarek Ahmed",
    role: "Front-End Developer & Business Analytics Student",
    description:
      "I craft premium, responsive digital experiences that blend analytical thinking with pixel-perfect design — turning ideas into high-performance web products.",
    descriptionAr:
      "متخصص في بناء واجهات مستخدم احترافية تجمع بين دقة الأداء وجمال التصميم، مع رؤية تحليلية نابعة من دراستي لنظم المعلومات.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Node.js"],
  },
  about: {
    story:
      "I am Tarek Ahmed, an Information Systems student and Front-End Developer passionate about creating modern, responsive, and user-friendly websites. I enjoy combining clean design with functional code to build engaging digital experiences that solve real business problems.",
    experience:
      "2+ years of hands-on learning in web development, building dashboards, landing pages, and full responsive websites for clients and personal projects.",
    education:
      "Bachelor's student in Information Systems with a focus on Business Analytics — bridging data-driven decisions with elegant front-end engineering.",
    funFacts: [
      "I debug CSS at 2 AM and still love it.",
      "Cybersecurity enthusiast alongside front-end development.",
      "Fluent in Arabic & English — building for global clients.",
      "Coffee-powered coder from Kafr El Sheikh, Egypt.",
    ],
    stats: [
      { value: "2+", label: "Years Learning" },
      { value: "10+", label: "Projects Completed" },
      { value: "15+", label: "Technologies" },
      { value: "100%", label: "Client Focus" },
    ],
  },
  contact: {
    formSubmitEndpoint: "https://formsubmit.co/ajax/snamr015@gmail.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
