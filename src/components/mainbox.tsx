import React, { useState } from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../utils/theme.ts';
import { Title } from './title.tsx';
import { Content } from './content.tsx';
import pfp from '../assets/pfp.jpeg';

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
  margin: 15px;
`;

const HeadshotContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
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
  transition: all 0.4s ease-in-out;
  outline: ${THEME_COLORS.brandWhite} 0px solid;
  &:hover {
    max-height: 200px;
    outline: ${THEME_COLORS.brandWhite} 200vh solid;
  }
  z-index: 25;
`;

const Hidden = styled.div`
  position: absolute;
  color: ${THEME_COLORS.brandDark};
  text-align: center;
  width: 100%;
  top: 250px;
  z-index: 26;
`

export const Mainbox = () => {

  const Headshot = ({ imageSource }: { imageSource: string; }) => {
    const [text, setText] = useState("");
  
    return (
      <HeadshotContainer>
        <HeadshotImage
          src={imageSource}
          loading="eager"
          onMouseEnter={() => {setText("Whatcha looking at?");}}
          onMouseLeave={() => {setText("");}}
          className="fade28"
        ></HeadshotImage>
        <Hidden>{text}</Hidden>
      </HeadshotContainer>
    );
  };

  return (
    <>
      <Container>
        <Headshot imageSource={pfp} />
        <Title></Title>
        <Content></Content>
      </Container>
    </>
  );
};