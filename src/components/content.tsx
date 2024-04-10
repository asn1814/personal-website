import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  text-decoration: underline transparent 1px;
  background-color: transparent;
  font-style: italic;
  transition: text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline solid 1px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  /*transition: font-size 0.4s ease-in-out;
  &:hover {
    font-size: 20px;
  }*/
`;

export const Content = () => {
  return (
    <>
        <Paragraph>
          Executive Director at <InlineLink href="https://www.dubhacks.co" target="_blank">DubHacks</InlineLink>. 
          Research Assistant at the UW Allen School <InlineLink href="https://netlab.cs.washington.edu/" target="_blank">Mobile Intelligence Lab</InlineLink>.
          Software Engineer Intern at <InlineLink href="https://about.meta.com" target="_blank">Meta</InlineLink>. 
        </Paragraph>
        <Paragraph>
          Seattle native. 
          Currently pursuing a Bachelors in Computer Science and Minor in Math at the University of Washington.
          Class of '25.
        </Paragraph>
        <Paragraph>
          I love building, eating, travelling, camping, and playing guitar.
        </Paragraph>
    </>
  );
};