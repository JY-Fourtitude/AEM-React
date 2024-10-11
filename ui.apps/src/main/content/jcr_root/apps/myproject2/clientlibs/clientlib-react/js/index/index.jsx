import React from 'react';
import '../../css/styles.css';


import ClientSection from './client-section';
import HeroSection from './hero-section';
import AboutSection from './about-section';
import CountSection from './count-section';
import TabSection from './tab-section';
import ServiceSection from './service-section';
import TestimonialSection from './testimonial-section';
import PriceSection from './price-section';
import FAQSection from './faq-section';
import ScrollToTop from '../scroll-to-top';





const Index = () => {
  return (
    <>
 
    <HeroSection/>
    <main id="main">
      <ClientSection/>
      <AboutSection/>
      <CountSection/>
      <TabSection/>
     <ServiceSection/>
     <TestimonialSection/>
     <PriceSection/>
     <FAQSection/>
    </main>
    <ScrollToTop/>
    

    </>
  );
};

export default Index;