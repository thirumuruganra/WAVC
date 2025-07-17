import HomeHeader from "../homePage/HomeHeader.jsx";
import HomeSection from "../homePage/HomeSection.jsx";
import HomeMobileNav from "../homePage/HomeMobileNav.jsx";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white flex flex-col items-center pb-20">
      <HomeHeader />
      <HomeSection />
      <HomeMobileNav />
    </div>
  );
}