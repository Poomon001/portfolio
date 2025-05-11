/**
 * A page Navbar powered by CSS Navbar - Flowbite
 **/
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
  -webkit-tap-highlight-color: transparent; /* remove touch highlight */
`;

const NavContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  z-index: 10;
  padding-left: 0.75rem;

  img {
    height: 2rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #222;
  }
`;

const ToggleButton = styled.button`
  display: inline-flex;
  padding: 0.5rem;
  color: #222;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
    border-radius: 0.25rem;
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
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  overflow: hidden;
  max-height: ${({ open }) => (open ? "500px" : "0px")};
  transition: max-height 0.5s ease;
  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 768px) {
    position: relative;
    max-height: none;
    overflow: visible;
    display: flex;
    border-bottom: none;
  }
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    padding: 0;
    background: transparent;
    border: none;
  }
`;

const NavItem = styled.div`
  a {
    display: block;
    padding: 0.5rem 0.75rem;
    color: #222;
    text-decoration: none;

    &:hover {
      background-color: #f3f4f6;
      @media (min-width: 768px) {
        background: transparent;
        color: #2563eb;
      }
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Brand href='#'>
          <img src='/favicon_large.svg' alt='Logo' />
          <span>PC</span>
        </Brand>

        <ToggleButton onClick={() => setMenuOpen((prev) => !prev)} aria-label='Toggle navigation'>
          <svg viewBox='0 0 20 20' fill='none' stroke='currentColor'>
            <path d='M3 6h14M3 12h14M3 18h14' strokeWidth='2' strokeLinecap='round' />
          </svg>
        </ToggleButton>

        <NavMenu className='NavMenu' open={menuOpen}>
          <NavList className='NavList'>
            <NavItem>
              <a href='#About'>About</a>
            </NavItem>
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
