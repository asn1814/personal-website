import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS, InlineLink, Paragraph } from '../utils/theme.ts';
import { INTERNAL_LINKS } from '../utils/links.ts';

const FancyLink = styled(InlineLink)`
  text-decoration: underline solid 1px ${THEME_COLORS.brandWhite}50;
`;

export const Content = () => {
  return (
    <>
        <Paragraph className="fade04">
          Executive Director at <InlineLink href="https://www.dubhacks.co" target="_blank">DubHacks</InlineLink>. 
          Research Assistant at the UW Allen School <InlineLink href="https://netlab.cs.washington.edu/" target="_blank">Mobile Intelligence Lab</InlineLink>.
          Software Engineer Intern at <InlineLink href="https://about.meta.com" target="_blank">Meta</InlineLink>. 
        </Paragraph>
        <Paragraph className="fade08">
          Pursuing a Bachelors in Computer Science with a Minor in Math at the University of Washington.
          Class of '26.
        </Paragraph>
        <Paragraph className="fade12">
          I love building, eating, traveling, camping, and playing guitar.
        </Paragraph>
        <Paragraph className="fade16">
          <FancyLink href={INTERNAL_LINKS.PROJECTS} target="_self" className="first">View my projects</FancyLink>.
        </Paragraph>
        <Paragraph className="fade20">
          <FancyLink href={INTERNAL_LINKS.ABOUT} target="_self" className="second">Learn more about me</FancyLink>.
        </Paragraph>
    </>
  );
};