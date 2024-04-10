import React from 'react';
import { Mainbox } from '../components/mainbox.tsx';
import { Footer } from '../components/footer.tsx';

const PageHome: React.FC = props => {
  return (
    <>
      <Mainbox />
      <Footer />
    </>
  );
};

export default PageHome;