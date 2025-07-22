"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">
            WAVC
          </h1>
          <p className="mt-2 text-lg" style={{ color: 'var(--accent2)' }}>
            Welcome! Sign in to continue.
          </p>
        </div>
        <div className="space-y-4">
          <Button
            className="w-full"
            style={{ backgroundColor: 'var(--accent4)' }}
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
          >
            Continue as Student with Google
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
          >
            Continue as Club Head with Google
          </Button>
        </div>
        <div className="mt-6 text-center">
          <Link href="/signup" passHref>
            <Button variant="link" className="text-[var(--accent4)]">
              Click me to sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}