import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <OurServices />
      <WhyChooseUs/>
    </main>
  );
}
