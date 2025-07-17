"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function Header() {
  const router = useRouter();

  return (
    <header className="p-4 flex items-center border-b">
      <Button variant="ghost" size="icon" onClick={() => router.back()}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <h1 className="text-xl font-bold ml-2">WAVC</h1>
    </header>
  );
}
