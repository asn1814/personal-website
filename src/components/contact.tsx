import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const Container = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
  font-size: 12px;
`;

const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  background-color: transparent;
  text-decoration: underline transparent 1px;
  transition: color 0.3s ease, text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline solid 1px;
  }
  width: 100%;
  max-width: 65px;
  text-align: center;
`;

export const Contact = () => {
  return (
    <Container>
      <InlineLink href="mailto:andrewsnakamoto@gmail.com" target="_blank">&#91;Email&#93;</InlineLink>
      <InlineLink href="https://www.linkedin.com/in/andrewnakamoto/" target="_blank">&#91;LinkedIn&#93;</InlineLink>
      <InlineLink href="https://www.linkedin.com/in/andrewnakamoto/" target="_blank">&#91;Resumé&#93;</InlineLink>
    </Container>
  );
};