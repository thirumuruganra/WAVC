"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardingFormPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('signupRole');
    if (role === 'student') {
      router.replace('/onboardingForm/student');
    } else if (role === 'club') {
      router.replace('/onboardingForm/club');
    } else {
      // Fallback if role isn't set, e.g., direct navigation to /onboardingForm
      router.replace('/');
    }
  }, [router]);

  return <p>Please wait...</p>; // Or a loading spinner
}
