import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

/*AOS*/
import AOS from 'aos';
import 'aos/dist/aos.css';

/*Internal Components*/
import Header from './header'
import Index from './index';

const App = () => {

  /*AOS - Animated on Scroll*/
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);


  return (
    <React.StrictMode>
       <Header />
       <Index/>
    </React.StrictMode>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('react-root');
  if (rootElement) {
    try {
      const root = createRoot(rootElement);
      root.render(<App />);
      console.log('React app successfully rendered');
    } catch (error) {
      console.error('Error rendering React app:', error);
    }
  } else {
    console.error('Failed to find the root element with id "react-root"');
  }
});

