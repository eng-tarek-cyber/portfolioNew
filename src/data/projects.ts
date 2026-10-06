export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectArchitecture {
  frontend: string;
  backend: string;
  database: string;
  authentication: string;
  api: string;
  deployment: string;
}

export interface ProjectPerformance {
  seo: string;
  accessibility: string;
  performance: string;
  responsive: string;
  bestPractices: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  status: "Live" | "In Progress" | "Completed";
  image: string;
  gallery: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  overview: {
    problem: string;
    solution: string;
    goals: string[];
    targetUsers: string[];
  };
  features: ProjectFeature[];
  architecture: ProjectArchitecture;
  challenges: string[];
  lessonsLearned: string[];
  performance: ProjectPerformance;
  futureImprovements: string[];
  relatedSlugs: string[];
}

export const projects: Project[] = [
  {
    slug: "devsync-agency",
    title: "DevSync Agency",
    shortDescription:
      "A modern software agency platform developed collaboratively by our team, featuring a dynamic website and an admin dashboard powered by REST APIs.",

    description:
      "DevSync Agency is a collaborative team project built to represent a modern software agency. The platform consists of a responsive agency website and a powerful admin dashboard connected through REST APIs. The dashboard enables administrators to manage projects, services, clients, testimonials, and website content dynamically without modifying the source code. As a Frontend Developer, I contributed to building responsive UI components, integrating REST APIs, creating reusable components, and collaborating with the team using Git and GitHub to deliver a scalable, high-performance application.",

    category: "Agency",
    status: "Live",

    image: "/img/devsync-agency.png",

    gallery: ["/img/devsync-agency1.png", "/img/devsync-dashboard.png"],

    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Axios",
      "Framer Motion",
      "Responsive Design",
      "Git",
      "GitHub",
    ],

    liveUrl: "https://devsync-agency.vercel.app/",
    githubUrl: "https://github.com/ahmedsh3ban/DevSync-Official-Website.git",

    overview: {
      problem:
        "Software agencies require a professional online presence with dynamic content management, allowing administrators to update projects, services, clients, and other website content without changing the codebase.",

      solution:
        "As part of the development team, we built a modern agency website integrated with a custom admin dashboard through REST APIs. I was responsible for frontend development, responsive layouts, reusable components, and API integration while collaborating closely with other developers.",

      goals: [
        "Build a premium agency website",
        "Develop a dynamic admin dashboard",
        "Integrate frontend with REST APIs",
        "Deliver a fast and responsive experience",
        "Create a scalable architecture for future growth",
      ],

      targetUsers: [
        "Startups",
        "Business owners",
        "Corporate clients",
        "Software agencies",
      ],
    },

    features: [
      {
        title: "Modern Agency Website",
        description:
          "Professional website showcasing services, portfolio, team, and company information.",
        icon: "layout",
      },
      {
        title: "Admin Dashboard",
        description:
          "Manage projects, services, clients, testimonials, and website content through an intuitive dashboard.",
        icon: "layout-dashboard",
      },
      {
        title: "REST API Integration",
        description:
          "Website content is dynamically loaded and managed through backend REST APIs.",
        icon: "server",
      },
      {
        title: "Project & Client Management",
        description:
          "Add, edit, update, and organize projects and client information directly from the dashboard.",
        icon: "briefcase",
      },
      {
        title: "Responsive Design",
        description:
          "Optimized layouts providing an excellent experience across desktop, tablet, and mobile devices.",
        icon: "smartphone",
      },
      {
        title: "Team Collaboration",
        description:
          "Developed collaboratively using Git, GitHub, code reviews, and an organized team workflow.",
        icon: "users",
      },
    ],

    architecture: {
      frontend:
        "Next.js 15, React, TypeScript, Tailwind CSS, reusable components, and modern frontend architecture.",
      backend:
        "REST API powering the admin dashboard and dynamic website content.",
      database:
        "Database-driven content management for projects, services, clients, testimonials, and website data.",
      authentication:
        "Secure administrator authentication for dashboard access.",
      api: "REST APIs for managing website content, projects, clients, and services.",
      deployment:
        "Frontend deployed on Vercel with optimized production builds and fast global delivery.",
    },

    challenges: [
      "Collaborating efficiently within a development team.",
      "Maintaining a consistent UI across multiple pages and components.",
      "Integrating frontend components with backend REST APIs.",
      "Ensuring responsive layouts while displaying dynamic content.",
    ],

    lessonsLearned: [
      "Working within a team improves development speed and code quality.",
      "Reusable components simplify maintenance in large-scale applications.",
      "Git workflows and pull requests are essential for collaborative development.",
      "Well-designed API integration creates scalable and maintainable applications.",
    ],

    performance: {
      seo: "Semantic HTML, optimized metadata, Open Graph tags, and search-engine-friendly architecture.",
      accessibility:
        "Keyboard navigation, semantic elements, accessible color contrast, and ARIA support.",
      performance:
        "Optimized images, lazy loading, efficient API requests, and code splitting.",
      responsive:
        "Mobile-first responsive design with adaptive layouts across all devices.",
      bestPractices:
        "Component-based architecture, clean TypeScript code, reusable UI, Git workflow, and scalable project structure.",
    },

    futureImprovements: [
      "Role-based access control",
      "Real-time notifications",
      "Advanced analytics dashboard",
      "Multi-language support",
      "Dark and light theme switcher",
      "File and media management",
    ],

    relatedSlugs: ["dashboard", "studio-hub", "bright-smile", "shop-co"],
  },
  {
    slug: "bright-smile",
    title: "Bright Smile",
    shortDescription:
      "A modern dental clinic website designed to showcase services, doctors, and simplify appointment booking.",
    description:
      "Bright Smile is a modern dental clinic website built to provide patients with a seamless browsing experience. The website highlights dental services, introduces the medical team, presents patient-focused information, and encourages visitors to book appointments through a clean, responsive, and professional interface.",
    category: "Healthcare",
    status: "Live",
    image: "/img/bright-smile.png",
    gallery: ["/img/bright-smile.png"],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    liveUrl: "https://bright-smil.vercel.app/",
    githubUrl: "https://github.com/eng-tarek-cyber/bright-smile",
    overview: {
      problem:
        "Dental clinics need a professional online presence that builds trust, presents services clearly, and makes it easy for patients to schedule appointments.",
      solution:
        "Developed a responsive and visually appealing dental clinic website featuring service sections, doctor profiles, modern UI, and clear call-to-action areas for appointment booking.",
      goals: [
        "Build trust with new patients",
        "Showcase dental services professionally",
        "Improve online visibility",
        "Increase appointment requests",
      ],
      targetUsers: [
        "Dental clinics",
        "Patients seeking dental care",
        "Families",
        "Healthcare providers",
      ],
    },
    features: [
      {
        title: "Services Section",
        description:
          "Clearly organized dental treatments with detailed information.",
        icon: "stethoscope",
      },
      {
        title: "Doctor Profiles",
        description:
          "Professional presentation of dentists and their expertise.",
        icon: "user",
      },
      {
        title: "Appointment CTA",
        description:
          "Prominent call-to-action encouraging visitors to book appointments.",
        icon: "calendar",
      },
      {
        title: "Responsive Design",
        description:
          "Optimized experience across desktop, tablet, and mobile devices.",
        icon: "smartphone",
      },
      {
        title: "Modern UI",
        description: "Clean healthcare-inspired design with smooth animations.",
        icon: "sparkles",
      },
      {
        title: "Fast Performance",
        description:
          "Optimized assets and lightweight components for fast loading.",
        icon: "zap",
      },
    ],
    architecture: {
      frontend:
        "Next.js 15, TypeScript, Tailwind CSS, and reusable React components.",
      backend: "Static frontend ready for future API integration.",
      database: "No database required in the current version.",
      authentication: "Not required for public users.",
      api: "Prepared for future appointment booking API integration.",
      deployment: "Vercel with optimized static assets.",
    },
    challenges: [
      "Creating a healthcare-focused design that builds trust.",
      "Balancing modern aesthetics with accessibility.",
      "Maintaining high performance while using animations.",
    ],
    lessonsLearned: [
      "Healthcare websites require clear information hierarchy.",
      "Simple navigation improves patient engagement.",
      "Responsive layouts are essential for mobile users.",
    ],
    performance: {
      seo: "Semantic HTML, optimized metadata, and descriptive headings.",
      accessibility:
        "Accessible color contrast, keyboard navigation, and semantic landmarks.",
      performance: "Optimized images, lazy loading, and minimal JavaScript.",
      responsive: "Mobile-first responsive design for all screen sizes.",
      bestPractices:
        "Reusable components, clean code structure, and scalable architecture.",
    },
    futureImprovements: [
      "Online appointment booking system",
      "Patient dashboard",
      "Multi-language support",
      "Blog for dental health tips",
      "Google Maps integration",
    ],
    relatedSlugs: ["dashboard", "studio-hub", "aqar-vision"],
  },
  {
    slug: "shopco",
    title: "ShopCo",
    shortDescription:
      "A modern e-commerce platform with product browsing, wishlist, shopping cart, secure checkout, and user authentication.",

    description:
      "ShopCo is a responsive e-commerce platform built with React that delivers a seamless online shopping experience. The application allows users to browse products, search and filter items, manage wishlists and shopping carts, authenticate securely, and complete the checkout process through a clean, modern interface.",

    category: "E-Commerce",

    status: "Live",

    image: "/img/shopco.png",

    gallery: [
      "/img/shopco1.png",
      "/img/shopco-products.png",
      "/img/shopco-cart.png",
      "/img/shopco-details.png",
    ],

    techStack: [
      "React",
      "Vite",
      "React Router",
      "Context API",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],

    liveUrl: "https://shop-co-one-mu.vercel.app/",

    githubUrl: "https://github.com/eng-tarek-cyber/ShopCo",

    overview: {
      problem:
        "Modern online stores require a fast, responsive, and intuitive shopping experience that helps customers quickly discover products, manage purchases, and complete orders with minimal friction.",

      solution:
        "Built a React-based e-commerce application featuring advanced product browsing, search, wishlist management, shopping cart functionality, authentication, and a streamlined checkout flow.",

      goals: [
        "Create a modern online shopping experience",
        "Improve product discovery with search and filtering",
        "Provide seamless cart and wishlist management",
        "Deliver responsive performance across all devices",
      ],

      targetUsers: [
        "Online shoppers",
        "Fashion and retail customers",
        "Small and medium businesses",
        "E-commerce startups",
      ],
    },

    features: [
      {
        title: "Product Catalog",
        description:
          "Browse products with organized layouts and responsive product cards.",
        icon: "shopping-bag",
      },
      {
        title: "Advanced Search",
        description:
          "Quickly search products and discover items through an optimized search experience.",
        icon: "search",
      },
      {
        title: "Category Filtering",
        description:
          "Filter products by categories for faster product discovery.",
        icon: "filter",
      },
      {
        title: "Wishlist",
        description: "Save favorite products for future purchases.",
        icon: "heart",
      },
      {
        title: "Shopping Cart",
        description:
          "Manage quantities, remove products, and review purchases before checkout.",
        icon: "shopping-cart",
      },
      {
        title: "Secure Checkout",
        description:
          "Simple checkout flow designed for a smooth purchasing experience.",
        icon: "credit-card",
      },
      {
        title: "Authentication",
        description:
          "Login, registration, and protected pages for authenticated users.",
        icon: "shield",
      },
      {
        title: "Responsive Design",
        description:
          "Optimized layouts for desktop, tablet, and mobile devices.",
        icon: "smartphone",
      },
    ],

    architecture: {
      frontend:
        "React with reusable component architecture powered by Vite for fast development.",

      backend:
        "Frontend-focused architecture prepared for REST API integration.",

      database:
        "Context-based state management with architecture ready for Firebase, MongoDB, or SQL backends.",

      authentication: "Protected routes with authentication-ready structure.",

      api: "Prepared for RESTful product, authentication, and order APIs.",

      deployment: "Vercel deployment with optimized production builds.",
    },

    challenges: [
      "Managing global shopping cart state efficiently.",
      "Keeping product filtering and searching performant.",
      "Building reusable UI components across multiple pages.",
      "Maintaining responsive layouts for complex e-commerce interfaces.",
    ],

    lessonsLearned: [
      "Context API simplifies global state management for shopping carts.",
      "Reusable components greatly improve maintainability.",
      "Route protection improves application security.",
      "Optimized component structure leads to better scalability.",
    ],

    performance: {
      seo: "Semantic HTML structure with optimized page hierarchy.",

      accessibility:
        "Keyboard-friendly navigation and accessible interactive elements.",

      performance:
        "Built with Vite for fast loading and optimized bundle sizes.",

      responsive:
        "Fully responsive layouts across desktop, tablet, and mobile devices.",

      bestPractices:
        "Component-based architecture, reusable code, and clean project organization.",
    },

    futureImprovements: [
      "Payment gateway integration",
      "Order history dashboard",
      "Admin panel",
      "Product reviews and ratings",
      "Dark mode",
      "Coupon and discount system",
      "Product recommendations",
      "Multi-language support",
    ],

    relatedSlugs: ["dashboard", "studio-hub", "aqar-vision"],
  },

  {
    slug: "dashboard",
    title: "Enterprise Admin Dashboard",
    shortDescription:
      "A production-ready SaaS admin dashboard with authentication, analytics, CRUD modules, interactive charts, and a reusable design system.",

    description:
      "Enterprise Admin Dashboard is a modern SaaS dashboard built with React 19, TypeScript, Tailwind CSS v4, and Recharts. It features secure authentication, analytics, user, product, and order management with full CRUD operations, responsive layouts, dark/light mode, and a scalable component architecture inspired by enterprise platforms like Stripe, Vercel, and Linear.",

    category: "Dashboard",
    status: "Live",

    image: "/img/dashnew.png",
    gallery: ["/img/dashnew.png", "/img/dashbord.png"],

    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Recharts",
      "React Router",
      "CSS Variables",
      "Responsive Design",
      "Component Architecture",
    ],

    liveUrl: "https://enterprise-admin-dashboard-phi.vercel.app/",
    githubUrl:
      "https://github.com/eng-tarek-cyber/Enterprise-Admin-Dashboard.git",

    overview: {
      problem:
        "Businesses need a scalable admin dashboard to manage users, products, orders, and business analytics without relying on expensive enterprise software.",

      solution:
        "Developed a production-ready enterprise dashboard featuring authentication, analytics, CRUD management modules, responsive layouts, reusable UI components, and modern UX patterns.",

      goals: [
        "Build a scalable SaaS dashboard architecture",
        "Create a reusable enterprise design system",
        "Deliver an intuitive user experience",
        "Support desktop, tablet, and mobile devices",
      ],

      targetUsers: [
        "SaaS companies",
        "Business administrators",
        "Startup founders",
        "Product managers",
        "Frontend developers",
      ],
    },

    features: [
      {
        title: "Authentication",
        description:
          "Complete authentication flow with login, forgot password, remember me, password visibility toggle, and OAuth-ready interface.",
        icon: "shield",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Interactive KPI cards, revenue analytics, sales reports, and multiple business charts powered by Recharts.",
        icon: "chart",
      },
      {
        title: "User Management",
        description:
          "Advanced CRUD operations with search, filtering, pagination, edit, delete, and role management.",
        icon: "users",
      },
      {
        title: "Product Management",
        description:
          "Grid and table views, category filters, product details, inventory management, and CRUD functionality.",
        icon: "package",
      },
      {
        title: "Orders Management",
        description:
          "Order tracking with status badges, detail drawer, order timeline, and context-aware actions.",
        icon: "shopping-cart",
      },
      {
        title: "Responsive Design System",
        description:
          "30+ reusable UI components with dark/light mode, CSS variables, and responsive layouts.",
        icon: "layout",
      },
    ],

    architecture: {
      frontend:
        "React 19, TypeScript, Tailwind CSS v4, reusable component architecture, and responsive layouts.",

      backend:
        "Frontend architecture prepared for REST API integration with authentication and CRUD operations.",

      database:
        "Uses mock data with scalable structure ready for PostgreSQL, MongoDB, or any REST backend.",

      authentication:
        "Complete authentication UI prepared for JWT or OAuth integration with protected routes.",

      api: "REST API architecture designed for users, products, orders, analytics, and authentication.",

      deployment:
        "Optimized for Vercel deployment with production-ready configuration.",
    },

    challenges: [
      "Designing an enterprise-level dashboard while maintaining scalability.",
      "Building reusable UI components without external UI libraries.",
      "Managing complex CRUD workflows and responsive layouts.",
      "Creating consistent dark/light themes using CSS Variables.",
    ],

    lessonsLearned: [
      "Component-driven architecture significantly improves maintainability.",
      "Reusable design systems accelerate feature development.",
      "Strong TypeScript typing reduces runtime errors.",
      "Responsive dashboards require different UX patterns across devices.",
    ],

    performance: {
      seo: "Semantic HTML, optimized metadata, and accessibility-focused structure.",

      accessibility:
        "Keyboard navigation, focus states, ARIA-friendly components, and WCAG-compliant color contrast.",

      performance:
        "Optimized rendering, reusable components, lazy loading, and minimal unnecessary re-renders.",

      responsive:
        "Fully responsive across desktop, tablet, and mobile with adaptive layouts.",

      bestPractices:
        "Modern React architecture, TypeScript, reusable components, clean folder structure, and scalable codebase.",
    },

    futureImprovements: [
      "Real backend integration",
      "JWT authentication",
      "Role-based access control (RBAC)",
      "Real-time analytics with WebSockets",
      "Export reports to PDF & CSV",
      "Internationalization (i18n)",
      "Multi-tenant support",
    ],

    relatedSlugs: ["studio-hub", "aqar-vision"],
  },
  {
    slug: "te-digital",
    title: "T.E Digital",
    shortDescription:
      "A modern digital agency platform providing marketing, web development, and digital solutions for businesses across Egypt and the Arab world.",
    description:
      "T.E Digital is a modern digital agency platform built to showcase professional digital marketing, web development, and business solutions. The platform presents the agency's services, portfolio, and contact channels through a modern responsive interface designed to build trust, generate leads, and help businesses establish a strong digital presence.",
    category: "Agency",
    status: "Live",
    image: "/img/TEDigital.png",
    gallery: ["/img/TEDigital1.png"],
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Web3Forms",
      "WhatsApp Integration",
      "SEO",
      "Analytics",
    ],
    liveUrl: "https://te-digital-lilac.vercel.app/",
    githubUrl: "https://github.com/eng-tarek-cyber/te-digital-website.git",
    overview: {
      problem:
        "Many small businesses and local brands need professional digital marketing and web solutions but struggle to present their services online and convert visitors into potential clients.",
      solution:
        "Designed and developed a modern digital agency website that clearly presents T.E Digital services, showcases real projects, and provides direct lead-generation channels through contact forms, WhatsApp, email, and social media.",
      goals: [
        "Build a professional digital presence for T.E Digital",
        "Clearly showcase marketing, development, and web services",
        "Present real client and portfolio projects professionally",
        "Generate qualified leads through multiple contact channels",
        "Create a responsive and trustworthy experience for Egyptian and Arab businesses",
      ],
      targetUsers: [
        "Small and medium-sized business owners",
        "E-commerce businesses",
        "Restaurants and local businesses",
        "Companies looking for website development",
        "Businesses interested in digital marketing and paid advertising",
        "Entrepreneurs and startups across Egypt and the Arab world",
      ],
    },
    features: [
      {
        title: "Services Showcase",
        description:
          "Clear presentation of digital marketing, web development, website design, and business solutions.",
        icon: "briefcase",
      },
      {
        title: "Real Projects Portfolio",
        description:
          "Professional portfolio section showcasing real websites, dashboards, e-commerce platforms, and business projects.",
        icon: "image",
      },
      {
        title: "Lead Generation",
        description:
          "Integrated contact form designed to collect potential client information and project requirements.",
        icon: "users",
      },
      {
        title: "WhatsApp Integration",
        description:
          "Direct WhatsApp communication allowing potential clients to quickly start a business conversation.",
        icon: "message-circle",
      },
      {
        title: "Contact & Social Channels",
        description:
          "Multiple communication options including email, WhatsApp, and social media links.",
        icon: "mail",
      },
      {
        title: "Responsive Design",
        description:
          "Fully responsive interface optimized for mobile, tablet, and desktop devices.",
        icon: "smartphone",
      },
      {
        title: "Arabic RTL Experience",
        description:
          "Arabic-first interface with RTL support designed for businesses and customers in Egypt and the Arab world.",
        icon: "languages",
      },
      {
        title: "Analytics Tracking",
        description:
          "User interaction tracking for important actions such as lead submissions and WhatsApp clicks.",
        icon: "chart-no-axes-combined",
      },
    ],
    architecture: {
      frontend:
        "Modern React-based frontend with reusable sections, responsive layouts, and utility-first styling.",
      backend:
        "Frontend-focused architecture with third-party form handling for lead submissions; custom backend integration can be added in the future.",
      database:
        "No dedicated database is required for the current marketing website; the architecture is prepared for future CRM or CMS integration.",
      authentication: "Not required for the public-facing agency website.",
      api: "Web3Forms is used for contact form submission, with WhatsApp and email integrations for direct communication.",
      deployment:
        "Production deployment optimized for modern web hosting with responsive assets and SEO-ready configuration.",
    },
    challenges: [
      "Creating a professional agency identity that feels trustworthy while remaining modern and accessible.",
      "Designing a clear service hierarchy that helps potential clients quickly understand what T.E Digital offers.",
      "Presenting multiple project categories without making the portfolio section feel crowded.",
      "Building an effective lead-generation flow with simple contact options and minimal friction.",
      "Supporting Arabic RTL content while maintaining a polished visual experience.",
    ],
    lessonsLearned: [
      "Clear service positioning is essential for converting agency website visitors into potential clients.",
      "Real project showcases are more effective at building trust than generic portfolio examples.",
      "Multiple direct contact channels such as WhatsApp, email, and forms reduce friction during the lead-generation process.",
      "Responsive and mobile-first design is critical for local business websites.",
      "Tracking important user interactions provides valuable insight into which conversion paths perform best.",
    ],
    performance: {
      seo: "SEO-focused page structure, descriptive metadata, semantic HTML, optimized content, and social sharing metadata.",
      accessibility:
        "Semantic sections, accessible interactive elements, readable typography, and responsive layouts.",
      performance:
        "Optimized images, reusable components, lightweight assets, and efficient client-side interactions.",
      responsive:
        "Responsive layouts designed for mobile, tablet, and desktop screen sizes.",
      bestPractices:
        "Reusable React components, consistent naming conventions, modular structure, responsive design principles, and maintainable frontend architecture.",
    },
    futureImprovements: [
      "Custom CRM dashboard for managing leads",
      "Database integration for client inquiries and project requests",
      "Admin panel for managing services and portfolio projects",
      "Online project quotation system",
      "Client testimonials and reviews management",
      "Blog and SEO content management system",
      "Advanced conversion analytics dashboard",
      "Dark/light theme customization",
    ],
    relatedSlugs: ["studio-hub", "dashboard", "bright-smile", "shop-co"],
  },

  {
    slug: "abyssal-elegance",
    title: "Abyssal Elegance",

    shortDescription:
      "An AI-powered luxury restaurant platform featuring a modern responsive website, intelligent recommendations, and a production-ready backend built with React and Node.js.",

    description:
      "Abyssal Elegance is a full-stack luxury restaurant platform designed to provide a premium digital dining experience. The application combines a modern responsive frontend with an Express.js backend and Google Gemini AI integration to deliver intelligent restaurant recommendations. As a Frontend Developer, I contributed to building reusable UI components, creating responsive layouts, integrating AI-powered features, and preparing the application for production deployment using Docker and Railway.",

    category: "Restaurant / AI Platform",
    status: "Live",

    image: "/img/abyssal-elegance.png",

    gallery: [
      "/img/abyssal-home.png",
      "/img/abyssal-menu.png",
      "/img/abyssal-ai.png",
    ],

    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "Google Gemini AI",
      "REST API",
      "Tailwind CSS",
      "Responsive Design",
      "Docker",
      "Railway",
      "Git",
      "GitHub",
    ],

    liveUrl: "https://abyssa-l-elegance-s3umr3.cranl.net",
    githubUrl: "https://github.com/eng-tarek-cyber/abyssa-l-elegance",

    overview: {
      problem:
        "Luxury restaurants need a modern digital platform that represents their brand, improves customer experience, and provides intelligent assistance for choosing dishes and services.",

      solution:
        "Built a full-stack restaurant platform with a premium user interface, AI-powered recommendations using Google Gemini, and a scalable backend architecture using Node.js and Express.",

      goals: [
        "Create a premium restaurant digital experience",
        "Build a responsive and modern user interface",
        "Integrate AI-powered restaurant assistance",
        "Develop a scalable backend API",
        "Deploy the application using modern cloud technologies",
      ],

      targetUsers: [
        "Restaurant customers",
        "Food businesses",
        "Luxury dining brands",
        "Restaurant owners",
      ],
    },

    features: [
      {
        title: "Luxury Restaurant Website",
        description:
          "Modern and elegant website showcasing restaurant atmosphere, menu, services, and brand identity.",
        icon: "layout",
      },

      {
        title: "AI Restaurant Assistant",
        description:
          "Integrated Google Gemini AI to provide intelligent recommendations and interactive customer experiences.",
        icon: "sparkles",
      },

      {
        title: "Responsive Design",
        description:
          "Fully responsive layouts optimized for desktop, tablet, and mobile devices.",
        icon: "smartphone",
      },

      {
        title: "Backend API",
        description:
          "Express.js backend providing secure API endpoints and application services.",
        icon: "server",
      },

      {
        title: "Production Deployment",
        description:
          "Configured Docker deployment with Railway cloud hosting and production environment setup.",
        icon: "cloud",
      },

      {
        title: "Performance Optimization",
        description:
          "Optimized build process using Vite, TypeScript, and modern frontend practices.",
        icon: "zap",
      },
    ],

    architecture: {
      frontend:
        "React, TypeScript, Vite, reusable components, responsive UI architecture, and modern frontend practices.",

      backend:
        "Node.js and Express.js backend handling APIs and server-side functionality.",

      database:
        "API-based architecture prepared for future database integration.",

      authentication: "Environment-based configuration for secure API access.",

      api: "REST API endpoints supporting backend communication and AI features.",

      deployment:
        "Dockerized production deployment hosted on Railway with optimized server configuration.",
    },

    challenges: [
      "Integrating Google Gemini AI into a real-world application.",
      "Building a premium responsive design from scratch.",
      "Configuring production deployment with Docker and Railway.",
      "Managing frontend and backend communication efficiently.",
    ],

    lessonsLearned: [
      "AI integration can significantly improve modern user experiences.",
      "Production deployment requires proper environment and server configuration.",
      "Reusable components improve scalability and maintainability.",
      "Cloud deployment workflows are essential for modern applications.",
    ],

    performance: {
      seo: "Optimized metadata, semantic HTML structure, and search-engine-friendly architecture.",

      accessibility:
        "Responsive layouts, semantic elements, and accessible user interactions.",

      performance:
        "Optimized Vite builds, efficient asset handling, and production-ready server configuration.",

      responsive:
        "Mobile-first responsive design adapting across all screen sizes.",

      bestPractices:
        "TypeScript usage, component-based architecture, clean code structure, Git workflow, Docker deployment, and scalable development practices.",
    },

    futureImprovements: [
      "Online table reservation system",
      "Customer authentication",
      "Restaurant dashboard",
      "Online ordering system",
      "Payment integration",
      "Multi-language support",
      "Advanced AI food recommendations",
    ],

    relatedSlugs: ["devsync-agency", "bright-smile", "shop-co", "dashboard"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 3): Project[] {
  const project = getProjectBySlug(slug);
  if (!project) return projects.slice(0, count);
  return project.relatedSlugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is Project => p !== undefined)
    .slice(0, count);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
