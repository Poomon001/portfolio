import React from "react";
import styled from "styled-components";
import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  TimelineDesc,
} from "@/app/components/timeline";
import { useContents } from "@/app/contexts/contents";
import type { ExperienceContent } from "@/app/contexts/contents";

const StyledExperienceSection = styled.section`
  display: flex;
  flex-direction: column; /* ensures vertical stacking */
  align-items: center;
  justify-content: flex-start; /* content starts from top */
  padding: 4rem 1rem; /* adjust as needed */
  min-height: 100vh; /* ensures at least full screen */
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
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

const Experience = () => {
  const contents = useContents();
  const experience = contents.experience.experiences as ExperienceContent[];
  return (
    <StyledExperienceSection id='Experience'>
      <Timeline>
        <SectionTitle>Experience</SectionTitle>
        {experience.map((item, index) => (
          <TimelineItem key={index}>
            <TimelinePoint />
            <TimelineTime>{item.date}</TimelineTime>
            <TimelineTitle>
              {item.position} | {item.company}
            </TimelineTitle>
            <TimelineDesc>
              {item.achievements.map((achievement, i) => (
                <div key={i}>{achievement}</div>
              ))}
            </TimelineDesc>
          </TimelineItem>
        ))}
      </Timeline>
    </StyledExperienceSection>
  );
};

export default Experience;
