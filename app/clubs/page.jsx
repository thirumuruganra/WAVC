import Link from 'next/link';
import { clubs } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { ClubCard } from '@/components/ClubCard';

export default function ClubsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Club Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club}>
            <Link href={`/clubs/${club.id}`} passHref>
              <Button variant="outline" className="w-full mt-4">View</Button>
            </Link>
            <Button className="w-full mt-2">Follow</Button>
          </ClubCard>
        ))}
      </div>
    </div>
  );
}