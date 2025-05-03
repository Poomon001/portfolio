/**
 * A card powered by CSS Card - Flowbite
 **/
import React from "react";
import styled from "styled-components";
import type { ProjectContent } from "@/contexts/contents";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  max-width: 1200px;
  margin: 2rem auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const SkillTag = styled.span`
  background: #f1f5f9;
  font-size: 0.875rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  display: inline-block;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = ({ title, description, image, skills }: ProjectContent) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {skills && (
          <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </SkillsContainer>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
