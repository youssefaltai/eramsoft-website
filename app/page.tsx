import HeroSection from "./(sections)/HeroSection";
import OurMissionSection from "./(sections)/OurMissionSection";
import HowCanWeHelpYouSection from "./(sections)/HowCanWeHelpYouSection";
import WhySection from "./(sections)/WhySection";
import WhatWeOfferSection from "./(sections)/WhatWeOfferSection";
import ContactSection from "./(sections)/ContactSection";
import FooterSection from "./(sections)/FooterSection";
import TestimonialsSection from "./(sections)/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowCanWeHelpYouSection />
      <OurMissionSection />
      <WhySection />
      <WhatWeOfferSection />
      <ContactSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}
