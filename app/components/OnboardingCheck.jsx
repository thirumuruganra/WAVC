"use client";

import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function OnboardingCheck({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading

    // If a user is logged in but hasn't completed onboarding, redirect them.
    if (session && !session.user.onboardingComplete) {
      const role = localStorage.getItem("signupRole");
      const studentFormPath = "/onboardingForm/student";
      const clubFormPath = "/onboardingForm/club";

      if (role === "student" && pathname !== studentFormPath) {
        router.push(studentFormPath);
      } else if (role === "club" && pathname !== clubFormPath) {
        router.push(clubFormPath);
      }
    }

    // If a club user is logged in but not verified, redirect them to verification pending page
    if (session && session.user.onboardingComplete && session.user.role === 'club' && !session.user.isVerified) {
      if (pathname !== "/verification-pending") {
        router.push("/verification-pending");
      }
    }
  }, [session, status, router, pathname]);

  // If the session is loading, don't show anything to prevent flicker
  if (status === "loading") {
    return null;
  }

  // For all other cases (authenticated, unauthenticated, etc.), show the page.
  return <>{children}</>;
}
