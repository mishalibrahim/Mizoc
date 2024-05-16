import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";


export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="fixed h-[100vh] w-full bg-gradient-to-b from-transparent to-80% to-white top-0 z-[-10]"></div>
      <Hero />
      <OurServices />
      <AboutUs />
      <WhyChooseUs/>
    </main>
  );
}
