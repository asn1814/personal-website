import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
import {Title} from './title.tsx';
import {Content} from './content.tsx';
import {Contact} from './contact.tsx';

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
  margin: 15px;
`;

export const Mainbox = () => {
  return (
    <>
      <Container>
        <Title></Title>
        <Content></Content>
        <Contact></Contact>
      </Container>
    </>
  );
};