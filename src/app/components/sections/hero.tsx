import React from "react";
import styled from "styled-components";

const StyledHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <div />
      <div>
        <h2>Heading</h2>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
