import React from 'react';
import { Nav } from '../components/nav.tsx';
import { About } from '../components/about.tsx';
import { Footer } from '../components/footer.tsx';

const PageAboutBase: React.FC = props => {
  return (
    <>
      <Nav />
      <About />
      <Footer />
    </>
  );
};
export default PageAboutBase;