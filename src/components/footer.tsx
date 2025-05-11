import styled from "styled-components";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from "@mui/icons-material";
import SocialLink from "@/components/socialLink";

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 1rem 1rem;
  transition: background-color 0.3s ease;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: #666;
  -webkit-tap-highlight-color: transparent; /* remove touch highlight */
`;

const FooterText = styled.span`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;

  a {
    text-decoration: none;
  }
`;

const FooterLink = styled.a`
  text-align: center;
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  text-decoration: none;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;

  @media (min-width: 1398px) {
    display: none;
  }
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
          <SocialLink href='mailto:poomon2542@gmail.com' icon={<EmailIcon />} label='Email' />
        </SocialRow>

        <FooterText>
          <FooterLink href='https://github.com/Poomon001/portfolio' target='_blank' rel='noopener noreferrer'>
            Created by Poom (Phillip) Chuthamsatid powered by Next.js and TypeScript
          </FooterLink>
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
