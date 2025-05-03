import styled from "styled-components";
import React from "react";

const LinkWrapper = styled.a`
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #2563eb;
  }
`;

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
  label?: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <LinkWrapper href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
    {icon}
  </LinkWrapper>
);

export default SocialLink;
