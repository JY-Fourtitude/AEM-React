import React from 'react';
import '../../css/styles.css';


import ClientSection from './client-section';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import CountSection from './count-section';

const Index = () => {
  return (
    <>
 
    <HeroSection/>
    <main id="main">
      <ClientSection/>
      <AboutSection/>
      <CountSection/>
    </main>
    

    </>
  );
};

export default Index;