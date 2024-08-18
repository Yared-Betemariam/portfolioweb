import AboutMeSection from "@/components/sections/AboutMeSection";
import Achievements from "@/components/sections/Achievements";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WorksSection from "@/components/sections/WorksSection";
import { ArrowRight } from "lucide-react";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="flex flex-col flex-1 pt-16 md:pt-20 overflow-x-hidden">
      <section className="bg-gray-800 relative">
        <div className="wrapper py-4 text-gray-200">
          <p className="flex gap-2 opacity-90 font-normal">
            <span>Available now for work.</span>
            <a
              href="#contact"
              className="flex items-center gap-2 underline text-primary brightness-125"
            >
              <span>Contact now</span>
              <ArrowRight size={18} className=" animate_updown" />
            </a>
          </p>
        </div>
      </section>
      <HeroSection />
      <AboutMeSection />
      <Services />
      <Resume />
      <WorksSection />
      <Achievements />
      <ContactSection />
    </main>
  );
}
