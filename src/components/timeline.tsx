import React from "react";
import styled from "styled-components";

const StyledTimeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const StyledTimelineItem = styled.div`
  display: flex;
  margin: 0.25rem 0rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 1152px) {
    justify-content: flex-end;
    width: 1000px;
  }
`;

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <StyledTimeline ref={ref} className={className} {...props} />;
  }
);

const TimelineItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <StyledTimelineItem ref={ref} className={className} {...props} />;
  }
);

Timeline.displayName = "TimelineContainer";
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
