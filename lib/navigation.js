import { Home, Calendar, MessageCircle, User } from "lucide-react";

export const navigationLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Clubs", href: "/clubs", icon: MessageCircle },
  { name: "Profile", href: "/profile", icon: User }, // Assuming a /profile route
];