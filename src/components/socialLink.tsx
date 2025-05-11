import styled from "styled-components";
import React from "react";

const LinkWrapper = styled.a`
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  color: ${(props) => props.color || "inherit"};

  &:hover {
    transform: scale(1.1);
    color: #2563eb;
  }
`;

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
  color?: string;
  label?: string;
}

const SocialLink = ({ href, icon, color, label }: SocialLinkProps) => (
  <LinkWrapper href={href} target='_blank' rel='noopener noreferrer' color={color} aria-label={label}>
    {icon}
  </LinkWrapper>
);

export default SocialLink;
