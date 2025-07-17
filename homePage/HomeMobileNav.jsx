// Bottom navigation bar for mobile home page using shadcn UI and accent colors
import { Home, Calendar, MessageCircle, User } from "lucide-react";

const accentColors = [
  "#8BBFE7", // lightest
  "#568FCA",
  "#487CBF",
  "#335D9C",
  "#274985" // darkest
];

export default function HomeMobileNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 flex justify-around items-center h-16 z-50 md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      <button className="flex flex-col items-center text-neutral-700 focus:outline-none min-w-[56px] py-1 rounded">
        <Home size={26} />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button className="flex flex-col items-center text-neutral-700 focus:outline-none min-w-[56px] py-1 rounded">
        <Calendar size={26} />
        <span className="text-xs mt-1">Events</span>
      </button>
      <button className="flex flex-col items-center text-neutral-700 focus:outline-none min-w-[56px] py-1 rounded">
        <MessageCircle size={26} />
        <span className="text-xs mt-1">Clubs</span>
      </button>
      <button className="flex flex-col items-center text-neutral-700 focus:outline-none min-w-[56px] py-1 rounded">
        <User size={26} />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </nav>
  );
}
