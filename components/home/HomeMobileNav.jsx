"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/navigation";
import { useSession } from "next-auth/react";

export default function HomeMobileNav() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  // Don't show mobile nav on login/signup pages
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 flex justify-around items-start h-[calc(4rem+env(safe-area-inset-bottom))] z-50 md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {navigationLinks.map((link) => {
        const href = link.name === "Profile" 
          ? (status === "authenticated" ? "/profile" : "/login")
          : link.href;
        
        const isActive = pathname === href;

        return (
          <Link
            href={href}
            key={link.name}
            className={`flex flex-col items-center pt-3 focus:outline-none min-w-[56px] ${
              isActive ? "text-[var(--accent4)]" : "text-neutral-600"
            }`}
          >
            <link.icon size={26} />
            <span className="text-xs mt-1">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}