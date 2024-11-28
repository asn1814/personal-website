import React from 'react';
import styled from 'styled-components';
import { InlineLink as IL } from '../utils/theme.ts';
import { EXTERNAL_LINKS, INTERNAL_LINKS } from '../utils/links.ts';

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

const InlineLink = styled(IL)`
  width: 100%;
  max-width: 50px;
  text-align: center;
  font-style: normal;
`;

export const Contact = ({ classname }: { classname: string; }) => {
  return (
    <Container className={classname}>
      <InlineLink href={EXTERNAL_LINKS.EMAIL} target="_blank">Email</InlineLink>|
      <InlineLink href={EXTERNAL_LINKS.LINKEDIN} target="_blank">LinkedIn</InlineLink>|
      <InlineLink href={INTERNAL_LINKS.RESUME} target="_blank">Résumé</InlineLink>|
      <InlineLink href={EXTERNAL_LINKS.GITHUB} target="_blank">GitHub</InlineLink>
    </Container>
  );
};