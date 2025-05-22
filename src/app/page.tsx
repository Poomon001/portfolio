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
import FloatingSocialBar from "@/components/floatingSocialBar";

export default function HomePage() {
  return (
    <div id='top'>
      <Navbar />
      <ContentsProvider contents={contents}>
        <Hero />
        <About />
        <Experience />
        <Testimonial />
        <Projects />
        <Award />
      </ContentsProvider>
      <Footer />
      <FloatingSocialBar />
    </div>
  );
}
