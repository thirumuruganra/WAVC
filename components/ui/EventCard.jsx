import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";

export function EventCard({ event }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription>{event.clubName}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Tag className="mr-2 h-4 w-4" />
          <span>{event.type}</span>
        </div>
      </CardContent>
    </Card>
  );
}