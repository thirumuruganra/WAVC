"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StudentSignUp = () => {
  const { data: session, status } = useSession({ required: true });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      return;
    }
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, email: session.user.email, role: 'student' }),
    });

    router.push('/profile');
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Student Details</h1>
          <p className="text-neutral-500">
            Fill out the form to complete your profile.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name *</Label>
              <Input name="firstName" id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input name="lastName" id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile number *</Label>
            <Input name="mobile" id="mobile" type="tel" placeholder="9876543210" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Graduation Year *</Label>
              <Input name="graduationYear" id="year" type="number" placeholder="2027" required min="1900" max="2100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department *</Label>
              <Select name="department" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CSE">CSE</SelectItem>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="MECH">MECH</SelectItem>
                  <SelectItem value="EEE">EEE</SelectItem>
                  <SelectItem value="ECE">ECE</SelectItem>
                  <SelectItem value="CIVIL">CIVIL</SelectItem>
                  <SelectItem value="CHEM">CHEM</SelectItem>
                  <SelectItem value="MTECH-CSE">M.TECH CSE</SelectItem>
                  <SelectItem value="BME">BME</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full !mt-6"
            style={{ backgroundColor: "var(--accent4)" }}
          >
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StudentSignUp;
