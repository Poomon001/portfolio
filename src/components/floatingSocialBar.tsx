import styled from "styled-components";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from "@mui/icons-material";
import { profile } from "@/lib/config";
import SocialLink from "@/components/socialLink";

const FloatingBar = styled.div`
  position: fixed;
  bottom: 0px;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  z-index: 10;
  opacity: 0.6;

  @media (max-width: 1440px) {
    display: none;
  }
`;

const VerticalLine = styled.div<{ color: string }>`
  width: 1px;
  height: 12.5vh;
  background-color: ${({ color }) => color};
`;

const FloatingSocialBar = () => {
  return (
    <FloatingBar>
      <SocialLink href={profile.github} icon={<GitHubIcon fontSize='large' />} label='GitHub' />
      <SocialLink href={profile.linkedin} icon={<LinkedInIcon fontSize='large' />} label='LinkedIn' />
      <SocialLink href={`mailto:${profile.email}`} icon={<EmailIcon fontSize='large' />} label='Email' />
      <VerticalLine color='#222' />
    </FloatingBar>
  );
};

export default FloatingSocialBar;
