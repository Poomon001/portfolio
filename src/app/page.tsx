"use client";

import { ContentsProvider } from "@/app/contexts/contents";
import contents from "@/app/contexts/contents";
import Hero from "./components/sections/hero";
import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div>
      <ContentsProvider contents={contents}>
        <Navbar />
        <Hero />
      </ContentsProvider>
    </div>
  );
}
