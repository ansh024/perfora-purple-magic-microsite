import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScienceSection from "@/components/ScienceSection";
import SixtySeconds from "@/components/SixtySeconds";
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
        <ScienceSection />
        <SixtySeconds />
        <HowToUse />
        <Ingredients />
        <Results />
        <Trust />
        <BuySection />
        <Reviews />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
