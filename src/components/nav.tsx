import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

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

const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  background-color: transparent;
  text-decoration: underline transparent 1px;
  transition: text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline solid 1px;
  }
  width: 100%;
  max-width: 100px;
  text-align: center;
`;

export const Nav = () => {
  return (
    <Container>
      <InlineLink href="/" target="_self">Home</InlineLink>
      <InlineLink href="/projects" target="_self">Projects</InlineLink>
      <InlineLink href="/about" target="_self">About Me</InlineLink>
    </Container>
  );
};