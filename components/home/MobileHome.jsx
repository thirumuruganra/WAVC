import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, Zap, Shuffle } from "lucide-react";
import { events } from "@/lib/mock-data";
import { EventCard } from "@/components/ui/EventCard";
import Link from "next/link";

export default function MobileHome() {
  // Assuming 'myClubs' is a list of club IDs the user follows
  const myClubs = ['club-1', 'club-2'];
  const forYouEvents = events.filter(e => myClubs.includes(e.clubId)).slice(0, 2);
  const randomEvents = events.filter(e => !myClubs.includes(e.clubId)).slice(0, 2);
  
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <div className="flex gap-6 h-36">
        <Link href="/events" className="flex-1 min-w-0">
          <Card className="h-full flex flex-col items-center justify-center text-center p-2" style={{backgroundColor: 'var(--accent1)'}}>
              <Calendar className="text-white" size={32} />
              <span className="font-semibold text-neutral-900 text-lg mt-2">Event Calendar</span>
          </Card>
        </Link>
         <Link href="/clubs" className="flex-1 min-w-0">
          <Card className="h-full flex flex-col items-center justify-center text-center p-2" style={{backgroundColor: 'var(--accent1)'}}>
              <MessageCircle className="text-white" size={32} />
              <span className="font-semibold text-neutral-900 text-lg mt-2">Club Discussions</span>
          </Card>
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Zap /> For You</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {forYouEvents.map(event => <EventCard key={event.id} event={event} />)}
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
  );
}