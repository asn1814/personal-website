import React from 'react';
import { Mainbox } from '../components/mainbox.tsx';
import { Contact } from '../components/contact.tsx';
import styled from 'styled-components';

const Padding = styled.div`
  padding: 5px;
`

const PageHome: React.FC = props => {
  return (
    <>
      <Mainbox />
      <Contact classname='fade28'></Contact>
      <Padding></Padding>
    </>
  );
};

export default PageHome;