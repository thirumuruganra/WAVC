"use client";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (session?.user?.id) {
        try {
          const userRef = doc(db, "users", session.user.id);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserDetails(userSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (status === "authenticated") {
      fetchUserDetails();
    } else if (status === "unauthenticated") {
      setLoading(false);
    }
  }, [session, status]);

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-[var(--accent4)]">Profile</h1>
        
        {session?.user && (
          <div className="space-y-4">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-gray-900">{session.user.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">{session.user.email}</p>
              </div>
            </div>

            {/* Additional Details from Onboarding */}
            {userDetails && (
              <>
                {userDetails.role === 'student' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userDetails.firstName && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <p className="mt-1 text-gray-900">{userDetails.firstName}</p>
                      </div>
                    )}
                    {userDetails.lastName && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <p className="mt-1 text-gray-900">{userDetails.lastName}</p>
                      </div>
                    )}
                    {userDetails.mobile && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <p className="mt-1 text-gray-900">{userDetails.mobile}</p>
                      </div>
                    )}
                    {userDetails.graduationYear && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Graduation Year</label>
                        <p className="mt-1 text-gray-900">{userDetails.graduationYear}</p>
                      </div>
                    )}
                    {userDetails.department && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Department</label>
                        <p className="mt-1 text-gray-900">{userDetails.department}</p>
                      </div>
                    )}
                  </div>
                )}

                {userDetails.role === 'club' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userDetails.clubName && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Club Name</label>
                        <p className="mt-1 text-gray-900">{userDetails.clubName}</p>
                      </div>
                    )}
                    {userDetails.instaId && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Instagram ID</label>
                        <p className="mt-1 text-gray-900">@{userDetails.instaId}</p>
                      </div>
                    )}
                    {userDetails.clubType && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Club Type</label>
                        <p className="mt-1 text-gray-900">{userDetails.clubType}</p>
                      </div>
                    )}
                  </div>
                )}

                {userDetails.role && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <p className="mt-1 text-gray-900 capitalize">{userDetails.role}</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
