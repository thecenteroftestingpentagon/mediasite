import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RealProblemSection from "@/components/RealProblemSection";
import HeroProductPanel from "@/components/HeroProductPanel";
import PlatformOverview from "@/components/PlatformOverview";
import ElevateaxisStudioModule from "@/components/ElevateaxisStudioModule";
import ElevateaxisAgentsModule from "@/components/ElevateaxisAgentsModule";
import CareerSection from "@/components/CareerSection";
import BeforeYouBookFaq from "@/components/BeforeYouBookFaq";
import SignOffSection from "@/components/SignOffSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[140px] pb-12">
        <HeroSection />
        <RealProblemSection />
        <HeroProductPanel />
        <PlatformOverview />
        <ElevateaxisStudioModule />
        <ElevateaxisAgentsModule />
        <CareerSection />
        <BeforeYouBookFaq />
        <SignOffSection />
      </main>
      <Footer />
    </>
  );
}
