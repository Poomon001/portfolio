/**
 * A card powered by CSS Card - Flowbite
 **/
import React from "react";
import styled from "styled-components";
import type { ProjectContent } from "@/contexts/contents";

const CardContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0rem;
`;

const CardLink = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 0.5rem;

  color: #222;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;

  -webkit-tap-highlight-color: transparent; /* remove touch highlight */

  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 0 12px rgba(37, 99, 235, 0.6);
  }

  @media (min-width: 1152px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

const CardImage = styled.div`
  flex: 1 1 50%;
  display: flex;
`;

const Image = styled.img`
  width: calc(100% - 2rem);
  height: auto;
  border-radius: 0.5rem;
  margin: 1rem;
`;

const CardBody = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5;
`;

const CardTitle = styled.div`
  font-size: calc(1.25rem + 0.875vw);
  font-weight: 400;
  padding-bottom: 0.25rem;

  @media (min-width: 1152px) {
    font-size: 1.75rem;
  }
`;

const CardText = styled.p`
  font-weight: 400;
  color: #374151;
  font-size: 1rem;

  @media (min-width: 500px) {
    font-size: 1.25rem;
  }
`;

const SkillTag = styled.span`
  background: #f1f5f9;
  font-size: 0.875rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  display: inline-block;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  gap: 0.5rem;
`;

const Card = ({ title, description, url, skills, image }: ProjectContent) => (
  <CardContainer>
    <CardLink href={url} target='_blank' rel='noopener noreferrer'>
      <CardImage>
        <Image src={image} alt={title}></Image>
      </CardImage>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        {skills && (
          <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </SkillsContainer>
        )}
      </CardBody>
    </CardLink>
  </CardContainer>
);

export default Card;
