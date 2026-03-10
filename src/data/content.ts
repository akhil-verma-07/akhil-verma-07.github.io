import ssrimg from "../assets/images/ssr_blog.jpg";
import closureimg from "../assets/images/closure.jpeg";
import r19 from "../assets/images/react-19.jpeg";
import ssr from "../assets/images/ssr.png";

export const personalInfo = {
  name: "Akhil Verma",
  roles: ["Web Developer", "Full Stack Developer"],
  email: "v.akhil.m@gmail.com",
  phone: "+91 - 9997714831",
  location: "Gurugram, India",
  about: {
    headline: "6+ Years Experience in Web Development",
    description:
      "Creative Frontend Developer with a passion for crafting interactive, responsive, and user-friendly web experiences. Skilled in React, JavaScript, and modern UI/UX principles, I transform ideas into seamless digital solutions. Constantly learning, improving, and building innovative web applications.",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/akhil-verma-a935b4a0/",
    github: "https://github.com/akhil-verma-07",
  },
  seo: {
    title: "Akhil Verma - Software Developer | Home",
    description:
      "I'm Akhil Verma, a frontend developer specializing in React, Angular, and modern web technologies. Explore my projects and skills here!",
    keywords:
      "react developer,MEAN & MERN developer, frontend developer, portfolio, javascript, angular, typescript",
  },
};

export interface Skill {
  name: string;
  icon: string;
  score: number;
  category: "frontend" | "backend" | "tools";
}

export const skills: Skill[] = [
  { name: "React", icon: "https://svgl.app/library/react_light.svg", score: 9, category: "frontend" },
  { name: "Redux ToolKit", icon: "https://svgl.app/library/redux.svg", score: 8, category: "frontend" },
  { name: "Angular", icon: "https://svgl.app/library/angular.svg", score: 8, category: "frontend" },
  { name: "AngularJS", icon: "https://angularjs.org/img/AngularJS-large.png", score: 7, category: "frontend" },
  { name: "KnockoutJS", icon: "https://www.cdnlogo.com/logos/k/50/knockout.svg", score: 6, category: "frontend" },
  { name: "JavaScript", icon: "https://svgl.app/library/javascript.svg", score: 9, category: "frontend" },
  { name: "TypeScript", icon: "https://svgl.app/library/typescript.svg", score: 9, category: "frontend" },
  { name: "HTML", icon: "https://svgl.app/library/html5.svg", score: 10, category: "frontend" },
  { name: "CSS", icon: "https://svgl.app/library/css_old.svg", score: 6, category: "frontend" },
  { name: "Material UI", icon: "https://svgl.app/library/materialui.svg", score: 8, category: "frontend" },
  { name: "Bootstrap", icon: "https://svgl.app/library/bootstrap.svg", score: 7, category: "frontend" },
  { name: "Tailwind CSS", icon: "https://svgl.app/library/tailwindcss.svg", score: 8, category: "frontend" },
  { name: "Node", icon: "https://svgl.app/library/nodejs.svg", score: 8, category: "backend" },
  { name: "Express", icon: "https://svgl.app/library/expressjs.svg", score: 7, category: "backend" },
  { name: "MongoDB", icon: "https://svgl.app/library/mongodb.svg", score: 7, category: "backend" },
  { name: "SSR", icon: ssr, score: 7, category: "frontend" },
  { name: "Webpack", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaTUqHahhh_W6J2EmzhFtof3trONNwTkDBg&s", score: 7, category: "tools" },
  { name: "Git", icon: "https://svgl.app/library/git.svg", score: 8, category: "tools" },
  { name: "Strapi", icon: "https://svgl.app/library/strapi.svg", score: 4, category: "backend" },
];

export interface Experience {
  title: string;
  start: string;
  end: string;
  company: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    start: "2024",
    end: "Present",
    company: "Yatra Online Limited, Gurugram (plus 6 months as vendor)",
    responsibilities: [
      "Owned TCS Automation and reduced traveler form completion time by around 20%.",
      "Delivered Branded Fares for Flights by revamping legacy UI into scalable React architecture.",
      "Improved performance by around 70% using code splitting, lazy loading, memoization, and API tuning.",
      "Enhanced Core Web Vitals (LCP, CLS, INP) and optimized CRP with production SSR rollout.",
      "Migrated backend services from Express to Fastify to reduce latency and improve throughput.",
      "Built reusable design-system components, integrated third-party APIs, and mentored 3-4 engineers.",
    ],
  },
  {
    title: "Senior Software Developer",
    start: "2023",
    end: "2024",
    company: "Hughes Systique Private Limited, Gurugram",
    responsibilities: [
      "Led frontend development for enterprise products with focus on scalability and maintainability.",
      "Migrated legacy modules to Angular 17, improving performance and reducing technical debt.",
      "Built a configuration-driven form system that reduced new feature effort by 60%.",
      "Applied TDD with Jasmine and Karma to improve coverage and minimize regressions.",
      "Implemented i18n and accessibility improvements for global user experience.",
      "Collaborated with stakeholders and client engineering teams under strict SLA timelines.",
    ],
  },
  {
    title: "Software Developer",
    start: "2019",
    end: "2023",
    company: "Patch Infotech Private Limited, Gurugram (Tripleplay, Nowfloats, CityApp)",
    responsibilities: [
      "Built scalable dashboards and admin portals using Angular and modern JavaScript.",
      "Created Progressive Web Applications with offline support and faster load times.",
      "Increased unit test coverage to around 85% using Jasmine and Karma.",
      "Led UI modernization with Tailwind CSS and Material UI across key modules.",
      "Mentored developers and established frontend coding standards and best practices.",
      "Worked closely with stakeholders, backend, and QA to deliver features on tight timelines.",
    ],
  },
];

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  redirection: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "The Power of Server-Side Rendering (SSR) in React Projects",
    description:
      "In the ever-evolving world of web development, performance and user experience are paramount. One powerful technique to...",
    image: ssrimg,
    redirection:
      "https://www.linkedin.com/posts/akhil-verma-a935b4a0_the-power-of-server-side-rendering-ssr-activity-7200156074291703809-beZ_?utm_source=share&utm_medium=member_desktop&rcm=ACoAABVyGA8BhkNcVWIap4JSRi-Exx2ruPFjzM4",
  },
  {
    id: 2,
    title: "Exploring Closures in JavaScript: A Fundamental Concept for Every Developer",
    description:
      "In the vast landscape of JavaScript, there lies a fundamental concept that often perplexes developers, yet holds immense power in shaping the way we...",
    image: closureimg,
    redirection:
      "https://www.linkedin.com/pulse/exploring-closures-javascript-fundamental-concept-every-akhil-verma-95w8c/?trackingId=z5Cuchh9StG51J7aNlTF0w%3D%3D",
  },
  {
    id: 3,
    title: "React 19: Exciting New Features You Need to Know",
    description:
      "React 19 is a game-changer with : Auto optimizing compiler, Stable server components, Action API, Smarter assets loading, useOptimistice hook and ...",
    image: r19,
    redirection:
      "https://www.linkedin.com/posts/akhil-verma-a935b4a0_summary-react-19-key-highlights-activity-7312749068235993089-k0S1?utm_source=share&utm_medium=member_android&rcm=ACoAABVyGA8BhkNcVWIap4JSRi-Exx2ruPFjzM4",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  tech?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Json Diff",
    description: "Show the different with two JSON objects",
    url: "/json-diff",
    tech: ["React", "TypeScript"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blogs", href: "#blogs" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
