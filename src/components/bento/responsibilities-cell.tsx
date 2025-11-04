import { responsibilities } from "@/lib/data";
import GlassPanel from "./glass-panel";
import { ScrollArea } from "../ui/scroll-area";

export default function ResponsibilitiesCell() {
  return (
    <GlassPanel>
      <div className="flex h-full flex-col">
        <h2 className="font-headline text-h2-m font-bold md:text-h2-d">
          Responsibilities
        </h2>
        <ScrollArea className="mt-4 flex-grow pr-4">
          <div className="space-y-6">
            {responsibilities.map((resp, index) => (
              <div key={index}>
                <h3 className="font-bold text-ui-d text-primary">
                  {resp.role}
                </h3>
                <p className="text-sm text-secondary-foreground">
                  {resp.organization} | {resp.dates}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-body-m text-secondary-foreground">
                  {resp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </GlassPanel>
  );
}
