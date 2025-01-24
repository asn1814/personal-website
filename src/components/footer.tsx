import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../utils/theme.ts";
import { INTERNAL_LINKS } from "../utils/links.ts";
import { Contact } from "./contact.tsx";
import pfp from "../assets/pfp.jpeg";

const Container = styled.div`
  position: relative;
  height: fit-content;
  padding: 10px 0px 10px 0px;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: ${THEME_COLORS.brandWhite};
  text-align: center;
`;

const Text = styled.div`
  font-size: 14px;
  font-style: italic;
  padding: 2px;
  cursor: help;
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

const Headshot = ({ imageSource }: { imageSource: string }) => {
  return (
    <HeadshotContainer>
      <a href={INTERNAL_LINKS.HOME} target="_self">
        <HeadshotImage src={imageSource} loading="eager"></HeadshotImage>
      </a>
    </HeadshotContainer>
  );
};

export const Footer = () => {
  const r_text = [
    "I can even deploy a website!",
    "Alive 2007 - Daft Punk",
    "Thing of Gold - Snarky Puppy",
    "Professional Astrologist",
    "Directive Executor of HubDacks",
    "This random quotes thing used to be so buggy",
    "Hi Lockheed 👉👈🥺",
    "Still waiting for Masa to invest in me",
    "Programmer? I barely know 'er!",
    "Oh to be a mouse in Redwall",
    '"But still the sunken stars appear / In dark and windless Mirrormere"',
    '"Fear is the mind-killer."',
    "Two Crabs, Ryūryūkyo Shinsai",
    "Shaco main",
    "Book Yen, game Triss",
    "Roll initiative!",
    "You just lost the game",
    "Streetwear? Right there, silly",
  ];

  const Tagline = () => {
    const [text, setText] = useState("");

    useEffect(() => {
      setText(r_text[Math.floor(3 * Math.random())]);
    }, []);

    const randText = (event) => {
      var i = Math.floor(r_text.length * Math.random());
      if (text !== r_text[i]) setText(r_text[i]);
      else setText(r_text[(i + 1) % r_text.length]);
    };

    return (
      <div onClick={randText}>
        <Text className="fade40">{text}</Text>
      </div>
    );
  };

  return (
    <>
      <Container className="fade30">
        <Headshot imageSource={pfp} />
        <Contact classname="fade30"></Contact>
        <Tagline></Tagline>
      </Container>
    </>
  );
};
