"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4.5rem)] bg-white">
      <div className="w-full max-w-sm p-8 space-y-8 text-center bg-white rounded-lg shadow-md">
        <div>
          <h1 className="text-3xl font-bold text-[var(--accent4)]">
            WAVC
          </h1>
          <p className="mt-2 text-lg">
            Welcome! Sign in to continue.
          </p>
        </div>
        <div className="space-y-4">
          <Button
            className="w-full"
            style={{ backgroundColor: 'var(--accent4)' }}
            onClick={() => {
              localStorage.setItem("signupRole", "student");
              signIn("google", { callbackUrl: "/profile" });
            }}
          >
            Continue as Student with Google
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => {
              localStorage.setItem("signupRole", "club");
              signIn("google", { callbackUrl: "/profile" });
            }}
          >
            Continue as Club Head with Google
          </Button>
        </div>
      </div>
    </div>
  );
}