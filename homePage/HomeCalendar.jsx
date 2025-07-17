import React from "react";

export default function HomeCalendar() {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  return (
    <div className="bg-white rounded-lg p-4 w-full h-full flex flex-col items-center justify-center">
      <div className="font-bold text-lg mb-2">{month} {year}</div>
      <div className="grid grid-cols-7 gap-1 text-xs w-full text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={d + i} className="font-semibold text-neutral-500">{d}</div>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const day = i - 2; // Simple offset for demo
          const isCurrentDay = day === today.getDate();
          return (
            <div 
              key={i} 
              className={`h-6 w-6 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-100 ${isCurrentDay ? 'bg-blue-500 text-white' : ''} ${day < 1 ? 'text-gray-300' : ''}`}
            >
              {day > 0 ? day : ''}
            </div>
          )
        })}
      </div>
    </div>
  );
}