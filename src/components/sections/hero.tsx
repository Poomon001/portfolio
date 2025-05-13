import React from "react";
import Background from "@/components/background";
import styled from "styled-components";
import { useContents } from "@/contexts/contents";

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 4rem); /* subtract navbar height */
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
  font-weight: 500;
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

const HeroSubtitle = styled.div`
  color: #aaa;
  font-size: 0.75rem;
  font-weight: normal;
  font-family: var(--font-sans);
  max-width: 750px;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Hook = styled.span`
  color: white;
`;

const Hero = () => {
  const contents = useContents();
  const hook = contents.hero.hook;
  const brief = contents.hero.brief;

  return (
    <Background>
      <StyledHeroSection>
        <HeroTitle>{contents.hero.heading}</HeroTitle>
        <HeroSubtitle>
          <Hook>{hook}</Hook>&nbsp;
          {brief}
        </HeroSubtitle>
      </StyledHeroSection>
    </Background>
  );
};

export default Hero;
