import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function ClubCard({ club, children }) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <img src={club.logo} alt={`${club.name} logo`} className="w-20 h-20 rounded-full mx-auto" />
      </CardHeader>
      <CardContent>
        <CardTitle>{club.name}</CardTitle>
        <CardDescription>{club.type} Club</CardDescription>
        {children}
      </CardContent>
    </Card>
  );
}