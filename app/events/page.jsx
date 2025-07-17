"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { events } from "@/lib/mock-data";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Event Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openEventDetails(event)}
          >
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-600">{event.clubName}</p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
            </div>
            <div className="mt-2">
                <Badge variant={event.type === 'Tech' ? 'default' : 'secondary'}>{event.type}</Badge>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={closeEventDetails}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedEvent.name}</DialogTitle>
              <DialogDescription>
                Hosted by {selectedEvent.clubName}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>{selectedEvent.description}</p>
              <div className="flex items-center"><CalendarIcon className="w-5 h-5 mr-2" /> {selectedEvent.date}</div>
              <div className="flex items-center"><Clock className="w-5 h-5 mr-2" /> {selectedEvent.timing}</div>
              <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> {selectedEvent.venue}</div>
              <Badge variant={selectedEvent.type === 'Tech' ? 'default' : 'secondary'}>{selectedEvent.type}</Badge>
              <p className="text-sm text-green-600 font-semibold">{selectedEvent.socialProof}</p>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
                <Button variant="outline">Add to Google Calendar</Button>
                <Button>I will be there!</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// A simple badge component (can be replaced with shadcn/ui badge)
function Badge({ children, variant }) {
    const baseClasses = "px-2.5 py-0.5 rounded-full text-xs font-semibold";
    const variants = {
        default: "bg-blue-100 text-blue-800",
        secondary: "bg-gray-100 text-gray-800"
    }
    return <span className={`${baseClasses} ${variants[variant]}`}>{children}</span>
}