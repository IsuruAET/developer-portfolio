import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Database,
  GraduationCap,
  Heart,
  Rocket,
  Server,
  Sparkles,
  TestTubes,
  Zap,
} from "lucide-react";
import ianacareBanner from "../assets/images/ianacare-banner.png";
import incentivioBanner from "../assets/images/incentivio-admin-portal-banner.png";
import klarnaBanner from "../assets/images/klarna-app-banner.png";
import surroundInsuranceBanner from "../assets/images/surround-insurance-banner.png";
import financeTrackerBanner from "../assets/images/finance-tracker-banner.png";
import interviewPrepAIBanner from "../assets/images/interview-prep-ai-banner.png";
import proStoreBanner from "../assets/images/pro-store-banner.png";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Creating beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-react-blue" }, // blue
      { name: "TypeScript", level: 90, color: "bg-typescript-blue" }, // blue
      { name: "Next.js", level: 80, color: "bg-nextjs-gray" }, // gray
      { name: "Redux", level: 90, color: "bg-redux-purple" }, // purple
      { name: "Material UI", level: 85, color: "bg-material-ui-blue" }, // blue
      { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" }, // cyan
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust sever-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-nodejs-green" }, // green
      { name: "Express", level: 85, color: "bg-express-gray" }, // gray
      { name: "REST APIs", level: 90, color: "bg-rest-apis-orange" }, // orange
      { name: "OpenAI", level: 70, color: "bg-openai-gray" }, // gray
      { name: "Kafka", level: 60, color: "bg-kafka-green" }, // green
      { name: "WebSockets", level: 60, color: "bg-websockets-yellow" }, // yellow
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 90, color: "bg-mongodb-green" }, // green
      { name: "Mongoose", level: 80, color: "bg-mongoose-red" }, // red
      { name: "PostgreSQL", level: 80, color: "bg-postgresql-indigo" }, // indigo (blueish)
      { name: "MySQL", level: 80, color: "bg-mysql-cyan" }, // cyan (light blue)
      { name: "Prisma", level: 70, color: "bg-prisma-green" }, // purple
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Git", level: 90, color: "bg-git-gray" }, // gray
      { name: "AWS", level: 70, color: "bg-aws-orange" }, // orange
      { name: "Vercel", level: 80, color: "bg-vercel-gray" }, // gray
      { name: "Docker", level: 60, color: "bg-docker-blue" }, // blue
      { name: "Terraform", level: 50, color: "bg-terraform-purple" }, // purple
    ],
  },
  {
    title: "Testing",
    icon: TestTubes,
    description: "Testing applications to ensure quality",
    skills: [
      { name: "Jest", level: 80, color: "bg-jest-red" }, // red
      { name: "Cypress", level: 80, color: "bg-cypress-green" }, // green
      { name: "Postman", level: 80, color: "bg-postman-orange" }, // orange
      { name: "Statsig", level: 60, color: "bg-statsig-gray" }, // gray
      { name: "Storybook", level: 70, color: "bg-storybook-rose" }, // rose
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Vite",
  "Axios",
  "Zod",
  "Express",
  "Luxon",
  "Pino",
  "Passport",
  "Stripe",
  "Codecov",
  "Figma",
  "Notion",
  "Slack",
  "Jira",
  "Shortcut",
  "VSCode",
  "CursorAI",
];

export const STATS = [
  { number: "20+", label: "Projects Completed" },
  { number: "6+", label: "Years of Experience" },
  { number: "30+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Ianacare Web Portal",
    description:
      "A supportive caregiving platform offering coordinated care tools, shared tasks, resources, and communication features to simplify managing and organizing family caregiving responsibilities.",
    image: ianacareBanner,
    tags: ["React", "JavaScript", "MUI", "Redux Saga"],
    liveUrl: "https://app.ianacare.com/",
    githubUrl: "#",
    featured: true,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Incentivio Web Admin Portal",
    description:
      "A powerful restaurant-focused admin dashboard enabling digital ordering, loyalty management, marketing automation, and analytics to enhance customer engagement and operational efficiency.",
    image: incentivioBanner,
    tags: ["React", "TypeScript", "MUI", "RTK Query", "Cypress", "Jest"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Web Development",
  },
  {
    id: 3,
    title: "Klarna Media Integration Module",
    description:
      "A flexible media integration module featuring a pluggable React carousel with Shadow DOM and interstitial product enhancements to streamline Klarna’s publish-anywhere experience.",
    image: klarnaBanner,
    tags: [
      "React",
      "JavaScript",
      "Node/Express",
      "PostgreSQL",
      "Jest",
      "Puppeteer",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack Development",
  },
  {
    id: 4,
    title: "Surround Insurance Web App",
    description:
      "A web-based insurance platform enabling consumers to design and customize insurance products, offering personalized coverage options and seamless user experience.",
    image: surroundInsuranceBanner,
    tags: ["React", "JavaScript", "MUI", "Tailwind CSS", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web Development",
  },
  {
    id: 5,
    title: "Finance Tracker",
    description:
      "A finance tracker app that allows users to track their income and expenses, and get insights on their spending habits.",
    image: financeTrackerBanner,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Node/Express",
      "MongoDB",
    ],
    liveUrl: "https://finance-tracker-frontend-kappa.vercel.app/",
    githubUrl: "https://github.com/IsuruAET/finance-tracker",
    featured: true,
    category: "Full Stack Development",
  },
  {
    id: 6,
    title: "Interview Prp AI",
    description:
      "An AI-powered interview preparation app enabling users to practice questions, receive performance insights, and improve skills using OpenAI guidance.",
    image: interviewPrepAIBanner,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node/Express",
      "React Query",
      "MongoDB",
      "OpenAI",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/IsuruAET/interview-prep-ai",
    featured: false,
    category: "Full Stack Development",
  },
  {
    id: 7,
    title: "Pro-Store E-Commerce Website",
    description:
      "A modern e-commerce website built with React, TypeScript, and Tailwind CSS, featuring a responsive design, product catalog, shopping cart, and checkout process.",
    image: proStoreBanner,
    tags: ["Next.js", "TypeScript", "Shadcn/UI", "PostgreSQL", "Prisma"],
    liveUrl: "https://prostore-green-tau.vercel.app/",
    githubUrl: "https://github.com/IsuruAET/prostore",
    featured: true,
    category: "Full Stack Development",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2014",
    title: "B.Sc Special(Hons), Software Engineering",
    company: "Sri Lanka Institute of Information Technology",
    description:
      "Graduated BSc (Hons) Software Engineering, SLIIT (2014–2018). During my time there, I gained a strong foundation in software development, programming languages, and software engineering principles. Final year project: Eduscope – Interactive Whiteboard (Real-time), where I mainly handled the research.",
    icon: GraduationCap,
    color: "bg-lime-500",
  },
  {
    year: "2017",
    title: "Software Engineering Trainee",
    company: "LOLC Technologies Ltd",
    description:
      "Completed a 10-month training program involving Oracle-to-Jasper report conversion, matrix Jasper report optimization, server configuration, finance app maintenance, and real-time mobile app GUI development using Java, PL/SQL, and Jasper.",
    icon: Briefcase,
    color: "bg-yellow-500",
  },
  {
    year: "2018",
    title: "Software Engineering Trainee",
    company: "Aeturnum Lanka (Pvt) Ltd",
    description:
      "Started at Aeturnum with a strong MERN-focused training program, completing a one-year trainee period in React and JavaScript, which provided a solid foundation and led to a double promotion based on performance. Worked on multiple frontend projects involving Angular-to-React migration (CX-Workout), implementing reusable components, improved layouts, map interactions, modals, and client pages with search/sort. Additionally contributed to a retail system (Kaching) by delivering new features, optimizing existing code, improving error handling, fixing bugs, and introducing a reusable alphabetized dropdown component for consistent UX across the application.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2019",
    title: "Software Engineer",
    company: "Aeturnum Lanka (Pvt) Ltd",
    description:
      "Delivered key features over a 2-year period across survey visualization (Hopewell), insurance (Surround Insurance), and React boilerplate projects, including multi-survey architecture, caching, encrypted session handling, CSV processing, and Nivo-based dashboards. Built secure insurance customization flows with Stripe, Tailwind, AWS deployment, and best-practice routing. Also introduced a fully configured React–TypeScript boilerplate with routing, internationalization, Redux patterns, Axios setup, Tailwind, and Cypress to standardize development.",
    icon: Rocket,
    color: "bg-green-500",
  },
  {
    year: "2021",
    title: "Senior Software Engineer",
    company: "Aeturnum Lanka (Pvt) Ltd",
    description:
      "Contributed over a 2-year period to Klarna’s AdTech publishing solution, building responsive product widgets, interstitial layouts, microservices, and event integrations while improving logging, testing, Kafka pipelines, and Terraform-based RDS. Gained a valuable opportunity to work with the world-renowned company Klarna, also supporting MERN consulting for US teams and improving overall reliability with automated tests and refined engineering practices.",
    icon: Rocket,
    color: "bg-pink-500",
  },
  {
    year: "2023",
    title: "Associate Technical Lead",
    company: "Aeturnum Lanka (Pvt) Ltd",
    description:
      "Implemented restaurant app (Incentivio) features over a 2-year period, including scheduling, email templates, payment reports, reusable components, feature gating, Cypress tests, Storybook documentation, and integrations with SendGrid, Unlayer, FullCalendar, and Swiper.js. Additionally, performed AI-driven R&D (Veleer) by creating pluggable chart components, integrating Apache Superset, and guiding teams in adopting AI-assisted development using tools like OpenAI and Claude.",
    icon: Award,
    color: "bg-cyan-500",
  },
  {
    year: "2025",
    title: "Technical Lead",
    company: "Aeturnum Lanka (Pvt) Ltd",
    description:
      "Leading AI initiatives by developing predictive analytics models, RAG prototypes, and LLM-integrated workflows while supporting team adoption of AI tools. Additionally, enhancing the Ianacare platform through improved CarePlan workflows, refined feedback modules, component refactoring, bug resolution, and UI consistency across devices.",
    icon: Zap,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Code2,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Building AI-powered solutions to automate tasks and improve efficiency",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/IsuruGodakanda",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://au.linkedin.com/in/isuru-godakanda",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  // {
  //   name: "Twitter",
  //   icon: FiTwitter,
  //   url: "",
  //   color: "hover:text-sky-400",
  //   bgColor: "hover:bg-sky-500/10",
  // },
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:isurugoaus93@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+61 46 769 0467",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "isurugoaus93@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "1/53, Moonah St, Warrnambool, VIC 3280, Australia",
  },
];

export const NAV_ITEMS = ["Home", "Skills", "Projects", "About", "Contact"];
