import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
import {Header} from './header.tsx';
import {Content} from './content.tsx';

const Container = styled.div`
  position: relative;
  height: fit-content;
  max-width: 600px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: ${THEME_COLORS.brandWhite};
  background-color: ${THEME_COLORS.brandMid};
`;

export const Mainbox = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <Content></Content>
      </Container>
    </>
  );
};