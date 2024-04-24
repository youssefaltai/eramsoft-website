import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col px-32 gap-24">
        <Hero />
        <AboutUs />
        <OurServices />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
      <CopyRight />
    </>
  );
}

