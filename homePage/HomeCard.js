// Card component for home page sections using shadcn UI and accent colors
import { cn } from "../lib/utils";

export default function HomeCard({ children, accent = 1, className = "" }) {
  const accentColors = [
    "#8BBFE7", // 1
    "#568FCA", // 2
    "#487CBF", // 3
    "#335D9C", // 4
    "#274985"  // 5
  ];
  return (
    <div
      className={cn(
        "rounded-2xl p-4 shadow-sm flex flex-col gap-2",
        className
      )}
      style={{ background: accentColors[accent - 1] }}
    >
      {children}
    </div>
  );
}
