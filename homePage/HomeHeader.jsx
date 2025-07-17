"use client";
// Header for the home page using shadcn UI and accent color
import { useState } from "react";
import { Menu, Home, Calendar, MessageCircle, User } from "lucide-react";

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative pt-8 pb-2">
      {/* Desktop hamburger menu (hidden on mobile) */}
      <div className="hidden md:block absolute top-8 right-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full hover:bg-neutral-100"
        >
          <Menu size={32} className="text-neutral-700" />
        </button>
        
        {/* Dropdown menu */}
        {isMenuOpen && (
          <div 
            className="absolute right-0 top-full mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 w-48 z-50"
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-[var(--accent1)]">
              <Home size={20} />
              <span>Home</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-[var(--accent2)]">
              <Calendar size={20} />
              <span>Events</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-[var(--accent3)]">
              <MessageCircle size={20} />
              <span>Clubs</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-[var(--accent4)]">
              <User size={20} />
              <span>Profile</span>
            </button>
          </div>
        )}
      </div>

      {/* Header content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-1.5" style={{letterSpacing: '-0.01em'}}>
          WAVC
        </h1>
        <div className="text-base md:text-lg font-medium" style={{ color: 'var(--accent2)' }}>
          Stay in the loop. Stay&nbsp;in&nbsp;the&nbsp;club
        </div>
      </div>
    </header>
  );
}
