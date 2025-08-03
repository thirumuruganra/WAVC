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

const ClubSignUp = () => {
  const { data: session, status } = useSession({ required: true });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      return;
    }
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, role: 'club' }),
    });

    if (response.ok) {
      // Force session refresh to get updated verification status
      window.location.href = '/';
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Club Details</h1>
          <p className="text-neutral-500">
            Fill out the form to complete your club's profile.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="club-name">Club name *</Label>
            <Input name="clubName" id="club-name" placeholder="Tech Geeks" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo">Logo *</Label>
            <Input name="logo" id="logo" type="file" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="insta-id">Insta id *</Label>
            <Input name="instaId" id="insta-id" placeholder="techgeeks" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="club-department">Department of club *</Label>
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
            <div className="space-y-2">
              <Label htmlFor="club-type">Tech or not tech *</Label>
              <Select name="clubType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="non-tech">Non-Tech</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">One line description *</Label>
            <Input
              name="description"
              id="description"
              placeholder="A club for tech enthusiasts."
              maxLength={150}
              required
            />
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

export default ClubSignUp;
