import React from "react";
import styled from "styled-components";
import { THEME_COLORS, InlineLink, Line, Paragraph } from "../utils/theme.ts";
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
  overflow: auto;
  max-height: 57vh;
`;

export const Projects = () => {
  return (
    <>
      <Container>
        <Line className="fade20" />
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
