import React from "react";
import Card from "@/components/card";
import { useContents } from "@/contexts/contents";
import type { ProjectContent } from "@/contexts/contents";
import styled from "styled-components";

const StyledProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 1rem;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Projects = () => {
  const contents = useContents();
  const projects = contents.project.projects as ProjectContent[];
  return (
    <StyledProjectSection id='Projects'>
      <SectionTitle>Projects</SectionTitle>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          skills={project.skills}
        />
      ))}
    </StyledProjectSection>
  );
};

export default Projects;
