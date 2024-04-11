import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

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
`;

const Paragraph = styled.p`
  font-size: 16px;
`;

export const Projects = () => {
  return (
    <>
      <Container>
        <Paragraph>
          I aim to write elegant, interesting code. These are some of the projects I've been working on.
        </Paragraph>
      </Container>
    </>
  );
};