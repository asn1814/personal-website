import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS, InlineLink, Line, Paragraph } from '../utils/theme.ts';
import dubteam from '../assets/dubteam.jpg';
import baby from '../assets/baby.jpeg';
import camping from '../assets/camping.jpg';
import presentation from '../assets/presentation.jpeg';

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

const ImageContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Image = styled.img`
  max-height: 80px;
  vertical-align: middle;
  transition: max-height 0.2s ease-in-out;
  &:hover {
    max-height: 400px;
  }
`;

const ImageRow = styled.div`
  padding: 20px 0px 0px;
  width: 85vw;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
  overflow: auto;
`;

const Headshot = ({ imageSource, className}: { imageSource: string; className: string; }) => {
  return (
    <ImageContainer>
      <Image
        src={imageSource}
        loading="lazy"
        className={className}
      ></Image>
    </ImageContainer>
  );
};

export const About = () => {
  return (
    <>
      <Container>
        <Line className="fade20" />
        <ImageRow>
          <Headshot imageSource={baby} className="fade04"/>
          <Headshot imageSource={presentation} className="fade08"/>
          <Headshot imageSource={dubteam} className="fade12"/>
          <Headshot imageSource={camping} className="fade16"/>
        </ImageRow>
        <Paragraph className="fade20">
          I'm a software developer with a passion for nonprofit management and community building. 
        </Paragraph>
        <Paragraph className="fade20">
          I grew up in Seattle and stayed for college. 
          I picked up programming in middle school to learn alongside <InlineLink href="https://www.chess.com/member/asn1814" target="_blank">chess</InlineLink> and haven't looked back. 
        </Paragraph>
        <Paragraph className="fade20">
          I was a wilderness survival instructor with <InlineLink href="https://post84.org" target="_blank">POST84</InlineLink>.
        </Paragraph>
        <Paragraph className="fade20">
          At the University of Washington I became the Executive Director of <InlineLink href="https://www.dubhacks.co" target="_blank">DubHacks</InlineLink>. 
          Our team hosts the largest hackathon in the PNW and our accelerator DubHacks Next cultivates the best of Seattle's young entrepreneurs.
          Running the 2024 hackathon was the highlight of my time at the Allen School. 
        </Paragraph>
        <Paragraph className="fade20">
          I also had the chance to intern at Meta FAIR, where I did research on preference optimization and PEFT for LLM reasoning, alignment, and memory.
        </Paragraph>
        <Paragraph className="fade20">
          If you have any good food recommendations in Seattle, email me - I love to eat!
        </Paragraph>
      </Container>
    </>
  );
};