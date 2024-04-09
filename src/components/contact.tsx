import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const Container = styled.div`
  font-size: 12px;
`;

const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  text-decoration: none;
  background-color: transparent;
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;

export const Contact = () => {
  return (
    <Container>
      &#91;<InlineLink href="mailto:andrewsnakamoto@gmail.com" target="_blank">Email</InlineLink>&#93;&nbsp;
      &#91;<InlineLink href="https://www.linkedin.com/in/andrewnakamoto/" target="_blank">LinkedIn</InlineLink>&#93;
    </Container>
  );
};