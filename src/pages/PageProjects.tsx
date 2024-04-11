import React from 'react';
// import styled from 'styled-components';
import { Nav } from '../components/nav.tsx';
import { Projects } from '../components/projects.tsx';
import { Footer } from '../components/footer.tsx';
// import view from '../assets/view.jpeg';

/*const ImageContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
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

const Image = styled.img`
  border-radius: 10px;
  max-width: 500px;
  margin-top: 10px;
  border-right: 20px;
  border-left: 20px;
  width: 100%;
  vertical-align: middle;
`;

const ImageElement = ({ imageSource }: { imageSource: string; }) => {
  return (
    <ImageContainer>
      <Image
        src={imageSource}
        loading="lazy"
      ></Image>
    </ImageContainer>
  );
};*/

const PageProjectsBase: React.FC = props => {
  return (
    <>
      <Nav />
      {/* <ImageElement imageSource={view} />*/}
      <Projects />
      <Footer />
    </>
  );
};
export default PageProjectsBase;