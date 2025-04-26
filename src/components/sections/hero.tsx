import React from "react";
import Background from "@/components/background";
import styled from "styled-components";
import { useContents } from "@/contexts/contents";

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100svh - 4rem);
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 4rem;

  @media (min-width: 1800px) {
    max-width: 1480px;
  }
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: var(--font-sans);
  text-align: left;
  margin: 25px 0px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 0.75rem;
  font-weight: normal;
  font-family: var(--font-sans);
  max-width: 750px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Hero = () => {
  const contents = useContents();

  return (
    <Background>
      <StyledHeroSection>
        <HeroTitle>{contents.hero.heading}</HeroTitle>
        <HeroSubtitle>{contents.hero.brief}</HeroSubtitle>
      </StyledHeroSection>
    </Background>
  );
};

export default Hero;
