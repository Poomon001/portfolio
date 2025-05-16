import React from "react";
import styled from "styled-components";
import { useContents } from "@/contexts/contents";
import { motion } from "framer-motion";
import { useHorizontalFadeInMotion } from "@/hooks/motion";

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  min-height: 100vh;
  justify-content: center;
`;

const AboutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
`;

const AboutContent = styled.div`
  color: #222;
  font-weight: normal;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    text-align: justify;
  }
`;

const About = () => {
  const contents = useContents();
  const about = contents.about.description;
  const motionAnimation = useHorizontalFadeInMotion();

  return (
    <StyledAboutSection id='About'>
      <AboutContainer>
        <Title>{contents.about.heading}</Title>
        <motion.div {...motionAnimation} style={{ width: "100%" }}>
          <AboutContent>{about}</AboutContent>
        </motion.div>
      </AboutContainer>
    </StyledAboutSection>
  );
};

export default About;
