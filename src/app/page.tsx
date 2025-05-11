"use client";

import { ContentsProvider } from "@/contexts/contents";
import contents from "@/contexts/contents";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Footer from "@/components/footer";
import Experience from "@/components/sections/experience";
import Testimonial from "@/components/sections/testimonial";
import Projects from "@/components/sections/project";
import Award from "@/components/sections/award";

export default function HomePage() {
  return (
    <div>
      <ContentsProvider contents={contents}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Testimonial />
        <Projects />
        <Award />
        <Footer />
      </ContentsProvider>
    </div>
  );
}
