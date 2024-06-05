import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
import FAQ from './FAQ.tsx';

const Container = styled.div`
  position: relative;
  height: fit-content;
  max-width: 500px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: ${THEME_COLORS.brandWhite};
  margin: 20px;
  border-top: solid 0.5px;
  border-color: ${THEME_COLORS.brandWhite}36;
  overflow: auto;
  max-height: 57vh;
`;

const Paragraph = styled.p`
  font-size: 16px;
`;

export const Projects = () => {
  return (
    <>
      <Container>
        <Paragraph className="fade12">
          I aim to write elegant, interesting code. These are some of the projects I've been working on.
        </Paragraph>
        <FAQ></FAQ>
      </Container>
    </>
  );
};