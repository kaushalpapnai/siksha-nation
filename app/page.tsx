import Benefits from "@/components/Benifits";
import CTAForm from "@/components/CTAForm";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SuccessStories from "@/components/SucessStories";
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
      <SuccessStories/>
      <CTAForm/>
    </div>
  );
}
