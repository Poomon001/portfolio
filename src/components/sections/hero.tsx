import React from "react";
import Background from "@/components/background";
import styled from "styled-components";
import { useContents } from "@/contexts/contents";

const StyledHeroSection = styled.section`
  position: relative;
  min-height: calc(100svh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  padding: 0 6rem;
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
        <ContentContainer>
          <HeroTitle>{contents.hero.heading}</HeroTitle>
          <HeroSubtitle>{contents.hero.brief}</HeroSubtitle>
        </ContentContainer>
      </StyledHeroSection>
    </Background>
  );
};

export default Hero;
