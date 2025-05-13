import styled from "styled-components";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from "@mui/icons-material";
import SocialLink from "@/components/socialLink";
import { profile, footer } from "@/lib/config";

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
          <SocialLink href={profile.github} icon={<GitHubIcon />} label='GitHub' />
          <SocialLink href={profile.linkedin} icon={<LinkedInIcon />} label='LinkedIn' />
          <SocialLink href={`mailto:${profile.email}`} icon={<EmailIcon />} label='Email' />
        </SocialRow>

        <FooterText>
          <FooterLink href={footer.portfolio} target='_blank' rel='noopener noreferrer'>
            {footer.credit}
          </FooterLink>
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
