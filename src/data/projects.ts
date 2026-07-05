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
    githubUrl: "",

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
    title: "TechMart Dash",
    shortDescription:
      "A sleek e-commerce admin dashboard with a modern dark interface for sales, users, and inventory management.",
    description:
      "TechMart Dash is a comprehensive e-commerce dashboard featuring a modern, dark interface. It provides a clean overview of sales, users, and products, offering an efficient way to manage inventory and track business performance at a glance while ensuring a professional presence for any digital business.",
    category: "Dashboard",
    status: "Live",
    image: "/img/dashnew.png",
    gallery: ["/img/dashnew.png", "/img/dashbord.png"],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Chart.js",
      "Responsive Design",
      "Local Storage",
      "REST API",
    ],
    liveUrl: "https://eng-tarek-cyber.github.io/-/",
    githubUrl: "https://github.com/eng-tarek-cyber/-",
    overview: {
      problem:
        "Small e-commerce businesses need an affordable, intuitive dashboard to monitor sales, manage products, and track user activity without complex enterprise tools.",
      solution:
        "Built a lightweight, visually polished admin dashboard with dark UI, real-time-style metrics cards, and organized navigation for key business KPIs.",
      goals: [
        "Deliver a professional dark-themed admin experience",
        "Organize sales, users, and product data clearly",
        "Ensure fast load times on low-end devices",
        "Maintain responsive layout across all screen sizes",
      ],
      targetUsers: [
        "E-commerce store owners",
        "Startup founders",
        "Product managers",
        "Freelance developers showcasing admin UI skills",
      ],
    },
    features: [
      {
        title: "Sales Overview",
        description:
          "At-a-glance revenue metrics with trend indicators and period comparisons.",
        icon: "chart",
      },
      {
        title: "Product Management",
        description:
          "Organized product listings with status badges and inventory tracking.",
        icon: "package",
      },
      {
        title: "User Analytics",
        description:
          "User activity panels highlighting engagement and growth patterns.",
        icon: "users",
      },
      {
        title: "Dark UI Theme",
        description:
          "Premium dark interface reducing eye strain during extended use.",
        icon: "moon",
      },
      {
        title: "Responsive Layout",
        description:
          "Fully adaptive grid system for desktop, tablet, and mobile views.",
        icon: "smartphone",
      },
      {
        title: "Performance Optimized",
        description:
          "Minimal dependencies and optimized assets for fast page loads.",
        icon: "zap",
      },
    ],
    architecture: {
      frontend:
        "Vanilla HTML, CSS, and JavaScript with modular component-style sections and CSS Grid/Flexbox layouts.",
      backend:
        "Static front-end with mock data structures; designed for easy integration with Node.js/Express APIs.",
      database:
        "Client-side data simulation; architecture supports MongoDB or PostgreSQL backend integration.",
      authentication:
        "UI-ready login flow designed for JWT-based authentication integration.",
      api: "RESTful API structure planned for CRUD operations on products, users, and orders.",
      deployment:
        "GitHub Pages with optimized static assets and CDN-friendly structure.",
    },
    challenges: [
      "Creating a data-dense dashboard that remains readable on mobile screens.",
      "Balancing visual richness with performance on static hosting.",
      "Designing intuitive navigation for multiple admin sections.",
    ],
    lessonsLearned: [
      "Dark UI requires careful contrast ratios for accessibility compliance.",
      "Dashboard UX benefits from progressive disclosure — show summaries first, details on demand.",
      "Consistent spacing systems dramatically improve perceived quality.",
    ],
    performance: {
      seo: "Semantic HTML structure with descriptive meta tags and alt text on all images.",
      accessibility:
        "Keyboard-navigable elements, sufficient color contrast, and ARIA labels on interactive components.",
      performance:
        "Optimized images, minimal JavaScript bundle, and lazy loading for below-fold content.",
      responsive:
        "Mobile-first CSS with breakpoints at 640px, 768px, 1024px, and 1280px.",
      bestPractices:
        "Clean folder structure, reusable CSS variables, and commented code sections.",
    },
    futureImprovements: [
      "Real-time data sync with WebSocket connections",
      "User role management (admin, editor, viewer)",
      "Export reports to PDF and CSV",
      "Multi-language support (Arabic/English)",
      "Integration with payment gateways",
    ],
    relatedSlugs: ["studio-hub", "aqar-vision"],
  },
  {
    slug: "studio-hub",
    title: "Studio Hub",
    shortDescription:
      "A comprehensive creative agency platform showcasing professional services and diverse portfolios.",
    description:
      "Studio Hub is a comprehensive creative agency platform designed to showcase professional services and diverse portfolios. From web development to digital security, the studio provides high-quality solutions with a sleek, modern interface, ensuring a professional presence for any business or creative project.",
    category: "Agency",
    status: "Live",
    image: "/img/StudioHub.png",
    gallery: ["/img/StudioHub.png"],
    techStack: [
      "HTML5",
      "Bootstrap 5",
      "CSS3",
      "JavaScript",
      "Font Awesome",
      "Responsive Design",
    ],
    liveUrl: "https://eng-tarek-cyber.github.io/agency-new/",
    githubUrl: "https://github.com/eng-tarek-cyber/agency-new",
    overview: {
      problem:
        "Creative agencies need a compelling online presence that communicates expertise, builds trust, and converts visitors into clients.",
      solution:
        "Designed and developed a premium agency website with service showcases, portfolio sections, team highlights, and strong call-to-action flows.",
      goals: [
        "Create a premium agency brand identity online",
        "Showcase diverse service offerings clearly",
        "Build trust through professional design and social proof",
        "Optimize for lead generation and contact conversions",
      ],
      targetUsers: [
        "Small business owners seeking digital services",
        "Startups needing web development partners",
        "Creative professionals evaluating agencies",
        "International clients on freelance platforms",
      ],
    },
    features: [
      {
        title: "Service Showcase",
        description:
          "Beautifully designed service cards with icons and detailed descriptions.",
        icon: "briefcase",
      },
      {
        title: "Portfolio Gallery",
        description:
          "Curated project showcase with hover effects and category filtering.",
        icon: "image",
      },
      {
        title: "Team Section",
        description:
          "Professional team member profiles building credibility and trust.",
        icon: "users",
      },
      {
        title: "Contact Integration",
        description:
          "Multiple contact channels including form, email, and social links.",
        icon: "mail",
      },
      {
        title: "Bootstrap Grid",
        description:
          "Responsive 12-column grid ensuring perfect layout on all devices.",
        icon: "layout",
      },
      {
        title: "Smooth Animations",
        description: "Scroll-triggered animations enhancing the premium feel.",
        icon: "sparkles",
      },
    ],
    architecture: {
      frontend:
        "Bootstrap 5 framework with custom CSS overrides and JavaScript interactions.",
      backend:
        "Static site architecture; contact form ready for FormSubmit or custom API integration.",
      database:
        "No database required for static deployment; CMS-ready structure for future expansion.",
      authentication:
        "Not required for public-facing agency site; admin panel planned for future.",
      api: "Contact form submission via third-party service; expandable to custom REST endpoints.",
      deployment: "GitHub Pages with Bootstrap CDN and optimized local assets.",
    },
    challenges: [
      "Differentiating the agency brand in a crowded market through unique visual identity.",
      "Ensuring Bootstrap defaults feel custom and premium, not template-like.",
      "Balancing Arabic and English content requirements for bilingual clients.",
    ],
    lessonsLearned: [
      "Agency websites convert better with clear service hierarchy and prominent CTAs.",
      "Custom CSS on top of Bootstrap creates unique designs without reinventing the grid.",
      "Social proof sections significantly increase visitor engagement time.",
    ],
    performance: {
      seo: "Structured headings, meta descriptions, Open Graph tags, and keyword-rich content.",
      accessibility:
        "Bootstrap accessibility utilities, focus states, and semantic landmark regions.",
      performance:
        "CDN-loaded Bootstrap, compressed images, and deferred script loading.",
      responsive:
        "Bootstrap responsive utilities with custom mobile navigation.",
      bestPractices:
        "Component-based HTML sections, consistent naming conventions, and DRY CSS.",
    },
    futureImprovements: [
      "CMS integration for easy content updates",
      "Client testimonial slider with video support",
      "Blog section for SEO content marketing",
      "Dark/light theme toggle",
      "Multi-step project inquiry form",
    ],
    relatedSlugs: ["dashboard", "aqar-vision"],
  },
  {
    slug: "aqar-vision",
    title: "Aqār Vision",
    shortDescription:
      "A modern real estate platform showcasing premium residential units and luxury villas.",
    description:
      "Aqār Vision is a modern real estate platform showcasing premium residential units and luxury villas. It combines sleek design with a user-friendly interface to help users find their dream home with ease and style — characterized by responsiveness, ease of use, and attention to detail.",
    category: "Real Estate",
    status: "Live",
    image: "/img/gallery.png",
    gallery: ["/img/gallery.png", "/img/bach.jpg"],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
      "CSS Grid",
    ],
    liveUrl: "https://eng-tarek-cyber.github.io/boo5tstrapproject/",
    githubUrl: "https://github.com/eng-tarek-cyber/boo5tstrapproject",
    overview: {
      problem:
        "Real estate buyers struggle with cluttered listing sites that prioritize quantity over quality presentation and user experience.",
      solution:
        "Created a visually stunning property showcase platform with high-quality imagery, intuitive filtering, and a premium browsing experience.",
      goals: [
        "Present properties with magazine-quality visual layout",
        "Simplify property discovery with clear categorization",
        "Build trust through professional design and detailed listings",
        "Ensure flawless mobile experience for on-the-go browsing",
      ],
      targetUsers: [
        "Home buyers searching for residential properties",
        "Real estate investors evaluating opportunities",
        "Property agents showcasing listings",
        "Luxury home seekers expecting premium UX",
      ],
    },
    features: [
      {
        title: "Property Gallery",
        description:
          "High-resolution property images with zoom and carousel navigation.",
        icon: "image",
      },
      {
        title: "Smart Filtering",
        description:
          "Filter properties by type, price range, and location categories.",
        icon: "filter",
      },
      {
        title: "Detailed Listings",
        description:
          "Rich property cards with specs, amenities, and contact options.",
        icon: "home",
      },
      {
        title: "Responsive Design",
        description:
          "Pixel-perfect layouts from mobile phones to ultra-wide monitors.",
        icon: "smartphone",
      },
      {
        title: "Contact Integration",
        description:
          "Direct inquiry buttons connecting buyers with agents instantly.",
        icon: "phone",
      },
      {
        title: "Premium Aesthetics",
        description:
          "Luxury-focused color palette and typography elevating brand perception.",
        icon: "gem",
      },
    ],
    architecture: {
      frontend:
        "HTML5, CSS3, and JavaScript with Bootstrap grid and custom property card components.",
      backend:
        "Static front-end with structured JSON-ready data models for future API integration.",
      database:
        "Property data structured for MongoDB integration with geospatial indexing support.",
      authentication:
        "Agent login portal planned for property management dashboard.",
      api: "REST API design for property CRUD, search, and favorites functionality.",
      deployment: "GitHub Pages with image optimization and lazy loading.",
    },
    challenges: [
      "Showcasing large property images without sacrificing page load speed.",
      "Creating intuitive property comparison on small mobile screens.",
      "Designing a luxury aesthetic that works across diverse property types.",
    ],
    lessonsLearned: [
      "Real estate UX demands high-quality imagery as the primary conversion driver.",
      "Progressive image loading is essential for image-heavy property sites.",
      "Clear CTAs on every listing page increase inquiry rates significantly.",
    ],
    performance: {
      seo: "Property-specific meta tags, structured data for listings, and descriptive alt text.",
      accessibility:
        "Screen reader friendly property descriptions and keyboard-navigable galleries.",
      performance:
        "Lazy-loaded images, compressed assets, and minimal render-blocking resources.",
      responsive:
        "Fluid typography and adaptive image containers across all breakpoints.",
      bestPractices:
        "Semantic HTML5 sections, organized asset folders, and maintainable CSS architecture.",
    },
    futureImprovements: [
      "Interactive map integration with property pins",
      "Virtual tour and 360° photo support",
      "Mortgage calculator widget",
      "User favorites and saved searches",
      "Agent dashboard for listing management",
    ],
    relatedSlugs: ["dashboard", "studio-hub"],
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
