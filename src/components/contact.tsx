import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';

const Container = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  width: 100%;
  max-width: 260px;
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
  max-width: 50px;
  text-align: center;
`;

export const Contact = () => {
  return (
    <Container className="fade30">
      <InlineLink href="mailto:andrewsnakamoto@gmail.com" target="_blank">Email</InlineLink>|
      <InlineLink href="https://www.linkedin.com/in/andrewnakamoto/" target="_blank">LinkedIn</InlineLink>|
      <InlineLink href="https://github.com/asn1814/Resume/blob/main/Nakamoto_Andrew_Resume.pdf" target="_blank">Resumé</InlineLink>|
      <InlineLink href="https://github.com/asn1814" target="_blank">GitHub</InlineLink>
    </Container>
  );
};