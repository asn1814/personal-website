import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Mainbox } from './components/mainbox.tsx';
import { Footer } from './components/footer.tsx';
import { Nav } from './components/nav.tsx';
import { About } from './components/about.tsx';
import { THEME_COLORS } from './utils/theme.ts';
import { INTERNAL_LINKS } from './utils/links.ts';

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
    <BrowserRouter>
      <Container>
        <Nav></Nav>
          <Routes>
            <Route path={INTERNAL_LINKS.HOME} element={<Mainbox />} />
            <Route path={INTERNAL_LINKS.PROJECTS} element={<About />} />
            <Route path={INTERNAL_LINKS.ABOUT} element={<About />} />
          </Routes>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
