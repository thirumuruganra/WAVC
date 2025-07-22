"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  if (pathname === "/") {
    return (
      <header className="w-full relative pt-8 pb-2">
        <div className="hidden md:block absolute top-8 right-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-neutral-100"
          >
            <Menu size={32} className="text-neutral-700" />
          </button>

          {isMenuOpen && (
            <div
              className="absolute right-0 top-full mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 w-48 z-50"
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              {navigationLinks.map((link, index) => {
                if (link.name === "Profile") {
                  const href =
                    status === "authenticated" ? "/profile" : "/login";
                  return (
                    <Link
                      href={href}
                      key={link.name}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-[var(--accent${
                        index + 1
                      })]`}
                    >
                      <link.icon size={20} />
                      <span>{link.name}</span>
                    </Link>
                  );
                }
                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-[var(--accent${
                      index + 1
                    })]`}
                  >
                    <link.icon size={20} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

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

  return (
    <header className="p-4 flex items-center border-b">
      <Button variant="ghost" onClick={() => router.back()} className="flex items-center">
        <ChevronLeft className="h-6 w-6" />
        <span className="ml-2">Back</span>
      </Button>
    </header>
  );
}