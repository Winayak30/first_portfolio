"use client";

import { useCursor } from "@/contexts/cursor-context";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function OrbCursor() {
  const { cursorType } = useCursor();
  const { x, y } = useMousePosition();

  const variants = {
    default: {
      height: 40,
      width: 40,
      border: "0px solid hsl(var(--vibrant-accent))",
      backgroundColor: "hsl(var(--vibrant-accent) / 0.2)",
    },
    link: {
      height: 20,
      width: 20,
      border: "2px solid hsl(var(--vibrant-accent))",
      backgroundColor: "transparent",
    },
    "project-view": {
      height: 40,
      width: 40,
      border: "0px solid hsl(var(--vibrant-accent))",
      backgroundColor: "hsl(var(--vibrant-accent))",
    },
  };

  const dotVariants = {
    default: {
      height: 10,
      width: 10,
      backgroundColor: "hsl(var(--vibrant-accent))",
      opacity: 1,
    },
    link: {
      height: 20,
      width: 20,
      backgroundColor: "transparent",
      opacity: 0,
    },
    "project-view": {
      height: 0,
      width: 0,
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate={cursorType}
        style={{ x, y }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <AnimatePresence>
          {cursorType === "project-view" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex h-full w-full items-center justify-center text-xs font-medium text-foreground"
            >
              View
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        variants={dotVariants}
        animate={cursorType}
        style={{ x, y }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
        className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
      />
    </>
  );
}
