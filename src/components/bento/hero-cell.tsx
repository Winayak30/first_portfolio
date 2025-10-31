"use client";

import { useCursor } from "@/contexts/cursor-context";
import { Button } from "../ui/button";
import GlassPanel from "./glass-panel";

export default function HeroCell() {
  const { setCursorType } = useCursor();

  return (
    <GlassPanel>
      <div id="about" className="flex h-full flex-col justify-center">
        <h1 className="font-headline text-h1-m md:text-h1-d font-black uppercase">
          <span className="glitch-text bg-gradient-to-b from-primary to-foreground bg-clip-text text-transparent">
            Your Name
          </span>
          <br />
          Developer
        </h1>
        <p className="mt-4 max-w-md text-body-m text-secondary-foreground md:text-body-d">
          A passionate developer crafting modern, responsive, and performant web
          experiences. Welcome to my digital playground.
        </p>
        <div className="mt-8">
          <a href="#contact">
            <Button
              size="lg"
              onMouseEnter={() => setCursorType("link")}
              onMouseLeave={() => setCursorType("default")}
              className="bg-primary text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary))]"
            >
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
    </GlassPanel>
  );
}
