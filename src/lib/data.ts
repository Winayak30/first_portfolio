import { Github, Linkedin, Code, Rss } from "lucide-react";
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
    title: "DocNav",
    tech: ["Flutter", "Firebase", "Keras"],
    image: "project-1",
  },
  {
    id: 2,
    title: "Sign Language Interpreter",
    tech: ["OpenCV", "MediaPipe", "NumPy", "Keras (CNN)", "Python", "pyttsx3"],
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
  "Programming Languages": ["Python", "Java", "Dart", "C++"],
  "Libraries/Frameworks": ["Flutter", "NumPy", "Matplotlib", "Pandas", "Keras"],
  "Tools/Platforms": ["Git", "Android Studio", "Github", "Firebase", "Docker", "Google Collab"],
  "Databases": ["MongoDB", "Firestore"],
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
    name: "LeetCode",
    url: "https://leetcode.com",
    icon: Code,
  },
  {
    name: "Blog",
    url: "#",
    icon: Rss,
  }
];
