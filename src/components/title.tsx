import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const Container = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: center;
  font-style: italic;
  border-bottom: solid 0.5px;
  border-top: solid 0.5px;
  border-color: ${THEME_COLORS.brandWhite};
  padding: 10px 0px;
`;

const Name = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: end;
`;

export const Title = () => {
  return (
    <>
      <Container><Name>Andrew Nakamoto</Name></Container>
    </>
  );
};