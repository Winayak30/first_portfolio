"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useCursor } from "@/contexts/cursor-context";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      )}
    >
      <div className="mx-auto mt-4 max-w-3xl rounded-lg border border-white/10 bg-black/30 p-2 backdrop-blur-lg">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setCursorType("link")}
                onMouseLeave={() => setCursorType("default")}
                className="group relative rounded-md px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-px w-full origin-bottom-right scale-x-0 transform bg-primary transition-transform duration-300 ease-out group-hover:origin-bottom-left group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download
            onMouseEnter={() => setCursorType("link")}
            onMouseLeave={() => setCursorType("default")}
            className="rounded-md bg-primary/10 px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary/20"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
