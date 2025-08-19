import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import SacredQuoteSection from "@/components/SacredQuoteSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <SacredQuoteSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
