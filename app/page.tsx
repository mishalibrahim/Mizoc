import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <OurServices />
      <AboutUs />
    </main>
  );
}
