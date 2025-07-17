import { Button } from "@/components/ui/button";

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
        <Button className="w-full" style={{ backgroundColor: 'var(--accent4)' }}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}