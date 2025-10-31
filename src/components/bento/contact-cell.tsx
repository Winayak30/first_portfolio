"use client";

import { socials } from "@/lib/data";
import { useCursor } from "@/contexts/cursor-context";
import GlassPanel from "./glass-panel";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

export default function ContactCell() {
  const { setCursorType } = useCursor();
  const { toast } = useToast();
  const email = "your.email@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard!",
      description: email,
    });
  };

  return (
    <GlassPanel>
      <div id="contact" className="flex h-full flex-col justify-between">
        <div>
          <h2 className="font-headline text-h2-m font-bold md:text-h2-d">
            Let's build something <span className="text-primary">together</span>.
          </h2>
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => setCursorType("link")}
            onMouseLeave={() => setCursorType("default")}
            className="group mt-4 flex items-center gap-2 rounded-lg p-2 text-secondary-foreground transition-colors hover:text-foreground"
          >
            <span className="font-body text-body-m md:text-body-d">
              {email}
            </span>
            <Copy className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              onMouseEnter={() => setCursorType("link")}
              onMouseLeave={() => setCursorType("default")}
              className="text-secondary-foreground transition-all hover:text-primary hover:scale-110"
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}
