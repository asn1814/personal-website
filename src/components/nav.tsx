import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
import { INTERNAL_LINKS } from '../utils/links.ts';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  padding: 20px 0px 0px;
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
`;

const StyledNavLink = styled(NavLink)`
  color: ${THEME_COLORS.brandWhite};
  background-color: transparent;
  transition: text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline solid 1px;
  }
  width: 100%;
  max-width: 100px;
  text-align: center;
  text-decoration: ${props => (props.className === 'selected' ? 'underline solid 1px #FAF0E690' : 'underline transparent 1px')};
`;

export const Nav = () => {
  const [currentLink, setCurrentLink] = useState<string>(INTERNAL_LINKS.HOME);

  useEffect(() => {
    const url = window.location.pathname;
    if (url === INTERNAL_LINKS.ABOUT) setCurrentLink(INTERNAL_LINKS.ABOUT);
    if (url === INTERNAL_LINKS.PROJECTS) setCurrentLink(INTERNAL_LINKS.PROJECTS);
  }, []);

  return (
    <Container className="fade20">
      <StyledNavLink
        onClick={() => setCurrentLink(INTERNAL_LINKS.HOME)}
        className={currentLink === INTERNAL_LINKS.HOME ? 'selected' : ''}
        to={INTERNAL_LINKS.HOME}
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        onClick={() => setCurrentLink(INTERNAL_LINKS.PROJECTS)}
        className={currentLink === INTERNAL_LINKS.PROJECTS ? 'selected' : ''}
        to={INTERNAL_LINKS.PROJECTS}
      >
        Projects
      </StyledNavLink>
      <StyledNavLink
        onClick={() => setCurrentLink(INTERNAL_LINKS.ABOUT)}
        className={currentLink === INTERNAL_LINKS.ABOUT ? 'selected' : ''}
        to={INTERNAL_LINKS.ABOUT}
      >
        About Me
      </StyledNavLink>
    </Container>
  );
};