import type { ReactNode } from "react";

export default function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div
      id="projects"
      className="grid grid-cols-1 gap-6 md:grid-cols-4"
    >
      {children}
    </div>
  );
}
