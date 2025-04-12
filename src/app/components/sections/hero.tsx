import React from "react";
import { WavyBackground } from "@/app/components/shadcn/ui/wavy-background";
import styled from "styled-components";
import { useContents } from "@/app/contexts/contents";

const StyledHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
  text-align: center;
  font-family: var(--font-sans);

  @media (min-width: 768px) {
    font-size: 2.25rem; /* md:text-4xl */
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem; /* lg:text-7xl */
  }
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 1rem; /* text-base */
  font-weight: normal;
  text-align: center;
  font-family: var(--font-sans);
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem; /* md:text-lg */
  }
`;

const Hero = () => {
  const contents = useContents();

  return (
    <StyledHeroSection>
      <WavyBackground>
        <HeroTitle>{contents.hero.heading}</HeroTitle>
        <HeroSubtitle>{contents.hero.brief}</HeroSubtitle>
      </WavyBackground>
    </StyledHeroSection>
  );
};

export default Hero;
