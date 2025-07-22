import Link from "next/link";
import HomeCalendar from "./HomeCalendar.jsx";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageCircle, Zap, Shuffle, Calendar } from "lucide-react";
import { events } from "@/lib/mock-data";
import { EventCard } from "@/components/ui/EventCard.jsx";
import { Button } from "@/components/ui/button";

export default function DesktopHome() {
  // Assuming 'myClubs' is a list of club IDs the user follows
  const myClubs = ['club-1', 'club-2'];
  const forYouEvents = events.filter(e => myClubs.includes(e.clubId)).slice(0, 3);
  const randomEvents = events.filter(e => !myClubs.includes(e.clubId)).slice(0, 3);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        <Card className="h-[390px] flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-1"><Calendar /> Event Calendar</CardTitle>
            </CardHeader>
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
        <Card className="h-[390px] flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><MessageCircle /> Club Discussions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 w-full px-4 flex-grow">
                <div className="h-10 bg-[var(--accent1)] rounded w-full" />
                <div className="h-10 bg-[var(--accent1)] rounded w-full" />
                <div className="h-10 bg-[var(--accent1)] rounded w-full" />
                <Button asChild className="mt-auto">
                  <Link href="/clubs">See All Discussions</Link>
                </Button>
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