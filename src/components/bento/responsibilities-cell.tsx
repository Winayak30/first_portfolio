import { responsibilities } from "@/lib/data";
import GlassPanel from "./glass-panel";
import { ScrollArea } from "../ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ResponsibilitiesCell() {
  return (
    <GlassPanel className="relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "2rem 2rem",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <h2 className="font-headline text-h3-m font-bold md:text-h3-d">
          Responsibilities
        </h2>
        <ScrollArea className="mt-4 flex-grow pr-4">
          <Accordion type="single" collapsible className="w-full">
            {responsibilities.map((resp, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <div>
                    <h3 className="text-left font-bold text-primary text-body-m md:text-body-d">
                      {resp.role}
                    </h3>
                    <p className="text-left text-secondary-foreground text-ui-d">
                      {resp.organization}
                      <br />
                      {resp.dates}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc space-y-2 pl-4 text-secondary-foreground text-ui-d">
                    {resp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </div>
    </GlassPanel>
  );
}
