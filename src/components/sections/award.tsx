import React from "react";
import styled from "styled-components";
import { useContents } from "@/contexts/contents";
import type { AwardContent } from "@/contexts/contents";
import Badge from "@/components/badge";

const StyledAwardSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
  min-height: calc(100vh - 5.5rem); /* Subtract footer height */
  justify-content: flex-start;
`;

const AwardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;

  @media (min-width: 1152px) {
    max-width: 1100px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
`;

const AwardGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media (min-width: 1152px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
  }
`;

const AwardsGridLayout = ({ awards }: { awards: AwardContent[] }) => (
  <AwardGrid>
    {awards.map((item) => (
      <Badge key={item.id} item={item} />
    ))}
  </AwardGrid>
);

const Award = () => {
  const contents = useContents();
  const awards = contents.award.awards as AwardContent[];

  return (
    <StyledAwardSection id='Awards'>
      <AwardContainer>
        <Title>Awards</Title>
        <AwardsGridLayout awards={awards} />
      </AwardContainer>
    </StyledAwardSection>
  );
};

export default Award;
