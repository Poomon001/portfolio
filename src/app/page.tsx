"use client";

import { ContentsProvider } from "@/contexts/contents";
import contents from "@/contexts/contents";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";

export default function HomePage() {
  return (
    <div>
      <ContentsProvider contents={contents}>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </ContentsProvider>
    </div>
  );
}
