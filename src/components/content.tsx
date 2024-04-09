import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  text-decoration: none;
  background-color: transparent;
  font-style: italic;
  &:hover {
    text-decoration: underline;
  }
`;

export const Content = () => {
  return (
    <>
        Executive Director at <InlineLink href="https:www.dubhacks.co" target="_blank">DubHacks</InlineLink>. 
    </>
  );
};