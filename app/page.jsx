"use client";
import { useState, useEffect } from "react";
import HomeSection from "@/components/home/HomeSection.jsx";
import HomeMobileNav from "@/components/home/HomeMobileNav.jsx";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from 'next/navigation'


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
          <Label htmlFor="grad-year">Grad year *</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="2027">2027</SelectItem>
              <SelectItem value="2028">2028</SelectItem>
            </SelectContent>
          </Select>
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
       <Button type="submit" className="w-full !mt-6" style={{ backgroundColor: 'var(--accent4)' }}>
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
          <Input id="description" placeholder="A club for tech enthusiasts." maxLength={150} required />
        </div>
        <Button type="submit" className="w-full !mt-6" style={{ backgroundColor: 'var(--accent4)' }}>
          Verify
        </Button>
      </form>
    );
  };

const SignupForm = () => {
    const [activeTab, setActiveTab] = useState("student");
    return (
        <div>
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
            <div className="pt-4">{activeTab === "student" ? <StudentSignUp /> : <ClubSignUp />}</div>
        </div>
    )
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.has('signup')) {
      setOpen(true);
    }
  }, [searchParams]);

  return (
    <div className="font-sans min-h-screen bg-white flex flex-col items-center pb-20">
      <HomeSection />
       <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button style={{ backgroundColor: 'var(--accent4)' }}>Sign Up</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Account</DialogTitle>
            <DialogDescription>
              Choose your account type and fill out the form.
            </DialogDescription>
          </DialogHeader>
          <SignupForm />
        </DialogContent>
      </Dialog>
      <HomeMobileNav />
    </div>
  );
}