import React from 'react';
import { Footer } from '../components/footer.tsx';
import styled from 'styled-components';
import { THEME_COLORS, InlineLink as IL } from '../utils/theme.ts';
import { INTERNAL_LINKS } from '../utils/links.ts';

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
  margin: 20px 0px 0px 0px;
  overflow: auto;
  max-height: 57vh;
  text-align: center;
  width: 300px;
  font-size: 20px;
`;

const InlineLink = styled(IL)`
  font-size: 16px;
`;

const PageHome: React.FC = props => {
  return (
    <>
      <Container className='fade08'>404 Not Found<br/><br/><InlineLink className='fade16' href={INTERNAL_LINKS.HOME} target="_self">Take me back!</InlineLink></Container>
      <Footer />
    </>
  );
};

export default PageHome;