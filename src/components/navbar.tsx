/**
 * A page Navbar powered by Tailwind CSS Navbar - Flowbite
 **/
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (prefers-color-scheme: dark) {
    background-color: #111827;
    border-color: #374151;
  }
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;

  img {
    height: 2rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111;
    white-space: nowrap;
    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }
`;

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: #6b7280;
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (min-width: 768px) {
    display: none;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const NavMenu = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  width: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    display: flex;
    width: auto;
    margin-top: 0;
  }
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  border: 1px solid #f3f4f6;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    padding: 0;
    background: transparent;
    border: none;
  }
`;

const NavItem = styled.div`
  a {
    display: block;
    padding: 0.5rem 0.75rem;
    color: #111827;
    text-decoration: none;
    border-radius: 0.25rem;

    &:hover {
      background-color: #f3f4f6;
      @media (min-width: 768px) {
        background: transparent;
        color: #2563eb;
      }
    }

    @media (prefers-color-scheme: dark) {
      color: white;

      &:hover {
        background-color: #374151;
      }
    }
  }

  .active {
    color: #2563eb;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Brand href='#'>
          <img src='https://flowbite.com/docs/images/logo.svg' alt='Logo' />
          <span>PC</span>
        </Brand>

        <ToggleButton onClick={() => setMenuOpen((prev) => !prev)} aria-label='Toggle navigation'>
          <svg viewBox='0 0 20 20' fill='none' stroke='currentColor'>
            <path d='M3 6h14M3 12h14M3 18h14' strokeWidth='2' strokeLinecap='round' />
          </svg>
        </ToggleButton>

        <NavMenu open={menuOpen}>
          <NavList>
            <NavItem>
              <a href='#Experience'>Experience</a>
            </NavItem>
            <NavItem>
              <a href='#Projects'>Projects</a>
            </NavItem>
            <NavItem>
              <a href='#Awards'>Awards</a>
            </NavItem>
          </NavList>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
