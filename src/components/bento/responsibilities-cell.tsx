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
          <div className="space-y-4">
            {responsibilities.map((resp, index) => (
              <div key={index}>
                <h3 className="font-bold text-body-m text-primary md:text-body-d">
                  {resp.role}
                </h3>
                <p className="text-ui-m text-secondary-foreground md:text-ui-d">
                  {resp.organization} | {resp.dates}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </GlassPanel>
  );
}
