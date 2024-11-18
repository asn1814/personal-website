import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
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

const Line = styled.div`
  width: 100%;
  border-top: solid 0.5px;
  margin: 0px;
  padding: 0px;
  border-top: solid 0.5px;
  border-color: ${THEME_COLORS.brandWhite}36;
`

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

const Paragraph = styled.p`
  font-size: 16px;
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
          I was a wilderness survival instructor with <InlineLink href="https://post84.org" target="_blank">POST84</InlineLink>, teaching tarp shelters, firestarting, and orienteering.
          I began working on their Executive Committee and managed logistics and finance.
        </Paragraph>
        <Paragraph className="fade20">
          At the University of Washington I began working for <InlineLink href="https://www.dubhacks.co" target="_blank">DubHacks</InlineLink>. 
          Now I direct the program and lead our tech stack development. 
          Our team hosts the largest hackathon in the PNW. 
          Our internal incubator DubHacks Next cultivates the very best of Seattle's young tech talent.
        </Paragraph>
        <Paragraph className="fade20">
          I love traveling and am hoping to check Antarctica off my list soon. 
          I'm a classically trained clarinetist, but now I'm working to learn guitar and see as many concerts as possible. 
          If you have any good food recommendations in Seattle, email me - I love to eat!
        </Paragraph>
      </Container>
    </>
  );
};