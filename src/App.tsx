import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PageHome from './pages/PageHome.tsx';
import PageAbout from './pages/PageAbout.tsx';
import PageProjects from './pages/PageProjects.tsx';
import { THEME_COLORS } from './utils/theme.ts';
import { INTERNAL_LINKS } from './utils/links.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* space-between */
  align-items: center;
  min-height: 100vh;
  font-family: Didot, serif;
  color: ${THEME_COLORS.brandWhite};
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
          <Routes>
            <Route path={INTERNAL_LINKS.HOME} element={<PageHome />} />
            <Route path={INTERNAL_LINKS.PROJECTS} element={<PageProjects />} />
            <Route path={INTERNAL_LINKS.ABOUT} element={<PageAbout />} />
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
