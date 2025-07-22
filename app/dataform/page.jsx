"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DataformPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('signupRole');
    if (role === 'student') {
      router.replace('/dataform/student');
    } else if (role === 'club') {
      router.replace('/dataform/club');
    } else {
      // Fallback if role isn't set, e.g., direct navigation to /dataform
      router.replace('/');
    }
  }, [router]);

  return <p>Please wait...</p>; // Or a loading spinner
}
