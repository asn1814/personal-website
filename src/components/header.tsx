import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const Container = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: ${THEME_COLORS.brandWhite};
  background-color: ${THEME_COLORS.brandLight};
  font-style: italic;
  padding: 10px;
`;

export const Header = () => {
  return (
    <>
      <Container>Andrew Nakamoto</Container>
    </>
  );
};