// Mini calendar for desktop view
import React from "react";

export default function HomeCalendar() {
  // Placeholder calendar UI
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full h-full flex flex-col items-center justify-center">
      <div className="font-bold text-lg mb-2">July 2025</div>
      <div className="grid grid-cols-7 gap-1 text-xs w-full">
        {/* Weekdays */}
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={d + i} className="font-semibold text-neutral-500 text-center">{d}</div>
        ))}
        {/* Days (just a static grid for now) */}
        {Array.from({ length: 31 }, (_, i) => (
          <div key={i} className="h-6 w-6 flex items-center justify-center rounded hover:bg-blue-100 cursor-pointer">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
