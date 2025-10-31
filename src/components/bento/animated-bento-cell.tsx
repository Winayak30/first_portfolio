"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useRef } from "react";

type AnimatedBentoCellProps = {
  children: ReactNode;
  className?: string;
  staggerIndex: number;
};

export default function AnimatedBentoCell({
  children,
  className,
  staggerIndex,
}: AnimatedBentoCellProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, "25%");
  const delay = staggerIndex * 100;

  return (
    <div
      ref={ref}
      className={cn(
        "transform-gpu transition-all duration-500",
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
