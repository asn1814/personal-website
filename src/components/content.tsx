import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
import { INTERNAL_LINKS } from '../utils/links.ts';

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

const FancyLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  text-decoration: underline solid 1px ${THEME_COLORS.brandMid};
  border-radius: 15px;
  font-style: italic;
  transition: all 0.3s ease;
  width: fit-content;
  &:hover {
    text-decoration: underline solid 1px ${THEME_COLORS.brandWhite};
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  /*transition: font-size 0.4s ease-in-out;
  &:hover {
    font-size: 20px;
  }*/

  /*@keyframes attention {
    10% {
      background-color: transparent;
    }
    12.5% {
      background-color: ${THEME_COLORS.brandMid};
    }
    15% {
      background-color: transparent;
    }
    17.5% {
      background-color: ${THEME_COLORS.brandMid};
    }
    20% {
      background-color: transparent;
    }
  }

  .first {
    animation: attention 10s 1s infinite;
  }

  .second {
    animation: attention 10s 3s infinite;
  }*/
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
          Class of '25.
        </Paragraph>
        <Paragraph className="fade12">
          I love building, eating, traveling, camping, and playing guitar.
        </Paragraph>
        <Paragraph className="fade16">
          <FancyLink href={INTERNAL_LINKS.PROJECTS} target="_self" className="first">View my projects.</FancyLink>
        </Paragraph>
        <Paragraph className="fade20">
          <FancyLink href={INTERNAL_LINKS.ABOUT} target="_self" className="second">Learn more about me.</FancyLink>
        </Paragraph>
    </>
  );
};