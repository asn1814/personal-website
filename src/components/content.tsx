import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS, InlineLink, Paragraph } from '../utils/theme.ts';
import { INTERNAL_LINKS } from '../utils/links.ts';

const FancyLink = styled(InlineLink)`
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-color: ${THEME_COLORS.brandWhite}50;
  -webkit-text-decoration-thickness: 1px;
  text-decoration: underline solid 1px ${THEME_COLORS.brandWhite}50;
`;

export const Content = () => {
  return (
    <>
        <Paragraph className="fade04">
          Executive Director at <InlineLink href="https://www.dubhacks.co" target="_blank">DubHacks</InlineLink>. 
          Research Assistant at the UW Allen School <InlineLink href="https://netlab.cs.washington.edu/" target="_blank">Mobile Intelligence Lab</InlineLink>.
          Software Engineer Intern at Meta FAIR. 
          Software Engineer Intern at Google DeepMind. 
        </Paragraph>
        {/*<Paragraph className="fade08">
          Pursuing a combined Bachelors/Masters in Computer Science at the University of Washington.
          Class of '26.
        </Paragraph>
        <Paragraph className="fade12">
          I love building, eating, traveling, camping, and playing guitar. If there's anything I can help you out with, don't hesitate to reach me by email!
        </Paragraph>*/}
        <Paragraph className="fade12">
          <FancyLink href={INTERNAL_LINKS.PROJECTS} target="_self" className="first">View my projects</FancyLink>.
        </Paragraph>
        <Paragraph className="fade20">
          <FancyLink href={INTERNAL_LINKS.ABOUT} target="_self" className="second">Learn more about me</FancyLink>.
        </Paragraph>
    </>
  );
};