"use client";

import { ContentsProvider } from "@/app/contexts/contents";
import contents from "@/app/contexts/contents";
import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <ContentsProvider contents={contents}>
      <Navbar />
      <div>{contents.experiences.heading}</div>
    </ContentsProvider>
  );
}
