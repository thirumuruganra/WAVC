"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function VerificationPending() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900">
            Verification Pending
          </h1>
          
          <div className="space-y-2">
            <p className="text-gray-600">
              Your club registration has been submitted successfully!
            </p>
            <p className="text-gray-600">
              We've sent your club details to our admin team for verification.
            </p>
          </div>
          
          {session?.user && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Club:</strong> {session.user.clubName || 'Your Club'}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Email:</strong> {session.user.email}
              </p>
            </div>
          )}
          
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              You'll receive an email confirmation once your club is verified.
            </p>
            <p className="text-sm text-gray-500">
              This usually takes 24-48 hours.
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={() => window.location.reload()} 
            className="w-full"
            variant="outline"
          >
            Check Verification Status
          </Button>
          
          <Button 
            onClick={() => signOut({ callbackUrl: "/" })} 
            variant="ghost"
            className="w-full text-gray-600"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
