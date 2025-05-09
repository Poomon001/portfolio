import React from "react";
import styled from "styled-components";
import { Timeline, TimelineItem } from "@/components/timeline";
import { useContents } from "@/contexts/contents";
import type { ExperienceContent, EducationContent } from "@/contexts/contents";
import { motion } from "framer-motion";
import { useVerticalFadeInMotion } from "@/hooks/motion";

const StyledExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1rem;
`;

const ExperienceContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const TimelineSide = styled.div`
  display: none;

  @media (min-width: 1152px) {
    position: absolute;
    display: contents;
  }
`;

const TimelineDate = styled.div`
  position: absolute;
  width: 18%;
  font-size: 14px;
  text-align: center;
  right: 893px;
  top: 24px;
`;

const VerticalDivider = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  position: absolute;
  right: 850px;
  top: 53px;
  width: 1px;
  height: calc(100% - 25px);
  opacity: 0.3;
  will-change: transform;
`;

const IconImage = styled.div`
  background-color: white;
  position: absolute;
  right: 834px;
  top: 15px;
  z-index: 2;
  width: 1rem;
  height: 1rem;
  padding: 0.45rem;
  border-radius: 50%;
  will-change: transform, scale;
  transition: transform 0.1s ease;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  position: absolute;
  right: 841px;
  top: 22px;
  width: 1.2rem;
  height: 1.2rem;
  z-index: 5;
`;

const BoldIconImage = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  position: absolute;
  right: 841px;
  top: 21px;
  z-index: 2;
  width: 0.75rem;
  height: 0.75rem;
  padding: 0.25rem;
  border-radius: 50%;
  will-change: transform, scale;
  transition: transform 0.1s ease, scale 0.1s ease;
`;

const HorizontalDivider = styled.div`
  position: absolute;
  top: 30px;
  right: 745px;
  z-index: -1;
  background-color: #666;
  height: 3px;
  width: 100px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease-out;
  will-change: transform;
`;

const TimelineContent = styled.div<{ color: string }>`
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 1.5rem 1rem; /* position horizontal lines horizontally */
  border: 1px solid rgba(102, 102, 102, 0.3);
  border-radius: 0.5rem;
  background-color: ${({ color }) => color};
  text-align: left;

  @media (min-width: 1152px) {
    max-width: 720px; /* position horizontal lines vertically */
    border: 1px solid rgba(102, 102, 102, 0.3);
  }

  &:hover {
    box-shadow: 0 0 12px rgba(37, 99, 235, 0.6);
  }

  &:hover ${IconImage} {
    transform: rotate(-225deg);
    border: 2px solid #666;
    border-radius: 50%;
    border-bottom-color: #fff;
    border-right-color: #fff;
  }

  &:hover ${BoldIconImage}, &:hover ${Icon} {
    transform: scale(1.2);
  }

  &:hover ${HorizontalDivider} {
    transform: scaleX(1);
  }
`;

const TimelineEmptyContent = styled.div`
  position: relative;
  @media (min-width: 1152px) {
    padding: 0.75rem 0; /* a small white-space between experience and quote */
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 0.25rem;
`;

const LocationDate = styled.div`
  color: #666;
  margin-bottom: 1.5rem;

  @media (min-width: 1152px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

const RevealDate = styled.span`
  @media (min-width: 1152px) {
    display: none;
  }
`;

const ExperienceDescription = styled.div`
  text-align: left;
  font-size: 16px;
`;

const EducationDescription = styled.div`
  text-align: left;
  font-size: 14px;
  color: #666;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const TechItem = styled.span`
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #666;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  margin: 1.25rem 0.25rem 0.25rem 0.25rem;
`;

const TimelineSection = ({ date, isWorkExperience }: { date: string; isWorkExperience: boolean }) => {
  return (
    <TimelineSide className='TimelineSlide'>
      <VerticalDivider color='#666;' />
      <TimelineDate>{date}</TimelineDate>
      {isWorkExperience ? (
        <BoldIconImage color='#666' />
      ) : (
        <>
          <IconImage />
          <Icon src='/school.svg' alt='icon' />
        </>
      )}
      <HorizontalDivider />
    </TimelineSide>
  );
};

const TimelineExperience = (props: ExperienceContent) => {
  return (
    <TimelineItem key={props.id} className='TimelineItem'>
      <TimelineContent className='TimelineContent' color={"#fff"}>
        <TimelineSection date={props.date} isWorkExperience={props.isWorkExperience} />
        <Title>
          {props.position}, {props.company}
        </Title>
        <LocationDate>
          {props.location}
          <RevealDate> | {props.date}</RevealDate>
        </LocationDate>
        <ExperienceDescription>
          {props.achievements.map((achievement, index) => (
            <span key={index}>{achievement}</span>
          ))}
        </ExperienceDescription>
        <TechList>
          {props.skills.map((skill, index) => (
            <TechItem key={index}>{skill}</TechItem>
          ))}
        </TechList>
      </TimelineContent>
    </TimelineItem>
  );
};

const TimelineEducation = (props: EducationContent) => {
  return (
    <TimelineItem key={props.id} className='TimelineItem'>
      <TimelineContent className='TimelineContent' color={"#fff"}>
        <TimelineSection date={props.date} isWorkExperience={props.isWorkExperience} />
        <EducationDescription>{props.description}</EducationDescription>
      </TimelineContent>
    </TimelineItem>
  );
};

const TimelineTermination = () => {
  return (
    <TimelineItem key='000000' className='TimelineItem'>
      <TimelineEmptyContent className='TimelineEmptyContent'>
        <Icon src='/work.svg' alt='icon' />
      </TimelineEmptyContent>
    </TimelineItem>
  );
};

const Experience = () => {
  const contents = useContents();
  const experience = contents.experience.experiences as (ExperienceContent | EducationContent)[];
  const motionAnimation = useVerticalFadeInMotion();
  const MotionTimelineItem = motion.create(TimelineItem);

  return (
    <StyledExperienceSection id='Experience'>
      <ExperienceContainer>
        <SectionTitle>Experience</SectionTitle>
        <Timeline className='Timeline'>
          {[...experience, { isTermination: true }].map((item, index) => (
            <MotionTimelineItem key={index} className='TimelineItem' {...motionAnimation}>
              {"isTermination" in item ? (
                <TimelineTermination key={index} />
              ) : item.isWorkExperience ? (
                <TimelineExperience key={index} {...(item as ExperienceContent)} />
              ) : (
                <TimelineEducation key={index} {...(item as EducationContent)} />
              )}
            </MotionTimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </StyledExperienceSection>
  );
};

export default Experience;
