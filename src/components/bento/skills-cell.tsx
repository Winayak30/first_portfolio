"use client";

import { skills } from "@/lib/data";
import { useCursor } from "@/contexts/cursor-context";
import GlassPanel from "./glass-panel";

export default function SkillsCell() {
  const { setCursorType } = useCursor();

  return (
    <GlassPanel>
      <div className="flex h-full flex-col">
        <h2 className="font-headline text-h2-m font-bold md:text-h2-d">
          Skills & Tech
        </h2>
        <div className="mt-4 flex-grow space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-medium text-secondary-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <div
                    key={skill}
                    onMouseEnter={() => setCursorType("link")}
                    onMouseLeave={() => setCursorType("default")}
                    className="group relative cursor-pointer rounded-lg border border-transparent bg-foreground/5 px-3 py-1.5 transition-all hover:scale-105 hover:border-primary"
                  >
                    <span className="text-ui-m md:text-ui-d">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}
