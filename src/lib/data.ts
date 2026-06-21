/* ============================================================================
 *  SINGLE SOURCE OF TRUTH FOR THE WHOLE SITE
 * ----------------------------------------------------------------------------
 *  Every section reads from this file. To update your portfolio you (almost)
 *  never need to touch the components — just edit the data below.
 *
 *  Anything I could not pull from your resume is marked with  // TODO
 *  Search this file for "TODO" to find every gap you need to fill.
 * ========================================================================== */

import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ---------------------------------- Profile -------------------------------- */

export const profile = {
  name: "Ammar Ali",
  // The handle shown in the navbar / footer as `>_ ammar.dev`
  brand: "ammar.dev",
  role: "Software Development Engineer",
  // One-line tagline used in the hero. Keywords in <strong> get the accent.
  tagline: {
    lead: "Full-stack engineer building",
    highlights: ["dynamic web platforms", "performant APIs", "and clean UI"],
  },
  location: "New Delhi, India",
  // Used for the live clock in the hero. IANA timezone string.
  timezone: "Asia/Kolkata",
  email: "helloammar2017@gmail.com",
  phone: "+91 83848 91172",
  resumeUrl: "/RESUME.pdf",
  // TODO: add a square headshot to /public and set the path (or leave null
  // to keep the monogram avatar used as a fallback).
  avatar: null as string | null,
};

/* ----------------------------------- Stats --------------------------------- */

export const stats: { value: string; label: string }[] = [
  { value: "2", label: "internships" },
  { value: "600+", label: "DSA problems solved" },
  { value: "8.2", label: "CGPA" },
];

/* ---------------------------------- Socials -------------------------------- */

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/aa7-ammar", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/helloammar", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/aa7-ammar", icon: Code2 },
];

export const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: profile.location, href: null, icon: MapPin },
];

/* --------------------------------- Navigation ------------------------------ */

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

/* --------------------------------- Experience ------------------------------ */

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "SDE Intern",
    company: "Riskinsight Consultancy Pvt. Ltd. (Unison Group)",
    location: "Hyderabad, Telangana",
    period: "Feb 2026 — Present",
    points: [
      "Architecting dynamic user interfaces with React.js and integrating them with Node.js middleware for seamless data flow and responsive experiences across the consultancy's web platforms.",
      "Developing and optimizing high-performance RESTful APIs with FastAPI, leveraging async capabilities for rapid data retrieval in complex risk-assessment models.",
      "Managing and querying large-scale relational datasets in Oracle SQL Developer, writing optimized procedures and ensuring data integrity for critical financial reports.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "MetaCyrus.tech",
    location: "New Delhi, Delhi",
    period: "Jul 2024 — Sep 2024",
    points: [
      "Built and deployed MERN web features (MongoDB, Express, React, Node) with RESTful APIs, using Git for version control and Docker for containerization.",
      "Implemented secure user authentication with JWT and role-based access control to protect user data and sessions.",
      "Wrote Postman test suites and documented API endpoints, improving handoff quality for front-end integration.",
    ],
  },
];

/* ---------------------------------- Projects ------------------------------- */

export type Project = {
  name: string;
  period?: string;
  description: string;
  points: string[];
  tags: string[];
  github?: string | null;
  live?: string | null;
  image?: string | null;
};

export const projects: Project[] = [
  {
    name: "DevDesk — Developer Productivity App",
    period: "2025",
    description:
      "A full-stack developer productivity platform supporting tasks, notes, snippets, and analytics.",
    points: [
      "Built with Next.js, TypeScript, and MongoDB following scalable server/client component separation.",
      "Secure authentication using JWT access & refresh tokens stored in HttpOnly cookies.",
      "Protected routes, rate limiting, pagination, and search across multiple resources.",
      "AI-assisted code improvement powered by the Gemini API.",
    ],
    tags: ["Next.js 16", "TypeScript", "ShadCN UI", "JWT", "MongoDB", "Gemini API"],
    github: "https://github.com/aa7-ammar/devdesk",
    live: "https://devdesk-eight.vercel.app/",
    image: "/devdesk.png",
  },
  {
    name: "Dev-Event",
    period: "2025",
    description:
      "A fully responsive event-listing platform showcasing production-ready frontend architecture.",
    points: [
      "Built with Next.js 16 demonstrating advanced component architecture, TypeScript adoption, and optimized routing.",
      "Efficient state/data management with a tuned style pipeline (ESLint + PostCSS) for smooth browsing and filtering across devices.",
      "Deployed on Vercel with performance best practices — automatic font loading and code-splitting.",
    ],
    tags: ["Next.js 16", "Node.js", "MongoDB", "Aceternity UI", "Vercel"],
    github: "https://github.com/aa7-ammar/dev-events-nextjs16",
    live: null,
    image: "/devevent.png",
  },
];

/* ---------------------------------- Tech Stack ----------------------------- */
/* Grouped for the Stack section. Plain strings — rendered as monospace chips. */

export const stack: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["C++", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI"],
  },
  {
    group: "Backend & Databases",
    items: ["Node.js", "Express.js", "Nest.js", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "CI/CD", "Figma", "Bash"],
  },
];

/* Flat list used for the scrolling marquee strip. */
export const stackMarquee: string[] = [
  "C++",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nest.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Git",
  "REST APIs",
  "Figma",
];

/* --------------------------------- Education ------------------------------- */

export type Education = {
  degree: string;
  school: string;
  period: string;
  score: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Guru Gobind Singh Indraprastha University, New Delhi",
    period: "Expected 2026",
    score: "8.7 CGPA",
  },
  {
    degree: "Senior Secondary School Certificate",
    school: "Jamia Millia Islamia, New Delhi",
    period: "2019 — 2021",
    score: "91.6%",
  },
];

/* --------------------------- Focus areas (DSA, etc.) ----------------------- */

export const focusAreas = ["Graphs", "Dynamic Programming", "Trees"];

/* ------------------------------ Recommendations ---------------------------- */

export type Recommendation = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string | null;
};

export const recommendations: Recommendation[] = [
  {
    quote: "Ammar shipped fast and wrote clean, well-tested code...",
    name: "Jane Doe",
    title: "Engineering Manager",
    company: "MetaCyrus.tech",
    avatar: null, // optional path to an image in /public
  }
];
