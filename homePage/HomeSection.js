// Section for the home page, using shadcn UI and HomeCard

import HomeCard from "./HomeCard";
import { Calendar, MessageCircle, Zap, Shuffle } from "lucide-react";

export default function HomeSection() {

  return (
    <section className="flex flex-col gap-6 w-full max-w-md mx-auto py-4 px-4">
      {/* Top row: Event Calendar & Club Discussions */}
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

      {/* For You and Random stacked vertically, each with 3 placeholders */}
      <div className="flex flex-col gap-6 w-full">
        <HomeCard accent={3} className="w-full flex flex-col items-center justify-between py-6 min-h-[140px]">
        <div className="flex flex-col items-center gap-2 mb-2">
          <Zap className="text-white" size={28} />
          <span className="font-semibold text-neutral-900 text-base text-center">For You</span>
        </div>
        <div className="flex flex-col gap-3 w-full flex-1 justify-center">
          <div className="h-8 bg-white/30 rounded w-4/5 mx-auto animate-pulse" />
          <div className="h-8 bg-white/30 rounded w-4/5 mx-auto animate-pulse" />
          <div className="h-8 bg-white/30 rounded w-4/5 mx-auto animate-pulse" />
        </div>
        </HomeCard>
        <HomeCard accent={3} className="w-full flex flex-col items-center justify-between py-6 min-h-[140px]">
          <div className="flex flex-col items-center gap-2 mb-2">
            <Shuffle className="text-white" size={28} />
            <span className="font-semibold text-neutral-900 text-base text-center">Random</span>
          </div>
          <div className="flex flex-col gap-3 w-full flex-1 justify-center">
            <div className="h-8 bg-white/30 rounded w-4/5 mx-auto animate-pulse" />
            <div className="h-8 bg-white/30 rounded w-4/5 mx-auto animate-pulse" />
            <div className="h-8 bg-white/30 rounded w-4/5 mx-auto animate-pulse" />
          </div>
        </HomeCard>
      </div>
    </section>
  );
}