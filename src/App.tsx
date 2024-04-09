import React from 'react';
import styled from 'styled-components';
import { Mainbox } from './components/mainbox.tsx';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Didot, serif;
`;

function App() {
  return (
    <Container>
      <Mainbox></Mainbox>
    </Container>
  );
}

export default App;
