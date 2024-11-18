import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../utils/theme.ts";
import FAQ from "./FAQ.tsx";
import { EXTERNAL_LINKS } from "../utils/links.ts";

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

const InlineLink = styled.a`
  color: ${THEME_COLORS.brandWhite};
  text-decoration: underline transparent 1px;
  background-color: transparent;
  font-style: italic;
  transition: text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline solid 1px;
  }
`;

export const Projects = () => {
  return (
    <>
      <Container>
        <Paragraph className="fade04">
          I aim to write elegant, interesting code. These are some of the
          projects I've worked on.
        </Paragraph>
        <FAQ></FAQ>
        <Paragraph className="fade12">
          To see everything else I'm doing, check out my{" "}
          <InlineLink href={EXTERNAL_LINKS.GITHUB} target="_blank">
            GitHub
          </InlineLink>
          .
        </Paragraph>
      </Container>
    </>
  );
};
