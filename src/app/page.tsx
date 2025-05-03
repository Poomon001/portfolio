"use client";

import { ContentsProvider } from "@/contexts/contents";
import contents from "@/contexts/contents";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Experience from "@/components/sections/experience";
import Testimonial from "@/components/sections/testimonial";
import Projects from "@/components/sections/project";

export default function HomePage() {
  return (
    <div>
      <ContentsProvider contents={contents}>
        <Navbar />
        <Hero />
        <Experience />
        <Testimonial />
        <Projects />
        <Footer />
      </ContentsProvider>
    </div>
  );
}
