import styled from "styled-components";

export const Timeline = styled.div`
  position: relative;
  border-left: 1px solid #e5e7eb; /* light mode */
  padding-left: 1rem;

  @media (prefers-color-scheme: dark) {
    border-color: #374151; /* dark mode */
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  margin-left: 1rem;
`;

export const TimelinePoint = styled.div`
  position: absolute;
  width: 0.75rem;
  height: 0.75rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  left: -1.25rem;
  border: 1px solid white;

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #111827;
  }
`;

export const TimelineTime = styled.time`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`;

export const TimelineTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

export const TimelineDesc = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;
