import Link from 'next/link';
import { navigationLinks } from "@/lib/navigation";

export default function HomeMobileNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 flex justify-around items-center h-16 z-50 md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      {navigationLinks.map(link => (
          <Link href={link.href} key={link.name} className="flex flex-col items-center text-neutral-700 focus:outline-none min-w-[56px] py-1 rounded">
             
                <link.icon size={26} />
                <span className="text-xs mt-1">{link.name}</span>
            
          </Link>
      ))}
    </nav>
  );
}