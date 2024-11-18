import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PageHome from './pages/PageHome.tsx';
import PageAbout from './pages/PageAbout.tsx';
import PageProjects from './pages/PageProjects.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import { THEME_COLORS } from './utils/theme.ts';
import { INTERNAL_LINKS } from './utils/links.ts';

// Consider "Optima" font

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* space-between */
  align-items: center;
  min-height: 100vh;
  font-family: "Times New Roman", serif;
  color: ${THEME_COLORS.brandWhite};

  @keyframes fade-in {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fade04 {
    opacity: 0;
    animation: fade-in 0.4s normal both;
  }

  .fade08 {
    opacity: 0;
    animation: fade-in 0.8s normal both;
  }

  .fade12 {
    opacity: 0;
    animation: fade-in 1.2s normal both;
  }

  .fade16 {
    opacity: 0;
    animation: fade-in 1.6s normal both;
  }

  .fade20 {
    opacity: 0;
    animation: fade-in 2.0s normal both;
  }

  .fade24 {
    opacity: 0;
    animation: fade-in 2.4s normal both;
  }

  .fade28 {
    opacity: 0;
    animation: fade-in 2.8s normal both;
  }

  .fade30 {
    opacity: 0;
    animation: fade-in 3.0s normal both;
  }

  .fade40 {
    opacity: 0;
    animation: fade-in 3.0s 1s normal both;
  }
`;

const Glass = styled.div`
  /*background: ${THEME_COLORS.brandWhite}05;
  box-shadow: 0 8px 32px 0 ${THEME_COLORS.brandMid}37;
  border: 1px solid ${THEME_COLORS.brandWhite}18;
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;*/
  margin: 5px;
`

function App() {
  return (
    <BrowserRouter>
      <Container>
          <Glass>
            <Routes>
              <Route path={INTERNAL_LINKS.HOME} element={<PageHome />} />
              <Route path={INTERNAL_LINKS.PROJECTS} element={<PageProjects />} />
              <Route path={INTERNAL_LINKS.ABOUT} element={<PageAbout />} />
              <Route path={INTERNAL_LINKS.NOTFOUND} element={<PageNotFound />} />
            </Routes>
          </Glass>
      </Container>
    </BrowserRouter>
  );
}

export default App;
