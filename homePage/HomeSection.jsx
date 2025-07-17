"use client";
import DesktopHome from "./DesktopHome.jsx";
import MobileHome from "./MobileHome.jsx";

export default function HomeSection() {
  return (
    <section className="flex flex-col gap-6 w-full max-w-4xl mx-auto py-4 px-4">
      {/* Desktop layout */}
      <div className="hidden md:block">
        <DesktopHome />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <MobileHome />
      </div>
    </section>
  );
}