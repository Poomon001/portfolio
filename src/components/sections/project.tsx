import React from "react";
import Card from "@/components/card";
import { useContents } from "@/contexts/contents";
import type { ProjectContent } from "@/contexts/contents";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHorizontalFadeInMotion } from "@/hooks/motion";

const StyledProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1rem;
`;

const ProjectContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;

  @media (min-width: 1152px) {
    max-width: 1000px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const Projects = () => {
  const contents = useContents();
  const projects = contents.project.projects as ProjectContent[];
  const motionAnimation = useHorizontalFadeInMotion();

  return (
    <StyledProjectSection id='Projects'>
      <ProjectContainer>
        <SectionTitle>Projects</SectionTitle>
        <ContentContainer>
          {projects.map((project, index) => (
            <motion.div key={index} {...motionAnimation} style={{ width: "100%" }}>
              <Card
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                skills={project.skills}
              />
            </motion.div>
          ))}
        </ContentContainer>
      </ProjectContainer>
    </StyledProjectSection>
  );
};

export default Projects;
