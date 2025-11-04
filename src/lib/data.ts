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

export type Responsibility = {
  role: string;
  organization: string;
  dates: string;
  details: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "DocNav",
    tech: [
      "Flutter",
      "Firebase",
      "Keras",
      "RESTful APIs",
      "Data Modeling",
      "Deep Learning",
    ],
    image: "project-1",
  },
  {
    id: 2,
    title: "Sign Language Interpreter",
    tech: ["OpenCV", "MediaPipe", "NumPy", "Keras (CNN)", "Python", "pyttsx3"],
    image: "project-2",
  },
];

export const responsibilities: Responsibility[] = [
  {
    role: "Chapter Lead",
    organization: "Google Developer Group (GDG) LNCTS",
    dates: "Aug 2025 - Present",
    details: [
      "Led a core technical team of 33 members to plan and execute technical workshops, seminars, and community-building events for a campus community of 1500+ students.",
      "Developed the strategic roadmap for the chapter, setting goals for member growth, event quality, and industry collaboration.",
      "Served as the primary point of contact for Google, managing communications, reporting, and ensuring compliance with community guidelines.",
      "Implemented a Docker-based deployment pipeline for all workshop materials and a Google Sheets API script to automate registration reporting for Google.",
    ],
  },
  {
    role: "Marketing Team Lead",
    organization: "Google Developer Group (GDG) LNCTS",
    dates: "Aug 2024 - May 2025",
    details: [
      "Developed and executed comprehensive marketing campaigns across social media, email, and on-campus channels, resulting in a 30% increase in average event attendance.",
      "Managed a team of 56 marketing volunteers, delegating tasks for content creation, graphic design, and social media management.",
      "Analyzed student feedback and engagement metrics to tailor promotional messaging and content strategy, enhancing the appeal and reach of programs.",
    ],
  },
  {
    role: "Admin Team Lead",
    organization: "E-Cell (Entrepreneurship Cell) LNCTS",
    dates: "May 2025 - Aug 2025",
    details: [
      "Managed all administrative and operational logistics for E-Cell events, including speaker sessions, competitions, and workshops with 200+ attendees.",
      "Coordinated with college departments to secure venues, resources, and permissions, ensuring the smooth execution of all planned activities.",
      "Implemented a new system for tracking member engagement and internal communications, improving team efficiency and organization.",
    ],
  },
];

export const skills: Record<string, string[]> = {
  "Programming Languages": ["Python", "Java", "Dart", "C++"],
  "Libraries/Frameworks": ["Flutter", "NumPy", "Matplotlib", "Pandas", "Keras"],
  "Tools/Platforms": [
    "Git",
    "Android Studio",
    "Github",
    "Firebase",
    "Docker",
    "Google Collab",
  ],
  Databases: ["MongoDB", "Firestore"],
};

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/Winayak30",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vinayak-tripathi-9a3001284/",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/oBFeoOvaMD/",
    icon: Code,
  },
];
