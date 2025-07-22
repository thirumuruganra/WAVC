"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { navigationLinks } from "@/lib/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function HomeHeader() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  // Don't show header on login/signup pages
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-[var(--accent4)]">
          WAVC
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navigationLinks
            .filter((link) => link.name !== "Profile")
            .map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className={`text-lg font-medium hover:text-[var(--accent3)] ${
                  pathname === link.href ? "text-[var(--accent4)]" : "text-neutral-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
        </nav>
        <div className="hidden md:block">
          {status === "authenticated" ? (
            <Link href="/profile">
              <Avatar>
                <AvatarImage src={session.user.image} alt={session.user.name} />
                <AvatarFallback>{session.user.name ? session.user.name[0] : 'U'}</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
