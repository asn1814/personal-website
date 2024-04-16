import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
import { INTERNAL_LINKS } from '../utils/links.ts';
import { Contact } from './contact.tsx';
import pfp from '../assets/pfp.jpeg';

const Container = styled.div`
  position: relative;
  height: fit-content;
  max-width: 250px;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: ${THEME_COLORS.brandWhite};
  margin: 15px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 14px;
  font-style: italic;
  padding: 2px;
`;

const HeadshotContainer = styled.div`
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
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const HeadshotImage = styled.img`
  border-radius: 100px;
  border: 0;
  max-height: 40px;
  vertical-align: middle;
  /*transition: max-height 0.3s ease-in-out;
  &:hover {
    max-height: 200px;
  }*/
`;

const Headshot = ({ imageSource }: { imageSource: string; }) => {
  return (
    <HeadshotContainer>
      <a href={INTERNAL_LINKS.HOME} target="_self">
        <HeadshotImage
          src={imageSource}
          loading="eager"
        ></HeadshotImage>
      </a>
    </HeadshotContainer>
  );
};

export const Footer = () => {
  return (
    <>
      <Container className="fade30">
        <Headshot imageSource={pfp} />
        <Contact classname="fade30"></Contact>
        <Text className="fade40">I can even deploy a website!</Text>
      </Container>
    </>
  );
};