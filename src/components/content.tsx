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
        <p>
          Executive Director at <InlineLink href="https://www.dubhacks.co" target="_blank">DubHacks</InlineLink>. 
          Research Assistant at the UW Allen School <InlineLink href="https://netlab.cs.washington.edu/" target="_blank">Mobile Intelligence Lab</InlineLink>.
          SWE Intern at <InlineLink href="https://about.meta.com" target="_blank">Meta</InlineLink>. 
        </p>
        <p>
          Seattle native. 
          Currently pursuing a Bachelors in Computer Science and Minor in Math at the University of Washington.
          Class of '25.
        </p>
        <p>
          I love building, eating, travelling, camping, and playing guitar.
        </p>
    </>
  );
};