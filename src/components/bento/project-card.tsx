"use client";

import type { Project } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useState, useRef } from "react";
import { useCursor } from "@/contexts/cursor-context";
import GlassPanel from "./glass-panel";

export default function ProjectCard({ project }: { project: Project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const { setCursorType } = useCursor();

  const image = PlaceHolderImages.find((img) => img.id === project.image);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setRotate({
      x: yPct * -8, // Max rotation of 8 degrees
      y: xPct * 8,
    });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setCursorType("default");
  };

  const onMouseEnter = () => {
    setCursorType("project-view");
  };

  return (
    <div
      style={{
        perspective: "1000px",
      }}
    >
      <GlassPanel
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        className="group !p-0 transition-all duration-300 ease-out hover:!border-primary hover:shadow-[0_0_40px_-10px_hsl(var(--primary))]"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          {image && (
            <Image
              src={image.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
        />

        <div
          className="relative flex h-full flex-col justify-end p-6 transition-transform duration-300 ease-out"
          style={{ transform: `translateZ(20px)` }}
        >
          <h3 className="font-headline text-h3-m font-bold md:text-h3-d">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-foreground/10 px-2 py-0.5 font-body text-xs text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
