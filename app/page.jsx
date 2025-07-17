import HomeSection from "@/components/home/HomeSection.jsx";
import HomeMobileNav from "@/components/home/HomeMobileNav.jsx";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white flex flex-col items-center pb-20">
      <HomeSection />
      <HomeMobileNav />
    </div>
  );
}