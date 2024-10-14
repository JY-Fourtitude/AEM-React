import React from 'react';
import '../../css/styles.css';



import ScrollToTop from '../scroll-to-top';
import Header from '../header';
import Footer from '../footer';
import InnerSection from './inner-section';
import BreadCrumb from './breadcrumb';



const ContactUs = () => {
  return (
    <>   
    <main id="main">
    <BreadCrumb/>
        <InnerSection/>
    </main>
    <ScrollToTop/>

    </>
  );
};

export default ContactUs;