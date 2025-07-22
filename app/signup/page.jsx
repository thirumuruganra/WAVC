"use client";
import { useState } from "react";
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
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name *</Label>
          <Input id="first-name" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="mobile">Mobile number *</Label>
        <Input id="mobile" type="tel" placeholder="9876543210" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="year">Graduation Year *</Label>
          <Input id="year" type="number" placeholder="2027" required min="1900" max="2100" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department *</Label>
          <Select required>
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
  );
};

const ClubSignUp = () => {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="club-name">Club name *</Label>
        <Input id="club-name" placeholder="Tech Geeks" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="logo">Logo *</Label>
        <Input id="logo" type="file" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="insta-id">Insta id *</Label>
        <Input id="insta-id" placeholder="techgeeks" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="club-department">Department of club *</Label>
          <Select required>
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
          <Select required>
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
  );
};

export default function SignupPage() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-neutral-500">
            Choose your account type and fill out the form.
          </p>
        </div>
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("student")}
            className={`flex-1 py-2 text-center font-medium ${
              activeTab === "student"
                ? "border-b-2 border-[var(--accent4)] text-[var(--accent4)]"
                : "text-neutral-500"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setActiveTab("club")}
            className={`flex-1 py-2 text-center font-medium ${
              activeTab === "club"
                ? "border-b-2 border-[var(--accent4)] text-[var(--accent4)]"
                : "text-neutral-500"
            }`}
          >
            Club
          </button>
        </div>

        <div>
          {activeTab === "student" ? <StudentSignUp /> : <ClubSignUp />}
        </div>
      </div>
    </div>
  );
}
