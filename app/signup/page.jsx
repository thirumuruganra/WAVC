"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { users } from "@/lib/mock-data";

export default function SignupPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    phone: "",
    department: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session?.user?.email) {
      console.error("No email found in session");
      // Optionally, redirect to login or show an error message
      return;
    }

    const newUser = {
      id: `user-${Date.now()}`, // More unique ID
      email: session.user.email,
      role: "student", // default role for now
      ...formData,
    };

    // This will only update the in-memory array.
    // For a real app, you'd send this to a database.
    users.push(newUser);

    // After "signing up", we need to trigger a session update
    // to get the new user info (like role) into the session token.
    // A simple way is to re-trigger the sign-in flow.
    // However, for this mock setup, we'll just redirect.
    // In a real app, you might call a custom API endpoint to update the session.
    router.push("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Complete Your Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="department">Department</Label>
            <Input
              id="department"
              name="department"
              type="text"
              required
              value={formData.department}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              name="year"
              type="number"
              required
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Save and Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
