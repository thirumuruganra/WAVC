"use client";
// Section for the home page, using shadcn UI and HomeCard

import HomeCard from "./HomeCard.jsx";
import HomeCalendar from "./HomeCalendar.jsx";
import { Calendar, MessageCircle, Zap, Shuffle } from "lucide-react";

export default function HomeSection() {
  return (
    <section className="flex flex-col gap-6 w-full max-w-4xl mx-auto py-4 px-4">
      {/* Desktop layout: calendar and club discussions side by side */}
      <div className="hidden md:grid grid-cols-2 gap-6 h-[340px]">
        {/* Mini Calendar */}
        <HomeCard accent={1} className="flex flex-col items-center justify-center h-full border-8 border-[var(--accent1)] !bg-white">
          <HomeCalendar />
        </HomeCard>
        {/* Club Discussions with 3 placeholders */}
        <HomeCard accent={1} className="flex flex-col items-center justify-center h-full border-8 border-[var(--accent1)] !bg-white">
          <div className="flex flex-col items-center gap-2 mb-4">
            <MessageCircle className="text-black" size={28} />
            <div className="font-semibold text-neutral-900 text-lg">Club Discussions</div>
          </div>
          <div className="flex flex-col gap-4 w-full px-4">
            <div className="h-10 bg-[var(--accent1)] rounded w-full" />
            <div className="h-10 bg-[var(--accent1)] rounded w-full" />
            <div className="h-10 bg-[var(--accent1)] rounded w-full" />
          </div>
        </HomeCard>
      </div>

      {/* Desktop: For You below calendar, Random below club discussions */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        <HomeCard accent={3} className="flex flex-col items-center justify-between py-6 min-h-[140px] border-8 border-[var(--accent2)] !bg-white">
          <div className="flex flex-col items-center gap-2 mb-2">
            <Zap className="text-black" size={28} />
            <span className="font-semibold text-neutral-900 text-base text-center">For You</span>
          </div>
          <div className="flex flex-col gap-3 w-full flex-1 justify-center">
            <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
            <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
            <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
          </div>
        </HomeCard>
        <HomeCard accent={3} className="flex flex-col items-center justify-between py-6 min-h-[140px] border-8 border-[var(--accent2)] !bg-white">
          <div className="flex flex-col items-center gap-2 mb-2">
            <Shuffle className="text-black" size={28} />
            <span className="font-semibold text-neutral-900 text-base text-center">Random</span>
          </div>
          <div className="flex flex-col gap-3 w-full flex-1 justify-center">
            <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
            <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
            <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
          </div>
        </HomeCard>
      </div>

      {/* Mobile layout: original stacked cards */}
      <div className="md:hidden flex flex-col gap-6 w-full max-w-md mx-auto">
        <div className="flex gap-6 h-36">
          <HomeCard accent={1} className="flex-1 min-w-0 flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center gap-3">
              <Calendar className="text-white" size={32} />
              <span className="font-semibold text-neutral-900 text-lg text-center">Event Calendar</span>
            </div>
          </HomeCard>
          <HomeCard accent={1} className="flex-1 min-w-0 flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center gap-3">
              <MessageCircle className="text-white" size={32} />
              <span className="font-semibold text-neutral-900 text-lg text-center">Club Discussions</span>
            </div>
          </HomeCard>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <HomeCard accent={3} className="w-full flex flex-col items-center justify-between py-6 min-h-[140px] border-8 border-[var(--accent2)] !bg-white">
            <div className="flex flex-col items-center gap-2 mb-2">
              <Zap className="text-black" size={28} />
              <span className="font-semibold text-neutral-900 text-base text-center">For You</span>
            </div>
            <div className="flex flex-col gap-3 w-full flex-1 justify-center">
              <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
              <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
              <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
            </div>
          </HomeCard>
          <HomeCard accent={3} className="w-full flex flex-col items-center justify-between py-6 min-h-[140px] border-8 border-[var(--accent2)] !bg-white">
            <div className="flex flex-col items-center gap-2 mb-2">
              <Shuffle className="text-black" size={28} />
              <span className="font-semibold text-neutral-900 text-base text-center">Random</span>
            </div>
            <div className="flex flex-col gap-3 w-full flex-1 justify-center">
              <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
              <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
              <div className="h-8 bg-[var(--accent2)] rounded w-4/5 mx-auto" />
            </div>
          </HomeCard>
        </div>
      </div>
    </section>
  );
}
