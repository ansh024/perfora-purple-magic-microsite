import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScienceSection from "@/components/ScienceSection";
import HowToUse from "@/components/HowToUse";
import Ingredients from "@/components/Ingredients";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Trust from "@/components/Trust";
import BuySection from "@/components/BuySection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BuySection />
        <HowToUse />
        <ScienceSection />
        <Ingredients />
        <Results />
        <Trust />
        <Reviews />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
