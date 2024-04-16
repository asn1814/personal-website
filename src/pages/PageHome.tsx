import React from 'react';
import { Mainbox } from '../components/mainbox.tsx';
import { Contact } from '../components/contact.tsx';

const PageHome: React.FC = props => {
  return (
    <>
      <Mainbox />
      <Contact classname='fade28'></Contact>
    </>
  );
};

export default PageHome;