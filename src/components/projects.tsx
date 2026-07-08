import React from "react";
import styled from "styled-components";
import { THEME_COLORS, InlineLink, Line, Paragraph } from "../utils/theme.ts";
import ProjectsList from "./projectsList.tsx";
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
`;

export const Projects = () => {
  return (
    <>
      <Container>
        <Line className="fade20" />
        <Paragraph className="fade04">
          My experience is focused on small-team, startup-speed engineering that
          requires deep interaction with leading research teams.
          <br />
          <br />
          Right now, I'm at Google DeepMind. I work on
          <ul>
            <li>Gemini's harness and orchestration plane.</li>
            <li>Gemini's tool use and agentic tasks.</li>
            <li>Gemini's integration with connected apps and services.</li>
          </ul>
          My previous work on a reseach team at Meta FAIR involved
          <ul>
            <li>
              research on SOTA preference optimization and alignment techniques.
            </li>
            <li>building brand new distributed training/inference pipelines for researchers.</li>
          </ul>
        </Paragraph>
      </Container>
    </>
  );
};

export const OldProjects = () => {
  return (
    <>
      <Container>
        <Line className="fade20" />
        <Paragraph className="fade04">
          I aim to write elegant, interesting code. These are some of the
          projects I've worked on.
        </Paragraph>
        <ProjectsList></ProjectsList>
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
