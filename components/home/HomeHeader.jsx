"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { navigationLinks } from "@/lib/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function HomeHeader() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex-1">
          {pathname !== "/" && (
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="flex items-center bg-white rounded-full shadow-md hover:bg-neutral-100 p-2 h-10 pr-4"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="ml-1 font-medium">Back</span>
            </Button>
          )}
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-3xl font-bold text-[var(--accent4)]">
            WAVC
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks
              .filter((link) => link.name !== "Profile")
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`text-lg font-medium hover:text-[var(--accent3)] ${
                    pathname === link.href
                      ? "text-[var(--accent4)]"
                      : "text-neutral-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
          </nav>
          <div className="hidden md:block ml-6">
            {status === "authenticated" ? (
              <div className="flex items-center gap-4">
                <Link href="/profile">
                  <Avatar>
                    <AvatarImage
                      src={session.user.image}
                      alt={session.user.name}
                    />
                    <AvatarFallback>
                      {session.user.name ? session.user.name[0] : "U"}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    localStorage.removeItem("signupRole");
                    signOut({ callbackUrl: "/login" });
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
