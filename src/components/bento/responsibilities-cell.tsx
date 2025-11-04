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
    <GlassPanel>
      <div className="flex h-full flex-col">
        <h2 className="font-headline text-h3-m font-bold md:text-h3-d">
          Responsibilities
        </h2>
        <ScrollArea className="mt-4 flex-grow pr-4">
          <Accordion type="single" collapsible className="w-full">
            {responsibilities.map((resp, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <div>
                    <h3 className="font-bold text-left text-body-m text-primary md:text-body-d">
                      {resp.role}
                    </h3>
                    <p className="text-left text-ui-d text-secondary-foreground">
                      {resp.organization}
                      <br />
                      {resp.dates}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc space-y-2 pl-4 text-ui-d text-secondary-foreground">
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
