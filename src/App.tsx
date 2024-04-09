import React from 'react';
import styled from 'styled-components';
import { Mainbox } from './components/mainbox.tsx';
import { Footer } from './components/footer.tsx';
import { Nav } from './components/nav.tsx';
import { THEME_COLORS } from './utils/theme.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* space-between */
  align-items: center;
  height: 100vh;
  font-family: Didot, serif;
  color: ${THEME_COLORS.brandWhite};
`;

function App() {
  return (
    <Container>
      <Nav></Nav>
      <Mainbox></Mainbox>
      <Footer></Footer>
    </Container>
  );
}

export default App;
