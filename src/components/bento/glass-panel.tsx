import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-[rgba(23,24,33,0.6)] p-6 backdrop-blur-xl shadow-lg md:p-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassPanel.displayName = "GlassPanel";
export default GlassPanel;
