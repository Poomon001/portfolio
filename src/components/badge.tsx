import React from "react";
import styled from "styled-components";
import type { AwardContent } from "@/contexts/contents";

const AwardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.5rem 0rem;
  width: 100%;
  font-size: 0.75rem;

  @media (min-width: 720px) {
    font-size: 1rem;
  }
`;

const AwardIcon = styled.img<{ $isSquare: boolean }>`
  width: auto;
  height: ${({ $isSquare }) => ($isSquare ? "1.75rem" : "1.5rem")};
  margin-bottom: ${({ $isSquare }) => ($isSquare ? "0rem" : "0.25rem")};

  @media (min-width: 720px) {
    height: ${({ $isSquare }) => ($isSquare ? "3.25rem" : "3rem")};
    margin-bottom: ${({ $isSquare }) => ($isSquare ? "0.5rem" : "0.75rem")};
  }
`;

const AwardYear = styled.div`
  font-weight: 500;
  color: white;
  margin: 0.5rem 0;
  background: #222;
  padding: 0.25rem 0;
  width: 90%;
  text-align: center;
  border-radius: 0.25rem;
`;

const AwardTitle = styled.div`
  color: #222;
  font-weight: 700;
  margin-top: 0.5rem;
`;

const AwardBrief = styled.div`
  color: #222;
  font-weight: 500;
  margin-top: 0.5rem;

  @media (min-width: 720px) {
    font-weight: 500;
    color: #666;
  }
`;

const Badge = ({ item }: { item: AwardContent }) => {
  return (
    <AwardItem key={item.id}>
      <AwardIcon src={item.icon} alt='badge' $isSquare={item.isSquare} />
      <AwardYear>{item.year}</AwardYear>
      <AwardTitle>{item.title}</AwardTitle>
      <AwardBrief>{item.brief}</AwardBrief>
    </AwardItem>
  );
};

export default Badge;
