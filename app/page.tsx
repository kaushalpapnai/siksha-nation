import Benefits from "@/components/Benifits";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <WhyChoose/>
      <Experience/>
      <HowItWorks/>
      <Benefits/>
    </div>
  );
}
