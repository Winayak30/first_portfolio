import { Github, Linkedin, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  tech: string[];
  image: string;
};

export type Social = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Cygnus",
    tech: ["Next.js", "Vercel", "PostgreSQL"],
    image: "project-1",
  },
  {
    id: 2,
    title: "Project Lyra",
    tech: ["React Native", "Firebase", "TypeScript"],
    image: "project-2",
  },
  {
    id: 3,
    title: "Project Draco",
    tech: ["Python", "FastAPI", "Docker"],
    image: "project-3",
  },
  {
    id: 4,
    title: "Project Orion",
    tech: ["Three.js", "WebGL", "GSAP"],
    image: "project-4",
  },
];

export const skills: Record<string, string[]> = {
  "Languages": ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  "Databases & Tools": ["PostgreSQL", "MongoDB", "Docker", "Git", "Figma"],
};

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: Twitter,
  },
];
