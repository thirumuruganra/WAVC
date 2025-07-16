
import HomeHeader from "../homePage/HomeHeader";
import HomeSection from "../homePage/HomeSection";
import HomeMobileNav from "../homePage/HomeMobileNav";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white flex flex-col items-center pb-20">
      <HomeHeader />
      <HomeSection />
      <HomeMobileNav />
    </div>
  );
}
