import styled from "styled-components";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";
import SocialLink from "@/components/socialLink";

const FooterContainer = styled.footer`
  background-color: #fff;
  margin: 1rem;
  padding: 0.5rem;
  transition: background-color 0.3s ease;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const FooterText = styled.span`
  text-align: center;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;

  a {
    color: #2563eb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (prefers-color-scheme: dark) {
    color: white;
    a {
      color: #60a5fa;
    }
  }
`;

const FooterLink = styled.a`
  text-align: center;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialRow>
          <SocialLink href='https://github.com/Poomon001' icon={<GitHubIcon />} label='GitHub' />
          <SocialLink
            href='https://www.linkedin.com/in/poomrapee-chuthamsatid-04b31119a/'
            icon={<LinkedInIcon />}
            label='LinkedIn'
          />
        </SocialRow>
        <br />
        <FooterText>
          <FooterLink href='https://github.com/Poomon001/portfolio' target='_blank' rel='noopener noreferrer'>
            Created by Poom Chuthamsatid powered by Next.js and TypeScript
          </FooterLink>
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
