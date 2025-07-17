import HomeCalendar from "./HomeCalendar.jsx";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageCircle, Zap, Shuffle } from "lucide-react";
import { events } from "@/lib/mock-data";
import { EventCard } from "@/components/EventCard";

export default function DesktopHome() {
  // Assuming 'myClubs' is a list of club IDs the user follows
  const myClubs = ['club-1', 'club-2'];
  const forYouEvents = events.filter(e => myClubs.includes(e.clubId)).slice(0, 3);
  const randomEvents = events.filter(e => !myClubs.includes(e.clubId)).slice(0, 3);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        <Card className="h-[340px]">
            <HomeCalendar />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap /> For You</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {forYouEvents.map(event => <EventCard key={event.id} event={event} />)}
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <Card className="h-[340px]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><MessageCircle /> Club Discussions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 w-full px-4">
                <div className="h-10 bg-[var(--accent1)] rounded w-full" />
                <div className="h-10 bg-[var(--accent1)] rounded w-full" />
                <div className="h-10 bg-[var(--accent1)] rounded w-full" />
            </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Shuffle /> Random</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {randomEvents.map(event => <EventCard key={event.id} event={event} />)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}