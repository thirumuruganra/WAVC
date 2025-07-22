"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Shuffle, ChevronDown, ChevronUp } from "lucide-react";
import { events } from "@/lib/mock-data";
import { EventCard } from "@/components/ui/EventCard";

const CollapsibleSection = ({ title, children, icon, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card>
      <CardHeader onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">{icon} {title}</CardTitle>
        {isOpen ? <ChevronUp className="h-5 w-5 text-neutral-500" /> : <ChevronDown className="h-5 w-5 text-neutral-500" />}
      </CardHeader>
      {isOpen && (
        <CardContent className="space-y-4 pt-0">
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default function MobileHome() {
  // Assuming 'myClubs' is a list of club IDs the user follows
  const myClubs = ['club-1', 'club-2'];
  const forYouEvents = events.filter(e => myClubs.includes(e.clubId)).slice(0, 3);
  const randomEvents = events.filter(e => !myClubs.includes(e.clubId)).slice(0, 3);
  
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto p-4">
      <CollapsibleSection title="For You" icon={<Zap />} defaultOpen={true}>
        {forYouEvents.map(event => <EventCard key={event.id} event={event} />)}
      </CollapsibleSection>

      <CollapsibleSection title="Random" icon={<Shuffle />}>
        {randomEvents.map(event => <EventCard key={event.id} event={event} />)}
      </CollapsibleSection>
    </div>
  );
}